import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../auth.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();

  const cls = ({ isActive }) =>
    "px-3 py-2 rounded-xl " + (isActive ? "bg-white/10" : "hover:bg-white/10");

  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-slate-950/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
        <Link to="/" className="font-bold text-lg">💛 Charity Donation</Link>
        <div className="flex-1" />
        <nav className="flex gap-2">
          <NavLink to="/" className={cls}>Home</NavLink>
          <NavLink to="/charities" className={cls}>Charities</NavLink>
          {user && <NavLink to="/my-donations" className={cls}>My Donations</NavLink>}
        </nav>
        <div className="flex items-center gap-2">
          {!user ? (
            <>
              <Link className="px-3 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30" to="/login">Login</Link>
              <Link className="px-3 py-2 rounded-xl bg-blue-500/20 hover:bg-blue-500/30" to="/register">Register</Link>
            </>
          ) : (
            <>
              <span className="text-sm text-slate-300 hidden sm:block">{user.username}</span>
              <button onClick={logout} className="px-3 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}