import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Charities from "./pages/Charities.jsx";
import CharityDetails from "./pages/CharityDetails.jsx";
import Donate from "./pages/Donate.jsx";
import MyDonations from "./pages/MyDonations.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charities" element={<Charities />} />
        <Route path="/charities/:id" element={<CharityDetails />} />

        <Route path="/donate/:id" element={
          <ProtectedRoute><Donate /></ProtectedRoute>
        } />

        <Route path="/my-donations" element={
          <ProtectedRoute><MyDonations /></ProtectedRoute>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}