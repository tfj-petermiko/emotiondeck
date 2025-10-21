"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function QuizzesPage() {
  const [hoveredQuiz1, setHoveredQuiz1] = useState(false);
  const [loadingQuiz1, setLoadingQuiz1] = useState(false);
  const [hoveredBack, setHoveredBack] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);

  // 🎨 Base style for buttons (same as Learn)
  const baseButtonStyle = {
    padding: "10px 22px",
    borderRadius: "0.75rem",
    fontWeight: 600,
    fontSize: "0.95rem",
    border: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 0 12px rgba(16,185,129,0.2)",
  };

  const handleQuiz1Click = () => {
    setLoadingQuiz1(true);
    setTimeout(() => {
      window.location.href = "/learn/quizzes/quiz-1";
    }, 500);
  };

  const handleBackClick = () => {
    setLoadingBack(true);
    setTimeout(() => {
      window.location.href = "/learn";
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
        EmotionDeck Quizzes — Test Your Emotional Insight
      </motion.h1>

      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        Ready to challenge your perception? The{" "}
        <span className="text-emerald-400 font-medium">EmotionDeck Quizzes</span>{" "}
        invite you to identify real emotions from our AI-generated portraits.{" "}
        Each quiz helps you sharpen your emotional intelligence and visual recognition.
      </p>

      {/* ========================== */}
      {/* 🧠 QUIZ 1 — Recognise the Emotion */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-center mb-2">
            Quiz 1 — Recognise the Emotion
          </h2>
          <p className="text-center text-gray-400 italic mb-6">
            Identify emotions from portraits — based on the Free Basic Collection
          </p>

          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white">
                  <p className="font-semibold mb-1">
                    How well can you recognise emotions?
                  </p>
                  <p className="text-gray-400 mb-3">
                    In this quiz, you’ll see portraits from the{" "}
                    <strong>EmotionDeck Free Basic Collection</strong>.
                    Your task: select which emotion you think the portrait expresses.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-justify mb-4 max-w-xl">
                    Each question gives you four possible emotions to choose from.
                    The portraits are drawn from real cultural and age diversity,
                    helping you explore universal emotional expressions.
                  </p>

                  <div className="flex justify-end mt-6">
                    <button
                      onClick={handleQuiz1Click}
                      disabled={loadingQuiz1}
                      onMouseEnter={() => setHoveredQuiz1(true)}
                      onMouseLeave={() => setHoveredQuiz1(false)}
                      style={{
                        ...baseButtonStyle,
                        backgroundColor: loadingQuiz1
                          ? "#374151"
                          : hoveredQuiz1
                          ? "#34D399"
                          : "#10B981",
                        color: "#fff",
                        cursor: loadingQuiz1 ? "not-allowed" : "pointer",
                      }}
                    >
                      {loadingQuiz1 ? "Loading..." : "Start Quiz 1"}
                    </button>
                  </div>
                  <br />
                </td>

                <td className="p-3 w-[240px] text-center align-top">
                  <div className="w-[220px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/images/quiz-1.webp"
                      alt="EmotionDeck Quiz 1 Preview"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    EmotionDeck Quiz 1 — Recognise the Emotion
                  </p>
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Focus</td>
                <td className="p-3 text-white" colSpan={2}>
                  Emotion recognition, visual empathy, cross-cultural understanding
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Questions</td>
                <td className="p-3 text-white" colSpan={2}>
                  10 randomised questions with 4 options each
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-400">Access Type</td>
                <td className="p-3 text-white" colSpan={2}>
                  Free — Part of EmotionDeck Learn
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      <br />

      {/* 📘 More quizzes coming soon */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-12 w-[80%] mx-auto text-center border border-gray-800 rounded-2xl p-10 bg-gray-900"
      >
        <h2 className="text-2xl font-semibold mb-2">
          More EmotionDeck Quizzes Coming Soon
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Future quizzes will explore advanced emotional nuances, cultural expressions,
          and microexpressions — part of the growing{" "}
          <span className="text-emerald-400 font-medium">EmotionDeck Learn</span> collection.
        </p>
      </motion.section>
<br/>
      {/* 🟢 Back to Learn button */}
      <div className="text-center mt-16">
        <button
          onClick={handleBackClick}
          disabled={loadingBack}
          onMouseEnter={() => setHoveredBack(true)}
          onMouseLeave={() => setHoveredBack(false)}
          style={{
            ...baseButtonStyle,
            backgroundColor: loadingBack
              ? "#374151"
              : hoveredBack
              ? "#34D399"
              : "#10B981",
            color: "#fff",
            cursor: loadingBack ? "not-allowed" : "pointer",
          }}
        >
          {loadingBack ? "Loading..." : "← Back"}
        </button>
      </div>
    </main>
  );
}
