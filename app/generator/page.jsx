"use client";
import { useState, useEffect } from "react";

export default function GeneratorPage() {
  const [form, setForm] = useState({ country: "", emotion: "", age: "", gender: "" });
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [generationCount, setGenerationCount] = useState(0);

  // 🧩 Load generation count from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("emotiondeck_generation_data");
    if (storedData) {
      const { date, count } = JSON.parse(storedData);
      const today = new Date().toDateString();
      if (date === today) {
        setGenerationCount(count);
      } else {
        // reset next day
        localStorage.setItem(
          "emotiondeck_generation_data",
          JSON.stringify({ date: today, count: 0 })
        );
      }
    } else {
      const today = new Date().toDateString();
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
      updateGenerationCount(); // ✅ increment counter after success
    } catch (err) {
      console.error(err);
      setError("Generation failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!imageUrl) return;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `EmotionDeck_${form.emotion || "Image"}_${form.country || "Global"}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-semibold mb-6">⚙️ EmotionDeck — AI Portrait Generator</h1>
      <p className="text-gray-400 mb-8 text-center max-w-lg">
        Create Black and White Portraits Inspired by The Official EmotionDeck Reference Style.  
        Choose Country, Emotion, Age, and Gender.
      </p>

      {/* 🔹 Input fields */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          placeholder="Country"
          className="p-3 bg-neutral-900 border border-gray-800 rounded-xl focus:outline-none placeholder-gray-500"
          onChange={(e) => setForm({ ...form, country: e.target.value })}
        />

        <input
          placeholder="Emotion"
          className="p-3 bg-neutral-900 border border-gray-800 rounded-xl focus:outline-none placeholder-gray-500"
          onChange={(e) => setForm({ ...form, emotion: e.target.value })}
        />

        <input
          placeholder="Age"
          className="p-3 bg-neutral-900 border border-gray-800 rounded-xl focus:outline-none placeholder-gray-500"
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />

        {/* 🔹 Gender dropdown */}
        <select
          className="p-3 bg-neutral-900 border border-gray-800 rounded-xl focus:outline-none text-gray-300"
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
          defaultValue=""
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>

      <br />
      {/* 🔹 Generate button */}
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

      {error && <p className="text-red-400 mt-4">{error}</p>}

      <br />
      {/* 🔹 Generated image + download button */}
      {imageUrl && (
        <div className="mt-12 text-center">
          <img
            src={imageUrl}
            alt="Generated EmotionDeck Portrait"
            className="rounded-xl max-w-[400px] mx-auto mb-5"
          />
          <br /> <br />
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
