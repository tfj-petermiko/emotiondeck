"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";
import { baseButtonStyle } from "../../styles/buttonStyle.js";
import "../../styles/freeCollection.css";

export default function FreeCollectionPhase5() {
  const [content, setContent] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("African");
  const [selectedGender, setSelectedGender] = useState("Male");
  const [selectedAge, setSelectedAge] = useState("Senior");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false);

  const menu = {
    regions: ["European", "African", "EastAsian"],
    genders: ["Male", "Female"],
    ages: ["Senior"],
  };

  useEffect(() => {
    async function loadHeader() {
      try {
        const res = await fetch("/content/free/phase_5/index.json");
        const json = await res.json();
        setContent(json);
      } catch (err) {
        console.error("Error loading header.json:", err);
      }
    }
    loadHeader();
  }, []);

  const emotions = [
    "Acceptance", "Admiration", "Affection", "Calmness", "Compassion",
    "Contentment", "Curiosity", "Determination", "Dignity", "Empathy",
    "Forgiveness", "Gratitude", "Hope", "Joy", "Longing",
    "Melancholy", "Nostalgia", "Peace", "Pride", "Reflection",
    "Regret", "Relief", "Sadness", "Serenity", "Tranquillity",
    "Resilience", "Faith", "Love", "Tenderness", "Understanding",
    "Kindness", "Trust", "Patience", "Inspiration", "Enthusiasm",
    "Friendship", "Support", "EmotionalBalance", "InnerStrength", "Fulfilment",
    "Yearning", "Sorrow", "Vulnerability", "Amusement", "Reverence",
    "Gratification", "HopeRenewed", "AcceptanceOfLoss", "ReflectionDeep", "Grace"
  ];

  const facsData = {
    Acceptance: { aus: ["AU24"], description: "Relaxed and composed expression symbolising inner peace." },
    Admiration: { aus: ["AU1", "AU2", "AU12"], description: "Raised eyebrows and slight smile showing respect." },
    Affection: { aus: ["AU1", "AU6", "AU12"], description: "Warm smile and soft eyes revealing tenderness." },
    Calmness: { aus: ["AU1", "AU24"], description: "Gentle and steady expression showing tranquility." },
    Compassion: { aus: ["AU1", "AU4", "AU15"], description: "Lowered brows and warm gaze expressing empathy." },
    Contentment: { aus: ["AU6", "AU12"], description: "Soft smile with relaxed eyes showing satisfaction." },
    Curiosity: { aus: ["AU1", "AU2", "AU5"], description: "Raised eyebrows and focused gaze reflecting interest." },
    Determination: { aus: ["AU4", "AU7", "AU24"], description: "Focused gaze and firm mouth expressing resolve." },
    Dignity: { aus: ["AU12", "AU53"], description: "Composed face and subtle smile showing integrity." },
    Empathy: { aus: ["AU1", "AU4", "AU15"], description: "Lowered brows and softened eyes expressing care." },
    Forgiveness: { aus: ["AU1", "AU4", "AU24"], description: "Softened brow and relaxed lips showing compassion." },
    Gratitude: { aus: ["AU6", "AU12", "AU1"], description: "Gentle smile and softened gaze revealing appreciation." },
    Hope: { aus: ["AU1", "AU2", "AU12"], description: "Raised brows and faint smile showing optimism." },
    Joy: { aus: ["AU6", "AU12", "AU25"], description: "Bright eyes and wide smile expressing happiness." },
    Longing: { aus: ["AU1", "AU15", "AU17"], description: "Downward gaze and tender lips expressing yearning." },
    Melancholy: { aus: ["AU1", "AU4", "AU15"], description: "Heavy eyelids and softened lips showing sorrow." },
    Nostalgia: { aus: ["AU1", "AU12", "AU24"], description: "Gentle smile and distant gaze showing bittersweet memory." },
    Peace: { aus: ["AU1", "AU24"], description: "Relaxed features reflecting calm serenity." },
    Pride: { aus: ["AU12", "AU53"], description: "Subtle smile and upright expression showing confidence." },
    Reflection: { aus: ["AU4", "AU17"], description: "Thoughtful frown and pursed lips showing contemplation." },
    Regret: { aus: ["AU1", "AU4", "AU15"], description: "Lowered brows and tightened lips expressing remorse." },
    Relief: { aus: ["AU12", "AU24"], description: "Gentle smile and released tension after strain." },
    Sadness: { aus: ["AU1", "AU4", "AU15"], description: "Drooped eyelids and lowered lips expressing sorrow." },
    Serenity: { aus: ["AU1", "AU24"], description: "Smooth and relaxed expression showing balance." },
    Tranquillity: { aus: ["AU1", "AU24"], description: "Calm facial tone reflecting inner harmony." },
    Resilience: { aus: ["AU7", "AU23"], description: "Firm eyes and tightened lips showing strength." },
    Faith: { aus: ["AU1", "AU2", "AU12"], description: "Slight upward gaze showing spiritual focus." },
    Love: { aus: ["AU6", "AU12"], description: "Gentle smile and kind eyes expressing warmth." },
    Tenderness: { aus: ["AU1", "AU6", "AU12"], description: "Soft gaze and affectionate smile showing care." },
    Understanding: { aus: ["AU1", "AU4", "AU15"], description: "Empathetic gaze and softened features revealing wisdom." },
    Kindness: { aus: ["AU1", "AU6", "AU12"], description: "Gentle and open expression showing goodwill." },
    Trust: { aus: ["AU1", "AU6", "AU12"], description: "Open eyes and calm smile reflecting confidence." },
    Patience: { aus: ["AU1", "AU24"], description: "Relaxed and composed face showing tolerance." },
    Inspiration: { aus: ["AU1", "AU2", "AU12"], description: "Slight upward gaze and soft smile showing motivation." },
    Enthusiasm: { aus: ["AU1", "AU2", "AU12", "AU25"], description: "Wide eyes and joyful smile showing eagerness." },
    Friendship: { aus: ["AU6", "AU12"], description: "Warm smile and friendly eyes reflecting connection." },
    Support: { aus: ["AU1", "AU6", "AU12"], description: "Gentle nod and caring eyes showing encouragement." },
    EmotionalBalance: { aus: ["AU1", "AU24"], description: "Steady, composed expression showing control and calm." },
    InnerStrength: { aus: ["AU7", "AU23"], description: "Tightened lips and focused eyes revealing resolve." },
    Fulfilment: { aus: ["AU6", "AU12"], description: "Peaceful smile reflecting satisfaction and completeness." },
    Yearning: { aus: ["AU1", "AU15", "AU17"], description: "Softened gaze showing emotional desire or distance." },
    Sorrow: { aus: ["AU1", "AU4", "AU15"], description: "Drooped eyes and corners of the mouth lowered slightly." },
    Vulnerability: { aus: ["AU1", "AU15"], description: "Soft eyes and parted lips expressing openness." },
    Amusement: { aus: ["AU6", "AU12", "AU25"], description: "Bright eyes and spontaneous smile reflecting humour." },
    Reverence: { aus: ["AU1", "AU2", "AU12"], description: "Lifted brows and humble gaze showing deep respect." },
    Gratification: { aus: ["AU6", "AU12"], description: "Soft satisfied smile reflecting quiet joy." },
    HopeRenewed: { aus: ["AU1", "AU2", "AU12"], description: "Slightly raised brows and fresh smile showing revived optimism." },
    AcceptanceOfLoss: { aus: ["AU1", "AU4", "AU24"], description: "Soft eyes and steady mouth showing peaceful closure." },
    ReflectionDeep: { aus: ["AU4", "AU5", "AU17"], description: "Focused gaze and thoughtful eyes showing introspection." },
    Grace: { aus: ["AU1", "AU12"], description: "Composed gentle smile representing dignity and balance." }
  };

  if (!content) return <main className="free-loading">Loading...</main>;

  const images = emotions.map((emotion) => ({
    emotion,
    src: `/private_images/free/phase_5/${emotion}_${selectedRegion}_${selectedAge}_${selectedGender}.webp`,
    aus: facsData[emotion]?.aus || [],
    description: facsData[emotion]?.description || "Natural and balanced expression representing senior emotional presence."
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
