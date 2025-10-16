"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ImageModal from "../../components/ImageModal"; // 🔍 globalny modal

export default function ProCollectionPhase4() {
  // 🎭 Emotions from Phase 4 prompts
  const emotions = [
    "Joy", "Love", "Pride", "Hope", "Gratitude", "Affection",
    "Wonder", "Interest", "Playfulness", "Serenity",
    "Tranquility", "Trust", "Admiration", "Inspiration", "Confidence"
  ];

  const regions = ["European", "African", "EastAsian"];
  const genders = ["Male", "Female"];
  const ageGroup = "Child"; // 👧 6–7 years old

  const [selectedEmotion, setSelectedEmotion] = useState("Joy");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // 🧩 Generate all image paths
  const allImages = [];
  emotions.forEach((emotion) => {
    regions.forEach((region) => {
      genders.forEach((gender) => {
        allImages.push({
          src: `/private_images/pro/phase_4/${emotion}_${ageGroup}_${region}_${gender}.webp`,
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
          EmotionDeck PRO Collection — Phase 4: Children Collection 👧🧒
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Explore 84 ultra-realistic black-and-white portraits of children aged around 6–7 years,
          expressing 14 core emotions across three ethnic groups and both genders.
         
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

      {/* 🔙 NAVIGATION BUTTONS */}
      <div className="text-center mt-8 mb-4">
        <Link
          href="/pro"
          className="inline-block bg-gray-700 text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-600 transition"
        >
          ← Back to PRO Menu
        </Link>
      </div>

      <div className="text-center mt-8 mb-24">
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
