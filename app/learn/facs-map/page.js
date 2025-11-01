"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";
import { baseButtonStyle } from "../../styles/buttonStyle.js";

export default function FreeCollection() {
  const content = {
    hero_title: "EmotionDeck Collection",
    hero_paragraph1:
      "Explore 24 Core Emotions through the Facial Action Coding System. Each portrait reveals how emotions are expressed across human diversity.",
    hero_paragraph2:
      "Select a region and gender to discover how subtle differences create unique emotional portrayals while preserving universal expressions.",
    info_title: "Why FACS?",
    info_paragraph:
      "The Facial Action Coding System identifies visible muscle movements that represent emotional expressions. This collection shows how those Action Units appear across regions and genders.",
  };

  const menu = {
    regions: ["European", "African", "EastAsian"],
    genders: ["Male", "Female"],
  };

  const [selectedRegion, setSelectedRegion] = useState("European");
  const [selectedGender, setSelectedGender] = useState("Female");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false);

  const emotions = [
    "Joy", "Calmness", "Compassion", "Anger", "Sadness", "Surprise",
    "Disgust", "Fear", "Trust", "Anticipation", "Pride", "Love",
    "Relief", "Contempt", "Boredom", "Confusion", "Interest",
    "Determination", "Shame", "Hope", "Guilt", "Serenity",
    "Anxiety", "Curiosity",
  ];

  const facsData = {
    Joy: { aus: ["AU6", "AU12"], description: "Raised cheeks and bright eyes forming a genuine Duchenne smile." },
    Calmness: { aus: ["AU1", "AU24"], description: "Relaxed gaze and softened lips expressing composure." },
    Compassion: { aus: ["AU1", "AU4", "AU15"], description: "Gentle warmth and concern seen in the eyes." },
    Anger: { aus: ["AU4", "AU5", "AU7", "AU23"], description: "Lowered brows and tensed lips revealing intensity." },
    Sadness: { aus: ["AU1", "AU4", "AU15"], description: "Slight frown and downcast eyes showing emotional depth." },
    Surprise: { aus: ["AU1", "AU2", "AU5", "AU26"], description: "Raised eyebrows and open mouth reflecting awareness." },
    Disgust: { aus: ["AU9", "AU10"], description: "Wrinkled nose and lifted upper lip showing rejection." },
    Fear: { aus: ["AU1", "AU2", "AU5", "AU20", "AU26"], description: "Wide eyes and stretched mouth expressing alarm." },
    Trust: { aus: ["AU6", "AU12"], description: "Soft smile and open gaze indicating safety and warmth." },
    Anticipation: { aus: ["AU2", "AU5", "AU12"], description: "Lifted brows and focused eyes showing readiness." },
    Pride: { aus: ["AU12", "AU53"], description: "Subtle smile with head slightly raised showing confidence." },
    Love: { aus: ["AU1", "AU6", "AU12", "AU14"], description: "Warm gaze and dimples reflecting affection." },
    Relief: { aus: ["AU1", "AU12", "AU15"], description: "Relaxed face and gentle exhale marking release of tension." },
    Contempt: { aus: ["AU14"], description: "One-sided smile expressing superiority or moral distance." },
    Boredom: { aus: ["AU41", "AU43"], description: "Drooping eyelids and blank expression showing detachment." },
    Confusion: { aus: ["AU1", "AU4"], description: "Furrowed brows and tilted head indicating uncertainty." },
    Interest: { aus: ["AU1", "AU2", "AU5"], description: "Attentive eyes and lifted brows showing curiosity." },
    Determination: { aus: ["AU4", "AU7", "AU17"], description: "Firm eyes and pressed lips showing resolve." },
    Shame: { aus: ["AU1", "AU4", "AU54"], description: "Lowered head and averted eyes expressing discomfort." },
    Hope: { aus: ["AU1", "AU2", "AU12"], description: "Soft upward gaze and slight smile showing optimism." },
    Guilt: { aus: ["AU1", "AU4", "AU15"], description: "Downward eyes and frown showing remorse." },
    Serenity: { aus: ["AU1", "AU24"], description: "Smooth facial muscles and gentle gaze showing peace." },
    Anxiety: { aus: ["AU1", "AU2", "AU5", "AU20"], description: "Wide eyes and tense mouth reflecting worry." },
    Curiosity: { aus: ["AU1", "AU2", "AU5"], description: "Lifted brows and intent gaze reflecting intrigue." },
  };

  const images = emotions.map((emotion) => ({
    emotion,
    src: `/private_images/free/phase_1/${emotion}_${selectedRegion}_Adult_${selectedGender}.webp`,
    aus: facsData[emotion].aus,
    description: facsData[emotion].description,
  }));

  return (
    <main className="min-h-screen bg-neutral-900 text-gray-300 py-16">
      {/* 🧭 HERO SECTION */}
      <section className="text-center mb-12 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-white"
        >
          {content.hero_title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-emerald-400 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          {content.hero_paragraph1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          {content.hero_paragraph2}
        </motion.p>
      </section>

      {/* 🎚️ MENU */}
      <section className="flex flex-wrap justify-center gap-4 mb-10">
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="bg-[#1C1C1C] text-white border border-[#2a2a2a] rounded-lg px-4 py-2"
        >
          {menu.regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>

        <select
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
          className="bg-[#1C1C1C] text-white border border-[#2a2a2a] rounded-lg px-4 py-2"
        >
          {menu.genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </section>

      {/* 🧠 GALLERY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {images.map((img, index) => (
          <motion.div
            key={img.emotion}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 25px rgba(255,255,255,0.08)",
            }}
            className="bg-[#1C1C1C] border border-[#2a2a2a] rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedImage(img.src)}
          >
            <img
              src={img.src}
              alt={img.emotion}
              className="w-80 h-auto mx-auto rounded-xl mb-6 object-cover"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold text-white mb-3">
              {img.emotion}
            </h3>
            <p className="text-gray-400 text-base mb-2">{img.aus.join(", ")}</p>
            <p className="text-gray-300 text-base">{img.description}</p>
          </motion.div>
        ))}
      </div>

      {/* 🔍 IMAGE MODAL */}
      <ImageModal
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      {/* 🟢 RETURN BUTTON */}
      <div className="text-center mt-16">
        <button
          onClick={() => (window.location.href = "/learn")}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={baseButtonStyle(hovered)}
        >
          Back to Learn
        </button>
      </div>

      {/* 🧾 FOOTER */}
      <div className="text-center mt-16 text-sm text-gray-500">
        © EmotionDeck 2025 · Facial Action Coding System Gallery
      </div>
    </main>
  );
}
