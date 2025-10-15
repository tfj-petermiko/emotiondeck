"use client";
import { motion } from "framer-motion";

export default function Home() {
  const emotions = [
    { name: "Joy", img: "/images/joy.png" },
    { name: "Anger", img: "/images/anger.png" },
    { name: "Fear", img: "/images/fear.png" },
    { name: "Sadness", img: "/images/sadness.png" },
    { name: "Surprise", img: "/images/surprise.png" },
    { name: "Contempt", img: "/images/contempt.png" },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans">
      {/* 🎯 HERO + CTA */}
      <section className="text-center mt-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Train Your Perception. Understand Human Emotion.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        >
          EmotionDeck helps you perceive and understand human emotion through
          subtle expression, mindful observation, and guided visual learning.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-gray-400 mb-8 max-w-xl mx-auto"
        >
          Access all 144 emotional expressions — free for personal learning,
          research, and education.
        </motion.p>

        <motion.a
          href="/free"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="inline-block bg-white text-neutral-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Open Free Collection →
        </motion.a>
      </section>

      {/* Spacer */}
      <div className="my-24" />

      {/* 🖼️ EMOTIONS GALLERY */}
      <section id="emotions" className="mt-32 text-center px-4">
        <div className="flex justify-between items-end w-full gap-4 md:gap-8">
          {emotions.map((emotion, i) => (
            <motion.div
              key={emotion.name}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="flex-1 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
              style={{ aspectRatio: "2 / 3" }}
            >
              <img
                src={emotion.img}
                alt={`Black and white portrait expressing ${emotion.name.toLowerCase()}`}
                className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Spacer */}
      <div className="my-32" />

      {/* 🚀 PRO COLLECTION PROMO */}
      <section className="mt-40 text-center px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold mb-4"
        >
          Unlock the PRO Collection
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 mb-2 max-w-xl mx-auto"
        >
          Explore additional complex human emotions across regions, ages, and genders.  
          Perfect for professionals, educators, and advanced emotional research.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm text-emerald-400 mb-8"
        >
          🔓 Currently open for free — early access.
        </motion.p>

        <motion.a
          href="/pro"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="inline-block bg-gradient-to-r from-white to-gray-200 text-neutral-900 font-semibold px-10 py-3 rounded-full hover:from-gray-100 hover:to-white transition"
        >
          Get PRO Access →
        </motion.a>
      </section>

      <div className="my-20" />
    </main>
  );
}
