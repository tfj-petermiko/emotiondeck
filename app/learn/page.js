"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { baseButtonStyle } from "../styles/buttonStyle"; // ✅ global shared button style

export default function LearnPage() {
  const [hoveredQuiz, setHoveredQuiz] = useState(false);
  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const [hoveredFACS, setHoveredFACS] = useState(false);
  const [loadingFACS, setLoadingFACS] = useState(false);
  const [hoveredMirror, setHoveredMirror] = useState(false);
  const [loadingMirror, setLoadingMirror] = useState(false);
  const [hoveredBack, setHoveredBack] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);

  const handleQuizClick = () => {
    setLoadingQuiz(true);
    setTimeout(() => {
      window.location.href = "/learn/quizzes";
    }, 500);
  };

  const handleFACSClick = () => {
    setLoadingFACS(true);
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

  const handleBackClick = () => {
    setLoadingBack(true);
    setTimeout(() => {
      window.location.href = "/";
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
        Learn & Grow - The Science of Emotion
      </motion.h1>

      <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        Explore human emotions through science, psychology, and AI. The{" "}
        <span className="text-emerald-400 font-medium">Learn & Grow</span> section
        reveals how emotions are expressed and shared across cultures - with interactive tools and quizzes.
      </p>

      {/* ========================== */}
      {/* 🧠 MODULE 1 - EMOTION RECOGNITION QUIZZES */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-center mb-2">
            Emotion Recognition Quizzes - Test Your Understanding
          </h2>
          <p className="text-center text-gray-300 italic mb-6">
            Identify emotions from AI portraits - based on the Free Collection
          </p>

          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4"></td>
                <td className="w-2/4 p-3 text-white">
                  <p className="font-semibold mb-1">
                    Learn to recognise emotional expressions through practice.
                  </p>
                  <p className="text-gray-300 mb-3 text-justify">
                    EmotionDeck Quizzes let you identify which emotion is shown
                    in portraits from the{" "}
                    <strong>Free Basic Collection</strong>. Each quiz offers
                    multiple-choice questions designed to strengthen your visual
                    emotional intelligence.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-justify mb-4 max-w-xl">
                    Each image presents a real human-like expression from different
                    cultures and backgrounds. Test yourself and see how well you
                    understand universal emotional cues.
                  </p>

                  <div className="flex justify-end mt-6">
                    <button
                      onClick={handleQuizClick}
                      disabled={loadingQuiz}
                      onMouseEnter={() => setHoveredQuiz(true)}
                      onMouseLeave={() => setHoveredQuiz(false)}
                      style={baseButtonStyle(hoveredQuiz)} // ✅ global button style
                    >
                      {loadingQuiz ? "Loading..." : "Go to Quizzes"}
                    </button>
                  </div>
                </td>

                <td className="p-3 w-[240px] text-center align-top">
                  <div className="w-[220px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/images/quizzes.webp"
                      alt="Emotion Recognition Quizzes"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    EmotionDeck - Quiz Preview
                  </p>
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Learning Focus</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Emotion recognition, empathy, and visual pattern understanding
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-400">Access Type</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Free - Available in Learn & Grow
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      <br />

      {/* ========================== */}
      {/* 📚 MODULE 2 - FACS ANALYSER */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-center mb-2">
            FACS Emotion Analyzer - Learn Human Expression
          </h2>
          <p className="text-center text-gray-300 italic mb-6">
            Facial Action Coding System (FACS) - AI Meets Psychology
          </p>

          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4"></td>
                <td className="w-2/4 p-3 text-white">
                  <p className="font-semibold mb-1">
                    Real-Time Facial Expression Analysis
                  </p>
                  <p className="text-gray-300 mb-3 text-justify">
                    Observe how emotions manifest through facial muscle movements (Action Units)
                    using EmotionDeck’s live FACS module.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-justify mb-4 max-w-xl">
                    Developed with the <strong>Facial Action Coding System (FACS)</strong>,
                    this tool connects emotion science with real-time learning.
                    It visualises muscle activations that correspond to each emotion,
                    helping users recognise subtle emotional cues.
                  </p>

                  <div className="flex justify-end mt-6">
                    <button
                      onClick={handleFACSClick}
                      disabled={loadingFACS}
                      onMouseEnter={() => setHoveredFACS(true)}
                      onMouseLeave={() => setHoveredFACS(false)}
                      style={baseButtonStyle(hoveredFACS)} // ✅ global button style
                    >
                      {loadingFACS ? "Loading..." : "Start FACS Analyzer"}
                    </button>
                  </div>
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
                <td className="p-3 text-gray-400">Learning Focus</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Real-time facial analysis, emotion science, microexpressions
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-400">Access Type</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Free - Available in Learn & Grow
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* 🟢 Return to Home Page button */}
      <br />
      <br />
      <div className="text-center mt-16">
        <button
          onClick={handleBackClick}
          disabled={loadingBack}
          onMouseEnter={() => setHoveredBack(true)}
          onMouseLeave={() => setHoveredBack(false)}
          style={baseButtonStyle(hoveredBack)} // ✅ global button style
        >
          {loadingBack ? "Loading..." : "← Back"}
        </button>
      </div>

    </main>
  );
}
