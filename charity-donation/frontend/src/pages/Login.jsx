import React, { useState } from "react";
import { api } from "../api";
import { useAuth } from "../auth.jsx";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const r = await api.post("/auth/login", { email, password });
      login(r.data.token);
      nav("/charities");
    } catch (e) {
      setErr(e.response?.data?.message || "Login error");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={submit} className="mt-5 space-y-3">
        <input className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10"
          placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10"
          placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        {err && <div className="text-red-300 text-sm">{err}</div>}
        <button className="w-full px-4 py-3 rounded-2xl bg-blue-500/25 hover:bg-blue-500/35">
          Login
        </button>
      </form>
      <div className="text-slate-300 mt-4 text-sm">
        No account? <Link className="underline" to="/register">Register</Link>
      </div>
    </div>
  );
}