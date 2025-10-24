// /app/pro/thank-you/ThankYouClient.jsx
"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

/**
 * Shared thank-you client.
 * - Reads phase and title from URL search params
 * - Offers button back to phase page
 */

export default function ThankYouClient() {
  const [hovered, setHovered] = useState(false);
  const params = useSearchParams();

  const phase = params.get("phase") || "phase-1";
  const title = params.get("title") || "EmotionDeck PRO";

  const baseButtonStyle = {
    backgroundColor: hovered ? "#34D399" : "#10B981",
    color: "#fff",
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
          Your payment was successful. You now have full access to <strong>{title}</strong> for 7 days.
        </p>
        <p className="text-gray-400 mb-8">
          Explore the complete emotional portrait collection for this phase.
        </p>

        <button
          onClick={() => (window.location.href = `/pro/${phase}`)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={baseButtonStyle}
        >
          Go to {title} →
        </button>

        <br />
        <br />
        <p className="text-xs text-gray-500">
          If you have any issues, contact support at hello@emotiondeck.com
        </p>
      </div>
    </main>
  );
}
