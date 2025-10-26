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
    hero_title: "Train Your Perception. Understand Human Emotion.",
    hero_paragraph1:
      "EmotionDeck helps you perceive and understand human emotion through subtle expression, mindful observation, and guided visual learning.",
    hero_paragraph2:
      "Explore 1000+ emotional expressions designed for personal growth, professional training, and research.",
    pro_title: "Experience the PRO Collection",
    pro_description:
      "Discover complex human emotions across regions, ages, and genders. Ideal for professionals, educators, law enforcement, investigators, and emotional research.",
    pro_note:
      "Explore the EmotionDeck Encyclopedia inspired by the Jungian concept of the collective unconscious.",
  };

  return (
    <main className="flex flex-col flex-grow bg-neutral-900 text-white font-sans">
      <section className="text-center mt-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          {text.hero_title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-6"
        >
          {text.hero_paragraph1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-gray-400 mb-12 max-w-xl mx-auto"
        >
          {text.hero_paragraph2}
        </motion.p>
      </section>

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

      <section className="mt-auto text-center px-6 pb-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold mb-4"
        >
          {text.pro_title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 mb-4 max-w-xl mx-auto"
        >
          {text.pro_description}
        </motion.p>

        <motion.a
          href="/encyclopedia"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="inline-block text-sm text-emerald-400 mb-8 hover:text-emerald-300 transition"
        >
          {text.pro_note}
        </motion.a>
      </section>
    </main>
  );
}
