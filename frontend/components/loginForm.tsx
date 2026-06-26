"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        },
      );

      const data = response.data;

      // Save user session
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user._id);
      localStorage.setItem("fullName", data.user.fullName);

      alert("Login Successful!");

      router.push("/dashboard");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "Login failed");
      } else {
        alert("Something went wrong");
      }

      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-7 rounded-xl border p-6 shadow glass-card"
    >
      <h2 className="text-2xl font-bold">Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
        required
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-black p-3 text-white"
      >
        Login
      </button>
    </form>
  );
}
