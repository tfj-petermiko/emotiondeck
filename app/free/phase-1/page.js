"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";
import { baseButtonStyle } from "../../styles/buttonStyle.js";
import "../../styles/freeCollection.css";

export default function FreeCollectionPhase1() {
  const [content, setContent] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("European");
  const [selectedGender, setSelectedGender] = useState("Male");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false);

  const menu = {
    regions: ["European", "African", "EastAsian"],
    genders: ["Male", "Female"],
  };

  useEffect(() => {
    async function loadHeader() {
      try {
        const res = await fetch("/content/free/phase_1/index.json");
        const json = await res.json();
        setContent(json);
      } catch (err) {
        console.error("Error loading header.json:", err);
      }
    }
    loadHeader();
  }, []);

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
    Curiosity: { aus: ["AU1", "AU2", "AU5"], description: "Lifted brows and intent gaze reflecting intrigue." }
  };

  if (!content) {
    return (
      <main className="free-loading">
        Loading...
      </main>
    );
  }

  const images = emotions.map((emotion) => ({
    emotion,
    src: `/private_images/free/phase_1/${emotion}_${selectedRegion}_Adult_${selectedGender}.webp`,
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

      {/* 🎚️ MENU */}
      <section className="free-menu">
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
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
        >
          {menu.genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </section>

      {/* 🧠 GALLERY */}
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

      {/* 🔍 IMAGE MODAL */}
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
