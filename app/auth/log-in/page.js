"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async () => {
    setMsg("");
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMsg(error.message);
    else router.push("/");
  };

  const handleGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Log in</h2>
      {msg && <p className="text-red-500 mb-3">{msg}</p>}
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 border rounded mb-3" />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-2 border rounded mb-3" />
      <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded mb-3">Log in</button>
      <button onClick={handleGoogle} className="w-full border py-2 rounded">Continue with Google</button>
    </div>
  );
}
