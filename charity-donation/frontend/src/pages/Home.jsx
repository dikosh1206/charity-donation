import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="rounded-3xl p-8 border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
        <h1 className="text-3xl sm:text-4xl font-bold">Help makes change 💛</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">
          Найди благотворительный фонд по теме (например “голод”, “дети”, “медицина”) и сделай донат.
          Все донаты сохраняются в MongoDB.
        </p>

        <div className="mt-6 flex gap-3">
          <Link to="/charities" className="px-4 py-3 rounded-2xl bg-emerald-500/25 hover:bg-emerald-500/35">
            Browse Charities
          </Link>
          <Link to="/my-donations" className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20">
            My Donations
          </Link>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {[
          { t: "Secure Login", d: "JWT auth + protected pages" },
          { t: "Search & Images", d: "Поиск фондов и красивые фото по теме" },
          { t: "MongoDB Tracking", d: "Каждый донат сохраняется и виден в Compass" }
        ].map((x) => (
          <div key={x.t} className="rounded-2xl p-5 border border-white/10 bg-white/5">
            <div className="font-semibold">{x.t}</div>
            <div className="text-slate-300 mt-2">{x.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}