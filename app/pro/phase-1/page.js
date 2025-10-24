"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";
import { baseButtonStyle } from "../../styles/buttonStyle";
import useProAccess from "../../hooks/useProAccess"; // access control hook

export default function ProCollectionPhase1() {
  // Access hook (must always run first)
  const access = useProAccess("phase-1", {
    title: "Dark Spectrum I",
    price: "4.99",
    redirectToCheckout: true,
  });

  // Always define states before any conditional render
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEmotion, setSelectedEmotion] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(false);

  const { hasAccess = false, daysLeft = 0, loading = true } = access || {};

  let content;

  if (loading) {
    content = (
      <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center">
        <p className="text-gray-400">Checking access…</p>
      </div>
    );
  } else if (!hasAccess) {
    content = (
      <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center">
        <p className="text-gray-400">
          Access expired. Please unlock via PayPal 🔓
        </p>
      </div>
    );
  } else {
    // Images
    const images = [
      "DarkSpectrum_DeceptionMasks_Cunning_SouthAsian_YoungAdult_Female.webp",
      "DarkSpectrum_DeceptionMasks_Cynicism_NativeAmerican_MatureAdult_Female.webp",
      "DarkSpectrum_DeceptionMasks_Duplicity_African_YoungAdult_Female.webp",
      "DarkSpectrum_DeceptionMasks_Facade_EastAsian_YoungAdult_Male.webp",
      "DarkSpectrum_DeceptionMasks_Hypocrisy_European_YoungAdult_Male.webp",
      "DarkSpectrum_DeceptionMasks_Irony_AustralianAboriginal_MatureAdult_Female.webp",
      "DarkSpectrum_DeceptionMasks_Mockery_NorthAmerican_MatureAdult_Female.webp",
      "DarkSpectrum_DeceptionMasks_Sarcasm_Arctic_MatureAdult_Female.webp",
      "DarkSpectrum_HiddenStates_Apathy_MiddleEastern_Adult_Female.webp",
      "DarkSpectrum_HiddenStates_Calculation_NativeAmerican_Adult_Female.webp",
      "DarkSpectrum_HiddenStates_Coldness_CentralAsian_Adult_Female.webp",
      "DarkSpectrum_HiddenStates_Containment_NorthAmerican_Adult_Female.webp",
      "DarkSpectrum_HiddenStates_Detachment_PacificIslander_Adult_Female.webp",
      "DarkSpectrum_HiddenStates_Indifference_LatinAmerican_Adult_Female.webp",
      "DarkSpectrum_HiddenStates_Numbness_AustralianAboriginal_Adult_Female.webp",
      "DarkSpectrum_HiddenStates_Restraint_Arctic_Adult_Female.webp",
      "DarkSpectrum_InnerConflict_Guilt_European_YoungAdult_Male.webp",
      "DarkSpectrum_InnerConflict_Hopelessness_MiddleEastern_YoungAdult_Male.webp",
      "DarkSpectrum_InnerConflict_Insecurity_PacificIslander_YoungAdult_Male.webp",
      "DarkSpectrum_InnerConflict_Regret_EastAsian_YoungAdult_Male.webp",
      "DarkSpectrum_InnerConflict_Remorse_LatinAmerican_YoungAdult_Female.webp",
      "DarkSpectrum_InnerConflict_Resentment_CentralAsian_YoungAdult_Female.webp",
      "DarkSpectrum_InnerConflict_SelfDoubt_SouthAsian_YoungAdult_Female.webp",
      "DarkSpectrum_InnerConflict_Shame_African_YoungAdult_Female.webp",
      "DarkSpectrum_PainLoss_Abandonment_MiddleEastern_MatureAdult_Female.webp",
      "DarkSpectrum_PainLoss_Betrayal_African_MatureAdult_Female.webp",
      "DarkSpectrum_PainLoss_Bitterness_SouthAsian_MatureAdult_Female.webp",
      "DarkSpectrum_PainLoss_Despair_European_MatureAdult_Female.webp",
      "DarkSpectrum_PainLoss_FearResigned_PacificIslander_MatureAdult_Female.webp",
      "DarkSpectrum_PainLoss_Loneliness_EastAsian_MatureAdult_Female.webp",
      "DarkSpectrum_PainLoss_Melancholy_CentralAsian_MatureAdult_Female.webp",
      "DarkSpectrum_PainLoss_Sorrow_LatinAmerican_MatureAdult_Female.webp",
      "DarkSpectrum_PowerControl_Arrogance_NativeAmerican_YoungAdult_Male.webp",
      "DarkSpectrum_PowerControl_Contempt_NorthAmerican_YoungAdult_Female.webp",
      "DarkSpectrum_PowerControl_Control_EastAsian_Adult_Female.webp",
      "DarkSpectrum_PowerControl_Dominance_AustralianAboriginal_YoungAdult_Female.webp",
      "DarkSpectrum_PowerControl_Intimidation_African_Adult_Female.webp",
      "DarkSpectrum_PowerControl_Manipulation_Arctic_YoungAdult_Male.webp",
      "DarkSpectrum_PowerControl_PrideCorrupted_SouthAsian_Adult_Female.webp",
      "DarkSpectrum_PowerControl_Superiority_European_Adult_Female.webp",
      "DarkSpectrum_ReflectionRedemption_AcceptanceOfFlaws_Arctic_YoungAdult_Male.webp",
      "DarkSpectrum_ReflectionRedemption_Catharsis_NorthAmerican_YoungAdult_Female.webp",
      "DarkSpectrum_ReflectionRedemption_DarknessWithin_LatinAmerican_YoungAdult_Female.webp",
      "DarkSpectrum_ReflectionRedemption_Disillusionment_PacificIslander_YoungAdult_Male.webp",
      "DarkSpectrum_ReflectionRedemption_ForgivingSelf_AustralianAboriginal_YoungAdult_Female.webp",
      "DarkSpectrum_ReflectionRedemption_Redemption_CentralAsian_YoungAdult_Female.webp",
      "DarkSpectrum_ReflectionRedemption_RegretfulPride_MiddleEastern_YoungAdult_Male.webp",
      "DarkSpectrum_ReflectionRedemption_SorrowedWisdom_NativeAmerican_YoungAdult_Male.webp",
    ];

    // Extract data
    const imageData = images.map((file) => {
      const match = file.match(/DarkSpectrum_(.+?)_(.+?)_/);
      return {
        category: match ? match[1] : "Unknown",
        emotion: match ? match[2] : "Unknown",
        src: `/private_images/pro/phase_1/${file}`,
      };
    });

    const categories = [...new Set(imageData.map((i) => i.category))];
    const emotionsByCategory = {};
    categories.forEach((cat) => {
      emotionsByCategory[cat] = [
        ...new Set(
          imageData.filter((i) => i.category === cat).map((i) => i.emotion)
        ),
      ];
    });

    const filtered = imageData.filter(
      (img) =>
        (selectedCategory === "All" || img.category === selectedCategory) &&
        (selectedEmotion === "All" || img.emotion === selectedEmotion)
    );

    // Main content
    content = (
      <main className="min-h-screen bg-neutral-900 text-white font-sans">
        {/* Access banner */}
        <div className="bg-emerald-800 text-white text-center py-2 text-sm">
          Access active — {daysLeft} {daysLeft === 1 ? "day" : "days"} remaining
        </div>

        {/* Header */}
        <section className="text-center mt-20 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            EmotionDeck PRO — Phase 1: Dark Spectrum I 🖤
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Explore the hidden side of human emotion — where deception,
            restraint, inner conflict, pain, power, and redemption intertwine.
            Each portrait reveals emotional depth beyond the visible surface.
          </motion.p>
        </section>

        {/* Filters */}
        <section className="flex flex-wrap justify-center gap-4 mt-16 text-neutral-900">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedEmotion("All");
            }}
            className="px-4 py-2 rounded-md bg-white text-sm"
          >
            <option value="All">All Categories</option>
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={selectedEmotion}
            onChange={(e) => setSelectedEmotion(e.target.value)}
            className="px-4 py-2 rounded-md bg-white text-sm"
          >
            <option value="All">All Emotions</option>
            {selectedCategory !== "All" &&
              emotionsByCategory[selectedCategory].map((emotion) => (
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
                  alt={`${img.emotion} — ${img.category}`}
                  className="gallery-image"
                  loading="lazy"
                  onError={(e) =>
                    (e.target.src = "/private_images/meta/placeholder_dark.webp")
                  }
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Modal */}
        <ImageModal
          imageSrc={selectedImage}
          onClose={() => setSelectedImage(null)}
        />

        <br />
        <br />

        {/* Return button */}
        <div className="text-center mt-16 mb-20">
          <button
            onClick={() => (window.location.href = "/pro")}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={baseButtonStyle(hovered)}
            className="inline-block hover:scale-105 transition-transform"
          >
            ← Back
          </button>
        </div>

        <br />
        <br />
      </main>
    );
  }

  return content;
}
