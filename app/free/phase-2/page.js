"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";
import { baseButtonStyle } from "../../styles/buttonStyle.js";
import "../../styles/freeCollection.css";

export default function FreeCollectionPhase2() {
  const [content, setContent] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("African");
  const [selectedGender, setSelectedGender] = useState("Female");
  const [selectedAge, setSelectedAge] = useState("Adult");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false);

  const menu = {
    regions: ["European", "African", "EastAsian"],
    genders: ["Male", "Female"],
    ages: ["Adult", "Senior"],
  };

  useEffect(() => {
    async function loadHeader() {
      try {
        const res = await fetch("/content/free/phase_2/index.json");
        const json = await res.json();
        setContent(json);
      } catch (err) {
        console.error("Error loading header.json:", err);
      }
    }
    loadHeader();
  }, []);

  const emotions = [
    "Anxiety", "Nostalgia", "Confidence", "Tension", "Empathy", "Desire",
    "Awe", "Fatigue", "Positive Surprise", "Negative Surprise",
    "Contemplation", "Euphoria", "Irritation", "Tranquility", "Guilt",
    "Jealousy", "Gratitude", "Excitement", "Affection", "Disbelief",
    "Inspiration", "Longing", "Disappointment", "Neutral"
  ];

  const facsData = {
    Anxiety: { aus: ["AU1", "AU2", "AU5", "AU20"], description: "Wide eyes and tense lips expressing unease and alertness." },
    Nostalgia: { aus: ["AU1", "AU12", "AU24"], description: "Soft smile and reflective gaze showing bittersweet memory." },
    Confidence: { aus: ["AU12", "AU53"], description: "Relaxed eyes and subtle smile indicating assurance." },
    Tension: { aus: ["AU4", "AU5", "AU7"], description: "Tightened eyelids and brow pressure reflecting strain." },
    Empathy: { aus: ["AU1", "AU4", "AU15"], description: "Gentle warmth in the eyes and lowered brows expressing compassion." },
    Desire: { aus: ["AU6", "AU12", "AU14"], description: "Slight head tilt and focused gaze showing attraction." },
    Awe: { aus: ["AU1", "AU2", "AU5", "AU26"], description: "Raised eyebrows and parted lips indicating wonder." },
    Fatigue: { aus: ["AU41", "AU43"], description: "Drooping eyelids and softened mouth showing tiredness." },
    "Positive Surprise": { aus: ["AU1", "AU2", "AU5", "AU26"], description: "Raised eyebrows and open mouth reflecting delight." },
    "Negative Surprise": { aus: ["AU1", "AU2", "AU5", "AU20"], description: "Wide eyes and tense lips expressing shock." },
    Contemplation: { aus: ["AU4", "AU17"], description: "Slight frown and pursed lips showing inner reflection." },
    Euphoria: { aus: ["AU6", "AU12", "AU25"], description: "Bright eyes and wide smile showing intense joy." },
    Irritation: { aus: ["AU4", "AU7", "AU23"], description: "Lowered brows and tight lips revealing annoyance." },
    Tranquility: { aus: ["AU1", "AU24"], description: "Relaxed facial muscles expressing peaceful calm." },
    Guilt: { aus: ["AU1", "AU4", "AU15"], description: "Lowered gaze and drawn lips expressing remorse." },
    Jealousy: { aus: ["AU4", "AU7", "AU14"], description: "Tense eyes and asymmetric lips showing resentment." },
    Gratitude: { aus: ["AU6", "AU12", "AU1"], description: "Soft eyes and gentle smile showing appreciation." },
    Excitement: { aus: ["AU1", "AU2", "AU5", "AU12"], description: "Raised brows and broad smile expressing enthusiasm." },
    Affection: { aus: ["AU1", "AU6", "AU12"], description: "Warm smile and softened gaze indicating tenderness." },
    Disbelief: { aus: ["AU1", "AU2", "AU5"], description: "Raised brows and open mouth expressing surprise and doubt." },
    Inspiration: { aus: ["AU1", "AU2", "AU12"], description: "Slight upward gaze and soft smile revealing motivation." },
    Longing: { aus: ["AU1", "AU15", "AU17"], description: "Downward gaze and softened lips showing yearning." },
    Disappointment: { aus: ["AU1", "AU4", "AU15"], description: "Drooped eyes and corners of mouth lowered slightly." },
    Neutral: { aus: [], description: "Relaxed face with no visible muscular activation." }
  };

  if (!content) return <main className="free-loading">Loading...</main>;

  const images = emotions.map((emotion) => ({
    emotion,
    src: `/private_images/free/phase_2/${emotion}_${selectedRegion}_${selectedAge}_${selectedGender}.webp`,
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
            <option key={region} value={region}>{region}</option>
          ))}
        </select>

        <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
          {menu.genders.map((gender) => (
            <option key={gender} value={gender}>{gender}</option>
          ))}
        </select>

        <select value={selectedAge} onChange={(e) => setSelectedAge(e.target.value)}>
          {menu.ages.map((age) => (
            <option key={age} value={age}>{age}</option>
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
