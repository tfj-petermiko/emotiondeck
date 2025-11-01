"use client";
import { motion } from "framer-motion";

export default function HomeClient({ data }) {
  return (
    <main className="ed-home-page">
      {/* Hero Section */}
      <section className="ed-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="ed-hero-title"
        >
          {data.hero_title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="ed-hero-description"
        >
          {data.hero_description}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="ed-hero-subtext"
        >
          {data.hero_subtext}
        </motion.p>
      </section>

      {/* Emotion Gallery */}
      <section id="emotions" className="ed-gallery">
        <div className="flex justify-between items-end w-full gap-0 flex-wrap md:flex-nowrap">
          {data.gallery.map((emotion) => (
            <motion.div
              key={emotion.emotion}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex-1 overflow-hidden rounded-none shadow-none hover:shadow-lg transition"
              style={{ aspectRatio: "2 / 3" }}
            >
              <img
                src={emotion.image}
                alt={`Portrait expressing ${emotion.emotion}`}
                className="ed-gallery-img"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRO Section */}
      <section className="ed-pro">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="ed-pro-title"
        >
          {data.pro_section_title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="ed-pro-text"
        >
          {data.pro_section_text}
        </motion.p>

        <motion.a
          href={data.call_to_action_link}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="ed-pro-link"
        >
          {data.call_to_action}
        </motion.a>
      </section>
    </main>
  );
}
