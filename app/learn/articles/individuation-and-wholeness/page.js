"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { baseButtonStyle } from "../../../styles/buttonStyle.js";

export default function IndividuationAndWholenessPage() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [loadingButton, setLoadingButton] = useState(null);
  const [hoveredBack, setHoveredBack] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/content/learn/articles/individuation_and_wholeness/index.json");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error loading articles data:", err);
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
    setTimeout(() => (window.location.href = "/learn/articles"), 500);
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
      {data.articles.map((article, index) => (
        <motion.section
          key={article.slug}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * (index + 1), duration: 0.6 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 0px 20px rgba(255,255,255,0.08)"
          }}
          className="learnpage-section"
        >
          <div className="learnpage-card">
            <h2 className="learnpage-subtitle">{article.title}</h2>
            <p className="learnpage-subsubtitle">{article.subtitle}</p>

            <table className="learnpage-table">
              <tbody>
                <tr className="learnpage-row">
                  <td className="learnpage-emptycell"></td>
                  <td className="learnpage-maincell">
                    <p className="font-semibold mb-1">
                      {article.main_paragraph_bold}
                    </p>
                    <br />
                    <p className="learnpage-text">{article.paragraph_1}</p>
                    <p className="learnpage-text">{article.paragraph_2}</p>
                    <br />

                    <div className="learnpage-buttonwrap">
                      <button
                        onClick={() =>
                          handleModuleClick(
                            `/learn/articles/individuation-and-wholeness/${article.slug}`,
                            article.slug
                          )
                        }
                        disabled={loadingButton === article.slug}
                        onMouseEnter={() => setHoveredButton(article.slug)}
                        onMouseLeave={() => setHoveredButton(null)}
                        style={baseButtonStyle(hoveredButton === article.slug)}
                      >
                        {loadingButton === article.slug
                          ? "Loading..."
                          : article.button_text}
                      </button>
                    </div>
                  </td>

                  <td className="learnpage-imagecell">
                    <div className="learnpage-imagewrapper">
                      <img
                        src={article.image}
                        alt={article.image_caption}
                        className="learnpage-image"
                        loading="lazy"
                      />
                    </div>
                    <p className="learnpage-imagecaption">
                      {article.image_caption}
                    </p>
                  </td>
                </tr>

                <tr className="learnpage-row">
                  <td className="learnpage-meta">Learning Focus</td>
                  <td className="learnpage-meta" colSpan={2}>
                    {article.focus}
                  </td>
                </tr>
                <tr>
                  <td className="learnpage-meta">Access Type</td>
                  <td className="learnpage-meta" colSpan={2}>
                    {article.access}
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
          {loadingBack ? "Loading..." : "Back"}
        </button>
      </div>
    </main>
  );
}
