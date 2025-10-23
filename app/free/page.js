"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ImageModal from "../components/ImageModal";
import { baseButtonStyle } from "../styles/buttonStyle"; // ✅ Shared button style

export default function FreeCollection() {
  const [content, setContent] = useState({});
  const [menu, setMenu] = useState({ emotions: [], regions: [], genders: [] });

  // Load page text content
  useEffect(() => {
    fetch("/content/free/page.txt")
      .then((res) => res.text())
      .then((text) => {
        const parsed = {};
        let currentKey = "";
        text.split("\n").forEach((line) => {
          const match = line.match(/^#\s*(\w+)/);
          if (match) {
            currentKey = match[1];
            parsed[currentKey] = "";
          } else if (currentKey && line.trim()) {
            parsed[currentKey] += line.trim() + " ";
          }
        });
        Object.keys(parsed).forEach((k) => (parsed[k] = parsed[k].trim()));
        setContent(parsed);
      });
  }, []);

  // Load menu data
  useEffect(() => {
    fetch("/content/free/menu.txt")
      .then((res) => res.text())
      .then((text) => {
        const data = {};
        let current = "";
        text.split("\n").forEach((line) => {
          const match = line.match(/^#\s*(\w+)/);
          if (match) {
            current = match[1];
            data[current] = [];
          } else if (line.trim() && !line.startsWith("#")) {
            const items = line
              .split(",")
              .map((x) => x.trim())
              .filter((x) => x.length > 0);
            if (current) data[current].push(...items);
          }
        });
        setMenu(data);
      });
  }, []);

  // States
  const [selectedEmotion, setSelectedEmotion] = useState("Joy");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false);

  // Build all image paths
  const allImages = [];
  if (menu.emotions.length && menu.regions.length && menu.genders.length) {
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
  }

  // Filter images based on selected options
  const filteredImages = allImages.filter(
    (img) =>
      img.emotion === selectedEmotion &&
      (selectedRegion === "All" || img.region === selectedRegion) &&
      (selectedGender === "All" || img.gender === selectedGender)
  );

  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans relative">
      {/* Hero Section */}
      <section className="text-center mt-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          EmotionDeck Free Collection — Phase 1 🌱
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

      {/* Filter Bar */}
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

      {/* Gallery */}
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

      {/* Info Section */}
      {content.info_title && content.info_paragraph && (
        <section className="text-center mt-20 mb-20 px-6">
          <h3 className="text-3xl font-semibold mb-4">{content.info_title}</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {content.info_paragraph}
          </p>
        </section>
      )}

      {/* 🟢 Get PRO Access Button */}
      <div className="text-center mt-16 mb-20">
        <Link
          href="/pro"
          style={baseButtonStyle(hovered)} // ✅ Uses global style
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="inline-block hover:scale-105 transition-transform"
        >
          Get PRO Access →
        </Link>
      </div>

      {/* Image Modal */}
      <ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
    </main>
  );
}
