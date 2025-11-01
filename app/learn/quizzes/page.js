"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { baseButtonStyle } from "../../styles/buttonStyle.js";

export default function LearnQuizzesPage() {
  const [data, setData] = useState(null);
  const [hoveredQuiz, setHoveredQuiz] = useState(null);
  const [loadingQuiz, setLoadingQuiz] = useState(null);
  const [hoveredBack, setHoveredBack] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/content/learn/quizzes/index.json");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error loading quizzes.json:", err);
      }
    }
    loadData();
  }, []);

  const handleQuizClick = (path, id) => {
    setLoadingQuiz(id);
    setTimeout(() => (window.location.href = path), 400);
  };

  const handleBackClick = () => {
    setLoadingBack(true);
    setTimeout(() => (window.location.href = data.back_button.target), 400);
  };

  if (!data) {
    return (
      <main className="min-h-screen bg-neutral-900 text-white flex items-center justify-center">
        <p>Loading quizzes...</p>
      </main>
    );
  }

  return (
    <main className="learn-quizzes-page">
      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="learn-quizzes-title"
      >
        {data.page_title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="learn-quizzes-intro"
      >
        {data.page_intro}
      </motion.p>

      {/* QUIZZES */}
      {data.quizzes.map((quiz, index) => (
        <motion.section
          key={quiz.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 0px 20px rgba(255,255,255,0.08)",
          }}
          className="learn-quiz-section"
        >
          <div className="learn-quiz-card">
            <h2 className="learn-quiz-title">{quiz.title}</h2>
            <p className="learn-quiz-subtitle">{quiz.subtitle}</p>

            <table className="learn-quiz-table">
              <tbody>
                <tr className="learn-quiz-row">
                  <td className="w-1/4"></td>
                  <td className="w-2/4 p-3 text-white">
                    <p className="font-semibold mb-1">{quiz.paragraph_bold}</p>
                    <br />
                    <p className="learn-quiz-text">{quiz.paragraph_1}</p>
                    <p className="learn-quiz-text">{quiz.paragraph_2}</p>

                    <div className="flex justify-end mt-6">
                      <button
                        onClick={() => handleQuizClick(quiz.path, quiz.id)}
                        disabled={loadingQuiz === quiz.id}
                        onMouseEnter={() => setHoveredQuiz(quiz.id)}
                        onMouseLeave={() => setHoveredQuiz(null)}
                        style={baseButtonStyle(hoveredQuiz === quiz.id)}
                      >
                        {loadingQuiz === quiz.id
                          ? "Loading..."
                          : quiz.button_text}
                      </button>
                    </div>
                  </td>

                  <td className="p-3 w-[240px] text-center align-top">
                    <div className="learn-quiz-image-wrapper">
                      <img
                        src={quiz.image}
                        alt={quiz.image_caption}
                        className="object-cover w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                    <p className="learn-quiz-image-caption">
                      {quiz.image_caption}
                    </p>
                  </td>
                </tr>

                <tr className="learn-quiz-row">
                  <td className="learn-quiz-meta">Learning Focus</td>
                  <td className="learn-quiz-meta" colSpan={2}>
                    {quiz.focus}
                  </td>
                </tr>
                <tr className="learn-quiz-row">
                  <td className="learn-quiz-meta">Questions</td>
                  <td className="learn-quiz-meta" colSpan={2}>
                    {quiz.questions}
                  </td>
                </tr>
                <tr className="learn-quiz-row">
                  <td className="learn-quiz-meta">Emotions Used</td>
                  <td className="learn-quiz-meta" colSpan={2}>
                    {quiz.emotions_used}
                  </td>
                </tr>
                <tr>
                  <td className="learn-quiz-meta">Access Type</td>
                  <td className="learn-quiz-meta" colSpan={2}>
                    {quiz.access}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>
      ))}

      {/* BACK BUTTON */}
      <div className="learn-back-button">
        <button
          onClick={handleBackClick}
          disabled={loadingBack}
          onMouseEnter={() => setHoveredBack(true)}
          onMouseLeave={() => setHoveredBack(false)}
          style={baseButtonStyle(hoveredBack)}
        >
          {loadingBack ? "Loading..." : data.back_button.text}
        </button>
      </div>
    </main>
  );
}
