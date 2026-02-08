import React, { useEffect, useState } from "react";
import { api } from "../api";
import CharityCard from "../components/CharityCard.jsx";

export default function Charities() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async (q = "") => {
    setLoading(true);
    const r = await api.get("/charities", { params: q ? { search: q } : {} });
    setData(r.data.charities || []);
    setLoading(false);
  };

  useEffect(() => { load(""); }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">Charities</h2>

      <div className="mt-4 flex gap-2">
        <input
          className="flex-1 px-4 py-3 rounded-2xl bg-white/5 border border-white/10"
          placeholder='Search like: "голод", "дети", "медицина"...'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button
          onClick={() => load(search)}
          className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20"
        >
          Search
        </button>
      </div>

      {loading ? (
        <div className="mt-8 text-slate-300">Loading…</div>
      ) : (
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map(c => <CharityCard key={c._id} c={c} />)}
        </div>
      )}
    </div>
  );
}