"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";
import { baseButtonStyle } from "../../styles/buttonStyle.js";
import "../../styles/freeCollection.css";

export default function FreeCollectionPhase4() {
  const [content, setContent] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("European");
  const [selectedGender, setSelectedGender] = useState("Female");
  const [selectedAge, setSelectedAge] = useState("Child");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false);

  const menu = {
    regions: ["European", "African", "EastAsian"],
    genders: ["Male", "Female"],
    ages: ["Child"],
  };

  useEffect(() => {
    async function loadHeader() {
      try {
        const res = await fetch("/content/free/phase_4/index.json");
        const json = await res.json();
        setContent(json);
      } catch (err) {
        console.error("Error loading header.json:", err);
      }
    }
    loadHeader();
  }, []);

  const emotions = [
    "Joy", "Love", "Pride", "Hope", "Gratitude", "Affection",
    "Wonder", "Interest", "Playfulness", "Serenity",
    "Tranquility", "Trust", "Admiration", "Inspiration", "Confidence"
  ];

  const facsData = {
    Joy: { aus: ["AU6", "AU12", "AU25"], description: "Bright eyes and natural smile expressing childlike happiness." },
    Love: { aus: ["AU6", "AU12"], description: "Gentle smile and warm gaze showing affection and care." },
    Pride: { aus: ["AU12", "AU53"], description: "Subtle head tilt and confident smile representing accomplishment." },
    Hope: { aus: ["AU1", "AU2", "AU12"], description: "Raised brows and soft smile showing optimism and belief." },
    Gratitude: { aus: ["AU6", "AU12", "AU1"], description: "Soft eyes and light smile expressing appreciation." },
    Affection: { aus: ["AU1", "AU6", "AU12"], description: "Tender expression with relaxed eyes showing kindness." },
    Wonder: { aus: ["AU1", "AU2", "AU5", "AU26"], description: "Raised brows and open mouth revealing curiosity and amazement." },
    Interest: { aus: ["AU1", "AU2", "AU5"], description: "Focused gaze and slightly lifted brows showing attention." },
    Playfulness: { aus: ["AU6", "AU12", "AU14"], description: "Cheerful smile and lively eyes expressing fun and spontaneity." },
    Serenity: { aus: ["AU1", "AU24"], description: "Relaxed muscles and calm eyes showing peacefulness." },
    Tranquility: { aus: ["AU1", "AU24"], description: "Softened expression reflecting inner calm and comfort." },
    Trust: { aus: ["AU1", "AU6", "AU12"], description: "Open and relaxed facial expression showing reliability." },
    Admiration: { aus: ["AU1", "AU2", "AU12"], description: "Raised eyebrows and soft smile expressing respect." },
    Inspiration: { aus: ["AU1", "AU2", "AU12"], description: "Upward gaze and soft smile showing motivation and awe." },
    Confidence: { aus: ["AU12", "AU53"], description: "Subtle smile and direct gaze expressing assurance." }
  };

  if (!content) return <main className="free-loading">Loading...</main>;

  const images = emotions.map((emotion) => ({
    emotion,
    src: `/private_images/free/phase_4/${emotion}_${selectedAge}_${selectedRegion}_${selectedGender}.webp`,
    aus: facsData[emotion].aus,
    description: facsData[emotion].description,
  }));

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

      {/* 🎛️ MENU */}
      <section className="free-menu">
        <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
          {menu.regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>

        <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
          {menu.genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>

        <select value={selectedAge} onChange={(e) => setSelectedAge(e.target.value)}>
          {menu.ages.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      </section>

      {/* 🖼️ GALLERY */}
      <div className="free-gallery">
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
            className="free-card"
            onClick={() => setSelectedImage(img.src)}
          >
            <img src={img.src} alt={img.emotion} />
            <h3>{img.emotion}</h3>
            <p>{img.aus.join(", ")}</p>
            <p>{img.description}</p>
          </motion.div>
        ))}
      </div>

      {/* 🔍 MODAL */}
      <ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />

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
