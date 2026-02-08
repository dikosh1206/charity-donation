import React from "react";
import { Link } from "react-router-dom";

export default function CharityCard({ c }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
      <img src={c.imageUrl} alt={c.name} className="h-44 w-full object-cover" />
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg">{c.name}</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-white/10">{c.city}</span>
        </div>
        <p className="text-slate-300 mt-2 line-clamp-3">{c.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(c.tags || []).slice(0, 3).map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-200">
              #{t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <Link to={`/charities/${c._id}`} className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20">
            Details
          </Link>
          <Link to={`/donate/${c._id}`} className="px-3 py-2 rounded-xl bg-emerald-500/25 hover:bg-emerald-500/35">
            Donate
          </Link>
        </div>
      </div>
    </div>
  );
}