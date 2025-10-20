"use client";

import { useState, useEffect } from "react";

/* =========================================
   ⚙️ EmotionDeck — AI Portrait Generator (Secure Version)
   ========================================= */

async function loadMetadata() {
  try {
    const res = await fetch("/content/ai-generator/metadata.txt");
    if (!res.ok) return {};
    const text = await res.text();
    const meta = {};
    let currentKey = "";
    text.split("\n").forEach((line) => {
      if (line.startsWith("#")) {
        currentKey = line.replace("#", "").trim();
        meta[currentKey] = "";
      } else if (currentKey && line.trim()) {
        meta[currentKey] += (meta[currentKey] ? "\n" : "") + line.trim();
      }
    });
    Object.keys(meta).forEach((k) => (meta[k] = meta[k].trim()));
    return meta;
  } catch {
    return {};
  }
}

export default function GeneratorPage() {
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
  const [remaining, setRemaining] = useState(0);
  const totalCredits = 10;

  const baseButtonStyle = {
    backgroundColor: "#10B981",
    color: "#ffffff",
    border: "none",
    padding: "10px 24px",
    borderRadius: "9999px",
    fontWeight: "600",
    fontSize: "0.95rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    transition: "background-color 0.2s ease, transform 0.2s ease",
  };

  // 🧠 Load credits and metadata safely
  useEffect(() => {
    loadMetadata();
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
    if (loading) return; // prevent spamming clicks
    if (remaining <= 0) {
      window.location.href = "/ai-generator/checkout";
      return;
    }
    if (!validateForm()) return;

    setLoading(true);
    setImageUrl(null);
    setError("");

    try {
      // Optional: You can verify credits server-side before generating
      // const creditCheck = await fetch("/api/credits");
      // const { remainingCredits } = await creditCheck.json();
      // if (remainingCredits <= 0) throw new Error("No credits remaining.");

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

  const progressPercent = (remaining / totalCredits) * 100;

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-semibold mb-6">
        ⚙️ EmotionDeck — AI Portrait Generator
      </h1>
      <p className="text-gray-400 mb-8 text-center max-w-lg">
        Create Black & White Portraits in the Official EmotionDeck Style.<br />
        Choose Ethnicity, Emotion, Age Group, and Gender.
      </p>

      {/* 🎨 Credit info + progress bar */}
      <div className="mb-6 text-center w-full max-w-md">
        {remaining > 0 ? (
          <>
            <p className="text-emerald-400 font-medium mb-2">
              🎨 {remaining} of {totalCredits} generations left
            </p>
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-500 ease-in-out"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </>
        ) : (
          <div className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-lg px-4 py-3 max-w-md mx-auto">
            🔒 No credits left — pay £9.99 to unlock 10 new generations.
          </div>
        )}
      </div>

      <br />

      {/* 🧩 Input fields */}
      <div className="grid grid-cols-2 gap-4 mb-6">
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

      <br />

      {/* 🟢 Generate / Buy button */}
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
        style={{
          ...baseButtonStyle,
          backgroundColor: loading
            ? "#374151"
            : remaining <= 0
            ? hovered
              ? "#FDE047"
              : "#FACC15"
            : hovered
            ? "#34D399"
            : "#10B981",
          color: remaining <= 0 ? "#000" : "#fff",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading
          ? "Generating..."
          : remaining <= 0
          ? "Buy More Credits (£9.99)"
          : "Generate Portrait"}
      </button>

      {error && <p className="text-red-400 mt-4">{error}</p>}
<br/>
      {/* 🔹 Generated image + download button */}
      {imageUrl && (
        <div className="mt-12 text-center">
          <img
            src={imageUrl}
            alt="Generated EmotionDeck Portrait"
            className="rounded-xl max-w-[400px] mx-auto mb-5"
          />
          <br /><br/>
          <button
            onClick={handleDownload}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              ...baseButtonStyle,
              backgroundColor: hovered ? "#34D399" : "#10B981",
            }}
          >
            Download Image
          </button>
        </div>
      )}
    </main>
  );
}
