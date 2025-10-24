"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ImageModal from "../../components/ImageModal"; // 🆕 global modal
import { baseButtonStyle } from "../../styles/buttonStyle"; // ✅ global shared style

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

  const [selectedEmotion, setSelectedEmotion] = useState("Positive Surprise");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false);

  // 🧩 Generate all images
  const allImages = [];
  emotions.forEach((emotion) => {
    regions.forEach((region) => {
      genders.forEach((gender) => {
        ages.forEach((age) => {
          allImages.push({
            src: `/private_images/free/phase_2/${emotion}_${region}_${age}_${gender}.webp`,
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
          EmotionDeck Collection - Phase 2: Advanced Emotional Expressions 🔓
        </motion.h1>

<br />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Explore 288 High-Resolution Portraits for Professionals, Educators, and Researchers in Emotional Perception.
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
      <br />

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
                alt={`${img.emotion} - ${img.region} ${img.gender} ${img.age}`}
                className="gallery-image"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔍 GLOBAL IMAGE MODAL */}
      <ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
      <br />

{/* 🟢 RETURN BUTTON */}
<div className="text-center mt-16 mb-20">
  <button
    onClick={() => {
      window.location.href = "/free";
    }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    style={baseButtonStyle(hovered)}
    className="inline-block hover:scale-105 transition-transform"
  >
    ← Back
  </button>
</div>

{/* 🔍 Global Image Modal */}
<ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
<br />
</main>
);
}
