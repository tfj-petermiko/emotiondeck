"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";
import { baseButtonStyle } from "../../styles/buttonStyle.js";
import "../../styles/freeCollection.css";

export default function FreeCollectionPhase3() {
  const [content, setContent] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("EastAsian");
  const [selectedGender, setSelectedGender] = useState("Male");
  const [selectedAge, setSelectedAge] = useState("YoungAdult");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false);

  const menu = {
    regions: ["European", "African", "EastAsian"],
    genders: ["Male", "Female"],
    ages: ["YoungAdult"],
  };

  useEffect(() => {
    async function loadHeader() {
      try {
        const res = await fetch("/content/free/phase_3/index.json");
        const json = await res.json();
        setContent(json);
      } catch (err) {
        console.error("Error loading header.json:", err);
      }
    }
    loadHeader();
  }, []);

  const emotions = [
    "Joy", "Anger", "Fear", "Sadness", "Surprise", "Disgust", "Love", "Pride",
    "Confusion", "Hope", "Trust", "Curiosity", "Desire", "Nostalgia",
    "Anxiety", "Excitement", "Determination", "Compassion",
    "Tranquility", "Guilt", "Contempt", "Inspiration",
    "Affection", "Disbelief"
  ];

  const facsData = {
    Joy: { aus: ["AU6", "AU12", "AU25"], description: "Bright smile and relaxed eyes expressing happiness." },
    Anger: { aus: ["AU4", "AU5", "AU23"], description: "Lowered brows and pressed lips showing irritation." },
    Fear: { aus: ["AU1", "AU2", "AU5", "AU20"], description: "Wide eyes and tensed mouth reflecting fear." },
    Sadness: { aus: ["AU1", "AU4", "AU15"], description: "Drooped eyes and lowered mouth corners expressing sorrow." },
    Surprise: { aus: ["AU1", "AU2", "AU5", "AU26"], description: "Raised eyebrows and open mouth showing astonishment." },
    Disgust: { aus: ["AU9", "AU10"], description: "Wrinkled nose and lifted upper lip expressing aversion." },
    Love: { aus: ["AU6", "AU12"], description: "Soft smile and gentle gaze showing affection." },
    Pride: { aus: ["AU12", "AU53"], description: "Relaxed eyes and subtle smile indicating self-confidence." },
    Confusion: { aus: ["AU4", "AU7", "AU17"], description: "Furrowed brows and pursed lips showing uncertainty." },
    Hope: { aus: ["AU1", "AU2", "AU12"], description: "Raised brows and soft smile reflecting optimism." },
    Trust: { aus: ["AU1", "AU6", "AU12"], description: "Calm expression and open eyes indicating reliability." },
    Curiosity: { aus: ["AU1", "AU2", "AU5"], description: "Raised brows and focused gaze showing interest." },
    Desire: { aus: ["AU6", "AU12", "AU14"], description: "Soft smile and engaged eyes expressing attraction." },
    Nostalgia: { aus: ["AU1", "AU12", "AU24"], description: "Gentle smile and reflective eyes showing bittersweet memory." },
    Anxiety: { aus: ["AU1", "AU2", "AU5", "AU20"], description: "Wide eyes and tensed lips expressing unease." },
    Excitement: { aus: ["AU1", "AU2", "AU5", "AU12"], description: "Raised brows and wide smile showing enthusiasm." },
    Determination: { aus: ["AU4", "AU7", "AU24"], description: "Focused gaze and tight lips expressing resolve." },
    Compassion: { aus: ["AU1", "AU4", "AU15"], description: "Lowered brows and soft eyes showing empathy." },
    Tranquility: { aus: ["AU1", "AU24"], description: "Relaxed facial muscles expressing calmness." },
    Guilt: { aus: ["AU1", "AU4", "AU15"], description: "Lowered gaze and tightened lips expressing remorse." },
    Contempt: { aus: ["AU14"], description: "Asymmetric lip corner raised in subtle disapproval." },
    Inspiration: { aus: ["AU1", "AU2", "AU12"], description: "Upward gaze and small smile showing motivation." },
    Affection: { aus: ["AU1", "AU6", "AU12"], description: "Warm eyes and relaxed smile expressing tenderness." },
    Disbelief: { aus: ["AU1", "AU2", "AU5"], description: "Raised brows and parted lips showing surprise and doubt." }
  };

  if (!content) return <main className="free-loading">Loading...</main>;

  const images = emotions.map((emotion) => ({
    emotion,
    src: `/private_images/free/phase_3/${emotion}_${selectedAge}_${selectedRegion}_${selectedGender}.webp`,
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
