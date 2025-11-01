"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";
import { baseButtonStyle } from "../../styles/buttonStyle.js";
import useProAccess from "../../hooks/useProAccess";
import "../../styles/proCollection.css";

// ===============================
// 🖼️ Image Imports (48)
// ===============================
import img1 from "../private_images/phase_1/DarkSpectrum_DeceptionMasks_Cunning_SouthAsian_YoungAdult_Female.webp";
import img2 from "../private_images/phase_1/DarkSpectrum_DeceptionMasks_Cynicism_NativeAmerican_MatureAdult_Female.webp";
import img3 from "../private_images/phase_1/DarkSpectrum_DeceptionMasks_Duplicity_African_YoungAdult_Female.webp";
import img4 from "../private_images/phase_1/DarkSpectrum_DeceptionMasks_Facade_EastAsian_YoungAdult_Male.webp";
import img5 from "../private_images/phase_1/DarkSpectrum_DeceptionMasks_Hypocrisy_European_YoungAdult_Male.webp";
import img6 from "../private_images/phase_1/DarkSpectrum_DeceptionMasks_Irony_AustralianAboriginal_MatureAdult_Female.webp";
import img7 from "../private_images/phase_1/DarkSpectrum_DeceptionMasks_Mockery_NorthAmerican_MatureAdult_Female.webp";
import img8 from "../private_images/phase_1/DarkSpectrum_DeceptionMasks_Sarcasm_Arctic_MatureAdult_Female.webp";

import img9 from "../private_images/phase_1/DarkSpectrum_HiddenStates_Apathy_MiddleEastern_Adult_Female.webp";
import img10 from "../private_images/phase_1/DarkSpectrum_HiddenStates_Calculation_NativeAmerican_Adult_Female.webp";
import img11 from "../private_images/phase_1/DarkSpectrum_HiddenStates_Coldness_CentralAsian_Adult_Female.webp";
import img12 from "../private_images/phase_1/DarkSpectrum_HiddenStates_Containment_NorthAmerican_Adult_Female.webp";
import img13 from "../private_images/phase_1/DarkSpectrum_HiddenStates_Detachment_PacificIslander_Adult_Female.webp";
import img14 from "../private_images/phase_1/DarkSpectrum_HiddenStates_Indifference_LatinAmerican_Adult_Female.webp";
import img15 from "../private_images/phase_1/DarkSpectrum_HiddenStates_Numbness_AustralianAboriginal_Adult_Female.webp";
import img16 from "../private_images/phase_1/DarkSpectrum_HiddenStates_Restraint_Arctic_Adult_Female.webp";

import img17 from "../private_images/phase_1/DarkSpectrum_InnerConflict_Guilt_European_YoungAdult_Male.webp";
import img18 from "../private_images/phase_1/DarkSpectrum_InnerConflict_Hopelessness_MiddleEastern_YoungAdult_Male.webp";
import img19 from "../private_images/phase_1/DarkSpectrum_InnerConflict_Insecurity_PacificIslander_YoungAdult_Male.webp";
import img20 from "../private_images/phase_1/DarkSpectrum_InnerConflict_Regret_EastAsian_YoungAdult_Male.webp";
import img21 from "../private_images/phase_1/DarkSpectrum_InnerConflict_Remorse_LatinAmerican_YoungAdult_Female.webp";
import img22 from "../private_images/phase_1/DarkSpectrum_InnerConflict_Resentment_CentralAsian_YoungAdult_Female.webp";
import img23 from "../private_images/phase_1/DarkSpectrum_InnerConflict_SelfDoubt_SouthAsian_YoungAdult_Female.webp";
import img24 from "../private_images/phase_1/DarkSpectrum_InnerConflict_Shame_African_YoungAdult_Female.webp";

import img25 from "../private_images/phase_1/DarkSpectrum_PainLoss_Abandonment_MiddleEastern_MatureAdult_Female.webp";
import img26 from "../private_images/phase_1/DarkSpectrum_PainLoss_Betrayal_African_MatureAdult_Female.webp";
import img27 from "../private_images/phase_1/DarkSpectrum_PainLoss_Bitterness_SouthAsian_MatureAdult_Female.webp";
import img28 from "../private_images/phase_1/DarkSpectrum_PainLoss_Despair_European_MatureAdult_Female.webp";
import img29 from "../private_images/phase_1/DarkSpectrum_PainLoss_FearResigned_PacificIslander_MatureAdult_Female.webp";
import img30 from "../private_images/phase_1/DarkSpectrum_PainLoss_Loneliness_EastAsian_MatureAdult_Female.webp";
import img31 from "../private_images/phase_1/DarkSpectrum_PainLoss_Melancholy_CentralAsian_MatureAdult_Female.webp";
import img32 from "../private_images/phase_1/DarkSpectrum_PainLoss_Sorrow_LatinAmerican_MatureAdult_Female.webp";

import img33 from "../private_images/phase_1/DarkSpectrum_PowerControl_Arrogance_NativeAmerican_YoungAdult_Male.webp";
import img34 from "../private_images/phase_1/DarkSpectrum_PowerControl_Contempt_NorthAmerican_YoungAdult_Female.webp";
import img35 from "../private_images/phase_1/DarkSpectrum_PowerControl_Control_EastAsian_Adult_Female.webp";
import img36 from "../private_images/phase_1/DarkSpectrum_PowerControl_Dominance_AustralianAboriginal_YoungAdult_Female.webp";
import img37 from "../private_images/phase_1/DarkSpectrum_PowerControl_Intimidation_African_Adult_Female.webp";
import img38 from "../private_images/phase_1/DarkSpectrum_PowerControl_Manipulation_Arctic_YoungAdult_Male.webp";
import img39 from "../private_images/phase_1/DarkSpectrum_PowerControl_PrideCorrupted_SouthAsian_Adult_Female.webp";
import img40 from "../private_images/phase_1/DarkSpectrum_PowerControl_Superiority_European_Adult_Female.webp";

import img41 from "../private_images/phase_1/DarkSpectrum_ReflectionRedemption_AcceptanceOfFlaws_Arctic_YoungAdult_Male.webp";
import img42 from "../private_images/phase_1/DarkSpectrum_ReflectionRedemption_Catharsis_NorthAmerican_YoungAdult_Female.webp";
import img43 from "../private_images/phase_1/DarkSpectrum_ReflectionRedemption_DarknessWithin_LatinAmerican_YoungAdult_Female.webp";
import img44 from "../private_images/phase_1/DarkSpectrum_ReflectionRedemption_Disillusionment_PacificIslander_YoungAdult_Male.webp";
import img45 from "../private_images/phase_1/DarkSpectrum_ReflectionRedemption_ForgivingSelf_AustralianAboriginal_YoungAdult_Female.webp";
import img46 from "../private_images/phase_1/DarkSpectrum_ReflectionRedemption_Redemption_CentralAsian_YoungAdult_Female.webp";
import img47 from "../private_images/phase_1/DarkSpectrum_ReflectionRedemption_RegretfulPride_MiddleEastern_YoungAdult_Male.webp";
import img48 from "../private_images/phase_1/DarkSpectrum_ReflectionRedemption_SorrowedWisdom_NativeAmerican_YoungAdult_Male.webp";

export default function ProCollectionPhase1() {
  const access = useProAccess("phase-1", {
    title: "Dark Spectrum I",
    price: "4.99",
    redirectToCheckout: true,
  });

  const [content, setContent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Deception Mask");
  const [selectedEmotion, setSelectedEmotion] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false);
  const { hasAccess = false, loading = true } = access || {};

  // ✅ Load JSON header
  useEffect(() => {
    async function loadHeader() {
      try {
        const res = await fetch("/content/pro/phase_1/index.json");
        const json = await res.json();
        setContent(json);
      } catch (err) {
        console.error("Error loading header:", err);
      }
    }
    loadHeader();
  }, []);

  const categories = {
    "Deception Mask": [
      { emotion: "Cunning", src: img1 },
      { emotion: "Cynicism", src: img2 },
      { emotion: "Duplicity", src: img3 },
      { emotion: "Facade", src: img4 },
      { emotion: "Hypocrisy", src: img5 },
      { emotion: "Irony", src: img6 },
      { emotion: "Mockery", src: img7 },
      { emotion: "Sarcasm", src: img8 }
    ],
    "Hidden States": [
      { emotion: "Apathy", src: img9 },
      { emotion: "Calculation", src: img10 },
      { emotion: "Coldness", src: img11 },
      { emotion: "Containment", src: img12 },
      { emotion: "Detachment", src: img13 },
      { emotion: "Indifference", src: img14 },
      { emotion: "Numbness", src: img15 },
      { emotion: "Restraint", src: img16 }
    ],
    "Inner Conflict": [
      { emotion: "Guilt", src: img17 },
      { emotion: "Hopelessness", src: img18 },
      { emotion: "Insecurity", src: img19 },
      { emotion: "Regret", src: img20 },
      { emotion: "Remorse", src: img21 },
      { emotion: "Resentment", src: img22 },
      { emotion: "Self Doubt", src: img23 },
      { emotion: "Shame", src: img24 }
    ],
    "Pain and Loss": [
      { emotion: "Abandonment", src: img25 },
      { emotion: "Betrayal", src: img26 },
      { emotion: "Bitterness", src: img27 },
      { emotion: "Despair", src: img28 },
      { emotion: "Fear Resigned", src: img29 },
      { emotion: "Loneliness", src: img30 },
      { emotion: "Melancholy", src: img31 },
      { emotion: "Sorrow", src: img32 }
    ],
    "Power and Control": [
      { emotion: "Arrogance", src: img33 },
      { emotion: "Contempt", src: img34 },
      { emotion: "Control", src: img35 },
      { emotion: "Dominance", src: img36 },
      { emotion: "Intimidation", src: img37 },
      { emotion: "Manipulation", src: img38 },
      { emotion: "Pride Corrupted", src: img39 },
      { emotion: "Superiority", src: img40 }
    ],
    "Reflection and Redemption": [
      { emotion: "Acceptance of Flaws", src: img41 },
      { emotion: "Catharsis", src: img42 },
      { emotion: "Darkness Within", src: img43 },
      { emotion: "Disillusionment", src: img44 },
      { emotion: "Forgiving Self", src: img45 },
      { emotion: "Redemption", src: img46 },
      { emotion: "Regretful Pride", src: img47 },
      { emotion: "Sorrowed Wisdom", src: img48 }
    ]
  };

  // ===============================
  // 🎭 Full FACS Analysis (48)
  // ===============================
  const facsData = {
    // Deception Mask
    Cunning: { aus: ["AU12", "AU14"], description: "Subtle smirk and narrowed eyes suggesting strategic intent." },
    Cynicism: { aus: ["AU14", "AU17"], description: "Asymmetric smile and raised brow reflecting sceptical disdain." },
    Duplicity: { aus: ["AU4", "AU12"], description: "Controlled smile concealing ulterior motives." },
    Facade: { aus: ["AU6", "AU12"], description: "Gentle smile masking internal stress." },
    Hypocrisy: { aus: ["AU14", "AU23"], description: "Tightened lips and sneer showing inner contradiction." },
    Irony: { aus: ["AU12", "AU14"], description: "Half smile of detached amusement." },
    Mockery: { aus: ["AU12", "AU14", "AU23"], description: "Playful smirk revealing derision." },
    Sarcasm: { aus: ["AU12", "AU14", "AU53"], description: "Smile without warmth exposing irony." },

    // Hidden States
    Apathy: { aus: ["AU43"], description: "Drooping eyelids and flat mouth reflecting disinterest." },
    Calculation: { aus: ["AU5", "AU23"], description: "Raised eyelids and pressed lips showing analytical restraint." },
    Coldness: { aus: ["AU4", "AU24"], description: "Tensed brow and controlled mouth showing emotional detachment." },
    Containment: { aus: ["AU23", "AU24"], description: "Tight lips and lowered gaze suppressing emotion." },
    Detachment: { aus: ["AU1", "AU4", "AU24"], description: "Softened expression withdrawing from the environment." },
    Indifference: { aus: ["AU10", "AU43"], description: "Barely engaged eyes and neutral mouth." },
    Numbness: { aus: ["AU41", "AU43"], description: "Relaxed facial tone and lack of expressiveness." },
    Restraint: { aus: ["AU23", "AU24"], description: "Suppressed movement maintaining self-control." },

    // Inner Conflict
    Guilt: { aus: ["AU1", "AU4", "AU15"], description: "Downcast eyes and inner brow raise expressing remorse." },
    Hopelessness: { aus: ["AU1", "AU4", "AU17"], description: "Slackened muscles and downward gaze showing defeat." },
    Insecurity: { aus: ["AU1", "AU4", "AU20"], description: "Uneasy mouth stretch and raised brows revealing self-doubt." },
    Regret: { aus: ["AU1", "AU4", "AU15"], description: "Subtle frown and soft eyes showing reflection on loss." },
    Remorse: { aus: ["AU1", "AU4", "AU17"], description: "Lowered eyelids and soft tension indicating sorrowful awareness." },
    Resentment: { aus: ["AU4", "AU7", "AU23"], description: "Furrowed brows and tightened lips hiding suppressed anger." },
    "Self Doubt": { aus: ["AU1", "AU4", "AU54"], description: "Lowered head and uncertain eyes reflecting hesitation." },
    Shame: { aus: ["AU1", "AU4", "AU54"], description: "Head tilt downward and averted gaze indicating discomfort." },

    // Pain and Loss
    Abandonment: { aus: ["AU1", "AU4", "AU15"], description: "Drooping mouth corners and teary gaze showing loss." },
    Betrayal: { aus: ["AU1", "AU2", "AU4", "AU17"], description: "Raised brows with tight lips revealing emotional shock." },
    Bitterness: { aus: ["AU14", "AU24"], description: "One-sided lip raise and compressed mouth conveying resentment." },
    Despair: { aus: ["AU1", "AU4", "AU15"], description: "Soft frown and gaze downward reflecting deep sadness." },
    "Fear Resigned": { aus: ["AU1", "AU2", "AU5", "AU20"], description: "Wide eyes with lowered chin showing quiet acceptance." },
    Loneliness: { aus: ["AU1", "AU15"], description: "Slight frown and unfocused eyes depicting isolation." },
    Melancholy: { aus: ["AU1", "AU4", "AU54"], description: "Gentle droop in posture and eyes reflecting inner weight." },
    Sorrow: { aus: ["AU1", "AU4", "AU15"], description: "Tearful gaze and lowered corners expressing grief." },

    // Power and Control
    Arrogance: { aus: ["AU12", "AU53"], description: "Slight smile and lifted chin displaying superiority." },
    Contempt: { aus: ["AU14"], description: "Half smile with corner lift expressing moral distance." },
    Control: { aus: ["AU23", "AU24"], description: "Tight lips and steady gaze maintaining dominance." },
    Dominance: { aus: ["AU4", "AU7"], description: "Lowered brows and firm eyes asserting authority." },
    Intimidation: { aus: ["AU4", "AU5", "AU23"], description: "Strong brow and compressed lips showing power assertion." },
    Manipulation: { aus: ["AU12", "AU14"], description: "Subtle smile masking underlying intent." },
    "Pride Corrupted": { aus: ["AU12", "AU53"], description: "Lifted chin and smile masking vanity." },
    Superiority: { aus: ["AU12", "AU14", "AU53"], description: "Composed smile paired with self-assured posture." },

    // Reflection and Redemption
    "Acceptance of Flaws": { aus: ["AU6", "AU12"], description: "Gentle genuine smile expressing inner peace." },
    Catharsis: { aus: ["AU1", "AU2", "AU12"], description: "Relieved upward gaze showing release." },
    "Darkness Within": { aus: ["AU4", "AU5", "AU20"], description: "Intense gaze reflecting confrontation with self." },
    Disillusionment: { aus: ["AU1", "AU4", "AU15"], description: "Weary expression showing collapse of expectation." },
    "Forgiving Self": { aus: ["AU6", "AU12"], description: "Soft smile with warmth showing acceptance." },
    Redemption: { aus: ["AU1", "AU2", "AU12"], description: "Open expression radiating renewal." },
    "Regretful Pride": { aus: ["AU4", "AU12", "AU53"], description: "Pride softened by awareness of fault." },
    "Sorrowed Wisdom": { aus: ["AU1", "AU4", "AU15"], description: "Compassionate gaze born from experience." },
  };


  const currentEmotions = categories[selectedCategory];
  const filtered = selectedEmotion === "All"
    ? currentEmotions
    : currentEmotions.filter((e) => e.emotion === selectedEmotion);

  if (!content)
    return <main className="pro-loading">Loading content…</main>;

  if (loading)
    return <main className="pro-loading">Checking access…</main>;

  if (!hasAccess)
    return <main className="pro-locked">Please unlock Dark Spectrum I via PayPal 🔓</main>;

  return (
    <main className="pro-page">
      {/* HEADER */}
      <section className="pro-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pro-hero-title"
        >
          {content.hero_title}<br />{content.hero_subtitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="pro-hero-paragraph-1"
        >
          {content.hero_paragraph1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="pro-hero-paragraph-2"
        >
          {content.hero_paragraph2}
        </motion.p>
      </section>

      {/* MENU */}
      <section className="pro-menu">
        <select value={selectedCategory} onChange={(e) => {
          setSelectedCategory(e.target.value);
          setSelectedEmotion("All");
        }}>
          {Object.keys(categories).map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <select value={selectedEmotion} onChange={(e) => setSelectedEmotion(e.target.value)}>
          <option value="All">All Emotions</option>
          {currentEmotions.map((e) => (
            <option key={e.emotion}>{e.emotion}</option>
          ))}
        </select>
      </section>

      {/* GALLERY */}
      <div className="pro-gallery">
        {filtered.map((img, i) => {
          const facs = facsData[img.emotion] || {};
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(255,255,255,0.08)"
              }}
              className="pro-card"
              onClick={() => setSelectedImage(img.src.src)}

            >
              <img src={img.src.src} alt={img.emotion} />
              <h3>{img.emotion}</h3>
              {facs.aus && <p>{facs.aus.join(", ")}</p>}
              {facs.description && <p>{facs.description}</p>}
            </motion.div>
          );
        })}
      </div>

      {/* MODAL */}
      <ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />

{/* 📘 INFO SECTION */}
{content && (
  <section className="pro-info">
    <h2 className="pro-info-title">{content.info_title}</h2>
    <p className="pro-info-paragraph">{content.info_paragraph}</p>
  </section>
)}

{/* 🧾 FOOTER */}
{content && content.footer_text && (
  <div className="pro-footer">{content.footer_text}</div>
)}

{/* 🟢 RETURN BUTTON */}
<div className="pro-return">
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
