"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { baseButtonStyle } from "../styles/buttonStyle.js";

export default function AIGeneratorQuizStyle() {
  const [form, setForm] = useState({
    ethnicity: "",
    emotion: "",
    ageGroup: "",
    gender: "",
  });
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hovered, setHovered] = useState(false);
  const [hoveredBack, setHoveredBack] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);
  const [remaining, setRemaining] = useState(0);
  const totalCredits = 10;

  useEffect(() => {
    try {
      const access = localStorage.getItem("emotiondeck_ai_access");
      if (access) {
        const parsed = JSON.parse(access);
        if (typeof parsed.remaining === "number") {
          setRemaining(parsed.remaining);
        }
      }
    } catch (e) {
      console.warn("Invalid localStorage data:", e);
    }
  }, []);

  const handleBackClick = () => {
    setLoadingBack(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 400);
  };

  const ethnicities = [
    "European",
    "African",
    "East Asian",
    "South Asian",
    "Middle Eastern",
    "Latin American",
    "Pacific Islander",
    "Central Asian",
    "Native American",
    "Australian Aboriginal",
    "Arctic",
    "North American",
  ];

  const ageGroups = ["Young Adult", "Adult", "Mature Adult", "Senior", "Elderly"];

  const updateAccess = (newRemaining) => {
    localStorage.setItem(
      "emotiondeck_ai_access",
      JSON.stringify({ remaining: newRemaining })
    );
    setRemaining(newRemaining);
  };

  const validateForm = () => {
    if (!form.ethnicity || !form.emotion || !form.ageGroup || !form.gender) {
      setError("Please fill in all fields before generating.");
      return false;
    }
    return true;
  };

  const generate = async () => {
    if (loading) return;
    if (remaining <= 0) {
      window.location.href = "/ai-generator/checkout";
      return;
    }
    if (!validateForm()) return;

    setLoading(true);
    setError("");
    setImageUrl(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Server error. Please try again.");
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setImageUrl(data.image_url);
      updateAccess(remaining - 1);
    } catch (err) {
      console.error("⚠️ AI generation error:", err);
      setError("Generation failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!imageUrl) return;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `EmotionDeck_${form.emotion || "Image"}_${form.ethnicity || "Global"}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const progressPercent = Math.max((remaining / totalCredits) * 100, 0);

  return (
    <main className="min-h-screen bg-neutral-900 text-gray-200 py-16 flex flex-col items-center">
      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-white text-center"
      >
        ⚙️ EmotionDeck AI Portrait Generator
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl text-white mb-8 text-center max-w-2xl leading-relaxed"
      >
        <span className="font-medium">
          Create Portraits in the Official EmotionDeck Style.
        </span>
      </motion.p>

      {/* MAIN CARD */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6 w-[85%] md:w-[70%] mx-auto border border-[#2a2a2a] rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#1C1C1C" }}
      >
        <div className="text-center px-8 pb-10 pt-8" style={{ backgroundColor: "#1C1C1C" }}>
          {/* GREEN CREDIT BAR */}
          <div className="mb-8">
            {remaining >= 0 ? (
              <>
                <p className="text-emerald-400 font-medium mb-3 tracking-wide">
                  🎨 {remaining} of {totalCredits} generations left
                </p>

                <div className="relative w-full max-w-md mx-auto h-4 bg-gray-900 border border-gray-800 rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full transition-all duration-700 ease-in-out"
                    style={{
                      width: `${progressPercent}%`,
                      background: `linear-gradient(90deg, #10B981, #34D399, #10B981)`,
                      backgroundSize: "200% 100%",
                      animation: "flowGradient 3s linear infinite",
                      boxShadow: "0 0 10px rgba(16,185,129,0.5)",
                    }}
                  ></div>
                </div>

                <p className="text-sm text-gray-400 mt-2 font-light">
                  {Math.round(progressPercent)}% of credits remaining
                </p>

                <style jsx>{`
                  @keyframes flowGradient {
                    0% {
                      background-position: 0% 50%;
                    }
                    100% {
                      background-position: 200% 50%;
                    }
                  }
                `}</style>
              </>
            ) : (
              <div className="border border-yellow-500/30 text-yellow-400 rounded-lg px-4 py-3 max-w-md mx-auto">
                🔒 No credits left - pay £4.99 to unlock 10 new generations.
              </div>
            )}
          </div>

          {/* FORM */}
          <div className="grid grid-cols-2 gap-4 mb-6 max-w-md mx-auto">
            <select
              className="p-3 bg-neutral-900 border border-gray-800 rounded-xl text-gray-300"
              onChange={(e) => setForm({ ...form, ethnicity: e.target.value })}
              defaultValue=""
            >
              <option value="" disabled>
                Select Ethnic Group
              </option>
              {ethnicities.map((eth) => (
                <option key={eth}>{eth}</option>
              ))}
            </select>

            <input
              placeholder="Emotion"
              className="p-3 bg-neutral-900 border border-gray-800 rounded-xl focus:outline-none placeholder-gray-500"
              onChange={(e) => setForm({ ...form, emotion: e.target.value })}
            />

            <select
              className="p-3 bg-neutral-900 border border-gray-800 rounded-xl text-gray-300"
              onChange={(e) => setForm({ ...form, ageGroup: e.target.value })}
              defaultValue=""
            >
              <option value="" disabled>
                Select Age Group
              </option>
              {ageGroups.map((age) => (
                <option key={age}>{age}</option>
              ))}
            </select>

            <select
              className="p-3 bg-neutral-900 border border-gray-800 rounded-xl text-gray-300"
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
              defaultValue=""
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option>Female</option>
              <option>Male</option>
              <option>Androgynous</option>
            </select>
          </div>

          {/* GENERATE BUTTON */}
          <button
            onClick={() => {
              if (remaining <= 0) {
                window.location.href = "/ai-generator/checkout";
              } else {
                generate();
              }
            }}
            disabled={loading}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={baseButtonStyle(hovered, loading)}
          >
            {loading
              ? "Generating..."
              : remaining <= 0
              ? "Buy More Credits (£4.99)"
              : "Generate Portrait"}
          </button>

          {error && <p className="text-red-400 mt-4">{error}</p>}

          {/* IMAGE AREA */}
          <div
            className="relative w-[320px] h-[420px] mx-auto mt-10 mb-6 rounded-2xl overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: "#141414" }}
          >
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="Generated EmotionDeck Portrait"
                fill
                className="object-cover select-none pointer-events-none"
                priority
              />
            ) : (
              <p className="text-gray-500 text-sm">
                Your generated portrait will appear here
              </p>
            )}
          </div>

          {imageUrl && (
            <button
              onClick={handleDownload}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={baseButtonStyle(hovered)}
            >
              Download Image
            </button>
          )}
        </div>
      </motion.section>

      {/* FOOTER + BACK BUTTON */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center text-gray-300 text-lg"
      >
        <p>
          Would you like to keep improving your skills?{" "}
          <a
            href="/learn/quizzes"
            className="text-emerald-400 hover:text-emerald-300 font-semibold transition"
          >
            <br />Try EmotionDeck Quizzes
          </a>
        </p>

        {/* BACK BUTTON */}
        <div className="text-center mt-12">
          <button
            onClick={handleBackClick}
            disabled={loadingBack}
            onMouseEnter={() => setHoveredBack(true)}
            onMouseLeave={() => setHoveredBack(false)}
            style={baseButtonStyle(hoveredBack, loadingBack)}
          >
            {loadingBack ? "Loading..." : "Back"}
          </button>
        </div>
      </motion.div>
    </main>
  );
}
