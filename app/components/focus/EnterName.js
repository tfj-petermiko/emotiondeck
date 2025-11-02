"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function EnterName({ onSubmit }) {
  const [name, setName] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      onSubmit(name.trim());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-10 text-center max-w-md w-full shadow-2xl"
    >
      <h1 className="text-3xl font-semibold text-emerald-400 mb-4">
        Enter Your Name
      </h1>
      <p className="text-gray-400 mb-6">
        Choose a simple name or nickname for your Focus Room sessions.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Alex or FocusFox"
          className="w-full p-3 mb-6 bg-[#0B0B0B] border border-[#2A2A2A] rounded-xl text-white text-center focus:outline-none focus:border-emerald-400"
        />
        <button
          type="submit"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={baseButtonStyle(hovered, false)}
          className="w-full"
        >
          Continue
        </button>
      </form>
    </motion.div>
  );
}
