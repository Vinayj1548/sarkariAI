"use client";

import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);

    // API Call Here
    // await axios.post("/api/auth/signup", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-white/20
        bg-white/10
        backdrop-blur-xl
        shadow-2xl
        glass-card
        p-8
        space-y-4
        "
    >
      <h2 className="text-2xl font-bold">Create Account</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full rounded-lg border p-3 my-2"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-lg border my-2 p-3"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full rounded-lg border my-2 p-3"
        required
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="w-full rounded-lg border my-2 p-3"
        required
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-black p-3 my-2 text-white"
      >
        Sign Up
      </button>
    </form>
  );
}