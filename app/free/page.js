"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { baseButtonStyle } from "../styles/buttonStyle.js";
import "../styles/freeCollection.css";


export default function FreeCollectionsPage() {
  const [data, setData] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [hoveredBack, setHoveredBack] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/content/free/index.json");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error loading collections.json:", err);
      }
    }
    loadData();
  }, []);

  const handleBackClick = () => {
    setLoadingBack(true);
    setTimeout(() => (window.location.href = data.back_button.target), 800);
  };

  const renderButton = (href, label, id) => (
    <button
      onClick={() => (window.location.href = href)}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
      style={baseButtonStyle(hovered === id)}
      className="inline-block hover:scale-105 transition-transform"
    >
      {label}
    </button>
  );

  if (!data) {
    return (
      <main className="min-h-screen bg-neutral-900 text-white flex items-center justify-center">
        <p>Loading content...</p>
      </main>
    );
  }

  return (
    <main className="free-page">
      {/* HEADER */}
      <section className="free-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="free-title"
        >
          {data.page_title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="free-intro"
        >
          {data.page_intro}
        </motion.p>
      </section>

      {/* PHASES */}
      {data.phases.map((phase, index) => (
        <motion.section
          key={phase.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 0px 20px rgba(255,255,255,0.08)",
          }}
          className="free-phase"
        >
<div className="free-phase-inner">
  <center>
    <h2 className="free-phase-title">{phase.title}</h2>
  </center>
  <p className="free-phase-subtitle">{phase.subtitle}</p>

            <table className="free-table">
              <tbody>
                <tr className="free-table-row">
                  <td className="w-1/4" />
                  <td className="w-2/4 p-3 text-white">
                    <p className="free-phase-desc">{phase.description}</p>
                    <div className="flex justify-end">
                      {renderButton(phase.link, phase.button_text, phase.id)}
                    </div>
                  </td>
                  <td className="p-3 w-[200px] text-center align-top">
                    <div className="free-img-wrapper">
                      <img
                        src={phase.image}
                        alt={phase.image_caption}
                        className="object-cover w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                    <p className="free-img-caption">{phase.image_caption}</p>
                  </td>
                </tr>

                {phase.rows.map((row, i) => (
                  <tr key={i} className="free-table-row">
                    <td className="free-table-cell">{row[0]}</td>
                    <td className="free-table-cell" colSpan={2}>
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>
      ))}

      {/* 🟢 Return button */}
      <div className="pro-main-back">
        <button
          onClick={handleBackClick}
          disabled={loadingBack}
          onMouseEnter={() => setHoveredBack(true)}
          onMouseLeave={() => setHoveredBack(false)}
          style={baseButtonStyle(hoveredBack)}
        >
          {loadingBack ? "Loading..." : "Back"}
        </button>
      </div>
    </main>
  );
}
