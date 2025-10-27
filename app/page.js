"use client";
import { motion } from "framer-motion";

export default function HomePage() {
  const emotions = [
    { name: "Joy", img: "/private_images/images/joy.webp" },
    { name: "Desire", img: "/private_images/images/desire.webp" },
    { name: "Hope", img: "/private_images/images/hope.webp" },
    { name: "Excitement", img: "/private_images/images/excitement.webp" },
    { name: "Surprise", img: "/private_images/images/surprise.webp" },
    { name: "Love", img: "/private_images/images/love.webp" },
  ];

  const text = {
    hero_title: "Train Your Perception. See. Feel. Understand.",
    hero_paragraph1:
      "EmotionDeck Helps You Perceive and Understand Human Emotion Through Subtle Expression, Mindful Observation, and Guided Visual Learning.",
    hero_paragraph2:
      "Explore 1000+ Emotional Expressions Designed for Personal Growth, Professional Training, and Research.",
    pro_title: "Experience the PRO Collection",
    pro_description:
      "Discover Complex Human Emotions Across Regions, Ages, and Genders. Ideal for Professionals, Educators, Law Enforcement, Investigators, and Emotional Research.",
    pro_note:
      "Explore the EmotionDeck Encyclopedia Inspired by Jungian Archetypes.",
  };

  return (
    <main className="flex flex-col flex-grow bg-neutral-900 text-white font-sans">
{/* 🟢 Hero Section */}
<section className="text-center mt-24 px-6">
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-6xl md:text-7xl font-extrabold mb-10 leading-tight"
  >
    {text.hero_title}
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 1 }}
    className="text-xl md:text-4xl text-gray-300 max-w-4xl mx-auto mb-8 leading-loose"
  >
    {text.hero_paragraph1}
  </motion.p>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.9, duration: 1 }}
    className="text-xl md:text-2xl text-gray-300 mb-14 max-w-4xl mx-auto leading-relaxed"
  >
    {text.hero_paragraph2}
  </motion.p>
</section>


      {/* 🖼️ Emotion Gallery */}
      <section id="emotions" className="mt-12 mb-24 text-center px-0">
        <div className="flex justify-between items-end w-full gap-0 flex-wrap md:flex-nowrap">
          {emotions.map((emotion) => (
            <motion.div
              key={emotion.name}
              whileHover={{ scale: 1.05 }}
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

      {/* 🧠 PRO Section */}
      <section className="mt-auto text-center px-6 pb-24">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold mb-6 text-emerald-400"
        >
          {text.pro_title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {text.pro_description}
        </motion.p>

        <motion.a
          href="/encyclopedia"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="inline-block text-lg md:text-xl text-emerald-400 mb-8 hover:text-emerald-300 transition"
        >
          {text.pro_note}
        </motion.a>
      </section>
    </main>
  );
}
