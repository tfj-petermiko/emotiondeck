"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function QuizzesPage() {

  const [hoveredQuiz1, setHoveredQuiz1] = useState(false);
  const [loadingQuiz1, setLoadingQuiz1] = useState(false);
  const [hoveredQuiz2, setHoveredQuiz2] = useState(false);
  const [loadingQuiz2, setLoadingQuiz2] = useState(false);
  const [hoveredQuiz3, setHoveredQuiz3] = useState(false);
  const [loadingQuiz3, setLoadingQuiz3] = useState(false);
  const [hoveredQuiz4, setHoveredQuiz4] = useState(false);
  const [loadingQuiz4, setLoadingQuiz4] = useState(false);
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

  // 🧭 Button handlers
  const handleQuiz1Click = () => {
    setLoadingQuiz1(true);
    setTimeout(() => {
      window.location.href = "/learn/quizzes/quiz-1";
    }, 500);
  };

  const handleQuiz2Click = () => {
    setLoadingQuiz2(true);
    setTimeout(() => {
      window.location.href = "/learn/quizzes/quiz-2";
    }, 500);
  };

  const handleQuiz3Click = () => {
    setLoadingQuiz3(true);
    setTimeout(() => {
      window.location.href = "/learn/quizzes/quiz-3";
    }, 500);
  };

  const handleQuiz4Click = () => {
    setLoadingQuiz4(true);
    setTimeout(() => {
      window.location.href = "/learn/quizzes/quiz-4";
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
      {/* 🧠 QUIZ 1 — Recognise the Emotion (Phase 1) */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <center><h2 className="text-2xl font-semibold text-center mb-2">
            Quiz 1 — Recognise the Emotion (Phase 1)
          </h2></center>
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
                  <p className="text-gray-400 mb-3 text-justify">

                    In this quiz, you’ll see portraits from the{" "}
                    <strong>EmotionDeck Free Basic Collection</strong>. Your task: select
                    which emotion you think the portrait expresses.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-justify mb-4 max-w-xl">
                    Each question gives you four possible emotions to choose from. The
                    portraits are drawn from real cultural and age diversity, helping you
                    explore universal emotional expressions.
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
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Emotions Used</td>
                <td className="p-3 text-gray-300" colSpan={2}>
                  Joy, Calmness, Compassion, Anger, Sadness, Surprise, Disgust, Fear,
                  Trust, Anticipation, Pride, Love, Relief, Contempt, Boredom, Confusion,
                  Interest, Determination, Shame, Hope, Guilt, Serenity, Anxiety, Curiosity
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
      {/* ========================== */}
      {/* 💫 QUIZ 2 — Phase 2 Advanced Emotions (Phase 2) */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-12 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <center><h2 className="text-2xl font-semibold text-center mb-2">
            Quiz 2 — Recognise the Emotion (Phase 2)
          </h2></center>
          <p className="text-center text-gray-400 italic mb-6">
            Identify emotions from the Advanced Emotional Expressions Collection
          </p>

          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white">
                  <p className="font-semibold mb-1">
                    How deep is your emotional intuition?
                  </p>
                  <p className="text-gray-400 mb-3 text-justify">

                    In this second quiz, you’ll explore emotions from{" "}
                    <strong>EmotionDeck Phase 2 — Advanced Emotional Expressions</strong>.{" "}
                    Emotions like Anxiety, Nostalgia, Confidence, and Tranquillity appear
                    across different ages and cultures.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-justify mb-4 max-w-xl">
                    Choose the emotion that best describes each portrait. The challenge
                    grows — these emotions are subtler and more complex.
                  </p>

                  <div className="flex justify-end mt-6">
                    <button
                      onClick={handleQuiz2Click}
                      disabled={loadingQuiz2}
                      onMouseEnter={() => setHoveredQuiz2(true)}
                      onMouseLeave={() => setHoveredQuiz2(false)}
                      style={{
                        ...baseButtonStyle,
                        backgroundColor: loadingQuiz2
                          ? "#374151"
                          : hoveredQuiz2
                          ? "#34D399"
                          : "#10B981",
                        color: "#fff",
                        cursor: loadingQuiz2 ? "not-allowed" : "pointer",
                      }}
                    >
                      {loadingQuiz2 ? "Loading..." : "Start Quiz 2"}
                    </button>
                  </div>
                </td>

                <td className="p-3 w-[240px] text-center align-top">
                  <div className="w-[220px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/images/quiz-2.webp"
                      alt="EmotionDeck Quiz 2 Preview"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    EmotionDeck Quiz 2 — Advanced Emotional Expressions
                  </p>
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Focus</td>
                <td className="p-3 text-white" colSpan={2}>
                  Advanced emotion recognition, subtle expressions, psychological insight
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Questions</td>
                <td className="p-3 text-white" colSpan={2}>
                  10 randomised questions with 4 emotion choices
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Emotions Used</td>
                <td className="p-3 text-gray-300" colSpan={2}>
                  Anxiety, Nostalgia, Confidence, Tension, Empathy, Desire, Awe, Fatigue,
                  Positive Surprise, Negative Surprise, Contemplation, Euphoria, Irritation,
                  Tranquillity, Guilt, Jealousy, Gratitude, Excitement, Affection,
                  Disbelief, Inspiration, Longing, Disappointment, Neutral
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


      {/* ========================== */}
      {/* 💫 QUIZ 3 — Young Adults (Phase 3) */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-12 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <center><h2 className="text-2xl font-semibold text-center mb-2">
            Quiz 3 — Recognise the Emotion (Young Adults — Phase 3)
          </h2></center>
          <center><p className="text-center text-gray-400 italic mb-6">
            Identify emotions from the EmotionDeck Phase 3 — Young Adults Collection
          </p></center>

          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white">
                  <p className="font-semibold mb-1">
                    How well can you read the emotions of the next generation?
                  </p>
                  <p className="text-gray-400 mb-3 text-justify">

                    This third quiz takes you into{" "}
                    <strong>EmotionDeck Phase 3 — Young Adults</strong>, where emotions are
                    vivid, expressive, and filled with curiosity and determination.
                    You’ll recognise key feelings like Joy, Anger, Fear, Sadness, and more —
                    portrayed through diverse cultures and faces.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-justify mb-4 max-w-xl">
                    Each portrait reflects emotional depth and realism captured in
                    high-resolution black and white imagery. Can you identify each feeling
                    accurately?
                  </p>

                  <div className="flex justify-end mt-6">
                    <button
                      onClick={handleQuiz3Click}
                      disabled={loadingQuiz3}
                      onMouseEnter={() => setHoveredQuiz3(true)}
                      onMouseLeave={() => setHoveredQuiz3(false)}
                      style={{
                        ...baseButtonStyle,
                        backgroundColor: loadingQuiz3
                          ? "#374151"
                          : hoveredQuiz3
                          ? "#34D399"
                          : "#10B981",
                        color: "#fff",
                        cursor: loadingQuiz3 ? "not-allowed" : "pointer",
                      }}
                    >
                      {loadingQuiz3 ? "Loading..." : "Start Quiz 3"}
                    </button>
                  </div>
                </td>

                <td className="p-3 w-[240px] text-center align-top">
                  <div className="w-[220px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/images/quiz-3.webp"
                      alt="EmotionDeck Quiz 3 Preview"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    EmotionDeck Quiz 3 — Young Adults (Phase 3)
                  </p>
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Focus</td>
                <td className="p-3 text-white" colSpan={2}>
                  Emotion recognition in young adults — expressive, curious, and evolving
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Questions</td>
                <td className="p-3 text-white" colSpan={2}>
                  10 randomised questions with 4 emotion choices
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Emotions Used</td>
                <td className="p-3 text-gray-300" colSpan={2}>
                  Joy, Anger, Fear, Sadness, Surprise, Disgust, Love, Pride, Confusion, Hope,
                  Trust, Curiosity, Desire, Nostalgia, Anxiety, Excitement, Determination,
                  Compassion, Tranquillity, Guilt, Contempt, Inspiration, Affection, Disbelief
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

      {/* ===================================== */}
      {/* 🌈 QUIZ 4 — Global Emotional Spectrum */}
      {/* ===================================== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-12 w-[80%] mx-auto border border-emerald-700 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.2)]"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <center><h2 className="text-2xl font-semibold text-center mb-2 text-emerald-400">
            Quiz 4 — Global Emotional Spectrum 🌍
          </h2></center>
          <center><p className="text-center text-gray-400 italic mb-6">
            Explore 120 emotions across 10 global categories — the ultimate EmotionDeck Learn experience
          </p></center>

          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              {/* Opis główny */}
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white">
                  <p className="font-semibold mb-1">
                    The full emotional atlas — in one interactive quiz.
                  </p>
                  <p className="text-gray-400 mb-3 text-justify">
                    Discover the complete *EmotionDeck Learn Spectrum* through 120 black and white portraits
                    representing 10 global categories of human emotion. Each emotion is portrayed across
                    different cultures, genders, and age groups — giving you the most comprehensive emotional
                    training experience ever created.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-justify mb-4 max-w-xl">
                    Select the emotion you recognise in each portrait and test your visual empathy and
                    cultural awareness. Perfect for both personal growth and psychological insight.
                  </p>

                  <div className="flex justify-end mt-6">
                    <button
                      onClick={handleQuiz4Click}
                      disabled={loadingQuiz4}
                      onMouseEnter={() => setHoveredQuiz4(true)}
                      onMouseLeave={() => setHoveredQuiz4(false)}
                      style={{
                        ...baseButtonStyle,
                        backgroundColor: loadingQuiz4
                          ? "#374151"
                          : hoveredQuiz4
                          ? "#34D399"
                          : "#10B981",
                        color: "#fff",
                        cursor: loadingQuiz4 ? "not-allowed" : "pointer",
                      }}
                    >
                      {loadingQuiz4 ? "Loading..." : "Start Quiz 4"}
                    </button>
                  </div>
                </td>

                {/* 🖼️ Podgląd */}
                <td className="p-3 w-[240px] text-center align-top">
                  <div className="w-[220px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/images/quiz-4.webp"
                      alt="EmotionDeck Quiz 4 Preview"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    EmotionDeck Quiz 4 — Global Emotional Spectrum
                  </p>
                </td>
              </tr>

              {/* Focus */}
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Focus</td>
                <td className="p-3 text-white" colSpan={2}>
                  Emotional intelligence, cross-cultural empathy, and advanced emotion recognition
                </td>
              </tr>

              {/* Questions */}
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Questions</td>
                <td className="p-3 text-white" colSpan={2}>
                  10 randomised portraits per category, fully interactive experience
                </td>
              </tr>

              {/* Emotions Used */}
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Emotions Used</td>
                <td className="p-3 text-gray-300" colSpan={2}>
                  120 total emotions grouped into 10 main categories — Joy & Vitality, Calm & Harmony,
                  Empathy & Connection, Curiosity & Wonder, Confidence & Power, Sadness & Reflection,
                  Fear & Vulnerability, Anger & Resistance, Surprise & Transition, Acceptance & Transcendence.
                </td>
              </tr>

              {/* Access Type */}
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

<br /><br />

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
      <br/><br/>
    </main>
  );
}