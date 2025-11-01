// /app/styles/buttonStyle.js

// ✨ EmotionDeck – Subtle Outer Glow Hover Button Style
export function baseButtonStyle(hovered = false, disabled = false) {
  return {
    backgroundColor: disabled
      ? "#2a2a2a"
      : hovered
      ? "#151515" // lekko jaśniejsze tło
      : "#111111",
    color: "#ffffff",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    padding: "10px 22px",
    borderRadius: "0.75rem",
    fontWeight: "600",
    fontSize: "0.9rem",
    boxShadow: hovered
      ? "0 0 22px rgba(255, 255, 255, 0.25)" 
      : "0 0 10px rgba(255, 255, 255, 0.14)",
    filter: hovered
      ? "brightness(1.08) contrast(1.05)" 
      : "none",
    transition: "all 0.3s ease-in-out",
    cursor: disabled ? "not-allowed" : "pointer",
  };
}
