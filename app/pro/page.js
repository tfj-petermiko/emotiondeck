"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProCollectionPage() {
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
          Explore high-resolution portraits of human emotions for professionals, educators, and researchers.
        </motion.p>
      </section>

      {/* 📊 PHASE 1 TABLE */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 w-full max-w-6xl mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 text-left p-6 md:p-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">Phase 1 — Free Collection</h2>

          <table className="w-full border-collapse text-sm md:text-base">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="p-3 w-1/4" />
                <td className="p-3 text-white w-2/4">
                  <p className="font-semibold mb-1">Phase 1 — Free Collection</p>
                  <p className="text-gray-400 mb-2">
                    Explore 144 foundational emotional expressions — open and free for personal learning, research, and education.
                  </p>

                  <p className="text-gray-400 mt-4 leading-relaxed max-w-xl text-justify mb-4">
                    This introductory phase offers a balanced set of universal emotions captured through consistent lighting, background, and framing. It provides a clear foundation for studying how emotion is expressed and recognised across cultures, ages, and genders.
                  </p>

                  <p className="text-gray-400 mt-4 leading-relaxed max-w-xl text-justify mb-4">
                    Each portrait highlights clarity and universality, allowing viewers to focus on emotional subtleties rather than visual distractions. The collection combines artistic precision with psychological depth to support perceptual and emotional training.
                  </p>

                  <p className="text-gray-400 mt-4 leading-relaxed max-w-xl text-justify mb-4">
                    It is ideal for educators, researchers, and anyone beginning to explore human expression. It encourages mindful observation and strengthens emotional literacy — a first step toward deeper understanding of the human face.
                  </p>

                  {/* 💚 GREEN BUTTON */}
                  <div className="flex justify-end">
                    <Link
                      href="/free"
                      className="inline-block font-semibold text-sm rounded-full shadow-md transition hover:scale-105"
                      style={{
                        backgroundColor: "#10B981",
                        color: "#ffffff",
                        border: "none",
                        padding: "10px 20px",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#34D399")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#10B981")
                      }
                    >
                      Open Phase 1 Collection
                    </Link>
                  </div>
                </td>
                <td className="p-3 w-[200px] text-center align-top">
                  <div className="w-[200px] mx-auto rounded-lg overflow-hidden shadow-md border border-gray-700">
                    <img
                      src="/phase-1/Joy_European_Adult_Male.png"
                      alt="Joy - European Adult Male, Free Collection preview"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">Joy — European Adult Male</p>
                </td>
              </tr>

              {/* TECHNICAL DETAILS PHASE 1 */}
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Total Expressions</td>
                <td className="p-3 text-white" colSpan={2}>
                  144 black-and-white portraits
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Emotions Included</td>
                <td className="p-3 text-white" colSpan={2}>
                  Joy, Calmness, Compassion, Anger, Sadness, Surprise, Disgust, Fear, Trust, Anticipation,
                  Pride, Love, Relief, Contempt, Boredom, Confusion, Interest, Determination, Shame, Hope,
                  Guilt, Serenity, Anxiety, Curiosity.
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Demographics</td>
                <td className="p-3 text-white" colSpan={2}>
                  3 ethnic groups (European, African, East Asian) × 2 genders (Male, Female) × 1 age group (Adult)
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Resolution</td>
                <td className="p-3 text-white" colSpan={2}>
                  1024 × 1536 high-resolution portraits
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Lighting & Style</td>
                <td className="p-3 text-white" colSpan={2}>
                  Consistent neutral grey background, balanced soft lighting, identical shirt style for all portraits
                </td>
              </tr>

              <tr>
                <td className="p-3 text-gray-400">Availability</td>
                <td className="p-3 text-white" colSpan={2}>
                  🔓 Free for personal learning, research, and education
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Spacer */}

<br/>

      {/* 📊 PHASE 2 TABLE */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 w-full max-w-6xl mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 text-left p-6 md:p-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">Phase 2 — Advanced Emotional Expressions</h2>

          <table className="w-full border-collapse text-sm md:text-base">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="p-3 w-1/4" />
                <td className="p-3 text-white w-2/4">
                  <p className="font-semibold mb-1">Phase 2 — Advanced Emotional Expressions</p>
                  <p className="text-gray-400 mb-2">
                    Explore expanded and complex human emotions across diverse demographics.
                  </p>

                  <p className="text-gray-400 mt-4 leading-relaxed max-w-xl text-justify mb-4">
                    This advanced phase expands upon the foundation of the Free Collection by introducing more complex and subtle affective states that bridge emotion, thought, and body language. Each portrait captures nuanced psychological dimensions — moments of reflection, longing, tension, or empathy — interpreted through consistent visual aesthetics.
                  </p>

                  <p className="text-gray-400 mt-4 leading-relaxed max-w-xl text-justify mb-4">
                    The series highlights how cultural context, age, and gender influence micro-dynamics of facial expression, offering insights for human and machine understanding of emotional perception.
                  </p>

                  <div className="flex justify-end">
                    <Link
                      href="/pro/phase-2"
                      className="inline-block font-semibold text-sm rounded-full shadow-md transition hover:scale-105"
                      style={{
                        backgroundColor: "#10B981",
                        color: "#ffffff",
                        border: "none",
                        padding: "10px 20px",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#34D399")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#10B981")
                      }
                    >
                      Open Phase 2 Collection
                    </Link>
                  </div>
                </td>
                <td className="p-3 w-[200px] text-center align-top">
                  <div className="w-[200px] mx-auto rounded-lg overflow-hidden shadow-md border border-gray-700">
                    <img
                      src="/pro/phase-2/Nostalgia_European_Adult_Female.png"
                      alt="Nostalgia - European Adult Female, PRO Collection preview"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">Nostalgia — European Adult Female</p>
                </td>
              </tr>

              {/* TECHNICAL DETAILS PHASE 2 */}
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
                  Contemplation, Euphoria, Irritation, Tranquillity, Guilt, Jealousy, Gratitude, Excitement, Affection,
                  Disbelief, Inspiration, Longing, Disappointment, Neutral.
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Demographics</td>
                <td className="p-3 text-white" colSpan={2}>
                  3 ethnic groups (European, African, East Asian) × 2 genders × 2 age groups (Adult, Senior)
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Resolution</td>
                <td className="p-3 text-white" colSpan={2}>
                  1024 × 1536 ultra-realistic portraits
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Lighting & Style</td>
                <td className="p-3 text-white" colSpan={2}>
                  Consistent neutral background, balanced lighting, identical shirt style for all portraits
                </td>
              </tr>

              <tr>
                <td className="p-3 text-gray-400">Availability</td>
                <td className="p-3 text-white" colSpan={2}>
                  🔓 Free early access for research and educational use
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
