"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageModal from "../../components/ImageModal";
import { baseButtonStyle } from "../../styles/buttonStyle.js";
import "../../styles/freeCollection.css";

export default function FreeCollectionPhase6() {
  const [content, setContent] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("SouthAsian");
  const [selectedEmotion, setSelectedEmotion] = useState("Delight");
  const [selectedAge, setSelectedAge] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false);

  const regions = [
    "European",
    "African",
    "EastAsian",
    "SouthAsian",
    "MiddleEastern",
    "LatinAmerican",
    "PacificIslander",
    "CentralAsian",
    "NativeAmerican",
    "AustralianAboriginal",
    "Arctic",
    "NorthAmerican"
  ];

  const ages = [
    "Infant",
    "Toddler",
    "Child",
    "Teen",
    "YoungAdult",
    "AdultEarly",
    "Adult",
    "MatureAdult",
    "Senior",
    "Elderly"
  ];

  // region → emotion
const emotionRegionMap = {
  European: "Joy",
  African: "Joy",
  EastAsian: "Serenity",
  SouthAsian: "Delight",
  MiddleEastern: "Pride",
  LatinAmerican: "Love",
  PacificIslander: "Gratitude",
  CentralAsian: "Love",
  NativeAmerican: "Love",
  AustralianAboriginal: "Calmness",
  Arctic: "Calmness",
  NorthAmerican: "Pride"
};

  // region → gender
  const genderRegionMap = {
    European: "Female",
    African: "Female",
    EastAsian: "Female",
    SouthAsian: "Female",
    MiddleEastern: "Female",
    LatinAmerican: "Male",
    PacificIslander: "Male",
    CentralAsian: "Male",
    NativeAmerican: "Female",
    AustralianAboriginal: "Male",
    Arctic: "Female",
    NorthAmerican: "Male"
  };

  useEffect(() => {
    async function loadHeader() {
      try {
        const res = await fetch("/content/free/phase_6/index.json");
        const json = await res.json();
        setContent(json);
      } catch (err) {
        console.error("Error loading header.json:", err);
      }
    }
    loadHeader();
  }, []);

  // Update emotion automatically when region changes
  useEffect(() => {
    const emotion = emotionRegionMap[selectedRegion] || "Unknown";
    setSelectedEmotion(emotion);
  }, [selectedRegion]);

  // Get gender based on selected region
  const gender = genderRegionMap[selectedRegion] || "Female";

  // Build image paths dynamically
  const images = ages.map((age) => ({
    emotion: selectedEmotion,
    region: selectedRegion,
    gender,
    age,
    src: `/private_images/free/phase_6/Evolution_${selectedEmotion}_${selectedRegion}_${age}_${gender}.webp`
  }));

  const filtered = images.filter(
    (img) => selectedAge === "All" || img.age === selectedAge
  );

  if (!content) return <main className="free-loading">Loading...</main>;

  return (
    <main className="free-page">
      {/* 🧠 HEADER */}
      <section className="free-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="free-hero-title"
        >
          {content.hero_title}
          <br />
          {content.hero_subtitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="free-hero-paragraph-1"
        >
          {content.hero_paragraph1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="free-hero-paragraph-2"
        >
          {content.hero_paragraph2}
        </motion.p>
      </section>

      {/* 🎚️ MENU */}
      <section className="free-menu">
        {/* Ethnicity / Region selector */}
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {regions.map((region) => (
            <option key={region}>{region}</option>
          ))}
        </select>

        {/* Emotion (locked) */}
        <select value={selectedEmotion} disabled>
          <option>{selectedEmotion}</option>
        </select>

        {/* Age selector */}
        <select
          value={selectedAge}
          onChange={(e) => setSelectedAge(e.target.value)}
        >
          <option value="All">All Ages</option>
          {ages.map((age) => (
            <option key={age}>{age}</option>
          ))}
        </select>
      </section>

      {/* 🖼️ GALLERY */}
      <div className="free-gallery">
        {filtered.map((img, index) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 25px rgba(255,255,255,0.08)"
            }}
            className="free-card"
            onClick={() => setSelectedImage(img.src)}
          >
            <Image
              src={img.src}
              alt={`${img.emotion} - ${img.region} (${img.age})`}
              width={400}
              height={600}
              className="rounded-lg"
              unoptimized
              onError={() => console.warn("Missing:", img.src)}
            />
          </motion.div>
        ))}
      </div>

      <ImageModal
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      {/* 📘 INFO SECTION */}
      {content && (
        <section className="free-info">
          <h2 className="free-info-title">{content.info_title}</h2>
          <p className="free-info-paragraph">{content.info_paragraph}</p>
        </section>
      )}

      {/* 🧾 FOOTER */}
      {content && content.footer_text && (
        <div className="free-footer">{content.footer_text}</div>
      )}

      {/* 🟢 RETURN BUTTON */}
      <div className="free-return">
        <button
          onClick={() => {
            const currentPath = window.location.pathname;
            const parentPath =
              currentPath.substring(0, currentPath.lastIndexOf("/")) || "/";
            window.location.href = parentPath;
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={baseButtonStyle(hovered)}
        >
          Back
        </button>
      </div>
    </main>
  );
}
