"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { baseButtonStyle } from "../../styles/buttonStyle.js";

export default function ThankYouClient() {
  const [hovered, setHovered] = useState(false);
  const params = useSearchParams();

  const phase = params.get("phase") || "phase-1";
  const title = params.get("title") || "EmotionDeck PRO";

  return (
    <main className="pro-thankyou-page">
      <div className="pro-thankyou-card">
        <h1 className="pro-thankyou-title">🎉 Thank You!</h1>

        <p className="pro-thankyou-text">
          Your payment was successful. You now have full access to{" "}
          <strong>{title}</strong> for 7 days.
        </p>

        <p className="pro-thankyou-subtext">
          Explore the complete emotional portrait collection for this phase.
        </p>

        <button
          onClick={() => (window.location.href = `/pro/${phase}`)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={baseButtonStyle(hovered, false)}
          className="pro-thankyou-button"
        >
          Go to {title}
        </button>
      </div>
    </main>
  );
}
