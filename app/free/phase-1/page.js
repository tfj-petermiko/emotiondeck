"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ImageModal from "../../components/ImageModal"; // 🆕 global modal
import { baseButtonStyle } from "../../styles/buttonStyle"; // ✅ global shared style

export default function FreeCollection() {
  // 🧠 Static content (formerly from page.txt)
  const content = {
    hero_title: "EmotionDeck Free Collection",
    hero_paragraph1:
      "Explore 144 Foundational Emotional Expressions — Open and Free for Personal Learning, Research, and Education.",
    hero_paragraph2:
      "Discover diverse emotional expressions across regions and genders to improve your perception, empathy, and emotional intelligence.",
    info_title: "Why Free?",
    info_paragraph:
      "The EmotionDeck Free Collection is Designed to Make Emotional Learning Accessible to Everyone — From Students and Educators to Psychologists and Creators.",
  };

  // 🧩 Static menu data (formerly from menu.txt)
  const menu = {
    emotions: [
      "Joy",
      "Calmness",
      "Compassion",
      "Anger",
      "Sadness",
      "Surprise",
      "Disgust",
      "Fear",
      "Trust",
      "Anticipation",
      "Pride",
      "Love",
      "Relief",
      "Contempt",
      "Boredom",
      "Confusion",
      "Interest",
      "Determination",
      "Shame",
      "Hope",
      "Guilt",
      "Serenity",
      "Anxiety",
      "Curiosity",
    ],
    regions: ["European", "African", "EastAsian"],
    genders: ["Male", "Female"],
  };

  // 🎛️ UI state
  const [selectedEmotion, setSelectedEmotion] = useState("Joy");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false);

  // 🖼️ Build all image paths dynamically
  const allImages = [];
  menu.emotions.forEach((emotion) => {
    menu.regions.forEach((region) => {
      menu.genders.forEach((gender) => {
        allImages.push({
          src: `/private_images/free/phase_1/${emotion}_${region}_Adult_${gender}.webp`,
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
      {/* 🧠 Hero Section */}
      <section className="text-center mt-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          {content.hero_title} — Phase 1: Basic Emotional Expressions 🌱
        </motion.h1>
<br />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-4"
        >
          {content.hero_paragraph1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-base text-gray-400 max-w-2xl mx-auto"
        >
          {content.hero_paragraph2}
        </motion.p>
      </section>

      {/* 🎚️ Filter Bar */}
      <section className="flex flex-wrap justify-center gap-4 mt-16 text-neutral-900">
        <select
          value={selectedEmotion}
          onChange={(e) => setSelectedEmotion(e.target.value)}
          className="px-4 py-2 rounded-md bg-white text-sm"
        >
          {menu.emotions.map((emotion) => (
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
          {menu.regions.map((region) => (
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
          {menu.genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </section>
<br />
      {/* 🖼️ Gallery */}
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
                alt={`${img.emotion} — ${img.region} ${img.gender}`}
                className="gallery-image"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ℹ️ Info Section */}
      <section className="text-center mt-20 mb-20 px-6">
        <h3 className="text-3xl font-semibold mb-4">{content.info_title}</h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          {content.info_paragraph}
        </p>
      </section>

      {/* 🟢 Get PRO Access Button */}
      <div className="text-center mt-16 mb-20">
        <Link
          href="/free"
          style={baseButtonStyle(hovered)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="inline-block hover:scale-105 transition-transform"
        >
          ← Back
        </Link>
      </div>

      {/* 🔍 Global Image Modal */}
      <ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
      <br />
    </main>
  );
}
