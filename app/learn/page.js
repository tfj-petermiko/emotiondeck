"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LearnPage() {
  const [hovered, setHovered] = useState(false);
  const [hoveredMirror, setHoveredMirror] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMirror, setLoadingMirror] = useState(false);

  // 🎨 Base style for buttons
  const baseButtonStyle = {
    padding: "10px 22px",
    borderRadius: "0.75rem",
    fontWeight: 600,
    fontSize: "0.95rem",
    border: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 0 12px rgba(16,185,129,0.2)",
  };

  const handleFACSClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/learn/facs";
    }, 500);
  };

  const handleMirrorClick = () => {
    setLoadingMirror(true);
    setTimeout(() => {
      window.location.href = "/pro/facs-analyzer";
    }, 500);
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-white py-16">
      {/* 🌍 HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        Learn & Grow — The Science of Emotion
      </motion.h1>

      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        Explore human emotions through science, psychology, and AI. The{" "}
        <span className="text-emerald-400 font-medium">Learn & Grow</span> section
        reveals how emotions are expressed and shared across cultures — with interactive tools.
      </p>

      {/* ========================== */}
      {/* 📚 MODULE 1 — FACS ANALYSER */}
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
                    Observe how emotions manifest through facial muscle movements (Action Units)
                    using EmotionDeck’s live FACS module.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-justify mb-4 max-w-xl">
                    Developed with the <strong>Facial Action Coding System (FACS)</strong>,
                    this tool connects emotion science with real-time learning.
                    It visualises muscle activations that correspond to each emotion,
                    helping users recognise subtle emotional cues.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-justify mb-4 max-w-xl">
                    The system uses <strong>MediaPipe</strong> and <strong>face-api.js</strong> for accurate live detection — perfect for understanding microexpressions,
                    empathy, and nonverbal signals.
                  </p>
                  <div className="flex justify-end mt-6">
                    <button
                      onClick={handleFACSClick}
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
                  </div>
                  <br />
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
                  Facial Action Units (AU), emotion recognition, live feedback
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Best For</td>
                <td className="p-3 text-white" colSpan={2}>
                  Students, psychologists, artists, educators
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-400">Access Type</td>
                <td className="p-3 text-white" colSpan={2}>
                  Free — Available in Learn & Grow
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>
<br/>
      {/* ========================== */}
      {/* 🪞 MODULE 2 — EMOTION MIRROR */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-16 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-center">
            Live Emotion Mirror — See Yourself in Emotion
          </h2>
          <p className="text-center text-gray-400 italic mb-6">
            Real-Time Emotional Reflection — AI Meets Humanity
          </p>

          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white">
                  <p className="font-semibold mb-1">
                    AI-Powered Emotional Reflection
                  </p>
                  <p className="text-gray-400 mb-3">
                    The <strong>Emotion Mirror</strong> compares your facial expressions
                    in real time with AI-generated portraits from the EmotionDeck Universe.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-justify mb-4 max-w-xl">
                    This module visualises how your emotion aligns with universal archetypes.
                    It blends <strong>FACS data</strong> with cultural emotion models,
                    offering an engaging way to see yourself through an emotional lens.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-justify mb-4 max-w-xl">
                    You can explore how expressions of joy, sadness, or surprise
                    are represented across different cultures — reinforcing emotional
                    empathy and global understanding.
                  </p>
                  <div className="flex justify-end mt-6">
                    <button
                      onClick={handleMirrorClick}
                      disabled={loadingMirror}
                      onMouseEnter={() => setHoveredMirror(true)}
                      onMouseLeave={() => setHoveredMirror(false)}
                      style={{
                        ...baseButtonStyle,
                        backgroundColor: loadingMirror
                          ? "#374151"
                          : hovered
                          ? "#34D399"
                          : "#10B981",
                        color: "#fff",
                        cursor: loadingMirror ? "not-allowed" : "pointer",
                      }}
                    >
                      {loadingMirror ? "Loading..." : "Open Emotion Mirror"}
                    </button>
                  </div>
                  <br />
                </td>

                <td className="p-3 w-[240px] text-center align-top">
                  <div className="w-[220px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/images/mirror.png"
                      alt="Emotion Mirror Preview"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    EmotionDeck Mirror Interface
                  </p>
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Core Technology</td>
                <td className="p-3 text-white" colSpan={2}>
                  FACS + EmotionDeck AI Portrait Comparison
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Learning Focus</td>
                <td className="p-3 text-white" colSpan={2}>
                  Emotional reflection, cultural universality, real-time analysis
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Best For</td>
                <td className="p-3 text-white" colSpan={2}>
                  Students, therapists, artists, educators, and emotion enthusiasts
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-400">Access Type</td>
                <td className="p-3 text-white" colSpan={2}>
                  Free — Available in Learn & Grow
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
