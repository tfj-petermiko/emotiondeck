"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { baseButtonStyle } from "../../styles/buttonStyle.js";

export default function FACSPage() {
  const [header, setHeader] = useState(null);
  const [actionUnits, setActionUnits] = useState([]);
  const [selectedAU, setSelectedAU] = useState(null);

  useEffect(() => {
    fetch("/content/learn/facs/index.json")
      .then((res) => res.json())
      .then((data) => {
        setHeader(data.header);
        setActionUnits(data.action_units);
        const neutralAU = data.action_units.find((au) => au.id === "AU0");
        if (neutralAU) setSelectedAU(neutralAU);
      })
      .catch((err) => console.error("Error loading FACS data:", err));
  }, []);

  const handleSelectAU = (au) => setSelectedAU(au);

  const currentImage = selectedAU
    ? `/private_images/facs/${selectedAU.id}.webp`
    : "/private_images/facs/AU0.webp";

  if (!header) {
    return (
      <main className="learn-facs-page text-center text-gray-400 p-10">
        Loading...
      </main>
    );
  }

  return (
    <main className="learn-facs-page">
      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="learn-facs-title"
      >
        {header.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="learn-facs-highlight"
      >
        {header.subtitle}
      </motion.p>

      {/* INTRO */}
      <p className="learn-facs-intro text-gray-400 text-justify leading-relaxed max-w-4xl mx-auto mb-10">
        {header.intro}
      </p>

      {/* MAIN GRID */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-12 max-w-[1400px] mx-auto shadow-[0_0_25px_rgba(255,255,255,0.08)]"
      >
        {/* LEFT – IMAGE */}
        <div className="flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={selectedAU ? selectedAU.name : "Neutral Face"}
              className="w-[320px] md:w-[360px] rounded-2xl border-0 shadow-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </AnimatePresence>
        </div>

        {/* MIDDLE – DESCRIPTION */}
        {selectedAU && (
          <motion.div
            key={selectedAU.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-6 text-justify leading-relaxed"
          >
            <h2 className="text-2xl font-semibold text-emerald-400 mb-3 text-center">
              {selectedAU.id} – {selectedAU.name}
            </h2>
            <p className="text-gray-400 mb-2">
              <strong>Muscles:</strong> {selectedAU.muscles}
            </p>
            <p className="text-gray-300 mb-2">{selectedAU.description}</p>
            <p className="text-gray-400">
              <strong>Associated emotions:</strong>{" "}
              {selectedAU.associated_emotions}
            </p>
          </motion.div>
        )}

        {/* RIGHT – BUTTON GRID */}
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg font-medium text-emerald-400 mb-4 text-center">
            Action Units
          </h3>
          <div className="learn-facs-grid w-full justify-center">
            {actionUnits.map((au) => (
              <motion.button
                key={au.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelectAU(au)}
                className={`${
                  selectedAU && selectedAU.id === au.id ? "active" : ""
                }`}
              >
                {au.id}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="learn-facs-footer mt-10 text-center"
      >
        <p className="text-gray-400">
          Want to try detecting AUs in real time?{" "}
          <a
            href="/learn/facs-analyzer"
            className="text-emerald-400 hover:text-emerald-300"
          >
            <br />
            Launch Live FACS Analyzer
          </a>
        </p>
      </motion.div>

      {/* BACK BUTTON */}
      <div className="learn-facs-backwrap mt-10 text-center">
        <a
          href="/learn/"
          style={{
            ...baseButtonStyle(false),
            backgroundColor: "#10B981",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Back
        </a>
      </div>
    </main>
  );
}
