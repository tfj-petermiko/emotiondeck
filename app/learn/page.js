"use client";

import { motion } from "framer-motion";

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* 🔒 Large coloured lock (180px) with breathing animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[180px] mb-8 leading-none"
        >
          🔒
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Learn & Grow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-gray-400 text-lg max-w-md"
        >
          This Section is Temporarily Unavailable.
          <br />
          Guided Emotional Learning and Quizzes Coming Soon.
        </motion.p>
      </motion.div>

      {/* Warm yellow-orange background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-600 blur-3xl"
      />
    </main>
  );
}
