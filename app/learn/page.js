"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { baseButtonStyle } from "../styles/buttonStyle.js";

export default function LearnPage() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [loadingButton, setLoadingButton] = useState(null);
  const [hoveredBack, setHoveredBack] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/content/learn/index.json");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error loading learnpage.json:", err);
      }
    }
    loadData();
  }, []);

  const handleModuleClick = (url, id) => {
    setLoadingButton(id);
    setTimeout(() => (window.location.href = url), 500);
  };

  const handleBackClick = () => {
    setLoadingBack(true);
    setTimeout(() => (window.location.href = "/"), 500);
  };

  if (!data) {
    return (
      <main className="learn-page flex items-center justify-center">
        <p>Loading content...</p>
      </main>
    );
  }

  return (
    <main className="learn-page">
      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="learn-header-title"
      >
        {data.page_title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="learn-header-intro"
      >
        {data.page_intro}
      </motion.p>

      {/* MODULES LOOP */}
      {data.modules.map((module, index) => (
        <motion.section
          key={module.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * (index + 1), duration: 0.6 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 0px 20px rgba(255,255,255,0.08)",
          }}
          className="learn-module-section"
        >
          <div className="learn-module-card">
            <h2 className="learn-module-title">{module.title}</h2>
            <p className="learn-module-subtitle">{module.subtitle}</p>

            <table className="learn-module-table">
              <tbody>
                <tr className="learn-module-row">
                  <td className="w-1/4"></td>
                  <td className="learn-module-cell-main">
                    <p className="font-semibold mb-1">
                      {module.main_paragraph_bold}
                    </p>
                    <br />
                    <p className="learn-module-text">{module.paragraph_1}</p>
                    <p className="learn-module-text">{module.paragraph_2}</p>
                    <br />

                    <div className="learn-module-buttonwrap">
                      <button
                        onClick={() =>
                          handleModuleClick(module.url, module.id)
                        }
                        disabled={loadingButton === module.id}
                        onMouseEnter={() => setHoveredButton(module.id)}
                        onMouseLeave={() => setHoveredButton(null)}
                        style={baseButtonStyle(hoveredButton === module.id)}
                      >
                        {loadingButton === module.id
                          ? "Loading..."
                          : module.button_text}
                      </button>
                    </div>
                  </td>

                  <td className="learn-module-image-cell">
                    <div className="learn-module-image-wrapper">
                      <img
                        src={module.image}
                        alt={module.image_caption}
                        className="learn-module-image"
                        loading="lazy"
                      />
                    </div>
                    <p className="learn-module-image-caption">
                      {module.image_caption}
                    </p>
                  </td>
                </tr>

                <tr className="learn-module-row">
                  <td className="learn-module-meta">Learning Focus</td>
                  <td className="learn-module-meta" colSpan={2}>
                    {module.focus}
                  </td>
                </tr>
                <tr>
                  <td className="learn-module-meta">Access Type</td>
                  <td className="learn-module-meta" colSpan={2}>
                    {module.access}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>
      ))}


      {/* BACK BUTTON */}
      <div className="learn-backwrap">
        <button
          onClick={handleBackClick}
          disabled={loadingBack}
          onMouseEnter={() => setHoveredBack(true)}
          onMouseLeave={() => setHoveredBack(false)}
          style={baseButtonStyle(hoveredBack)}
        >
          {loadingBack ? "Loading..." : data.back_button.text}
        </button>
      </div>


    </main>
  );
}
