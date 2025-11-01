"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { baseButtonStyle } from "../../../styles/buttonStyle.js";

const symbols = [
  { name: "Circle", file: "/private_images/learn/zener/zener_circle.png" },
  { name: "Plus", file: "/private_images/learn/zener/zener_plus.png" },
  { name: "Waves", file: "/private_images/learn/zener/zener_waves.png" },
  { name: "Square", file: "/private_images/learn/zener/zener_square.png" },
  { name: "Star", file: "/private_images/learn/zener/zener_star.png" },
];

function getNewRandomIndex(prev) {
  let next;
  do {
    next = Math.floor((Math.random() * 1000 + Date.now()) % 5);
  } while (next === prev);
  return next;
}

export default function ZenerQuiz() {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [message, setMessage] = useState("");
  const [target, setTarget] = useState(Math.floor(Math.random() * 5));
  const [gameOver, setGameOver] = useState(false);
  const [hoveredRestart, setHoveredRestart] = useState(false);
  const [hoveredBack, setHoveredBack] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleChoice = (index) => {
    if (gameOver) return;
    setSelectedIndex(index);

    const correct = index === target;
    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 1);
      setMessage("✅ Correct – your intuition resonates.");
    } else {
      setMessage("❌ Try again – focus your perception.");
    }

    if (round === 25) {
      setTimeout(() => setGameOver(true), 700);
      return;
    }

    setTimeout(() => {
      const newTarget = getNewRandomIndex(target);
      setTarget(newTarget);
      setRound((prev) => prev + 1);
      setSelectedIndex(null);
      setIsCorrect(null);
    }, 800);
  };

  const handleRestart = () => {
    const newStart = getNewRandomIndex(target);
    setScore(0);
    setRound(1);
    setMessage("");
    setGameOver(false);
    setTarget(newStart);
    setSelectedIndex(null);
    setIsCorrect(null);
  };

  const handleBackClick = () => {
    setLoadingBack(true);
    setTimeout(() => {
      window.location.href = "/learn/";
    }, 400);
  };

  const accuracy = ((score / 25) * 100).toFixed(1);
  const deviation = (accuracy - 20).toFixed(1);
  const interpretation =
    accuracy > 40
      ? "Above average intuitive accuracy."
      : accuracy > 20
      ? "Within expected random range."
      : "Below chance – the mind may be overanalysing.";

  return (
    <main className="ed-quiz-page">
      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="ed-quiz-title text-center"
      >
        EmotionDeck Zener Quiz
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="ed-quiz-subtitle text-center"
      >
        <span className="font-medium">
          Focus Your Intuition and Inner Perception to Guess Which Symbol The
          System Has Chosen.
        </span>
      </motion.p>

      {/* MAIN QUIZ CARD */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="ed-quiz-card mt-6"
      >
        <div className="text-center px-8 pb-10 pt-8">
          {!gameOver ? (
            <>
              <div className="ed-quiz-grid">
                {symbols.map((sym, index) => {
                  const isSelected = selectedIndex === index;
                  const correctGlow =
                    isSelected && isCorrect
                      ? "ring-4 ring-emerald-400"
                      : isSelected && isCorrect === false
                      ? "ring-4 ring-red-500"
                      : "ring-1 ring-gray-700 hover:ring-emerald-300";

                  const glowShadow =
                    isSelected && isCorrect
                      ? "0 0 40px rgba(52, 211, 153, 1), 0 0 80px rgba(52, 211, 153, 0.7), 0 0 160px rgba(52, 211, 153, 0.5)"
                      : isSelected && isCorrect === false
                      ? "0 0 40px rgba(239, 68, 68, 1), 0 0 80px rgba(239, 68, 68, 0.7), 0 0 160px rgba(239, 68, 68, 0.5)"
                      : "0 0 15px rgba(255,255,255,0.07)";

                  return (
                    <motion.div
                      key={index}
                      onClick={() => handleChoice(index)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: glowShadow,
                        opacity: isSelected ? 1 : 0.95,
                        scale: isSelected ? 1.15 : 1,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                        repeat: isSelected && isCorrect ? Infinity : 0,
                        repeatType: "reverse",
                        repeatDelay: 0.4,
                      }}
                      className={`ed-quiz-symbol cursor-pointer transition-all duration-300 ${correctGlow}`}
                      style={{
                        backgroundColor: "#1C1C1C",
                        borderRadius: "18px",
                        padding: "18px",
                      }}
                    >
                      <Image
                        src={sym.file}
                        alt={sym.name}
                        width={110}
                        height={110}
                        className="rounded-lg mx-auto"
                      />
                    </motion.div>
                  );
                })}
              </div>

              <p className="text-emerald-400 mb-4 mt-6">{message}</p>
              <p className="text-gray-400">
                Round {round} / 25 | Score: {score}
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-semibold text-white mb-4">
                Final Score: {score}/25
              </h2>

              <div className="ed-quiz-result">
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  Detailed Results
                </h3>
                <p>
                  <strong>Total Score:</strong> {score} / 25
                </p>
                <p>
                  <strong>Accuracy:</strong> {accuracy}%
                </p>
                <p>
                  <strong>Expected by Chance:</strong> 20% (≈5 correct)
                </p>
                <p>
                  <strong>Deviation from Chance:</strong> {deviation}%
                </p>
                <p className="text-emerald-400 mt-3 italic">
                  {interpretation}
                </p>
              </div>

              <motion.button
                onClick={handleRestart}
                onMouseEnter={() => setHoveredRestart(true)}
                onMouseLeave={() => setHoveredRestart(false)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                style={baseButtonStyle(hoveredRestart, false)}
              >
                Restart Quiz
              </motion.button>
            </>
          )}
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="ed-quiz-footer"
      >
        <p>
          Want to continue learning?{" "}
          <a
            href="/learn/quizzes"
            className="text-emerald-400 hover:text-emerald-300 font-semibold transition"
          >
            <br />Try more EmotionDeck Quizzes
          </a>
        </p>
      </motion.div>

      {/* BACK BUTTON */}
      <div className="text-center mt-12 mb-4">
        <button
          onClick={handleBackClick}
          disabled={loadingBack}
          onMouseEnter={() => setHoveredBack(true)}
          onMouseLeave={() => setHoveredBack(false)}
          style={baseButtonStyle(hoveredBack, loadingBack)}
        >
          {loadingBack ? "Loading..." : "Back"}
        </button>
      </div>
    </main>
  );
}
