"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import baseButtonStyle from "../../../styles/buttonStyleA.js";

export default function EmotionQuiz4() {
  const [category, setCategory] = useState("JoyVitality");
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [finished, setFinished] = useState(false);
  const [hoveredPlay, setHoveredPlay] = useState(false);
  const [loadingPlay, setLoadingPlay] = useState(false);

  // ============================================
  // 🎲 Static image dataset (120 total)
  // ============================================
  const questionsByCategory = {
    // 🟩 JOY & VITALITY
    JoyVitality: [
      { emotion: "Joy", path: "/private_images/quizzes/quiz_4/JoyVitality_Joy_European_YoungAdult_Male.webp" },
      { emotion: "Amusement", path: "/private_images/quizzes/quiz_4/JoyVitality_Amusement_African_YoungAdult_Female.webp" },
      { emotion: "Delight", path: "/private_images/quizzes/quiz_4/JoyVitality_Delight_SouthAsian_YoungAdult_Female.webp" },
      { emotion: "Excitement", path: "/private_images/quizzes/quiz_4/JoyVitality_Excitement_Arctic_YoungAdult_Male.webp" },
      { emotion: "Playfulness", path: "/private_images/quizzes/quiz_4/JoyVitality_Playfulness_EastAsian_YoungAdult_Male.webp" },
      { emotion: "Radiance", path: "/private_images/quizzes/quiz_4/JoyVitality_Radiance_LatinAmerican_YoungAdult_Female.webp" },
      { emotion: "Freedom", path: "/private_images/quizzes/quiz_4/JoyVitality_Freedom_MiddleEastern_YoungAdult_Male.webp" },
      { emotion: "Optimism", path: "/private_images/quizzes/quiz_4/JoyVitality_Optimism_NativeAmerican_YoungAdult_Male.webp" },
      { emotion: "Gratitude", path: "/private_images/quizzes/quiz_4/JoyVitality_Gratitude_NorthAmerican_YoungAdult_Female.webp" },
      { emotion: "Pride", path: "/private_images/quizzes/quiz_4/JoyVitality_Pride_AustralianAboriginal_YoungAdult_Female.webp" },
      { emotion: "Exuberance", path: "/private_images/quizzes/quiz_4/JoyVitality_Exuberance_PacificIslander_YoungAdult_Male.webp" },
      { emotion: "Spark", path: "/private_images/quizzes/quiz_4/JoyVitality_Spark_CentralAsian_YoungAdult_Female.webp" },
    ],

    // 🟦 CALM & HARMONY
    CalmHarmony: [
      { emotion: "Calmness", path: "/private_images/quizzes/quiz_4/CalmHarmony_Calmness_European_Adult_Male.webp" },
      { emotion: "Tranquillity", path: "/private_images/quizzes/quiz_4/CalmHarmony_Tranquillity_EastAsian_Adult_Male.webp" },
      { emotion: "Peace", path: "/private_images/quizzes/quiz_4/CalmHarmony_Peace_SouthAsian_Adult_Female.webp" },
      { emotion: "Balance", path: "/private_images/quizzes/quiz_4/CalmHarmony_Balance_LatinAmerican_Adult_Female.webp" },
      { emotion: "Serenity", path: "/private_images/quizzes/quiz_4/CalmHarmony_Serenity_African_Adult_Female.webp" },
      { emotion: "Patience", path: "/private_images/quizzes/quiz_4/CalmHarmony_Patience_Arctic_Adult_Male.webp" },
      { emotion: "Contentment", path: "/private_images/quizzes/quiz_4/CalmHarmony_Contentment_MiddleEastern_Adult_Male.webp" },
      { emotion: "Harmony", path: "/private_images/quizzes/quiz_4/CalmHarmony_Harmony_AustralianAboriginal_Adult_Female.webp" },
      { emotion: "Reflection", path: "/private_images/quizzes/quiz_4/CalmHarmony_Reflection_NorthAmerican_Adult_Female.webp" },
      { emotion: "Grace", path: "/private_images/quizzes/quiz_4/CalmHarmony_Grace_NativeAmerican_Adult_Male.webp" },
      { emotion: "Relaxation", path: "/private_images/quizzes/quiz_4/CalmHarmony_Relaxation_CentralAsian_Adult_Female.webp" },
      { emotion: "Stillness", path: "/private_images/quizzes/quiz_4/CalmHarmony_Stillness_PacificIslander_Adult_Male.webp" },
    ],

    // 🟧 EMPATHY & CONNECTION
    EmpathyConnection: [
      { emotion: "Compassion", path: "/private_images/quizzes/quiz_4/EmpathyConnection_Compassion_African_MatureAdult_Female.webp" },
      { emotion: "Empathy", path: "/private_images/quizzes/quiz_4/EmpathyConnection_Empathy_SouthAsian_MatureAdult_Female.webp" },
      { emotion: "Love", path: "/private_images/quizzes/quiz_4/EmpathyConnection_Love_European_MatureAdult_Male.webp" },
      { emotion: "Affection", path: "/private_images/quizzes/quiz_4/EmpathyConnection_Affection_EastAsian_MatureAdult_Male.webp" },
      { emotion: "Closeness", path: "/private_images/quizzes/quiz_4/EmpathyConnection_Closeness_NorthAmerican_MatureAdult_Female.webp" },
      { emotion: "Tenderness", path: "/private_images/quizzes/quiz_4/EmpathyConnection_Tenderness_PacificIslander_MatureAdult_Male.webp" },
      { emotion: "Kindness", path: "/private_images/quizzes/quiz_4/EmpathyConnection_Kindness_MiddleEastern_MatureAdult_Male.webp" },
      { emotion: "Support", path: "/private_images/quizzes/quiz_4/EmpathyConnection_Support_NativeAmerican_MatureAdult_Male.webp" },
      { emotion: "Friendship", path: "/private_images/quizzes/quiz_4/EmpathyConnection_Friendship_CentralAsian_MatureAdult_Female.webp" },
      { emotion: "Trust", path: "/private_images/quizzes/quiz_4/EmpathyConnection_Trust_LatinAmerican_MatureAdult_Female.webp" },
      { emotion: "Warmth", path: "/private_images/quizzes/quiz_4/EmpathyConnection_Warmth_Arctic_MatureAdult_Male.webp" },
      { emotion: "Understanding", path: "/private_images/quizzes/quiz_4/EmpathyConnection_Understanding_AustralianAboriginal_MatureAdult_Female.webp" },
    ],
    // 🟨 CURIOSITY & WONDER
    CuriosityWonder: [
      { emotion: "Curiosity", path: "/private_images/quizzes/quiz_4/CuriosityWonder_Curiosity_European_YoungAdult_Male.webp" },
      { emotion: "Wonder", path: "/private_images/quizzes/quiz_4/CuriosityWonder_Wonder_EastAsian_YoungAdult_Male.webp" },
      { emotion: "Awe", path: "/private_images/quizzes/quiz_4/CuriosityWonder_Awe_LatinAmerican_YoungAdult_Female.webp" },
      { emotion: "Fascination", path: "/private_images/quizzes/quiz_4/CuriosityWonder_Fascination_African_YoungAdult_Female.webp" },
      { emotion: "Interest", path: "/private_images/quizzes/quiz_4/CuriosityWonder_Interest_PacificIslander_YoungAdult_Male.webp" },
      { emotion: "Creativity", path: "/private_images/quizzes/quiz_4/CuriosityWonder_Creativity_Arctic_YoungAdult_Male.webp" },
      { emotion: "Inspiration", path: "/private_images/quizzes/quiz_4/CuriosityWonder_Inspiration_NativeAmerican_YoungAdult_Male.webp" },
      { emotion: "Intrigue", path: "/private_images/quizzes/quiz_4/CuriosityWonder_Intrigue_MiddleEastern_YoungAdult_Male.webp" },
      { emotion: "Anticipation", path: "/private_images/quizzes/quiz_4/CuriosityWonder_Anticipation_CentralAsian_YoungAdult_Female.webp" },
      { emotion: "Imagination", path: "/private_images/quizzes/quiz_4/CuriosityWonder_Imagination_AustralianAboriginal_YoungAdult_Female.webp" },
      { emotion: "Discovery", path: "/private_images/quizzes/quiz_4/CuriosityWonder_Discovery_SouthAsian_YoungAdult_Female.webp" },
      { emotion: "Enlightenment", path: "/private_images/quizzes/quiz_4/CuriosityWonder_Enlightenment_NorthAmerican_YoungAdult_Female.webp" },
    ],

    // 🟥 CONFIDENCE & POWER
    ConfidencePower: [
      { emotion: "Confidence", path: "/private_images/quizzes/quiz_4/ConfidencePower_Confidence_European_Adult_Male.webp" },
      { emotion: "Determination", path: "/private_images/quizzes/quiz_4/ConfidencePower_Determination_African_Adult_Female.webp" },
      { emotion: "Courage", path: "/private_images/quizzes/quiz_4/ConfidencePower_Courage_EastAsian_Adult_Male.webp" },
      { emotion: "Resilience", path: "/private_images/quizzes/quiz_4/ConfidencePower_Resilience_PacificIslander_Adult_Male.webp" },
      { emotion: "Motivation", path: "/private_images/quizzes/quiz_4/ConfidencePower_Motivation_LatinAmerican_Adult_Female.webp" },
      { emotion: "Leadership", path: "/private_images/quizzes/quiz_4/ConfidencePower_Leadership_MiddleEastern_Adult_Male.webp" },
      { emotion: "Empowerment", path: "/private_images/quizzes/quiz_4/ConfidencePower_Empowerment_NativeAmerican_Adult_Male.webp" },
      { emotion: "Assertiveness", path: "/private_images/quizzes/quiz_4/ConfidencePower_Assertiveness_AustralianAboriginal_Adult_Female.webp" },
      { emotion: "Focus", path: "/private_images/quizzes/quiz_4/ConfidencePower_Focus_SouthAsian_Adult_Female.webp" },
      { emotion: "Drive", path: "/private_images/quizzes/quiz_4/ConfidencePower_Drive_NorthAmerican_Adult_Female.webp" },
      { emotion: "Bravery", path: "/private_images/quizzes/quiz_4/ConfidencePower_Bravery_CentralAsian_Adult_Female.webp" },
      { emotion: "Independence", path: "/private_images/quizzes/quiz_4/ConfidencePower_Independence_Arctic_Adult_Male.webp" },
    ],

    // 🟪 SADNESS & REFLECTION
    SadnessReflection: [
      { emotion: "Sadness", path: "/private_images/quizzes/quiz_4/SadnessReflection_Sadness_European_MatureAdult_Male.webp" },
      { emotion: "Nostalgia", path: "/private_images/quizzes/quiz_4/SadnessReflection_Nostalgia_SouthAsian_MatureAdult_Female.webp" },
      { emotion: "Melancholy", path: "/private_images/quizzes/quiz_4/SadnessReflection_Melancholy_EastAsian_MatureAdult_Male.webp" },
      { emotion: "Regret", path: "/private_images/quizzes/quiz_4/SadnessReflection_Regret_MiddleEastern_MatureAdult_Male.webp" },
      { emotion: "Reflection", path: "/private_images/quizzes/quiz_4/SadnessReflection_Reflection_PacificIslander_MatureAdult_Male.webp" },
      { emotion: "Sorrow", path: "/private_images/quizzes/quiz_4/SadnessReflection_Sorrow_African_MatureAdult_Female.webp" },
      { emotion: "Longing", path: "/private_images/quizzes/quiz_4/SadnessReflection_Longing_LatinAmerican_MatureAdult_Female.webp" },
      { emotion: "TenderSorrow", path: "/private_images/quizzes/quiz_4/SadnessReflection_TenderSorrow_AustralianAboriginal_MatureAdult_Female.webp" },
      { emotion: "Vulnerability", path: "/private_images/quizzes/quiz_4/SadnessReflection_Vulnerability_Arctic_MatureAdult_Male.webp" },
      { emotion: "AcceptanceOfLoss", path: "/private_images/quizzes/quiz_4/SadnessReflection_AcceptanceOfLoss_CentralAsian_MatureAdult_Female.webp" },
      { emotion: "Humility", path: "/private_images/quizzes/quiz_4/SadnessReflection_Humility_NorthAmerican_MatureAdult_Female.webp" },
      { emotion: "Bittersweetness", path: "/private_images/quizzes/quiz_4/SadnessReflection_Bittersweetness_NativeAmerican_MatureAdult_Male.webp" },
    ],

    // ⚫ FEAR & VULNERABILITY
    FearVulnerability: [
      { emotion: "Fear", path: "/private_images/quizzes/quiz_4/FearVulnerability_Fear_European_YoungAdult_Male.webp" },
      { emotion: "Anxiety", path: "/private_images/quizzes/quiz_4/FearVulnerability_Anxiety_African_YoungAdult_Female.webp" },
      { emotion: "Panic", path: "/private_images/quizzes/quiz_4/FearVulnerability_Panic_PacificIslander_YoungAdult_Male.webp" },
      { emotion: "Shock", path: "/private_images/quizzes/quiz_4/FearVulnerability_Shock_NativeAmerican_YoungAdult_Male.webp" },
      { emotion: "Tension", path: "/private_images/quizzes/quiz_4/FearVulnerability_Tension_AustralianAboriginal_YoungAdult_Female.webp" },
      { emotion: "Worry", path: "/private_images/quizzes/quiz_4/FearVulnerability_Worry_EastAsian_YoungAdult_Male.webp" },
      { emotion: "Helplessness", path: "/private_images/quizzes/quiz_4/FearVulnerability_Helplessness_Arctic_YoungAdult_Male.webp" },
      { emotion: "Insecurity", path: "/private_images/quizzes/quiz_4/FearVulnerability_Insecurity_LatinAmerican_YoungAdult_Female.webp" },
      { emotion: "Apprehension", path: "/private_images/quizzes/quiz_4/FearVulnerability_Apprehension_SouthAsian_YoungAdult_Female.webp" },
      { emotion: "Fragility", path: "/private_images/quizzes/quiz_4/FearVulnerability_Fragility_NorthAmerican_YoungAdult_Female.webp" },
      { emotion: "Caution", path: "/private_images/quizzes/quiz_4/FearVulnerability_Caution_CentralAsian_YoungAdult_Female.webp" },
      { emotion: "Dread", path: "/private_images/quizzes/quiz_4/FearVulnerability_Dread_MiddleEastern_YoungAdult_Male.webp" },
    ],

    // 🔴 ANGER & RESISTANCE
    AngerResistance: [
      { emotion: "Anger", path: "/private_images/quizzes/quiz_4/AngerResistance_Anger_European_Adult_Male.webp" },
      { emotion: "Contempt", path: "/private_images/quizzes/quiz_4/AngerResistance_Contempt_MiddleEastern_Adult_Male.webp" },
      { emotion: "Frustration", path: "/private_images/quizzes/quiz_4/AngerResistance_Frustration_African_Adult_Female.webp" },
      { emotion: "Defiance", path: "/private_images/quizzes/quiz_4/AngerResistance_Defiance_LatinAmerican_Adult_Female.webp" },
      { emotion: "Disgust", path: "/private_images/quizzes/quiz_4/AngerResistance_Disgust_SouthAsian_Adult_Female.webp" },
      { emotion: "Rebellion", path: "/private_images/quizzes/quiz_4/AngerResistance_Rebellion_PacificIslander_Adult_Male.webp" },
      { emotion: "Resistance", path: "/private_images/quizzes/quiz_4/AngerResistance_Resistance_NativeAmerican_Adult_Male.webp" },
      { emotion: "Protest", path: "/private_images/quizzes/quiz_4/AngerResistance_Protest_CentralAsian_Adult_Female.webp" },
      { emotion: "Agitation", path: "/private_images/quizzes/quiz_4/AngerResistance_Agitation_AustralianAboriginal_Adult_Female.webp" },
      { emotion: "Irritation", path: "/private_images/quizzes/quiz_4/AngerResistance_Irritation_EastAsian_Adult_Male.webp" },
      { emotion: "Boldness", path: "/private_images/quizzes/quiz_4/AngerResistance_Boldness_Arctic_Adult_Male.webp" },
      { emotion: "JusticeDrive", path: "/private_images/quizzes/quiz_4/AngerResistance_JusticeDrive_NorthAmerican_Adult_Female.webp" },
    ],

    // 🟣 SURPRISE & TRANSITION
    SurpriseTransition: [
      { emotion: "Surprise", path: "/private_images/quizzes/quiz_4/SurpriseTransition_Surprise_European_MatureAdult_Male.webp" },
      { emotion: "Astonishment", path: "/private_images/quizzes/quiz_4/SurpriseTransition_Astonishment_EastAsian_MatureAdult_Male.webp" },
      { emotion: "Shock", path: "/private_images/quizzes/quiz_4/SurpriseTransition_Shock_African_MatureAdult_Female.webp" },
      { emotion: "Change", path: "/private_images/quizzes/quiz_4/SurpriseTransition_Change_PacificIslander_MatureAdult_Male.webp" },
      { emotion: "Transformation", path: "/private_images/quizzes/quiz_4/SurpriseTransition_Transformation_LatinAmerican_MatureAdult_Female.webp" },
      { emotion: "Renewal", path: "/private_images/quizzes/quiz_4/SurpriseTransition_Renewal_NorthAmerican_MatureAdult_Female.webp" },
      { emotion: "Realisation", path: "/private_images/quizzes/quiz_4/SurpriseTransition_Realisation_MiddleEastern_MatureAdult_Male.webp" },
      { emotion: "Awakening", path: "/private_images/quizzes/quiz_4/SurpriseTransition_Awakening_NativeAmerican_MatureAdult_Male.webp" },
      { emotion: "Discovery", path: "/private_images/quizzes/quiz_4/SurpriseTransition_Discovery_SouthAsian_MatureAdult_Female.webp" },
      { emotion: "Adaptation", path: "/private_images/quizzes/quiz_4/SurpriseTransition_Adaptation_AustralianAboriginal_MatureAdult_Female.webp" },
      { emotion: "Growth", path: "/private_images/quizzes/quiz_4/SurpriseTransition_Growth_CentralAsian_MatureAdult_Female.webp" },
      { emotion: "Revelation", path: "/private_images/quizzes/quiz_4/SurpriseTransition_Revelation_Arctic_MatureAdult_Male.webp" },
    ],

    // ⚪ ACCEPTANCE & TRANSCENDENCE
    AcceptanceTranscendence: [
      { emotion: "Acceptance", path: "/private_images/quizzes/quiz_4/AcceptanceTranscendence_Acceptance_European_YoungAdult_Male.webp" },
      { emotion: "Clarity", path: "/private_images/quizzes/quiz_4/AcceptanceTranscendence_Clarity_Arctic_YoungAdult_Male.webp" },
      { emotion: "Faith", path: "/private_images/quizzes/quiz_4/AcceptanceTranscendence_Faith_MiddleEastern_YoungAdult_Male.webp" },
      { emotion: "Grace", path: "/private_images/quizzes/quiz_4/AcceptanceTranscendence_Grace_AustralianAboriginal_YoungAdult_Female.webp" },
      { emotion: "Gratitude", path: "/private_images/quizzes/quiz_4/AcceptanceTranscendence_Gratitude_SouthAsian_YoungAdult_Female.webp" },
      { emotion: "HopeRenewed", path: "/private_images/quizzes/quiz_4/AcceptanceTranscendence_HopeRenewed_LatinAmerican_YoungAdult_Female.webp" },
      { emotion: "InnerPeace", path: "/private_images/quizzes/quiz_4/AcceptanceTranscendence_InnerPeace_EastAsian_YoungAdult_Male.webp" },
      { emotion: "Meaning", path: "/private_images/quizzes/quiz_4/AcceptanceTranscendence_Meaning_NativeAmerican_YoungAdult_Male.webp" },
      { emotion: "Surrender", path: "/private_images/quizzes/quiz_4/AcceptanceTranscendence_Surrender_CentralAsian_YoungAdult_Female.webp" },
      { emotion: "Transcendence", path: "/private_images/quizzes/quiz_4/AcceptanceTranscendence_Transcendence_African_YoungAdult_Female.webp" },
      { emotion: "Understanding", path: "/private_images/quizzes/quiz_4/AcceptanceTranscendence_Understanding_PacificIslander_YoungAdult_Male.webp" },
      { emotion: "Wholeness", path: "/private_images/quizzes/quiz_4/AcceptanceTranscendence_Wholeness_NorthAmerican_YoungAdult_Female.webp" },
    ],
  };

  const categories = Object.keys(questionsByCategory);

  function generateQuestions(cat) {
    const pool = questionsByCategory[cat];
    const selected = [];
    const used = new Set();

    while (selected.length < 10) {
      const random = pool[Math.floor(Math.random() * pool.length)];
      if (used.has(random.emotion)) continue;
      const incorrect = pool
        .filter((e) => e.emotion !== random.emotion)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      const options = [...incorrect.map((e) => e.emotion), random.emotion].sort(
        () => 0.5 - Math.random()
      );
      selected.push({ ...random, options });
      used.add(random.emotion);
    }

    setQuestions(selected);
    setIndex(0);
    setScore(0);
    setFinished(false);
    setFeedback("");
    setSelected(null);
  }

  function handleAnswer(choice) {
    if (selected) return;
    setSelected(choice);
    const correct = choice === questions[index].emotion;
    if (correct) setScore((s) => s + 1);
    setFeedback(correct ? "✅ Correct!" : "❌ Try again!");
    setTimeout(() => {
      setSelected(null);
      if (index + 1 < questions.length) setIndex((i) => i + 1);
      else setFinished(true);
      setFeedback("");
    }, 1000);
  }

  function restartQuiz() {
    generateQuestions(category);
  }

  useEffect(() => {
    if (questions.length === 0) generateQuestions("JoyVitality");
  }, [questions]);

  const current = questions[index];
  return (
    <main className="min-h-screen bg-neutral-900 text-gray-200 py-16 flex flex-col items-center">
{/* HEADER */}
<h1 className="text-4xl font-bold mb-6 text-white text-center">
  EmotionDeck Quiz <br />
  Recognise the Emotion – Phase 4
</h1>

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
  className="text-xl md:text-2xl text-gray-100 mb-8 text-center max-w-2xl leading-relaxed"
>
  Observe Each Portrait Carefully and Select The Matching Emotion Below.
</motion.p>


      {/* CATEGORY SELECT */}
      <div className="mb-8 text-center">
        <label htmlFor="category" className="text-gray-300 font-medium">
          Select Category
        </label>
        <br /><br />
        <select
          id="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            generateQuestions(e.target.value);
          }}
          className="bg-neutral-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.replace(/([A-Z])/g, " $1").trim()}
            </option>
          ))}
        </select>
      </div>

      {/* QUIZ CARD */}
      {questions.length > 0 && !finished && (
        <section
          key={index}
          className="mt-6 w-[80%] mx-auto border border-[#2a2a2a] rounded-2xl overflow-hidden"
          style={{ backgroundColor: "#1C1C1C" }}
        >
          <div className="text-center px-8 pb-8 pt-6" style={{ backgroundColor: "#1C1C1C" }}>
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-[320px] h-[420px] mx-auto mb-6 rounded-2xl overflow-hidden border border-[#2a2a2a]"
            >
              <Image src={current.path} alt={current.emotion} fill className="object-cover" priority />
            </motion.div>

            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              {current.options.map((opt) => {
                const isCorrect = opt === current.emotion;
                const isSelected = selected === opt;

                return (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    onMouseEnter={() => setHoveredPlay(opt)}
                    onMouseLeave={() => setHoveredPlay(null)}
                    className="px-4 py-2 rounded-lg font-medium transition-all duration-200"
                    style={baseButtonStyle({
                      hovered: hoveredPlay === opt && !selected,
                      disabled: !!selected,
                      correct: selected && isSelected && isCorrect,
                      wrong: selected && isSelected && !isCorrect,
                    })}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {feedback && (
              <p
                key={feedback}
                className={`mt-4 text-lg font-semibold ${
                  feedback.includes("Correct") ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {feedback}
              </p>
            )}

            <p className="mt-4 text-gray-300">
              Question {index + 1} of {questions.length}
            </p>
          </div>
        </section>
      )}

      {finished && (
        <section
          className="mt-12 w-[80%] mx-auto border border-[#2a2a2a] rounded-2xl overflow-hidden"
          style={{ backgroundColor: "#1C1C1C" }}
        >
          <div className="text-center px-8 pb-8 pt-6">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Your score: {score} / {questions.length}
            </h2>
            <p className="text-gray-300 mb-8">
              Excellent! You’ve completed the {category.replace(/([A-Z])/g, " $1").trim()} category.
            </p>
            <button
              onClick={restartQuiz}
              disabled={loadingPlay}
              onMouseEnter={() => setHoveredPlay(true)}
              onMouseLeave={() => setHoveredPlay(false)}
              style={{
                ...baseButtonStyle({
                  hovered: hoveredPlay && !loadingPlay,
                  disabled: loadingPlay,
                }),
                backgroundColor: loadingPlay
                  ? "#374151"
                  : hoveredPlay
                  ? "#34D399"
                  : "#10B981",
                color: "#fff",
                marginTop: "1.5rem",
                minWidth: "160px",
              }}
            >
              {loadingPlay ? "Loading..." : "Play Again"}
            </button>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <div className="mt-16 text-center text-gray-300 text-lg">
        <p>
          Want to continue learning?{" "}
          <a href="/learn/quizzes" className="text-emerald-400 hover:text-emerald-300 font-semibold transition">
            <br />Try more EmotionDeck Quizzes
          </a>
        </p>
      </div>
    </main>
  );
}

