import React, { useEffect, useState } from "react";
import { api } from "../api";
import { useParams, Link } from "react-router-dom";

export default function CharityDetails() {
  const { id } = useParams();
  const [c, setC] = useState(null);

  useEffect(() => {
    api.get(`/charities/${id}`).then(r => setC(r.data.charity));
  }, [id]);

  if (!c) return <div className="max-w-6xl mx-auto px-4 py-10 text-slate-300">Loading…</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img
  src={c.imageUrl || `https://picsum.photos/seed/${encodeURIComponent(c.name)}/1000/700`}
  alt={c.name}
  className="w-full h-72 object-cover rounded-3xl border border-white/10"
  loading="lazy"
  onError={(e) => {
    e.currentTarget.src = `https://picsum.photos/seed/${encodeURIComponent(c.name || "charity")}/1000/700`;
  }}
/>
      <div className="mt-6 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-3xl font-bold">{c.name}</h2>
          <div className="text-slate-300 mt-1">{c.city}</div>
        </div>
        <Link to={`/donate/${c._id}`} className="px-4 py-3 rounded-2xl bg-emerald-500/25 hover:bg-emerald-500/35">
          Donate
        </Link>
      </div>

      <p className="mt-5 text-slate-200 leading-relaxed">{c.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {(c.tags || []).map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10">#{t}</span>
        ))}
      </div>
    </div>
  );
}