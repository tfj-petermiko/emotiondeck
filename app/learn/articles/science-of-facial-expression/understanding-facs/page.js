"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { baseButtonStyle } from "../../../../styles/buttonStyle.js";

export default function LearnArticleUnderstandingFacialActionCodingSystem() {
  const [hoveredBack, setHoveredBack] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(
          "/content/learn/articles/science_of_facial_expression/understanding_facs/index.json"
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error loading article data:", err);
      }
    }
    loadData();
  }, []);

  const handleBackClick = () => {
    setLoadingBack(true);
    setTimeout(() => {
      window.location.href = "/learn/articles/science-of-facial-expression";
    }, 600);
  };

  if (!data) {
    return (
      <main className="learn-page flex items-center justify-center text-gray-400 mt-20">
        Loading article...
      </main>
    );
  }

  const article = data.articles[0];

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

      {/* ARTICLE SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="learn-module-section"
      >
        <div className="learn-module-card">
          <h2 className="learn-module-title">{article.title}</h2>
          <p className="learn-module-subtitle">{article.subtitle}</p>

          <table className="learn-module-table">
            <tbody>
              <tr className="learn-module-row">
                <td className="learn-module-cell-main">
                  <p className="font-semibold italic text-gray-300 mb-4">
                    {article.main_paragraph_bold}
                  </p>
                  {[...Array(14)].map((_, i) => {
                    const key = `paragraph_${i + 1}`;
                    return (
                      article[key] && (
                        <p key={key} className="learn-module-text mb-4">
                          {article[key]}
                        </p>
                      )
                    );
                  })}
                </td>
              </tr>

              <tr className="learn-module-row">
                <td className="learn-module-meta">
                  <strong>Learning Focus:</strong> {article.focus}
                </td>
              </tr>

              <tr className="learn-module-row">
                <td className="learn-module-meta">
                  <strong>Access Type:</strong> {article.access}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* BACK BUTTON */}
      <div className="learn-backwrap">
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
