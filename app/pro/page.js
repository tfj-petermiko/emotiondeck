"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ProCollectionPage() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const baseButtonStyle = {
    backgroundColor: "#10B981",
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "9999px",
    fontWeight: "600",
    fontSize: "0.875rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    transition: "background-color 0.2s ease, transform 0.2s ease",
  };

  const renderButton = (href, label, id) => (
    <Link
      href={href}
      style={{
        ...baseButtonStyle,
        backgroundColor: hoveredButton === id ? "#34D399" : "#10B981",
      }}
      onMouseEnter={() => setHoveredButton(id)}
      onMouseLeave={() => setHoveredButton(null)}
      className="inline-block hover:scale-105 transition"
    >
      {label}
    </Link>
  );

  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans relative">
      {/* 🧠 HEADER */}
      <section className="text-center mt-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          EmotionDeck PRO Collection — Early Access 🔓
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Explore high-resolution portraits of human emotions for professionals,
          educators, and researchers.
        </motion.p>
      </section>

      {/* ========================== */}
      {/* 📊 PHASE 1 — EUROPEAN */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 w-full max-w-6xl mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-center">
            Phase 1 — Free Collection (European)
          </h2>
          <p className="text-center text-gray-400 italic mb-6">
            Clarity & Universal Understanding
          </p>

          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white">
                  <p className="font-semibold mb-1">Phase 1 — Free Collection</p>
                  <p className="text-gray-400 mb-2">
                    Explore 144 foundational emotional expressions — open and free for learning, research, and education.
                  </p>
                  <p className="text-gray-400 mt-4 mb-4 leading-relaxed text-justify max-w-xl">
                    This phase focuses on European faces to establish a clear and neutral reference point. It introduces essential emotions through consistent lighting and composition, forming the foundation of emotional-perception study.
                  </p>

                  <div className="flex justify-end">
                    {renderButton("/free", "Open Phase 1 Collection", "p1")}
                  </div>
                </td>
                <td className="p-3 w-[200px] text-center align-top">
                  <div className="w-[200px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/free/phase_1/Joy_European_Adult_Male.png"
                      alt="Joy — European Adult Male"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">Joy — European Adult Male</p>
                </td>
              </tr>

              {/* TECHNICAL DETAILS */}
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Total Expressions</td>
                <td className="p-3 text-white" colSpan={2}>
                  144 black-and-white portraits
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Emotions Included</td>
                <td className="p-3 text-white" colSpan={2}>
                  Joy, Calmness, Compassion, Anger, Sadness, Surprise, Disgust, Fear, Trust, Anticipation, Pride, Love, Relief,
                  Contempt, Boredom, Confusion, Interest, Determination, Shame, Hope, Guilt, Serenity, Anxiety, Curiosity.
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Demographics</td>
                <td className="p-3 text-white" colSpan={2}>
                  3 ethnic groups × 2 genders × 1 age group (Adult)
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Resolution</td>
                <td className="p-3 text-white" colSpan={2}>
                  1024 × 1536 high-resolution portraits
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-400">Lighting & Style</td>
                <td className="p-3 text-white" colSpan={2}>
                  Neutral grey background, soft lighting, identical shirt style
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      <br />

      {/* ========================== */}
      {/* 📊 PHASE 2 — AFRICAN */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="mt-8 w-full max-w-6xl mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-center">
            Phase 2 — Advanced Emotional Expressions (African)
          </h2>
          <p className="text-center text-gray-400 italic mb-6">
            Warmth & Authentic Connection
          </p>

          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white">
                  <p className="font-semibold mb-1">Phase 2 — Advanced Emotional Expressions</p>
                  <p className="text-gray-400 mb-2">
                    Expands the dataset with African portraits — rich in warmth, depth and authentic emotional presence.
                  </p>
                  <p className="text-gray-400 mt-4 mb-4 leading-relaxed text-justify max-w-xl">
                    Each portrait explores subtle states like empathy, gratitude and awe, revealing how cultural depth and psychological precision intersect in human expression.
                  </p>

                  <div className="flex justify-end">
                    {renderButton("/pro/phase-2", "Open Phase 2 Collection", "p2")}
                  </div>
                </td>
                <td className="p-3 w-[200px] text-center align-top">
                  <div className="w-[200px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/pro/phase_2/Empathy_African_Adult_Female.png"
                      alt="Empathy — African Adult Female"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">Empathy — African Adult Female</p>
                </td>
              </tr>

              {/* TECHNICAL DETAILS */}
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Total Expressions</td>
                <td className="p-3 text-white" colSpan={2}>
                  288 black-and-white portraits
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Emotions Included</td>
                <td className="p-3 text-white" colSpan={2}>
                  Anxiety, Nostalgia, Confidence, Tension, Empathy, Desire, Awe, Fatigue, Positive Surprise, Negative Surprise,
                  Contemplation, Euphoria, Irritation, Tranquillity, Guilt, Jealousy, Gratitude, Excitement, Affection, Disbelief,
                  Inspiration, Longing, Disappointment, Neutral.
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Demographics</td>
                <td className="p-3 text-white" colSpan={2}>
                  3 ethnic groups × 2 genders × 2 age groups (Adult, Senior)
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Resolution</td>
                <td className="p-3 text-white" colSpan={2}>
                  1024 × 1536 ultra-realistic portraits
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-400">Lighting & Style</td>
                <td className="p-3 text-white" colSpan={2}>
                  Consistent neutral background, balanced lighting, identical clothing
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      <br />

{/* ========================== */}
{/* 📊 PHASE 3 — EAST ASIAN */}
{/* ========================== */}
<motion.section
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 0.6 }}
  className="mt-8 w-full max-w-6xl mx-auto border border-gray-800 rounded-2xl overflow-hidden"
>
  <div className="bg-gray-900 p-6 md:p-10">
    <h2 className="text-2xl font-semibold text-center">
      Phase 3 — Young Adults (East Asian)
    </h2>
    <p className="text-center text-gray-400 italic mb-6">
      Mindfulness & Harmony
    </p>

    <table className="w-full text-sm md:text-base border-collapse">
      <tbody>
        <tr className="border-b border-gray-800 align-top">
          <td className="w-1/4" />
          <td className="w-2/4 p-3 text-white">
            <p className="font-semibold mb-1">Phase 3 — Young Adults</p>
            <p className="text-gray-400 mb-2">
              Focuses on East Asian young adults — precise, calm and emotionally balanced expressions in 144 portraits.
            </p>
            <p className="text-gray-400 mt-4 mb-4 leading-relaxed text-justify max-w-xl">
              This phase bridges youthful energy and mature emotional awareness, showing mindfulness, gentle empathy and inner clarity through subtle micro-expressions.
            </p>

            <div className="flex justify-end">
              {renderButton("/pro/phase-3", "Open Phase 3 Collection", "p3")}
            </div>
          </td>
          <td className="p-3 w-[200px] text-center align-top">
            <div className="w-[200px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
              <img
                src="/private_images/pro/phase_3/Love_YoungAdult_EastAsian_Male.png"
                alt="Love — East Asian Young Adult Male"
                className="object-cover w-full h-auto"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 text-xs mt-2">Love — East Asian Young Adult Male</p>
          </td>
        </tr>

        {/* TECHNICAL DETAILS */}
        <tr className="border-b border-gray-800">
          <td className="p-3 text-gray-400">Total Expressions</td>
          <td className="p-3 text-white" colSpan={2}>
            144 high-resolution portraits
          </td>
        </tr>

        <tr className="border-b border-gray-800">
          <td className="p-3 text-gray-400">Emotions Included</td>
          <td className="p-3 text-white" colSpan={2}>
            Joy, Anger, Fear, Sadness, Surprise, Disgust, Love, Pride,
            Confusion, Hope, Trust, Curiosity, Desire, Nostalgia, Anxiety,
            Excitement, Determination, Compassion, Tranquillity, Guilt,
            Contempt, Inspiration, Affection, Disbelief.
          </td>
        </tr>

        <tr className="border-b border-gray-800">
          <td className="p-3 text-gray-400">Demographics</td>
          <td className="p-3 text-white" colSpan={2}>
            3 ethnic groups × 2 genders × 1 age group (Young Adult)
          </td>
        </tr>

        <tr className="border-b border-gray-800">
          <td className="p-3 text-gray-400">Resolution</td>
          <td className="p-3 text-white" colSpan={2}>
            1024 × 1536 ultra-realistic portraits
          </td>
        </tr>

        <tr>
          <td className="p-3 text-gray-400">Lighting & Style</td>
          <td className="p-3 text-white" colSpan={2}>
            Neutral background, uniform shirt style, precision lighting, balanced tonal range
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</motion.section>


      {/* 🔙 BACK TO HOME */}
      <div className="text-center mt-16 mb-24">
        <Link
          href="/"
          className="inline-block bg-white text-neutral-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
