"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";
import { baseButtonStyle } from "../../styles/buttonStyle.js";
import useProAccess from "../../hooks/useProAccess";
import "../../styles/proCollection.css";

// ===============================
// 🖼️ Image Imports
// ===============================
import img1 from "../private_images/phase_2/DarkSpectrum2_Abandonment_MiddleEastern_Adult_Female.webp";
import img2 from "../private_images/phase_2/DarkSpectrum2_Aging_CentralAsian_MatureAdult_Male.webp";
import img3 from "../private_images/phase_2/DarkSpectrum2_Anxiety_CentralAsian_Adult_Male.webp";
import img4 from "../private_images/phase_2/DarkSpectrum2_Betrayal_LatinAmerican_Adult_Female.webp";
import img5 from "../private_images/phase_2/DarkSpectrum2_Bitterness_CentralAsian_Adult_Female.webp";
import img6 from "../private_images/phase_2/DarkSpectrum2_Claustrophobia_NorthAmerican_Adult_Female.webp";
import img7 from "../private_images/phase_2/DarkSpectrum2_Collapse_MiddleEastern_Adult_Male.webp";
import img8 from "../private_images/phase_2/DarkSpectrum2_Contempt_SouthAsian_Adult_Male.webp";
import img9 from "../private_images/phase_2/DarkSpectrum2_Cruelty_African_Adult_Male.webp";
import img10 from "../private_images/phase_2/DarkSpectrum2_DeathAcceptance_LatinAmerican_MatureAdult_Female.webp";
import img11 from "../private_images/phase_2/DarkSpectrum2_Decay_European_MatureAdult_Female.webp";
import img12 from "../private_images/phase_2/DarkSpectrum2_Deception_SouthAsian_Adult_Female.webp";
import img13 from "../private_images/phase_2/DarkSpectrum2_Despair_MiddleEastern_MatureAdult_Male.webp";
import img14 from "../private_images/phase_2/DarkSpectrum2_Destruction_MiddleEastern_YoungAdult_Female.webp";
import img15 from "../private_images/phase_2/DarkSpectrum2_Detachment_African_Adult_Female.webp";
import img16 from "../private_images/phase_2/DarkSpectrum2_Disconnection_EastAsian_YoungAdult_Male.webp";
import img17 from "../private_images/phase_2/DarkSpectrum2_Disintegration_NorthAmerican_Adult_Female.webp";
import img18 from "../private_images/phase_2/DarkSpectrum2_Dominance_CentralAsian_Adult_Male.webp";
import img19 from "../private_images/phase_2/DarkSpectrum2_Dread_European_Adult_Female.webp";
import img20 from "../private_images/phase_2/DarkSpectrum2_Emptiness_European_Adult_Female.webp";
import img21 from "../private_images/phase_2/DarkSpectrum2_Estrangement_African_MatureAdult_Female.webp";
import img22 from "../private_images/phase_2/DarkSpectrum2_Fatalism_EastAsian_MatureAdult_Male.webp";
import img23 from "../private_images/phase_2/DarkSpectrum2_Fury_African_Adult_Female.webp";
import img24 from "../private_images/phase_2/DarkSpectrum2_Grief_LatinAmerican_Adult_Female.webp";
import img25 from "../private_images/phase_2/DarkSpectrum2_Guilt_NorthAmerican_Adult_Male.webp";
import img26 from "../private_images/phase_2/DarkSpectrum2_Hatred_European_Adult_Male.webp";
import img27 from "../private_images/phase_2/DarkSpectrum2_Horror_LatinAmerican_Adult_Female.webp";
import img28 from "../private_images/phase_2/DarkSpectrum2_Isolation_European_Adult_Female.webp";
import img29 from "../private_images/phase_2/DarkSpectrum2_Loneliness_LatinAmerican_Adult_Male.webp";
import img30 from "../private_images/phase_2/DarkSpectrum2_Loss_European_Adult_Male.webp";
import img31 from "../private_images/phase_2/DarkSpectrum2_MoralPain_MiddleEastern_Adult_Female.webp";
import img32 from "../private_images/phase_2/DarkSpectrum2_Mourning_African_MatureAdult_Male.webp";
import img33 from "../private_images/phase_2/DarkSpectrum2_Narcissism_European_YoungAdult_Male.webp";
import img34 from "../private_images/phase_2/DarkSpectrum2_Neglect_NorthAmerican_Adult_Female.webp";
import img35 from "../private_images/phase_2/DarkSpectrum2_Nihilism_European_YoungAdult_Male.webp";
import img36 from "../private_images/phase_2/DarkSpectrum2_Numbness_CentralAsian_Adult_Female.webp";
import img37 from "../private_images/phase_2/DarkSpectrum2_Obsession_EastAsian_YoungAdult_Male.webp";
import img38 from "../private_images/phase_2/DarkSpectrum2_Panic_SouthAsian_YoungAdult_Male.webp";
import img39 from "../private_images/phase_2/DarkSpectrum2_Paranoia_African_Adult_Male.webp";
import img40 from "../private_images/phase_2/DarkSpectrum2_Powerlessness_African_Adult_Female.webp";
import img41 from "../private_images/phase_2/DarkSpectrum2_Regret_European_MatureAdult_Male.webp";
import img42 from "../private_images/phase_2/DarkSpectrum2_Rejection_EastAsian_Adult_Male.webp";
import img43 from "../private_images/phase_2/DarkSpectrum2_Remorse_EastAsian_Adult_Female.webp";
import img44 from "../private_images/phase_2/DarkSpectrum2_Repression_CentralAsian_Adult_Male.webp";
import img45 from "../private_images/phase_2/DarkSpectrum2_Resentment_NorthAmerican_Adult_Male.webp";
import img46 from "../private_images/phase_2/DarkSpectrum2_SelfDisgust_LatinAmerican_YoungAdult_Female.webp";
import img47 from "../private_images/phase_2/DarkSpectrum2_Shame_SouthAsian_YoungAdult_Female.webp";
import img48 from "../private_images/phase_2/DarkSpectrum2_Sorrow_EastAsian_Adult_Female.webp";

export default function ProCollectionPhase2() {
  const access = useProAccess("phase-2", {
    title: "Dark Spectrum II",
    price: "4.99",
    redirectToCheckout: true,
  });

  const [content, setContent] = useState(null);
  const [selectedEmotion, setSelectedEmotion] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false);
  const { hasAccess = false, loading = true } = access || {};

  useEffect(() => {
    async function loadHeader() {
      try {
        const res = await fetch("/content/pro/phase_2/index.json");
        const json = await res.json();
        setContent(json);
      } catch (err) {
        console.error("Error loading header.json:", err);
      }
    }
    loadHeader();
  }, []);

const facsData = {
  Abandonment: { aus: ["AU1", "AU15"], description: "Inner brow raise with downward lip corners showing loss and despair." },
  Aging: { aus: ["AU5", "AU24"], description: "Softened eyelids and gentle lip press expressing fatigue and acceptance of decline." },
  Anxiety: { aus: ["AU5", "AU7", "AU20"], description: "Widened eyes and parted lips reflecting fear and tension." },
  Betrayal: { aus: ["AU4", "AU14"], description: "Brow lowering with asymmetric sneer representing emotional rupture." },
  Bitterness: { aus: ["AU14", "AU17"], description: "Tightened lips and raised chin showing suppressed resentment." },
  Claustrophobia: { aus: ["AU1", "AU5", "AU25"], description: "Tense eyes and parted lips showing the urge to escape confinement." },
  Collapse: { aus: ["AU1", "AU15", "AU26"], description: "Sagging expression of emotional exhaustion and surrender." },
  Contempt: { aus: ["AU14"], description: "Asymmetric mouth corner lift signifying moral superiority." },
  Cruelty: { aus: ["AU9", "AU23"], description: "Nose wrinkle with compressed lips suggesting aggression and dominance." },
  DeathAcceptance: { aus: ["AU1", "AU17", "AU24"], description: "Softened gaze and lip press expressing solemn peace with mortality." },
  Decay: { aus: ["AU4", "AU7", "AU23"], description: "Brow contraction with lip tension suggesting inner disintegration." },
  Deception: { aus: ["AU12", "AU43"], description: "Forced smile with subtle eye tension revealing concealed truth." },
  Despair: { aus: ["AU1", "AU4", "AU15"], description: "Furrowed brow and drooping mouth displaying hopeless sadness." },
  Destruction: { aus: ["AU4", "AU5", "AU23"], description: "Tense brow and piercing eyes reflecting unleashed chaos." },
  Detachment: { aus: ["AU15", "AU17"], description: "Lowered mouth corners and distant gaze showing emotional disengagement." },
  Disconnection: { aus: ["AU1", "AU24"], description: "Raised inner brow and lip press revealing emotional numbness." },
  Disintegration: { aus: ["AU4", "AU17", "AU20"], description: "Tensed brows and parted lips mirroring internal breakdown." },
  Dominance: { aus: ["AU4", "AU23", "AU24"], description: "Lowered brows and firm lips showing control and superiority." },
  Dread: { aus: ["AU1", "AU2", "AU5", "AU20"], description: "Wide eyes and tense lips expressing impending fear." },
  Emptiness: { aus: ["AU7", "AU24"], description: "Relaxed facial tone with pressed lips suggesting void and detachment." },
  Estrangement: { aus: ["AU15", "AU17", "AU54"], description: "Downward gaze and drawn lips showing distance from belonging." },
  Fatalism: { aus: ["AU1", "AU15", "AU26"], description: "Subtle resignation marked by drooping features and calm surrender." },
  Fury: { aus: ["AU4", "AU5", "AU23"], description: "Intense brow contraction and narrowed eyes expressing rage." },
  Grief: { aus: ["AU1", "AU4", "AU15"], description: "Brow tension with drooping corners revealing profound sorrow." },
  Guilt: { aus: ["AU1", "AU24"], description: "Inner brow raise and lip press showing moral conflict and regret." },
  Hatred: { aus: ["AU4", "AU9"], description: "Lowered brows and wrinkled nose reflecting deep aversion." },
  Horror: { aus: ["AU1", "AU2", "AU5", "AU26"], description: "Wide eyes and dropped jaw revealing shock and fear." },
  Isolation: { aus: ["AU15", "AU17"], description: "Lowered lip corners and head tilt signalling withdrawal." },
  Loneliness: { aus: ["AU1", "AU15", "AU17"], description: "Gentle downward lips and softened eyes expressing longing connection." },
  Loss: { aus: ["AU1", "AU4", "AU15"], description: "Combination of sadness and resignation in facial stillness." },
  MoralPain: { aus: ["AU1", "AU4", "AU24"], description: "Tensed brow with lip press embodying ethical suffering." },
  Mourning: { aus: ["AU1", "AU4", "AU7", "AU17"], description: "Deep sorrow reflected through tearful tension in brows." },
  Narcissism: { aus: ["AU12", "AU43"], description: "Controlled smile with frozen eyes suggesting superiority and vanity." },
  Neglect: { aus: ["AU15", "AU17", "AU54"], description: "Slack facial muscles expressing quiet abandonment and fatigue." },
  Nihilism: { aus: ["AU7", "AU24"], description: "Emotionally blank expression showing existential detachment." },
  Numbness: { aus: ["AU7", "AU24", "AU43"], description: "Frozen features and absent gaze representing total disconnection." },
  Obsession: { aus: ["AU5", "AU7", "AU23"], description: "Intense eye focus and tightened lips showing fixation and control." },
  Panic: { aus: ["AU1", "AU5", "AU20", "AU26"], description: "Rapid breathing posture with fear-stricken expression." },
  Paranoia: { aus: ["AU4", "AU5", "AU7"], description: "Narrowed eyes and tense brow suggesting hypervigilance." },
  PowerLessness: { aus: ["AU1", "AU15", "AU17"], description: "Sagging features expressing defeat and helplessness." },
  Regret: { aus: ["AU1", "AU4", "AU24"], description: "Mixed sadness and restraint visible in micro-expressions of control." },
  Rejection: { aus: ["AU4", "AU14", "AU15"], description: "Brow tension with lip asymmetry reflecting personal dismissal." },
  Remorse: { aus: ["AU1", "AU15", "AU17"], description: "Soft sadness with head tilt symbolising reflective sorrow." },
  Repression: { aus: ["AU24", "AU43"], description: "Lip press with neutral eyes showing emotional containment." },
  Resentment: { aus: ["AU4", "AU14", "AU17"], description: "Tight lips and tense brow revealing suppressed anger." },
  SelfDisgust: { aus: ["AU9", "AU14"], description: "Wrinkled nose with sneer showing contempt directed inward." },
  Shame: { aus: ["AU15", "AU54"], description: "Downcast eyes and head lowering representing self-conscious pain." },
  Sorrow: { aus: ["AU1", "AU15", "AU17"], description: "Gentle tearful contraction expressing reflective sadness." },
};


  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39,
    img40, img41, img42, img43, img44, img45, img46, img47, img48
  ];

  const allImages = images.map((src, i) => {
    const emotion = Object.keys(facsData)[i % Object.keys(facsData).length];
    return { emotion, src, ...facsData[emotion] };
  });

  const filtered =
    selectedEmotion === "All"
      ? allImages
      : allImages.filter((img) => img.emotion === selectedEmotion);

  if (loading) return <main className="pro-loading">Checking access…</main>;
  if (!hasAccess)
    return <main className="pro-locked">Please unlock Dark Spectrum II via PayPal 🔓</main>;
  if (!content) return <main className="pro-loading">Loading content…</main>;

  return (
    <main className="pro-page">
      <section className="pro-hero">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="pro-hero-title">
          {content.hero_title}<br />{content.hero_subtitle}
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="pro-hero-paragraph-1">
          {content.hero_paragraph1}
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="pro-hero-paragraph-2">
          {content.hero_paragraph2}
        </motion.p>
      </section>

      <section className="pro-menu">
        <select value={selectedEmotion} onChange={(e) => setSelectedEmotion(e.target.value)}>
          <option value="All">All Emotions</option>
          {Object.keys(facsData).map((emo) => (
            <option key={emo}>{emo}</option>
          ))}
        </select>
      </section>

      <div className="pro-gallery">
        {filtered.map((img, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.05 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(255,255,255,0.08)" }} className="pro-card" onClick={() => setSelectedImage(img.src.src)}>
            <img src={img.src.src} alt={img.emotion} />
            <h3>{img.emotion}</h3>
            <p>{img.aus.join(", ")}</p>
            <p>{img.description}</p>
          </motion.div>
        ))}
      </div>

      <ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />

      <section className="pro-info">
        <h2 className="pro-info-title">{content.info_title}</h2>
        <p className="pro-info-paragraph">{content.info_paragraph}</p>
      </section>

      {content.footer_text && <div className="pro-footer">{content.footer_text}</div>}

      <div className="pro-return">
        <button
          onClick={() => {
            const parentPath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) || "/";
            window.location.href = parentPath;
          }}
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={baseButtonStyle(hovered)}>
          Back
        </button>
      </div>
    </main>
  );
}
