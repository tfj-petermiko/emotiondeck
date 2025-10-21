"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function LearnPage() {
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔘 Dynamic button style
  const baseButtonStyle = {
    padding: "10px 22px",
    borderRadius: "0.75rem",
    fontWeight: 600,
    fontSize: "0.95rem",
    border: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 0 12px rgba(16,185,129,0.2)",
  };

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/learn/facs";
    }, 500);
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-white py-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        Learn & Grow — The Science of Emotion
      </motion.h1>

<p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
  Explore human emotions through science, psychology, and AI. The <span className="text-emerald-400 font-medium">Learn & Grow</span> section reveals how emotions are expressed and shared across cultures, with interactive tools.
</p>


      {/* ========================== */}
      {/* 📚 LEARN MODULE — FACS */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-center">
            FACS Emotion Analyzer — Learn Human Expression
          </h2>
          <p className="text-center text-gray-400 italic mb-6">
            Facial Action Coding System (FACS) — AI Meets Psychology
          </p>

          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white">
                  <p className="font-semibold mb-1">
                    Real-Time Facial Expression Analysis
                  </p>
                  <p className="text-gray-400 mb-3">
                    The EmotionDeck FACS Analyzer allows users to observe how emotions
                    manifest through facial muscle movements (Action Units).
                  </p>
                  <p className="text-gray-400 leading-relaxed text-justify mb-4 max-w-xl">
                    Developed using the <strong>Facial Action Coding System (FACS)</strong>,
                    this module connects scientific facial analysis with interactive learning.
                    Each emotion activates unique combinations of muscles — from the subtle
                    lift of the eyebrows to the tightening of the jaw. With EmotionDeck’s
                    AI-powered overlay, you can visualise and study your expressions live.
                  </p>

                  <p className="text-gray-400 leading-relaxed text-justify mb-4 max-w-xl">
                    The system combines <strong>MediaPipe</strong> (facial landmark detection)
                    and <strong>face-api.js</strong> (emotion recognition) to deliver accurate,
                    real-time feedback. It helps you understand microexpressions,
                    empathy cues, and nonverbal emotional signals — building self-awareness
                    and perceptual intelligence.
                  </p>
                  <div className="flex justify-end mt-6">
                    {/* 🟢 Dynamic Button */}
                    <button
                      onClick={handleButtonClick}
                      disabled={loading}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      style={{
                        ...baseButtonStyle,
                        backgroundColor: loading
                          ? "#374151"
                          : hovered
                          ? "#34D399"
                          : "#10B981",
                        color: "#fff",
                        cursor: loading ? "not-allowed" : "pointer",
                      }}
                    >
                      {loading ? "Loading..." : "Start FACS Analyzer"}
                    </button>
                  </div><br/>
                </td>

                <td className="p-3 w-[240px] text-center align-top">
                  <div className="w-[220px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/images/facs.png"
                      alt="FACS Analyzer Preview"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    Real-time EmotionDeck FACS Interface
                  </p>
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Core Technology</td>
                <td className="p-3 text-white" colSpan={2}>
                  MediaPipe Face Landmarker + Face-API.js
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Learning Focus</td>
                <td className="p-3 text-white" colSpan={2}>
                  Facial Action Units (AU), emotion recognition, real-time expression analysis
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Educational Value</td>
                <td className="p-3 text-white" colSpan={2}>
                  Understanding nonverbal emotion cues, microexpressions, and empathy signals
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Best For</td>
                <td className="p-3 text-white" colSpan={2}>
                  Students, psychologists, artists, educators, and anyone exploring human emotion
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-400">Access Type</td>
                <td className="p-3 text-white" colSpan={2}>
                  Free — available in Learn & Grow
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      <br />
    </main>
  );
}
