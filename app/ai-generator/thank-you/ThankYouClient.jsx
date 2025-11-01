"use client";

import { baseButtonStyle } from "../../styles/buttonStyle.js";
import { useState } from "react";

export default function ThankYouClient() {
  const [hovered, setHovered] = useState(false);

  return (
    <main className="ed-page">
      <div className="ed-card max-w-lg">
        <h1 className="ed-title-emerald">🎉 Thank You!</h1>

        <p className="ed-text-light">
          Your payment was successful. You now have{" "}
          <strong>10 available generations</strong> in the EmotionDeck AI Generator.
        </p>

        <p className="ed-text-muted">
          Each click on <strong>“Generate Portrait”</strong> uses one generation credit.
        </p>

        <button
          onClick={() => (window.location.href = "/ai-generator")}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={baseButtonStyle(hovered, false)}
        >
          Go to AI Generator
        </button>
      </div>
    </main>
  );
}
