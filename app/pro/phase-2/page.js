"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";
import { baseButtonStyle } from "../../styles/buttonStyle";
import useProAccess from "../../hooks/useProAccess"; // access control hook

export default function ProCollectionPhase2() {
  // ✅ all hooks first (React rule)
  const access = useProAccess("phase-2", {
    title: "Dark Spectrum II",
    price: "4.99",
    redirectToCheckout: true,
  });
  const { hasAccess = false, daysLeft = 0 } = access || {};

  const [selectedEmotion, setSelectedEmotion] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false);

  // 🎭 emotions list
  const emotions = [
    "Abandonment", "Aging", "Anxiety", "Betrayal", "Bitterness", "Claustrophobia", "Collapse", "Contempt",
    "Cruelty", "DeathAcceptance", "Decay", "Deception", "Despair", "Destruction", "Detachment", "Disconnection",
    "Disintegration", "Dominance", "Dread", "Emptiness", "Estrangement", "Fatalism", "Fury", "Grief", "Guilt",
    "Hatred", "Horror", "Isolation", "Loneliness", "Loss", "MoralPain", "Mourning", "Narcissism", "Neglect",
    "Nihilism", "Numbness", "Obsession", "Panic", "Paranoia", "Powerlessness", "Regret", "Rejection", "Remorse",
    "Repression", "Resentment", "SelfDisgust", "Shame", "Sorrow",
  ];

  // 🧩 dataset
  const realImages = [
    { emotion: "Abandonment", src: "/private_images/pro/phase_2/DarkSpectrum2_Abandonment_MiddleEastern_Adult_Female.webp" },
    { emotion: "Aging", src: "/private_images/pro/phase_2/DarkSpectrum2_Aging_CentralAsian_MatureAdult_Male.webp" },
    { emotion: "Anxiety", src: "/private_images/pro/phase_2/DarkSpectrum2_Anxiety_CentralAsian_Adult_Male.webp" },
    { emotion: "Betrayal", src: "/private_images/pro/phase_2/DarkSpectrum2_Betrayal_LatinAmerican_Adult_Female.webp" },
    { emotion: "Bitterness", src: "/private_images/pro/phase_2/DarkSpectrum2_Bitterness_CentralAsian_Adult_Female.webp" },
    { emotion: "Claustrophobia", src: "/private_images/pro/phase_2/DarkSpectrum2_Claustrophobia_NorthAmerican_Adult_Female.webp" },
    { emotion: "Collapse", src: "/private_images/pro/phase_2/DarkSpectrum2_Collapse_MiddleEastern_Adult_Male.webp" },
    { emotion: "Contempt", src: "/private_images/pro/phase_2/DarkSpectrum2_Contempt_SouthAsian_Adult_Male.webp" },
    { emotion: "Cruelty", src: "/private_images/pro/phase_2/DarkSpectrum2_Cruelty_African_Adult_Male.webp" },
    { emotion: "DeathAcceptance", src: "/private_images/pro/phase_2/DarkSpectrum2_DeathAcceptance_LatinAmerican_MatureAdult_Female.webp" },
    { emotion: "Decay", src: "/private_images/pro/phase_2/DarkSpectrum2_Decay_European_MatureAdult_Female.webp" },
    { emotion: "Deception", src: "/private_images/pro/phase_2/DarkSpectrum2_Deception_SouthAsian_Adult_Female.webp" },
    { emotion: "Despair", src: "/private_images/pro/phase_2/DarkSpectrum2_Despair_MiddleEastern_MatureAdult_Male.webp" },
    { emotion: "Destruction", src: "/private_images/pro/phase_2/DarkSpectrum2_Destruction_MiddleEastern_YoungAdult_Female.webp" },
    { emotion: "Detachment", src: "/private_images/pro/phase_2/DarkSpectrum2_Detachment_African_Adult_Female.webp" },
    { emotion: "Disconnection", src: "/private_images/pro/phase_2/DarkSpectrum2_Disconnection_EastAsian_YoungAdult_Male.webp" },
    { emotion: "Disintegration", src: "/private_images/pro/phase_2/DarkSpectrum2_Disintegration_NorthAmerican_Adult_Female.webp" },
    { emotion: "Dominance", src: "/private_images/pro/phase_2/DarkSpectrum2_Dominance_CentralAsian_Adult_Male.webp" },
    { emotion: "Dread", src: "/private_images/pro/phase_2/DarkSpectrum2_Dread_European_Adult_Female.webp" },
    { emotion: "Emptiness", src: "/private_images/pro/phase_2/DarkSpectrum2_Emptiness_European_Adult_Female.webp" },
    { emotion: "Estrangement", src: "/private_images/pro/phase_2/DarkSpectrum2_Estrangement_African_MatureAdult_Female.webp" },
    { emotion: "Fatalism", src: "/private_images/pro/phase_2/DarkSpectrum2_Fatalism_EastAsian_MatureAdult_Male.webp" },
    { emotion: "Fury", src: "/private_images/pro/phase_2/DarkSpectrum2_Fury_African_Adult_Female.webp" },
    { emotion: "Grief", src: "/private_images/pro/phase_2/DarkSpectrum2_Grief_LatinAmerican_Adult_Female.webp" },
    { emotion: "Guilt", src: "/private_images/pro/phase_2/DarkSpectrum2_Guilt_NorthAmerican_Adult_Male.webp" },
    { emotion: "Hatred", src: "/private_images/pro/phase_2/DarkSpectrum2_Hatred_European_Adult_Male.webp" },
    { emotion: "Horror", src: "/private_images/pro/phase_2/DarkSpectrum2_Horror_LatinAmerican_Adult_Female.webp" },
    { emotion: "Isolation", src: "/private_images/pro/phase_2/DarkSpectrum2_Isolation_European_Adult_Female.webp" },
    { emotion: "Loneliness", src: "/private_images/pro/phase_2/DarkSpectrum2_Loneliness_LatinAmerican_Adult_Male.webp" },
    { emotion: "Loss", src: "/private_images/pro/phase_2/DarkSpectrum2_Loss_European_Adult_Male.webp" },
    { emotion: "MoralPain", src: "/private_images/pro/phase_2/DarkSpectrum2_MoralPain_MiddleEastern_Adult_Female.webp" },
    { emotion: "Mourning", src: "/private_images/pro/phase_2/DarkSpectrum2_Mourning_African_MatureAdult_Male.webp" },
    { emotion: "Narcissism", src: "/private_images/pro/phase_2/DarkSpectrum2_Narcissism_European_YoungAdult_Male.webp" },
    { emotion: "Neglect", src: "/private_images/pro/phase_2/DarkSpectrum2_Neglect_NorthAmerican_Adult_Female.webp" },
    { emotion: "Nihilism", src: "/private_images/pro/phase_2/DarkSpectrum2_Nihilism_European_YoungAdult_Male.webp" },
    { emotion: "Numbness", src: "/private_images/pro/phase_2/DarkSpectrum2_Numbness_CentralAsian_Adult_Female.webp" },
    { emotion: "Obsession", src: "/private_images/pro/phase_2/DarkSpectrum2_Obsession_EastAsian_YoungAdult_Male.webp" },
    { emotion: "Panic", src: "/private_images/pro/phase_2/DarkSpectrum2_Panic_SouthAsian_YoungAdult_Male.webp" },
    { emotion: "Paranoia", src: "/private_images/pro/phase_2/DarkSpectrum2_Paranoia_African_Adult_Male.webp" },
    { emotion: "Powerlessness", src: "/private_images/pro/phase_2/DarkSpectrum2_Powerlessness_African_Adult_Female.webp" },
    { emotion: "Regret", src: "/private_images/pro/phase_2/DarkSpectrum2_Regret_European_MatureAdult_Male.webp" },
    { emotion: "Rejection", src: "/private_images/pro/phase_2/DarkSpectrum2_Rejection_EastAsian_Adult_Male.webp" },
    { emotion: "Remorse", src: "/private_images/pro/phase_2/DarkSpectrum2_Remorse_EastAsian_Adult_Female.webp" },
    { emotion: "Repression", src: "/private_images/pro/phase_2/DarkSpectrum2_Repression_CentralAsian_Adult_Male.webp" },
    { emotion: "Resentment", src: "/private_images/pro/phase_2/DarkSpectrum2_Resentment_NorthAmerican_Adult_Male.webp" },
    { emotion: "SelfDisgust", src: "/private_images/pro/phase_2/DarkSpectrum2_SelfDisgust_LatinAmerican_YoungAdult_Female.webp" },
    { emotion: "Shame", src: "/private_images/pro/phase_2/DarkSpectrum2_Shame_SouthAsian_YoungAdult_Female.webp" },
    { emotion: "Sorrow", src: "/private_images/pro/phase_2/DarkSpectrum2_Sorrow_EastAsian_Adult_Female.webp" },
  ];

  // alternate order
  const females = realImages.filter((img) => img.src.includes("_Female"));
  const males = realImages.filter((img) => img.src.includes("_Male"));
  const alternated = [];
  for (let i = 0; i < Math.max(females.length, males.length); i++) {
    if (females[i]) alternated.push(females[i]);
    if (males[i]) alternated.push(males[i]);
  }

  const filtered =
    selectedEmotion === "All"
      ? alternated
      : alternated.filter((img) => img.emotion === selectedEmotion);

  // show loading / access message (after hooks)
  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center">
        <p className="text-gray-400">Checking access…</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans relative overflow-visible">
      {/* Access banner */}
      <div className="bg-emerald-800 text-white text-center py-2 text-sm">
        Access active - {daysLeft} {daysLeft === 1 ? "day" : "days"} remaining
      </div>

      {/* Header */}
      <section className="text-center mt-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          EmotionDeck PRO - Phase 2: Dark Spectrum II 🕯️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Dark Spectrum II explores the fragile edge between despair and awakening -
          portraits revealing anxiety, decay, vengeance, and redemption within silence.
          Each emotion stands alone in this psychological descent and rebirth.
        </motion.p>
      </section>

      {/* Filter */}
      <section className="flex flex-wrap justify-center gap-4 mt-16 text-neutral-900">
        <select
          value={selectedEmotion}
          onChange={(e) => setSelectedEmotion(e.target.value)}
          className="px-4 py-2 rounded-md bg-white text-sm"
        >
          <option value="All">All Emotions</option>
          {emotions.map((emotion) => (
            <option key={emotion}>{emotion}</option>
          ))}
        </select>
      </section>

      <br />

      {/* Gallery */}
      <section id="emotions" className="w-full mt-16">
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
                alt={img.emotion}
                className="gallery-image"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />



      {/* Return Button */}
      <div className="text-center mt-16 mb-20">
        <button
          onClick={() => {
            window.location.href = "/pro";
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={baseButtonStyle(hovered)}
          className="inline-block hover:scale-105 transition-transform"
        >
          ← Back
        </button>
      </div>


    </main>
  );
}
