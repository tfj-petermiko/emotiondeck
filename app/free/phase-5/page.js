"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ImageModal from "../../components/ImageModal"; // 🔍 global modal
import { baseButtonStyle } from "../../styles/buttonStyle"; // ✅ global shared button style

export default function ProCollectionPhase5() {
  // 🎭 Emotions from Phase 5 (Seniors Collection)
  const emotions = [
    "Acceptance", "Admiration", "Affection", "Calmness", "Compassion",
    "Contentment", "Curiosity", "Determination", "Dignity", "Empathy",
    "Forgiveness", "Gratitude", "Hope", "Joy", "Longing",
    "Melancholy", "Nostalgia", "Peace", "Pride", "Reflection",
    "Regret", "Relief", "Sadness", "Serenity", "Tranquillity",
    "Resilience", "Faith", "Love", "Tenderness", "Understanding",
    "Kindness", "Trust", "Patience", "Inspiration", "Enthusiasm",
    "Friendship", "Support", "EmotionalBalance", "InnerStrength", "Fulfilment",
    "Yearning", "Sorrow", "Vulnerability", "Amusement", "Reverence",
    "Gratification", "HopeRenewed", "AcceptanceOfLoss", "ReflectionDeep", "Grace"
  ];

  const regions = ["European", "African", "EastAsian"];
  const genders = ["Male", "Female"];
  const ageGroup = "Senior"; // 👴👵 Seniors (Phase 5)

  const [selectedEmotion, setSelectedEmotion] = useState("Joy");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false); // ✅ for hover effect

  // 🧩 Generate all image paths dynamically
  const allImages = [];
  emotions.forEach((emotion) => {
    regions.forEach((region) => {
      genders.forEach((gender) => {
        allImages.push({
          src: `/private_images/free/phase_5/${emotion}_${region}_${ageGroup}_${gender}.webp`,
          emotion,
          region,
          gender,
        });
      });
    });
  });

  // 🧠 Filtering logic
  const filteredImages = allImages.filter(
    (img) =>
      img.emotion === selectedEmotion &&
      (selectedRegion === "All" || img.region === selectedRegion) &&
      (selectedGender === "All" || img.gender === selectedGender)
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
          EmotionDeck PRO Collection — Phase 5: Seniors Collection 👴👵
        </motion.h1>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Discover 300 Portraits of Seniors Expressing 50 Emotions — a Visual Study of Wisdom, Grace, and Emotional Depth.
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
      </section>

      <br />

      {/* 🖼️ GALLERY */}
      <section id="emotions" className="w-full mt-16">
        <div className="gallery-grid">
          {filteredImages.map((img) => (
            <motion.div
              key={`${img.emotion}-${img.region}-${img.gender}`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={`${img.emotion} — ${img.region} ${img.gender} (${ageGroup})`}
                className="gallery-image"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔍 MODAL */}
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
