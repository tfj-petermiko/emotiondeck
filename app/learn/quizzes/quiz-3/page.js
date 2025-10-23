"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EmotionQuiz3() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);
  const [hoveredPlay, setHoveredPlay] = useState(false);
  const [loadingPlay, setLoadingPlay] = useState(false);

  // 🎨 Button base style
  const baseButtonStyle = {
    padding: "10px 22px",
    borderRadius: "0.75rem",
    fontWeight: 600,
    fontSize: "0.95rem",
    border: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 0 12px rgba(16,185,129,0.2)",
  };

  const baseGreen = "#10B981";
  const hoverGreen = "#34D399";
  const disabledGray = "#374151";
  const correctGreen = "#34D399";
  const wrongRed = "#F87171";

  // 🧠 All emotions from Phase 3 — Young Adults Collection
  const allEmotions = [
    "Joy", "Anger", "Fear", "Sadness", "Surprise", "Disgust", "Love",
    "Pride", "Confusion", "Hope", "Trust", "Curiosity", "Desire",
    "Nostalgia", "Anxiety", "Excitement", "Determination",
    "Compassion", "Tranquility", "Guilt", "Contempt", "Inspiration",
    "Affection", "Disbelief",
  ];

  // 🎲 Random question generator
  useEffect(() => {
    const selected = [];
    const used = new Set();

    while (selected.length < 10) {
      const emotion =
        allEmotions[Math.floor(Math.random() * allEmotions.length)];
      if (used.has(emotion)) continue;

      const region = ["European", "African", "EastAsian"][Math.floor(Math.random() * 3)];
      const gender = ["Male", "Female"][Math.floor(Math.random() * 2)];

      // ✅ Correct path for Phase 3 .webp images
      const file = `/private_images/free/phase_3/${emotion}_YoungAdult_${region}_${gender}.webp`;

      const incorrect = allEmotions
        .filter((e) => e !== emotion)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const options = [...incorrect, emotion].sort(() => 0.5 - Math.random());
      selected.push({ image: file, correct: emotion, options });
      used.add(emotion);
    }

    setQuestions(selected);
  }, []);

  if (questions.length === 0) return null;
  const current = questions[index];

  // 🧩 Answer logic
  function handleAnswer(choice) {
    if (selected) return;
    setSelected(choice);
    if (choice === current.correct) {
      setScore((prev) => prev + 1);
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Try again!");
    }

    setTimeout(() => {
      setSelected(null);
      if (index + 1 < questions.length) {
        setIndex((prev) => prev + 1);
        setFeedback("");
      } else {
        setFinished(true);
      }
    }, 1000);
  }

  // 🔄 Restart
  function restartQuiz() {
    setLoadingPlay(true);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  // ============================================
  // 🧠 MAIN COMPONENT
  // ============================================
  return (
    <main className="min-h-screen bg-neutral-900 text-gray-200 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">
        🎓 EmotionDeck Quiz 3 — Recognise the Emotion (Young Adults — Phase 3)
      </h1>
      <p className="text-gray-400 mb-8 text-center max-w-lg">
        Observe each black and white portrait carefully and choose the correct emotion from the options below.
      </p>

      {!finished ? (
        <div className="text-center">
          {/* 🖼️ Emotion Image */}
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-[300px] h-[400px] mx-auto mb-6 rounded-2xl overflow-hidden border border-gray-700"
          >
            <Image
              src={current.image}
              alt={current.correct}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* 🧩 Four options */}
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            {current.options.map((opt) => {
              const isCorrect = opt === current.correct;
              const isSelected = selected === opt;

              let backgroundColor = baseGreen;
              let textColor = "#fff";

              if (selected) {
                if (isSelected && isCorrect) {
                  backgroundColor = correctGreen;
                  textColor = "#000";
                } else if (isSelected && !isCorrect) {
                  backgroundColor = wrongRed;
                  textColor = "#000";
                } else {
                  backgroundColor = disabledGray;
                  textColor = "#888";
                }
              }

              return (
                <motion.button
                  key={opt}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleAnswer(opt)}
                  className="px-4 py-2 rounded-lg font-medium border border-gray-700 transition-all duration-200"
                  style={{
                    backgroundColor,
                    color: textColor,
                    boxShadow: "0 0 12px rgba(16,185,129,0.2)",
                    cursor: selected ? "default" : "pointer",
                  }}
                >
                  {opt}
                </motion.button>
              );
            })}
          </div>

          {/* Feedback */}
          {feedback && (
            <motion.p
              key={feedback}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mt-4 text-lg font-semibold ${
                feedback.includes("Correct")
                  ? "text-emerald-400"
                  : "text-red-400"
              }`}
            >
              {feedback}
            </motion.p>
          )}

          <p className="mt-4 text-gray-400">
            Question {index + 1} of {questions.length}
          </p>
        </div>
      ) : (
        // 🏁 Results
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Your score: {score} / {questions.length}
          </h2><br />
          <p className="text-gray-400 mb-8">
            Great work! You’ve completed the Young Adults — Phase 3 emotion recognition quiz.
          </p><br />

          <button
            onClick={restartQuiz}
            disabled={loadingPlay}
            onMouseEnter={() => setHoveredPlay(true)}
            onMouseLeave={() => setHoveredPlay(false)}
            style={{
              ...baseButtonStyle,
              backgroundColor: loadingPlay
                ? "#374151"
                : hoveredPlay
                ? "#34D399"
                : "#10B981",
              color: "#fff",
              cursor: loadingPlay ? "not-allowed" : "pointer",
            }}
          >
            {loadingPlay ? "Loading..." : "Play Again"}
          </button>
        </div>
      )}

      <div className="mt-16 text-center text-gray-500 text-sm">
        <p>
          Want to keep learning?{" "}
          <a
            href="/learn/quizzes"
            className="text-emerald-400 hover:text-emerald-300 font-medium transition"
          >
            Try more EmotionDeck Quizzes →
          </a>
        </p>
      </div>
    </main>
  );
}
