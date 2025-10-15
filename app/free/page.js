"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { createPortal } from "react-dom";

export default function FreeCollection() {
  const emotions = [
    "Joy", "Calmness", "Compassion", "Anger", "Sadness", "Surprise", "Disgust",
    "Fear", "Trust", "Anticipation", "Pride", "Love", "Relief", "Contempt",
    "Boredom", "Confusion", "Interest", "Determination", "Shame", "Hope",
    "Guilt", "Serenity", "Anxiety", "Curiosity"
  ];

  const regions = ["European", "African", "EastAsian"];
  const genders = ["Male", "Female"];

  const [selectedEmotion, setSelectedEmotion] = useState("Joy");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null); // 👈 kliknięty obraz

  // Generowanie ścieżek do wszystkich obrazów
  const allImages = [];
  emotions.forEach((emotion) => {
    regions.forEach((region) => {
      genders.forEach((gender) => {
        allImages.push({
          src: `/gallery/${emotion}_${region}_Adult_${gender}.png`,
          emotion,
          region,
          gender,
        });
      });
    });
  });

  // Filtrowanie
  const filteredImages = allImages.filter((img) => {
    return (
      img.emotion === selectedEmotion &&
      (selectedRegion === "All" || img.region === selectedRegion) &&
      (selectedGender === "All" || img.gender === selectedGender)
    );
  });

  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans relative">
      {/* HEADER */}
      <section className="text-center mt-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          EmotionDeck Free Collection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Explore realistic emotional expressions across regions and genders.
        </motion.p>
      </section>

      {/* FILTER BAR */}
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
              onClick={() => setSelectedImage(img.src)} // 👈 klik otwiera modal
            >
              <img
                src={img.src}
                alt={`${img.emotion} - ${img.region} ${img.gender}`}
                className="w-full h-auto object-cover object-center opacity-90 hover:opacity-100 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL - działa przez PORTAL (render w <body>) */}
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

      {/* BACK TO HOME BUTTON */}
      <div className="text-center mt-16">
        <Link
          href="/"
          className="inline-block bg-white text-neutral-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition"
        >
          ← Back to Home
        </Link>
      </div>

      <p className="mb-12">&nbsp;</p>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm mt-20 leading-tight">
        <p>EmotionDeck © 2025 — See. Feel. Understand.</p>
        <p>hello[at]emotiondeck.com</p>
      </footer>
    </main>
  );
}
