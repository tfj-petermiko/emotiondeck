"use client";

import { useState } from "react";

export default function AIGeneratorThankYou() {
  const [hovered, setHovered] = useState(false);

  const baseButtonStyle = {
    backgroundColor: hovered ? "#34D399" : "#10B981",
    color: "#ffffff",
    border: "none",
    padding: "12px 28px",
    borderRadius: "9999px",
    fontWeight: "600",
    fontSize: "1rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
    transition: "background-color 0.2s ease, transform 0.2s ease",
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-white flex items-center justify-center px-6">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 text-center max-w-lg">
        <h1 className="text-3xl font-bold text-emerald-400 mb-4">🎉 Thank You!</h1>
        <p className="text-gray-300 mb-4">
          Your payment was successful. You now have{" "}
          <strong>10 available generations</strong> in the EmotionDeck AI Generator.
        </p>
        <p className="text-gray-400 mb-8">
          Each click on “Generate Portrait” uses one generation credit.
        </p>

        <button
          onClick={() => (window.location.href = "/ai-generator")}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={baseButtonStyle}
        >
          Go to AI Generator →
        </button>
      </div>
    </main>
  );
}
