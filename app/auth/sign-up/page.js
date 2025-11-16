"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMessage("");

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: { full_name: formData.fullName },
      },
    });

    if (error) {
      setLoading(false);
      setErrorMessage(error.message);
      return;
    }

    alert("Account created! Please check your email to verify.");
    router.push("/log-in");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full flex">

        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-12 flex-1 text-white flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Join the Community</h1>
          <p className="text-blue-100 text-lg">
            Discover amazing recipes and share your own!
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>

          {errorMessage && (
            <p className="text-red-500 text-center mb-3">{errorMessage}</p>
          )}

          <div className="space-y-6">
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg"
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </div>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <a href="/log-in" className="text-blue-600">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
