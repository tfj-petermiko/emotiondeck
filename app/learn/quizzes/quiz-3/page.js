"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import baseButtonStyle from "../../../styles/buttonStyleA.js";

export default function EmotionQuiz3() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);
  const [hoveredPlay, setHoveredPlay] = useState(false);
  const [loadingPlay, setLoadingPlay] = useState(false);

  const allEmotions = [
    "Joy", "Anger", "Fear", "Sadness", "Surprise", "Disgust", "Love",
    "Pride", "Confusion", "Hope", "Trust", "Curiosity", "Desire",
    "Nostalgia", "Anxiety", "Excitement", "Determination",
    "Compassion", "Tranquility", "Guilt", "Contempt", "Inspiration",
    "Affection", "Disbelief",
  ];

  useEffect(() => {
    const selected = [];
    const used = new Set();

    while (selected.length < 10) {
      const emotion = allEmotions[Math.floor(Math.random() * allEmotions.length)];
      if (used.has(emotion)) continue;

      const region = ["European", "African", "EastAsian"][Math.floor(Math.random() * 3)];
      const gender = ["Male", "Female"][Math.floor(Math.random() * 2)];
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

  function restartQuiz() {
    setLoadingPlay(true);
    setTimeout(() => window.location.reload(), 500);
  }

  return (
    <main className="ed-quiz-page">
      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="ed-quiz-title text-center"
      >
        EmotionDeck Quiz <br />
        Recognise the Emotion – Phase 3
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="ed-quiz-subtitle text-center"
      >
        Observe Each Portrait Carefully and Select The Matching Emotion Below.
      </motion.p>

      {/* QUIZ CARD */}
      <section key={index} className="ed-quiz-card mt-12">
        {!finished ? (
          <div className="text-center px-8 pb-8 pt-6">
            {/* IMAGE */}
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-[320px] h-[420px] mx-auto mb-6 rounded-2xl overflow-hidden"
            >
              <Image
                src={current.image}
                alt={current.correct}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* OPTIONS */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              {current.options.map((opt) => {
                const isCorrect = opt === current.correct;
                const isSelected = selected === opt;

                return (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    onMouseEnter={() => setHoveredPlay(opt)}
                    onMouseLeave={() => setHoveredPlay(null)}
                    className="px-4 py-2 rounded-lg font-medium transition-all duration-200"
                    style={baseButtonStyle({
                      hovered: hoveredPlay === opt && !selected,
                      disabled: !!selected,
                      correct: selected && isSelected && isCorrect,
                      wrong: selected && isSelected && !isCorrect,
                    })}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* FEEDBACK */}
            {feedback && (
              <p
                key={feedback}
                className={`mt-4 text-lg font-semibold ${
                  feedback.includes("Correct") ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {feedback}
              </p>
            )}

            <p className="mt-4 text-gray-300">
              Question {index + 1} of {questions.length}
            </p>
          </div>
        ) : (
          <div className="text-center px-8 pb-8 pt-6">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Your score: {score} / {questions.length}
            </h2>
            <p className="text-gray-300 mb-8">
              Great work! You’ve completed the Young Adults – Phase 3 recognition quiz.
            </p>

            <button
              onClick={restartQuiz}
              disabled={loadingPlay}
              onMouseEnter={() => setHoveredPlay(true)}
              onMouseLeave={() => setHoveredPlay(false)}
              style={{
                ...baseButtonStyle({
                  hovered: hoveredPlay && !loadingPlay,
                  disabled: loadingPlay,
                }),
                marginTop: "1.5rem",
                minWidth: "160px",
              }}
            >
              {loadingPlay ? "Loading..." : "Play Again"}
            </button>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <div className="ed-quiz-footer">
        <p>
          Want to continue learning?{" "}
          <a
            href="/learn/quizzes"
            className="text-emerald-400 hover:text-emerald-300 font-semibold transition"
          >
            <br />Try more EmotionDeck Quizzes
          </a>
        </p>
      </div>
    </main>
  );
}
