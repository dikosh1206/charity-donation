import React, { useEffect, useState } from "react";
import { api } from "../api";
import { useParams, useNavigate } from "react-router-dom";

export default function Donate() {
  const { id } = useParams(); // charityId
  const nav = useNavigate();
  const [charity, setCharity] = useState(null);
  const [amountKZT, setAmount] = useState(5000);
  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    api.get(`/charities/${id}`).then(r => setCharity(r.data.charity));
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await api.post("/donations", { charityId: id, amountKZT: Number(amountKZT), message });
      nav("/my-donations");
    } catch (e) {
      setErr(e.response?.data?.message || "Donate error");
    }
  };

  if (!charity) return <div className="max-w-4xl mx-auto px-4 py-10 text-slate-300">Loading…</div>;

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">Donate to</h2>
      <div className="text-slate-300 mt-1">{charity.name}</div>

      <form onSubmit={submit} className="mt-5 space-y-3">
        <input className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10"
          type="number" min="100" step="100"
          value={amountKZT} onChange={e => setAmount(e.target.value)}
          placeholder="Amount (KZT)"
        />
        <textarea className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10"
          rows="3" value={message} onChange={e => setMessage(e.target.value)}
          placeholder="Message (optional)"
        />
        {err && <div className="text-red-300 text-sm">{err}</div>}
        <button className="w-full px-4 py-3 rounded-2xl bg-emerald-500/25 hover:bg-emerald-500/35">
          Confirm Donation
        </button>
      </form>

      <div className="text-xs text-slate-400 mt-3">
        *Donations will be stored in MongoDB (collection: donations)
      </div>
    </div>
  );
}