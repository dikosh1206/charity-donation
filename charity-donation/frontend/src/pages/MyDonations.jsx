import React, { useEffect, useState } from "react";
import { api } from "../api";

export default function MyDonations() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    api.get("/donations/mine").then(r => setItems(r.data.donations || []));
  }, []);

  if (!items) return <div className="max-w-6xl mx-auto px-4 py-10 text-slate-300">Loading…</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">My Donations</h2>

      {items.length === 0 ? (
        <div className="mt-6 text-slate-300">No donations yet.</div>
      ) : (
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(d => (
            <div key={d._id} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src={d.charity.imageUrl} className="h-40 w-full object-cover" />
              <div className="p-4">
                <div className="font-semibold">{d.charity.name}</div>
                <div className="text-slate-300 text-sm">{d.charity.city}</div>
                <div className="mt-3 text-lg font-bold">{d.amountKZT.toLocaleString()} ₸</div>
                {d.message ? <div className="text-slate-300 mt-2">{d.message}</div> : null}
                <div className="text-xs text-slate-400 mt-3">
                  {new Date(d.createdAt).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}