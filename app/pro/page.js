"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { baseButtonStyle } from "../styles/buttonStyle.js";
import "../styles/proCollection.css";


export default function ProCollectionPage() {
  const [data, setData] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredBack, setHoveredBack] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("/content/pro/index.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error loading PRO data:", err));
  }, []);

  const handleBackClick = () => {
    setLoadingBack(true);
    setTimeout(() => router.push("/"), 800);
  };

  const handleAccessClick = (phase, title, price) => {
    const key = `emotiondeck_${phase}_access`;
    const raw = localStorage.getItem(key);

    if (raw) {
      try {
        const { active, expires } = JSON.parse(raw);
        if (active && Date.now() < expires) {
          router.push(`/pro/${phase}`);
          return;
        } else {
          localStorage.removeItem(key);
        }
      } catch {
        localStorage.removeItem(key);
      }
    }

    const qs = new URLSearchParams({ phase, title, price }).toString();
    router.push(`/pro/checkout?${qs}`);
  };

  const renderButton = (phase, title, price, label, id) => (
    <button
      onClick={() => handleAccessClick(phase, title, price)}
      onMouseEnter={() => setHoveredButton(id)}
      onMouseLeave={() => setHoveredButton(null)}
      style={baseButtonStyle(hoveredButton === id)}
      className="pro-button"
    >
      {label}
    </button>
  );

  if (!data) {
    return (
      <main className="pro-loading">
        Loading EmotionDeck PRO...
      </main>
    );
  }

  return (
    <main className="pro-main-page">
      {/* 🧠 HEADER */}
      <section className="pro-main-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pro-main-title"
        >
          {data.page_title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="pro-main-intro"
        >
          {data.page_intro}
        </motion.p>
      </section>

      {/* Render each phase */}
      {data.phases.map((phase, index) => (
        <motion.section
          key={phase.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.3, duration: 0.6 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 0px 20px rgba(255,255,255,0.08)",
          }}
          className="pro-phase-section"
        >
<div className="free-phase-inner">
  <center>
    <h2 className="pro-phase-title">{phase.title}</h2>
  </center>
  <p className="pro-phase-subtitle">{phase.subtitle}</p>

            <table className="pro-phase-table">
              <tbody>
                <tr className="pro-phase-divider">
                  <td className="w-1/4" />
                  <td className="w-2/4 pro-phase-text">
                    <p>{phase.description}</p>
                    <div className="flex justify-end mt-4">
                      {renderButton(
                        phase.id,
                        phase.title,
                        phase.price,
                        phase.button_label,
                        phase.id
                      )}
                    </div>
                  </td>

<td className="w-[200px] text-center align-top">
  <div className="pro-phase-image">
    <img
      src={phase.image}
      alt={phase.caption}
      className="object-cover max-w-[180px] h-auto mx-auto rounded-lg"
      loading="lazy"
    />
  </div>
  <p className="pro-phase-caption">{phase.caption}</p>
</td>

                </tr>

                <tr className="pro-phase-divider">
                  <td className="pro-phase-label">Total Portraits</td>
                  <td className="pro-phase-text" colSpan={2}>
                    {phase.total_portraits}
                  </td>
                </tr>

                {phase.subcategories && (
                  <tr className="pro-phase-divider">
                    <td className="pro-phase-label">Subcategories</td>
                    <td className="pro-phase-text" colSpan={2}>
                      {Object.entries(phase.subcategories).map(
                        ([key, value]) => (
                          <div key={key}>
                            <br />
                            <strong>{key}</strong>
                            <br />
                            ({value})
                            <br />
                          </div>
                        )
                      )}
                    </td>
                  </tr>
                )}

                {phase.emotions && (
                  <tr className="pro-phase-divider">
                    <td className="pro-phase-label">Emotions</td>
                    <td className="pro-phase-text" colSpan={2}>
                      {phase.emotions}
                    </td>
                  </tr>
                )}

                <tr className="pro-phase-divider">
                  <td className="pro-phase-label">Cultural Diversity</td>
                  <td className="pro-phase-text" colSpan={2}>
                    {phase.cultural_diversity}
                  </td>
                </tr>

                <tr className="pro-phase-divider">
                  <td className="pro-phase-label">Demographics</td>
                  <td className="pro-phase-text" colSpan={2}>
                    {phase.demographics}
                  </td>
                </tr>

                <tr className="pro-phase-divider">
                  <td className="pro-phase-label">Resolution</td>
                  <td className="pro-phase-text" colSpan={2}>
                    {phase.resolution}
                  </td>
                </tr>

                <tr>
                  <td className="pro-phase-label">Lighting and Style</td>
                  <td className="pro-phase-text" colSpan={2}>
                    {phase.lighting_style}
                  </td>
                </tr>
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
      </div><br /><br />
    </main>
  );
}
