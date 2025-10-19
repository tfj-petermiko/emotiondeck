"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";

export default function ProCollectionPhase6() {
  // 🌍 Regions and ages (gender not used as a filter)
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
    "NorthAmerican",
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
    "Elderly",
  ];

  // Default selection (start from SouthAsian)
  const [selectedRegion, setSelectedRegion] = useState("SouthAsian");
  const [selectedAge, setSelectedAge] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // 🧩 Real dataset (based on actual file structure)
  const realImages = [
    // Joy — European Female
    ...ages.map((age) => ({
      emotion: "Joy",
      region: "European",
      gender: "Female",
      age,
      src: `/private_images/pro/phase_6/Evolution_Joy_European_${age}_Female.webp`,
    })),

    // Serenity — EastAsian Female
    ...ages.map((age) => ({
      emotion: "Serenity",
      region: "EastAsian",
      gender: "Female",
      age,
      src: `/private_images/pro/phase_6/Evolution_Serenity_EastAsian_${age}_Female.webp`,
    })),

    // Pride — MiddleEastern Female
    ...ages.map((age) => ({
      emotion: "Pride",
      region: "MiddleEastern",
      gender: "Female",
      age,
      src: `/private_images/pro/phase_6/Evolution_Pride_MiddleEastern_${age}_Female.webp`,
    })),

    // Love — LatinAmerican Male
    ...ages.map((age) => ({
      emotion: "Love",
      region: "LatinAmerican",
      gender: "Male",
      age,
      src: `/private_images/pro/phase_6/Evolution_Love_LatinAmerican_${age}_Male.webp`,
    })),

    // Gratitude — PacificIslander Male
    ...ages.map((age) => ({
      emotion: "Gratitude",
      region: "PacificIslander",
      gender: "Male",
      age,
      src: `/private_images/pro/phase_6/Evolution_Gratitude_PacificIslander_${age}_Male.webp`,
    })),

    // Calmness — Arctic Female
    ...ages.map((age) => ({
      emotion: "Calmness",
      region: "Arctic",
      gender: "Female",
      age,
      src: `/private_images/pro/phase_6/Evolution_Calmness_Arctic_${age}_Female.webp`,
    })),

    // Joy — African Female
    ...ages.map((age) => ({
      emotion: "Joy",
      region: "African",
      gender: "Female",
      age,
      src: `/private_images/pro/phase_6/Evolution_Joy_African_${age}_Female.webp`,
    })),

    // Pride — NorthAmerican Male
    ...ages.map((age) => ({
      emotion: "Pride",
      region: "NorthAmerican",
      gender: "Male",
      age,
      src: `/private_images/pro/phase_6/Evolution_Pride_NorthAmerican_${age}_Male.webp`,
    })),

    // Love — CentralAsian Male
    ...ages.map((age) => ({
      emotion: "Love",
      region: "CentralAsian",
      gender: "Male",
      age,
      src: `/private_images/pro/phase_6/Evolution_Love_CentralAsian_${age}_Male.webp`,
    })),

    // Love — NativeAmerican Female
    ...ages.map((age) => ({
      emotion: "Love",
      region: "NativeAmerican",
      gender: "Female",
      age,
      src: `/private_images/pro/phase_6/Evolution_Love_NativeAmerican_${age}_Female.webp`,
    })),

    // Calmness — AustralianAboriginal Male
    ...ages.map((age) => ({
      emotion: "Calmness",
      region: "AustralianAboriginal",
      gender: "Male",
      age,
      src: `/private_images/pro/phase_6/Evolution_Calmness_AustralianAboriginal_${age}_Male.webp`,
    })),

    // Delight — SouthAsian Female ✅ default group
    ...ages.map((age) => ({
      emotion: "Delight",
      region: "SouthAsian",
      gender: "Female",
      age,
      src: `/private_images/pro/phase_6/Evolution_Delight_SouthAsian_${age}_Female.webp`,
    })),
  ];

  // 🔎 Filter logic: region + age (supports "All")
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
          EmotionDeck PRO — Phase 6: Evolution 🌍
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        >
          The Evolution Collection Explores Emotional Growth across Cultures and Ages —  
          from Infancy to Wisdom. A Visual Atlas of Universal Human Emotion.
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
          {regions.map((region) => (
            <option key={region}>{region}</option>
          ))}
        </select>

        <select
          value={selectedAge}
          onChange={(e) => setSelectedAge(e.target.value)}
          className="px-4 py-2 rounded-md bg-white text-sm"
        >
          <option value="All">All Ages</option>
          {ages.map((age) => (
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
                  console.warn("❌ Missing file:", e.target.src);
                  e.target.style.display = "none";
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>

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
