"use client";
import { useState, useEffect } from "react";

// 🧩 Helper — load metadata.txt (client-safe via fetch)
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
  const [generationCount, setGenerationCount] = useState(0);

  // 🧭 Load metadata.txt silently (for SEO only)
  useEffect(() => {
    loadMetadata(); // no UI changes — metadata loaded in background
  }, []);

  // 🌍 Ethnic groups
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

  // 👤 Age groups (excluding children)
  const ageGroups = [
    "Young Adult",
    "Adult",
    "Mature Adult",
    "Senior",
    "Elderly",
  ];

  // 🧩 Load daily generation limit
  useEffect(() => {
    const stored = localStorage.getItem("emotiondeck_generation_data");
    const today = new Date().toDateString();

    if (stored) {
      const { date, count } = JSON.parse(stored);
      if (date === today) setGenerationCount(count);
      else
        localStorage.setItem(
          "emotiondeck_generation_data",
          JSON.stringify({ date: today, count: 0 })
        );
    } else {
      localStorage.setItem(
        "emotiondeck_generation_data",
        JSON.stringify({ date: today, count: 0 })
      );
    }
  }, []);

  const updateGenerationCount = () => {
    const today = new Date().toDateString();
    const newCount = generationCount + 1;
    setGenerationCount(newCount);
    localStorage.setItem(
      "emotiondeck_generation_data",
      JSON.stringify({ date: today, count: newCount })
    );
  };

  // ⚙️ Generate image
  const generate = async () => {
    if (generationCount >= 3) {
      setError("⚠️ Daily limit reached (3 generations per day). Please come back tomorrow.");
      return;
    }

    setLoading(true);
    setImageUrl(null);
    setError("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setImageUrl(data.image_url);
      updateGenerationCount();
    } catch (err) {
      console.error(err);
      setError("Generation failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // 💾 Download
  const handleDownload = () => {
    if (!imageUrl) return;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `EmotionDeck_${form.emotion || "Image"}_${form.ethnicity || "Global"}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-semibold mb-6">
        ⚙️ EmotionDeck — AI Portrait Generator
      </h1>
      <p className="text-gray-400 mb-8 text-center max-w-lg">
        Create Black & White Portraits in the Official EmotionDeck Style. <br />
        Choose Ethnicity, Emotion, Age Group, and Gender.
      </p>

      {/* 🔹 Input Fields */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Ethnic group */}
        <select
          className="p-3 bg-neutral-900 border border-gray-800 rounded-xl focus:outline-none text-gray-300"
          onChange={(e) => setForm({ ...form, ethnicity: e.target.value })}
          defaultValue=""
        >
          <option value="" disabled>Select Ethnic Group</option>
          {ethnicities.map((eth) => (
            <option key={eth} value={eth}>{eth}</option>
          ))}
        </select>

        {/* Emotion */}
        <input
          placeholder="Emotion"
          className="p-3 bg-neutral-900 border border-gray-800 rounded-xl focus:outline-none placeholder-gray-500"
          onChange={(e) => setForm({ ...form, emotion: e.target.value })}
        />

        {/* Age group */}
        <select
          className="p-3 bg-neutral-900 border border-gray-800 rounded-xl focus:outline-none text-gray-300"
          onChange={(e) => setForm({ ...form, ageGroup: e.target.value })}
          defaultValue=""
        >
          <option value="" disabled>Select Age Group</option>
          {ageGroups.map((age) => (
            <option key={age} value={age}>{age}</option>
          ))}
        </select>

        {/* Gender */}
        <select
          className="p-3 bg-neutral-900 border border-gray-800 rounded-xl focus:outline-none text-gray-300"
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
          defaultValue=""
        >
          <option value="" disabled>Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>
<br/>
      {/* Generate button */}
      <button
        onClick={generate}
        disabled={loading || generationCount >= 3}
        className={`px-6 py-3 rounded-xl font-medium transition ${
          loading || generationCount >= 3
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-emerald-500 hover:bg-emerald-600 text-black"
        }`}
      >
        {loading
          ? "Generating..."
          : generationCount >= 3
          ? "Limit Reached"
          : `Generate Portrait (${3 - generationCount} left)`}
      </button>
<br/>
      {error && <p className="text-red-400 mt-4">{error}</p>}

      {imageUrl && (
        <div className="mt-12 text-center">
          <img
            src={imageUrl}
            alt="Generated EmotionDeck Portrait"
            className="rounded-xl max-w-[400px] mx-auto mb-5"
          /><br/>
          <button
            onClick={handleDownload}
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium px-6 py-2 rounded-xl transition"
          >
            Download Image
          </button>
        </div>
      )}
    </main>
  );
}
