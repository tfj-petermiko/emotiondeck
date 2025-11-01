"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { baseButtonStyle } from "../../styles/buttonStyle.js";

export default function LearnPage() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [loadingButton, setLoadingButton] = useState(null);
  const [hoveredBack, setHoveredBack] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/content/learn/articles/index.json");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error loading articles index:", err);
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
    setTimeout(() => (window.location.href = "/learn"), 500);
  };

  if (!data) {
    return (
      <main className="learnpage-container flex items-center justify-center">
        <p>Loading content...</p>
      </main>
    );
  }

  return (
    <main className="learnpage-container">
{/* HEADER */}
<motion.h1
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="learnpage-title"
>
  {data.page_title}
</motion.h1>

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
  className="learnpage-intro"
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
          className="learnpage-section"
        >
          <div className="learnpage-card">
            <h2 className="learnpage-subtitle">{module.title}</h2>
            <p className="learnpage-subsubtitle">{module.subtitle}</p>

            <table className="learnpage-table">
              <tbody>
                <tr className="learnpage-row">
                  <td className="learnpage-emptycell"></td>
                  <td className="learnpage-maincell">
                    <p className="font-semibold mb-1">
                      {module.main_paragraph_bold}
                    </p>
                    <br />
                    <p className="learnpage-text">{module.paragraph_1}</p>
                    <p className="learnpage-text">{module.paragraph_2}</p>
                    <br />

                    <div className="learnpage-buttonwrap">
                      <button
                        onClick={() =>
                          handleModuleClick(module.url || "#", module.id)
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

                  <td className="learnpage-imagecell">
                    <div className="learnpage-imagewrapper">
                      <img
                        src={module.image}
                        alt={module.image_caption}
                        className="learnpage-image"
                        loading="lazy"
                      />
                    </div>
                    <p className="learnpage-imagecaption">
                      {module.image_caption}
                    </p>
                  </td>
                </tr>

                <tr className="learnpage-row">
                  <td className="learnpage-meta">Learning Focus</td>
                  <td className="learnpage-meta" colSpan={2}>
                    {module.focus}
                  </td>
                </tr>
                <tr>
                  <td className="learnpage-meta">Access Type</td>
                  <td className="learnpage-meta" colSpan={2}>
                    {module.access}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>
      ))}

      {/* BACK BUTTON */}
      <div className="learnpage-backwrap">
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
