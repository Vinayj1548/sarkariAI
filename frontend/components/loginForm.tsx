"use client";

import { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    // API Call Here
    // await axios.post("/api/auth/login", formData);
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