"use client";

import { motion } from "framer-motion";
import FACSRealtimeOverlay from "../../components/FACS/FACSRealtimeOverlay";
import { baseButtonStyle } from "../../styles/buttonStyle.js";

export default function LearnFACSPage() {
  return (
    <main className="learn-facs-page">
      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="learn-facs-title"
      >
        Facial Action Coding System (FACS)
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="learn-facs-highlight"
      >
        See How Your Face Reflects Emotion in Real Time and Motion as FACS
        Reveals The Muscles Behind Each Feeling.
      </motion.p>

      <p className="learn-facs-intro">
        The FACS Analyzer identifies Action Units (AUs) in real time, capturing
        subtle facial movements that express emotional states. Watch how your
        microexpressions become data, helping you understand emotion through
        science.
      </p>

      {/* MAIN CARD */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="learn-facs-section"
      >
        <div className="learn-facs-card">
          {/* FACS Realtime Overlay */}
          <div className="learn-facs-overlay">
            <FACSRealtimeOverlay />
          </div>

          {/* Info Text */}
          <p className="learn-facs-description">
            The system analyses your facial expressions in real time and detects
            Action Units (AUs), measurable muscle activations defined by the
            Facial Action Coding System. Each AU corresponds to an emotion or
            subtle affective signal.
          </p>
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="learn-facs-footer"
      >
        <p>
          Want to continue learning?{" "}
          <a href="/learn/quizzes">
            <br />
            Try EmotionDeck Quizzes
          </a>
        </p>
      </motion.div>

      {/* BACK BUTTON */}
      <div className="learn-facs-backwrap">
        <a
          href="/learn/"
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#34D399")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#10B981")}
          style={{
            ...baseButtonStyle(false),
            backgroundColor: "#10B981",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Back
        </a>
      </div>
    </main>
  );
}
