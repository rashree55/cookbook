"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    router.push("/recipes"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Log In</h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-3">{errorMessage}</p>
        )}

        <div className="space-y-6">
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
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Log In
          </button>
        </div>

        <p className="text-center mt-6 text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="/sign-up" className="text-blue-600">Create One</a>
        </p>
      </div>
    </div>
  );
}
