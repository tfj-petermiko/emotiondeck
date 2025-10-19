"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";

export default function ProCollectionPhase6() {
  const [content, setContent] = useState({});
  const [menu, setMenu] = useState({ regions: [], ages: [] });
  const [selectedRegion, setSelectedRegion] = useState("SouthAsian");
  const [selectedAge, setSelectedAge] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // 🧩 Load textual content (page.txt)
  useEffect(() => {
    fetch("/content/pro/phase6/page.txt")
      .then((res) => res.text())
      .then((text) => {
        const parsed = {};
        let key = "";
        text.split("\n").forEach((line) => {
          const match = line.match(/^#\s*(\w+)/);
          if (match) {
            key = match[1];
            parsed[key] = "";
          } else if (key && line.trim()) {
            parsed[key] += line.trim() + " ";
          }
        });
        Object.keys(parsed).forEach((k) => (parsed[k] = parsed[k].trim()));
        setContent(parsed);
      });
  }, []);

  // 🧭 Load filters (menu.txt)
  useEffect(() => {
    fetch("/content/pro/phase6/menu.txt")
      .then((res) => res.text())
      .then((text) => {
        const obj = {};
        let current = "";
        text.split("\n").forEach((line) => {
          const match = line.match(/^#\s*(\w+)/);
          if (match) {
            current = match[1];
            obj[current] = [];
          } else if (line.trim() && !line.startsWith("#")) {
            const items = line
              .split(",")
              .map((x) => x.trim())
              .filter((x) => x.length > 0);
            if (current) obj[current].push(...items);
          }
        });
        setMenu(obj);
      });
  }, []);

  // 🖼️ Generate full dataset of image paths
  const realImages = [];

  if (menu.regions.length && menu.ages.length) {
    const groups = [
      { emotion: "Joy", region: "European", gender: "Female" },
      { emotion: "Serenity", region: "EastAsian", gender: "Female" },
      { emotion: "Pride", region: "MiddleEastern", gender: "Female" },
      { emotion: "Love", region: "LatinAmerican", gender: "Male" },
      { emotion: "Gratitude", region: "PacificIslander", gender: "Male" },
      { emotion: "Calmness", region: "Arctic", gender: "Female" },
      { emotion: "Joy", region: "African", gender: "Female" },
      { emotion: "Pride", region: "NorthAmerican", gender: "Male" },
      { emotion: "Love", region: "CentralAsian", gender: "Male" },
      { emotion: "Love", region: "NativeAmerican", gender: "Female" },
      { emotion: "Calmness", region: "AustralianAboriginal", gender: "Male" },
      { emotion: "Delight", region: "SouthAsian", gender: "Female" },
    ];

    groups.forEach(({ emotion, region, gender }) => {
      menu.ages.forEach((age) => {
        realImages.push({
          emotion,
          region,
          gender,
          age,
          src: `/private_images/pro/phase_6/Evolution_${emotion}_${region}_${age}_${gender}.webp`,
        });
      });
    });
  }

  // 🎛 Filter logic
  const filtered = realImages.filter(
    (img) =>
      (selectedRegion === "All" || img.region === selectedRegion) &&
      (selectedAge === "All" || img.age === selectedAge)
  );

  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans relative overflow-visible">
      {/* 🧠 HEADER */}
      <section className="text-center mt-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          {content.hero_title}
        </motion.h1>

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

      {/* 🎛 FILTERS */}
      <section className="flex flex-wrap justify-center gap-4 mt-16 text-neutral-900">
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="px-4 py-2 rounded-md bg-white text-sm"
        >
          <option value="All">All Regions</option>
          {menu.regions.map((region) => (
            <option key={region}>{region}</option>
          ))}
        </select>

        <select
          value={selectedAge}
          onChange={(e) => setSelectedAge(e.target.value)}
          className="px-4 py-2 rounded-md bg-white text-sm"
        >
          <option value="All">All Ages</option>
          {menu.ages.map((age) => (
            <option key={age}>{age}</option>
          ))}
        </select>
      </section>

      {/* 🖼 GALLERY */}
      <section id="gallery" className="w-full mt-16">
        <div className="gallery-grid">
          {filtered.map((img) => (
            <motion.div
              key={img.src}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={`${img.emotion} — ${img.region} (${img.age})`}
                className="gallery-image"
                loading="lazy"
                onError={(e) => {
                  e.target.closest("div").style.display = "none";
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ℹ️ INFO SECTION */}
      {content.info_title && (
        <section className="text-center mt-20 mb-20 px-6">
          <h3 className="text-3xl font-semibold mb-4">{content.info_title}</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {content.info_paragraph}
          </p>
        </section>
      )}

      {/* 🔍 IMAGE MODAL */}
      <ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />

      {/* 🎨 STYLES */}
      <style jsx global>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
          padding: 1rem;
        }
        .gallery-image {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 0.75rem;
          background-color: #111;
          transition: transform 0.3s ease;
        }
      `}</style>
    </main>
  );
}
