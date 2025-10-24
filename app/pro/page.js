"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { baseButtonStyle } from "../styles/buttonStyle";

export default function ProCollectionPage() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredBack, setHoveredBack] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);
  const router = useRouter();

  const handleBackClick = () => {
    setLoadingBack(true);
    setTimeout(() => router.push("/"), 800);
  };

  const renderButton = (href, label, id) => (
    <Link
      href={href}
      style={baseButtonStyle(hoveredButton === id)} // ✅ shared style
      onMouseEnter={() => setHoveredButton(id)}
      onMouseLeave={() => setHoveredButton(null)}
      className="inline-block hover:scale-105 transition-transform"
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
          EmotionDeck — PRO Collection 🔓
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Explore the deeper side of human emotion — where depth, contrast, and subtlety reveal the unseen. This limited EmotionDeck PRO collection unveils the intricate layers of emotional complexity beyond surface expression.
        </motion.p>
      </section>

      {/* ========================== */}
      {/* 📊 DARK SPECTRUM PART I */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <center>
            <h2 className="text-2xl font-semibold text-center mx-auto w-fit">
              Dark Spectrum — Part I
            </h2>
          </center>
          <p className="text-center text-gray-400 italic mb-6">
            The Shadow Side of Human Emotion
          </p>

          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white">
                  <p className="font-semibold mb-1">Dark Spectrum — Part I Collection</p>
                  <p className="text-gray-400 mb-2">
                    48 ultra-realistic portraits exploring the hidden dimensions of emotion:
                    Deception Masks, Hidden States, Inner Conflict, Pain & Loss, Power & Control,
                    and Reflection & Redemption.
                  </p>
                  <p className="text-gray-400 mt-4 mb-4 leading-relaxed text-justify max-w-xl">
                    This collection delves into the concealed emotions that define human depth.
                    It reflects moments of tension, irony, grief, and redemption — the silent
                    language of inner transformation. Each portrait reveals psychological nuance
                    through subtle microexpressions and timeless monochrome composition.
                    Dark Spectrum — Part I bridges art and psychology, showing that even within
                    darkness lies clarity, strength, and meaning. Designed for professional
                    research, education, and visual training, it exposes the delicate boundary
                    between control and vulnerability — emotion as truth beneath disguise.
                  </p>
                  <div className="flex justify-end">
                    {renderButton("/pro/phase-1", "Early Access 🔓", "p1")}
                  </div>
                </td>
                <td className="p-3 w-[200px] text-center align-top">
                  <div className="w-[200px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/pro/phase_1/DarkSpectrum_DeceptionMasks_Cunning_SouthAsian_YoungAdult_Female.webp"
                      alt="Cunning — SouthAsian YoungAdult Female"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">Cunning — SouthAsian YoungAdult Female</p>
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Total Portraits</td>
                <td className="p-3 text-white" colSpan={2}>
                  48 black-and-white emotional portraits
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Subcategories</td>
                <td className="p-3 text-white" colSpan={2}>
                  <br /><strong>Deception Masks</strong> (Cunning, Cynicism, Duplicity, Facade, Hypocrisy, Irony, Mockery, Sarcasm)<br /><br />
                  <strong>Hidden States</strong> (Pathy, Calculation, Coldness, Containment, Detachment, Indifference, Numbness, Restraint)<br /><br />
                  <strong>Inner Conflict</strong> (Guilt, Hopelessness, Insecurity, Regret, Remorse, Resentment, Self-Doubt, Shame)<br /><br />
                  <strong>Pain & Loss</strong> (Abandonment, Betrayal, Bitterness, Despair, Fear Resigned, Loneliness, Melancholy, Sorrow)<br /><br />
                  <strong>Power & Control</strong> (Arrogance, Contempt, Control, Dominance, Intimidation, Manipulation, Pride Corrupted, Superiority)<br /><br />
                  <strong>Reflection & Redemption</strong> (Acceptance of Flaws, Catharsis, Darkness Within, Disillusionment, Forgiving Self, Redemption, Regretful Pride, Sorrowed Wisdom)<br /><br />
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Cultural Diversity</td>
                <td className="p-3 text-white" colSpan={2}>
                  European, African, East Asian, South Asian, Middle Eastern, Latin American,
                  Pacific Islander, Central Asian, Native American, Australian Aboriginal, Arctic, North American.
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Demographics</td>
                <td className="p-3 text-white" colSpan={2}>
                  3 age groups × 2 genders (balanced representation)
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Resolution</td>
                <td className="p-3 text-white" colSpan={2}>
                  1024 × 1536 — high-definition monochrome format
                </td>
              </tr>

              <tr>
                <td className="p-3 text-gray-400">Lighting & Style</td>
                <td className="p-3 text-white" colSpan={2}>
                  Neutral grey background, soft lighting, identical framing and shirt style
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* 🟢 Return to Home Page button */}
      <br /><br />
      <div className="text-center mt-16">
        <button
          onClick={handleBackClick}
          disabled={loadingBack}
          onMouseEnter={() => setHoveredBack(true)}
          onMouseLeave={() => setHoveredBack(false)}
          style={baseButtonStyle(hoveredBack)} // ✅ shared style for Back
        >
          {loadingBack ? "Loading..." : "← Back"}
        </button>
      </div>

      <br /><br />
    </main>
  );
}
