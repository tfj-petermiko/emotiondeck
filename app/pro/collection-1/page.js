"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import Link from "next/link";

export default function ProCollectionPhase2() {
  const emotions = [
    "Anxiety", "Nostalgia", "Confidence", "Tension", "Empathy", "Desire",
    "Awe", "Fatigue", "Positive Surprise", "Negative Surprise",
    "Contemplation", "Euphoria", "Irritation", "Tranquility", "Guilt",
    "Jealousy", "Gratitude", "Excitement", "Affection", "Disbelief",
    "Inspiration", "Longing", "Disappointment", "Neutral"
  ];

  const regions = ["European", "African", "EastAsian"];
  const genders = ["Male", "Female"];
  const ages = ["Adult", "Senior"];

  const [selectedEmotion, setSelectedEmotion] = useState("Anxiety");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const allImages = [];

  emotions.forEach((emotion) => {
    regions.forEach((region) => {
      genders.forEach((gender) => {
        ages.forEach((age) => {
          allImages.push({
            src: `/pro/collection-1/${emotion}_${region}_${age}_${gender}.png`,
            emotion,
            region,
            gender,
            age,
          });
        });
      });
    });
  });

  const filteredImages = allImages.filter((img) => {
    return (
      img.emotion === selectedEmotion &&
      (selectedRegion === "All" || img.region === selectedRegion) &&
      (selectedGender === "All" || img.gender === selectedGender) &&
      (selectedAge === "All" || img.age === selectedAge)
    );
  });

  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans relative">
      {/* HEADER */}
      <section className="text-center mt-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          EmotionDeck – PRO 🔓 Currently Available for Free — Early Access.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Explore the expanded collection of complex human emotions across
          cultures, genders, and ages.
        </motion.p>
      </section>

      {/* FILTERS */}
      <section className="flex flex-wrap justify-center gap-4 mt-16 text-neutral-900">
        <select
          value={selectedEmotion}
          onChange={(e) => setSelectedEmotion(e.target.value)}
          className="px-4 py-2 rounded-md bg-white text-sm"
        >
          {emotions.map((emotion) => (
            <option key={emotion} value={emotion}>
              {emotion}
            </option>
          ))}
        </select>

        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="px-4 py-2 rounded-md bg-white text-sm"
        >
          <option value="All">All Regions</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>

        <select
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
          className="px-4 py-2 rounded-md bg-white text-sm"
        >
          <option value="All">All Genders</option>
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>

        <select
          value={selectedAge}
          onChange={(e) => setSelectedAge(e.target.value)}
          className="px-4 py-2 rounded-md bg-white text-sm"
        >
          <option value="All">All Ages</option>
          {ages.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      </section>

      <p className="mb-12">&nbsp;</p>

      {/* GALLERY */}
      <section id="emotions" className="w-full mt-16">
        <div className="grid grid-cols-6 gap-0 w-full">
          {filteredImages.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="w-full overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={`${img.emotion} - ${img.region} ${img.gender} ${img.age}`}
                className="w-full h-auto object-cover object-center opacity-90 hover:opacity-100 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                key="overlay"
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  key="image-wrapper"
                  className="relative flex items-center justify-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedImage}
                    alt="Zoomed emotion"
                    className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-10 right-0 text-white text-3xl font-light hover:text-gray-400"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      {/* BACK TO HOME */}
      <div className="text-center mt-16 mb-24">
        <Link
          href="/"
          className="inline-block bg-white text-neutral-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition"
        >
          ← Back to Home
        </Link>
      </div>

     <p className="mb-12">&nbsp;</p>

    </main>
  );
}
