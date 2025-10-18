"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function GeneratorPage() {
  const [gender, setGender] = useState("Female");
  const [country, setCountry] = useState("");
  const [emotion, setEmotion] = useState("");
  const [age, setAge] = useState("");
  const [referenceImage, setReferenceImage] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastParams, setLastParams] = useState(null);

  const genders = ["Male", "Female", "Androgynous"];

  async function generateImage(params) {
    setLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      });

      if (!res.ok) throw new Error("Failed to generate image");
      const data = await res.json();
      setImageUrl(data.image_url);
      setLastParams(params);
    } catch (err) {
      setError("Generation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGenerate() {
    if (!country || !emotion || !age) {
      setError("Please fill in all fields before generating.");
      return;
    }
    await generateImage({ country, emotion, age, gender, referenceImage });
  }

  async function handleRegenerate() {
    if (!lastParams) return;
    await generateImage(lastParams);
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-semibold mb-8 text-center"
      >
        🧠 EmotionDeck AI Generator
      </motion.h1>

      <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 w-full max-w-lg space-y-6">
        {/* Input fields */}
        <div className="grid grid-cols-1 gap-4">
          {/* Gender */}
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="bg-neutral-800 border border-gray-700 rounded-xl p-3 text-sm w-full"
          >
            {genders.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>

          {/* Country */}
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter country (e.g. Japan)"
            className="bg-neutral-800 border border-gray-700 rounded-xl p-3 text-sm w-full placeholder-gray-500"
          />

          {/* Emotion */}
          <input
            type="text"
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
            placeholder="Enter emotion (e.g. Serenity)"
            className="bg-neutral-800 border border-gray-700 rounded-xl p-3 text-sm w-full placeholder-gray-500"
          />

          {/* Age */}
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age or group (e.g. 25 or Child)"
            className="bg-neutral-800 border border-gray-700 rounded-xl p-3 text-sm w-full placeholder-gray-500"
          />

          {/* Reference Image URL */}
          <input
            type="text"
            value={referenceImage}
            onChange={(e) => setReferenceImage(e.target.value)}
            placeholder="Reference image (optional, e.g. /private_images/generator/reference.png)"
            className="bg-neutral-800 border border-gray-700 rounded-xl p-3 text-sm w-full placeholder-gray-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition"
          >
            {loading ? "Generating..." : "Generate Portrait"}
          </button>

          {imageUrl && (
            <button
              onClick={handleRegenerate}
              disabled={loading}
              className="flex-1 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl transition"
            >
              {loading ? "..." : "Regenerate"}
            </button>
          )}
        </div>

        {/* Error message */}
        {error && <p className="text-red-400 text-center mt-2">{error}</p>}

        {/* Loader */}
        {loading && (
          <div className="flex flex-col items-center justify-center mt-6">
            <div className="w-8 h-8 bg-yellow-400 rounded-full animate-pulse mb-3"></div>
            <p className="text-gray-400 text-sm italic">
              Creating emotional portrait...
            </p>
          </div>
        )}

        {/* Generated Image */}
        {imageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 flex flex-col items-center"
          >
            <img
              src={imageUrl}
              alt="Generated Emotion Portrait"
              className="rounded-2xl border border-gray-700 shadow-lg w-full object-cover"
            />

            {/* Parameter summary */}
            <div className="mt-4 text-gray-400 text-sm text-center space-y-1">
              <p>
                <strong>Country:</strong> {lastParams.country}
              </p>
              <p>
                <strong>Emotion:</strong> {lastParams.emotion}
              </p>
              <p>
                <strong>Age:</strong> {lastParams.age}
              </p>
              <p>
                <strong>Gender:</strong> {lastParams.gender}
              </p>
              {lastParams.referenceImage && (
                <p>
                  <strong>Reference:</strong> {lastParams.referenceImage}
                </p>
              )}
            </div>

            {/* Download link */}
            <a
              href={imageUrl}
              download
              className="mt-4 text-emerald-400 hover:underline"
            >
              Download Image
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}
