"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ImageModal from "../../components/ImageModal"; // 🆕 globalny modal

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

  // 🧩 Generate all images
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

  // 🧠 Filter logic
  const filteredImages = allImages.filter(
    (img) =>
      img.emotion === selectedEmotion &&
      (selectedRegion === "All" || img.region === selectedRegion) &&
      (selectedGender === "All" || img.gender === selectedGender) &&
      (selectedAge === "All" || img.age === selectedAge)
  );

  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans relative">
      {/* 🧠 HEADER */}
      <section className="text-center mt-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          EmotionDeck PRO Collection — Early Access 🔓
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Explore the expanded collection of complex human emotions across
          regions, genders, and age groups.
        </motion.p>
      </section>

      {/* 🎛️ FILTERS */}
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

      <div className="my-16" />

      {/* 🖼️ GALLERY */}
      <section id="emotions" className="w-full mt-16">
        <div className="gallery-grid">
          {filteredImages.map((img) => (
            <motion.div
              key={`${img.emotion}-${img.region}-${img.gender}-${img.age}`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={`${img.emotion} — ${img.region} ${img.gender} ${img.age}`}
                className="gallery-image"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔍 GLOBAL IMAGE MODAL */}
      <ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />

      {/* 🔙 BACK TO HOME */}
      <div className="text-center mt-20 mb-24">
        <Link
          href="/"
          className="inline-block bg-white text-neutral-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
