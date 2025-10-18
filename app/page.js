"use client";
import { motion } from "framer-motion";

export default function Home() {
  const emotions = [
    { name: "Joy", img: "/private_images/images/joy.webp" },
    { name: "Anger", img: "/private_images/images/desire.webp" },
    { name: "Fear", img: "/private_images/images/hope.webp" },
    { name: "Sadness", img: "/private_images/images/excitement.webp" },
    { name: "Surprise", img: "/private_images/images/surprise.webp" },
    { name: "Contempt", img: "/private_images/images/love.webp" },
  ];

  return (
    <main className="flex flex-col flex-grow bg-neutral-900 text-white font-sans">
      {/* 🎯 HERO + CTA */}
      <section className="text-center mt-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Train Your Perception. Understand Human Emotion.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-6"
        >
          EmotionDeck helps you perceive and understand human emotion through
          subtle expression, mindful observation, and guided visual learning.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-gray-400 mb-12 max-w-xl mx-auto"
        >
          Access all 144 emotional expressions — free for personal learning,
          research, and education.
        </motion.p>
      </section>

      {/* 🖼️ EMOTIONS GALLERY — NO GAPS */}
      <section id="emotions" className="mt-12 mb-20 text-center px-0">
        <div className="flex justify-between items-end w-full gap-0 flex-wrap md:flex-nowrap">
          {emotions.map((emotion) => (
            <motion.div
              key={emotion.name}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="flex-1 overflow-hidden rounded-none shadow-none hover:shadow-lg transition"
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

      {/* 🚀 PRO COLLECTION PROMO */}
      <section className="mt-auto text-center px-6 pb-20">
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
    </main>
  );
}
