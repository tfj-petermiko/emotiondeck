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
  <button
    onClick={() => {
      // 🔁 tak jak w quizach - pełne przeładowanie
      window.location.href = href;
    }}
    onMouseEnter={() => setHoveredButton(id)}
    onMouseLeave={() => setHoveredButton(null)}
    style={baseButtonStyle(hoveredButton === id)}
    className="inline-block hover:scale-105 transition-transform"
  >
    {label}
  </button>
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
          EmotionDeck Collection - Free Access 🔓
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Explore High-Resolution Portraits of Human Emotions for Professionals,
          Educators, and Researchers. Each phase offers a Distinct Insight into Emotional Diversity, Cultural Universality, and Psychological Nuance.
        </motion.p>
      </section>

      {/* ========================== */}
      {/* 📊 PHASE 1 */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <center><h2 className="text-2xl font-semibold text-center mx-auto w-fit">
            Phase 1 - Basic Collection
          </h2></center>
          <p className="text-center text-gray-400 italic mb-6">
            Clarity & Universal Understanding
          </p>
          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white"> 
                  <p className="text-gray-300 mt-4 mb-4 leading-relaxed text-justify">
                    This phase establishes a neutral and consistent foundation for studying emotion across different faces, genders, and ethnicities.
                    It emphasises clarity, balance, and universality - allowing observers to focus purely on the emotional signal, free from external distraction.
                    Designed as a baseline for comparison, it helps users recognise emotional nuances and build perceptual accuracy.
                    It also serves as a psychological mirror - reminding us that emotion transcends cultural boundaries.
                    Every face becomes a lesson in empathy and shared humanity, where emotion is a language understood by all.
                    Through this openness, Phase 1 invites us to observe emotion as both art and science: simple, honest, and profoundly human.
                  </p>
                  <div className="flex justify-end">
                    {renderButton("/free/phase-1", "Free Access", "p1")}
                  </div>
                </td>
                <td className="p-3 w-[200px] text-center align-top">
                  <div className="w-[200px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/free/phase_1/Joy_European_Adult_Male.webp"
                      alt="Joy - European Adult Male"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">Joy - European Adult Male</p>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Total Expressions</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  144 black-and-white portraits
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Emotions Included</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Joy, Calmness, Compassion, Anger, Sadness, Surprise, Disgust, Fear, Trust, Anticipation, Pride, Love, Relief,
                  Contempt, Boredom, Confusion, Interest, Determination, Shame, Hope, Guilt, Serenity, Anxiety, Curiosity.
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Demographics</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  3 ethnic groups × 2 genders × 1 age group (Adult)
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Resolution</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  1024 × 1536 high-resolution portraits
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-400">Lighting & Style</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Neutral grey background, soft lighting, identical shirt style
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      <br />

      {/* ========================== */}
      {/* 📊 PHASE 2 */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="mt-8 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <center><h2 className="text-2xl font-semibold text-center mx-auto w-fit">
            Phase 2 - Advanced Emotional Expressions
          </h2></center>
          <p className="text-center text-gray-400 italic mb-6">
            Warmth & Authentic Connection
          </p>
          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white">
                  <p className="text-gray-300 mt-4 mb-4 leading-relaxed text-justify">
                    This phase explores subtler states such as empathy, gratitude, and awe, encouraging observers to perceive emotional nuance and authenticity.
It captures the warmth of human connection, bridging cultural differences and revealing the shared psychological patterns that define humanity.
It offers a deeper encounter with authenticity, where emotion becomes a reflection of inner truth rather than a social performance.
By observing these micro-moments of sincerity, viewers cultivate a heightened sensitivity to emotional detail and psychological realism.
The result is an evolving ability to recognise emotion as a spectrum rather than a label, fostering a richer and more human understanding of what we feel.
                  </p>
                  <div className="flex justify-end">
                    {renderButton("/free/phase-2", "Free Access", "p2")}
                  </div>
                </td>
                <td className="p-3 w-[200px] text-center align-top">
                  <div className="w-[200px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/free/phase_2/Empathy_African_Adult_Female.webp"
                      alt="Empathy - African Adult Female"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">Empathy - African Adult Female</p>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Total Expressions</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  288 black-and-white portraits
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Emotions Included</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Anxiety, Nostalgia, Confidence, Tension, Empathy, Desire, Awe, Fatigue, Positive Surprise, Negative Surprise,
                  Contemplation, Euphoria, Irritation, Tranquillity, Guilt, Jealousy, Gratitude, Excitement, Affection, Disbelief,
                  Inspiration, Longing, Disappointment, Neutral.
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Demographics</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  3 ethnic groups × 2 genders × 2 age groups (Adult, Senior)
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Resolution</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  1024 × 1536 ultra-realistic portraits
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-400">Lighting & Style</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Consistent neutral background, balanced lighting, identical clothing
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      <br />

      {/* ========================== */}
      {/* 📊 PHASE 3 - YOUNG ADULTS */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <center><h2 className="text-2xl font-semibold text-center mx-auto w-fit">
            Phase 3 - Young Adults
          </h2></center>
          <p className="text-center text-gray-400 italic mb-6">
            Mindfulness & Harmony
          </p>
          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white">
                  <p className="text-gray-300 mt-4 mb-4 leading-relaxed text-justify">
                    This phase bridges the transition between adolescence and maturity, where emotion meets reflection.
It highlights mindfulness, emotional regulation, and inner harmony – key traits in developing empathy and balanced perception.
Each portrait captures the moment between impulse and understanding, between reaction and wisdom.
The subtlety of these expressions invites slower observation, helping the viewer to perceive not just emotion, but also its direction and intention.
It reminds us that emotional intelligence grows not from expression alone, but from an awareness of what lies beneath.
                  </p>
                  <div className="flex justify-end">
                    {renderButton("/free/phase-3", "Free Access", "p3")}
                  </div>
                </td>
                <td className="p-3 w-[200px] text-center align-top">
                  <div className="w-[200px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/free/phase_3/Love_YoungAdult_EastAsian_Male.webp"
                      alt="Love - Young Adult Male"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">Love - Young Adult Male</p>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Total Expressions</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  144 high-resolution portraits
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Emotions Included</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Joy, Anger, Fear, Sadness, Surprise, Disgust, Love, Pride, Confusion, Hope, Trust, Curiosity, Desire, Nostalgia, Anxiety,
                  Excitement, Determination, Compassion, Tranquillity, Guilt, Contempt, Inspiration, Affection, Disbelief.
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Demographics</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  3 ethnic groups × 2 genders × 1 age group (Young Adult)
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Resolution</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  1024 × 1536 ultra-realistic portraits
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-400">Lighting & Style</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Neutral background, uniform shirt style, precision lighting, balanced tonal range
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      <br />

      {/* ========================== */}
      {/* 📊 PHASE 4 - CHILDREN */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="mt-8 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <center><h2 className="text-2xl font-semibold text-center mx-auto w-fit">
            Phase 4 - Children Collection
          </h2></center>
          <p className="text-center text-gray-300 italic mb-6">
            Innocence & Emotional Growth
          </p>
          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white">
                  <p className="text-gray-300 mt-4 mb-4 leading-relaxed text-justify">
                    This phase explores emotional development at its earliest stage, where expression is spontaneous and unfiltered.
It reflects universal traits such as curiosity, wonder, and joy that shape emotional intelligence from a young age.
These portraits remind us that authenticity precedes complexity – a face that feels before it understands.
By observing them, educators and psychologists can trace the emergence of empathy, confidence, and trust.
It completes the circle of human expression, returning to the beginning – where emotion remains free, honest, and pure.
                  </p>
                  <div className="flex justify-end">
                    {renderButton("/free/phase-4", "Free Access", "p4")}
                  </div>
                </td>
                <td className="p-3 w-[200px] text-center align-top">
                  <div className="w-[200px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/free/phase_4/Pride_Child_European_Female.webp"
                      alt="Pride - Child Female"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-300 text-xs mt-2">Pride - Child Female</p>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Total Expressions</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  90 black-and-white portraits
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Emotions Included</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Joy, Love, Pride, Hope, Gratitude, Affection, Wonder, Interest, Playfulness, Serenity,
                  Tranquillity, Trust, Admiration, Inspiration, Confidence.
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Demographics</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  3 ethnic groups × 2 genders × 1 age group (Children ~6–7 years)
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Resolution</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  1024 × 1536 high-resolution portraits
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-400">Lighting & Style</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Neutral grey background, soft lighting, uniform shirt style, educational tone
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      <br />

      {/* ========================== */}
      {/* 📊 PHASE 5 - SENIORS */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="mt-8 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <center><h2 className="text-2xl font-semibold text-center mx-auto w-fit">
            Phase 5 - Seniors Collection
          </h2></center>
          <p className="text-center text-gray-300 italic mb-6">
            Wisdom & Emotional Depth
          </p>

          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white">
                  <p className="text-gray-300 mt-4 mb-4 leading-relaxed text-justify">
                    This phase explores the emotional richness of later life, where expression is shaped by reflection, experience, and inner balance.
It highlights how empathy, patience, and resilience mature with age, revealing faces that carry both peace and depth.
Through these portraits, psychologists, educators, and artists can observe the dialogue between wisdom and emotion –
where every wrinkle tells a story of understanding. It reminds us that emotion does not fade with time, but transforms
into something deeper and more meaningful.
                  </p>
                  <div className="flex justify-end">
                    {renderButton("/free/phase-5", "Free Access", "p5")}
                  </div>
                </td>
                <td className="p-3 w-[200px] text-center align-top">
                  <div className="w-[200px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/free/phase_5/Kindness_African_Senior_Male.webp"
                      alt="Kindness - African Senior Male"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-300 text-xs mt-2">Kindness - African Senior Male</p>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-300">Total Expressions</td>
                <td className="p-3 text-white" colSpan={2}>
                  300 black-and-white portraits
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-300">Emotions Included</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Acceptance, Admiration, Affection, Calmness, Compassion, Contentment, Curiosity, Determination, Dignity, Empathy, Forgiveness,
                  Gratitude, Hope, Joy, Longing, Melancholy, Nostalgia, Peace, Pride, Reflection, Regret, Relief, Sadness, Serenity, Tranquillity,
                  Resilience, Faith, Love, Tenderness, Understanding, Kindness, Trust, Patience, Inspiration, Enthusiasm, Friendship, Support,
                  EmotionalBalance, InnerStrength, Fulfilment, Yearning, Sorrow, Vulnerability, Amusement, Reverence, Gratification, HopeRenewed,
                  AcceptanceOfLoss, ReflectionDeep, Grace.
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Demographics</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  3 ethnic groups × 2 genders × 1 age group (Seniors - approximately 70–80 years old)
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Resolution</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  1024 × 1536 high-resolution portraits
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-400">Lighting & Style</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Neutral grey background, soft lighting, consistent attire, timeless emotional tone
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      <br />

      {/* ========================== */}
      {/* 🌍 PHASE 6 - EVOLUTION */}
      {/* ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="mt-8 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-900 p-6 md:p-10">
          <center><h2 className="text-2xl font-semibold text-center mx-auto w-fit">
            Phase 6 - Evolution Collection
          </h2></center>
          <p className="text-center text-gray-400 italic mb-6">
            Across Generations & Cultures
          </p>
          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white">
                  <p className="text-gray-300 mt-4 mb-4 leading-relaxed text-justify">
                    The Evolution Collection explores how emotion matures and transforms across time and culture.
Each portrait traces the human journey – from the openness of childhood to the serenity of age.
This phase unites psychology, anthropology, and art into a single visual continuum, revealing the shared emotional DNA that connects us all.
By observing diverse cultures and life stages, we uncover how feelings such as love, pride, calmness, and gratitude define our growth as human beings.
It is a story of transformation – of emotion evolving throughout life.
                  </p>
                  <div className="flex justify-end">
                    {renderButton("/free/phase-6", "Free Access", "p6")}
                  </div>
                </td>
                <td className="p-3 w-[200px] text-center align-top">
                  <div className="w-[200px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src="/private_images/free/phase_6/Evolution_Delight_SouthAsian_MatureAdult_Female.webp"
                      alt="Delight - South Asian Mature Adult Female"
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">Delight - South Asian Mature Adult Female</p>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Total Expressions</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  120 ultra-realistic black-and-white portraits
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Emotions Included</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Love, Joy, Pride, Calmness, Serenity, Gratitude, Delight - representing emotional continuity across life.
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Demographics</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  12 world regions × 10 life stages (Infant → Elderly)
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-gray-400">Resolution</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  1024 × 1536 high-resolution portraits
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-400">Lighting & Style</td>
                <td className="p-3 text-gray-400" colSpan={2}>
                  Neutral grey background, consistent shirt style, soft lighting, cohesive scientific-artistic tone
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* 🟢 Return to Home Page button */}

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


