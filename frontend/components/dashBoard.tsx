"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import api from "axios";
// Your axios instance

export default function Dashboard() {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    age: "",
    state: "",
    category: "",
    qualification: "",
    graduationYear: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
      return;
    }

    setCheckingAuth(false);
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      // await axios.post("http://localhost:5000/api/profile", formData);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-600 via-blue-500 to-cyan-400">
        <h1 className="text-2xl font-semibold text-white">
          Checking Authentication...
        </h1>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-600 via-blue-500 to-cyan-400 p-6">
      <div className="w-full max-w-2xl">
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl transition-all duration-500"
          >
            <h1 className="mb-6 text-3xl font-bold text-white">
              Complete Your Profile
            </h1>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="number"
                name="age"
                placeholder="Age"
                onChange={handleChange}
                required
                className="rounded-xl bg-white/20 p-3 text-white placeholder:text-white/70"
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                onChange={handleChange}
                required
                className="rounded-xl bg-white/20 p-3 text-white placeholder:text-white/70"
              />

              <select
                name="category"
                onChange={handleChange}
                required
                className="rounded-xl bg-white/20 p-3 text-white"
              >
                <option value="">Category</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>

              <input
                type="text"
                name="qualification"
                placeholder="Qualification"
                onChange={handleChange}
                required
                className="rounded-xl bg-white/20 p-3 text-white placeholder:text-white/70"
              />

              <input
                type="number"
                name="graduationYear"
                placeholder="Graduation Year"
                onChange={handleChange}
                required
                className="rounded-xl bg-white/20 p-3 text-white placeholder:text-white/70"
              />
            </div>

            <button
              disabled={loading}
              className="mt-6 w-full rounded-xl bg-white py-3 font-semibold text-blue-700 transition hover:scale-[1.02]"
            >
              {loading ? "Submitting..." : "Analyze Jobs"}
            </button>
          </form>
        ) : (
          <div className="animate-in fade-in zoom-in duration-700 rounded-3xl border border-white/20 bg-white/10 p-12 text-center backdrop-blur-xl shadow-2xl">
            <div className="mb-4 text-6xl">✅</div>

            <h2 className="text-3xl font-bold text-white">
              Data Sent Successfully
            </h2>

            <p className="mt-4 text-blue-100">
              Analyzing your profile and searching for relevant government
              jobs...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
