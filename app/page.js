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

      {/* HERO */}
      <section className="text-center mt-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Train Your Perception. Understand Human Emotion.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        >
          EmotionDeck helps you perceive and understand human emotion through
          subtle expression, mindful observation, and guided visual learning.
        </motion.p>
      </section>

      {/* EMOTIONS */}
      <section id="emotions" className="mt-24 text-center">
        <h3 className="text-3xl font-semibold mb-12">The Faces of Emotion</h3>

        <div className="flex justify-between items-end w-full">
          {emotions.map((emotion, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="flex-1 overflow-hidden"
              style={{ aspectRatio: "2 / 3" }}
            >
              <img
                src={emotion.img}
                alt={emotion.name}
                className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

{/* LINK TO FREE GALLERY */}
<section className="mt-32 text-center">
  <h3 className="text-3xl font-semibold mb-4">
    Explore the Full EmotionDeck Collection
  </h3>
  <p className="text-gray-400 mb-8 max-w-xl mx-auto">
    Access all 144 emotional expressions — free for personal learning, research, and education.
  </p>
  <a
    href="/free"
    className="inline-block bg-white text-neutral-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition"
  >
    Open Free Collection →

  </a>
</section>

<p className="mb-12">&nbsp;</p>

{/* FOOTER */}
<footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm mt-20 leading-tight">
  <p>EmotionDeck © 2025 — See. Feel. Understand.</p>
<p>hello[at]emotiondeck.com</p>

</footer>

</main>
);
}