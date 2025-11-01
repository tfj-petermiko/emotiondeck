// ✨ EmotionDeck – External Soft Glow Button Style (Unified for Quizzes)

export default function baseButtonStyle({
  hovered = false,
  disabled = false,
  correct = false,
  wrong = false,
} = {}) {
  let background = "#111111";
  let color = "#ffffff";
  let boxShadow = "0 0 8px rgba(255,255,255,0.08)";

  if (disabled) {
    background = "#2a2a2a";
    color = "#888888";
    boxShadow = "none";
  } else if (correct) {
    background = "#1c1c1c";
    color = "#ffffff";
    boxShadow = "0 0 28px rgba(255,255,255,0.35)";
  } else if (wrong) {
    background = "#1a1a1a";
    color = "#aaaaaa";
    boxShadow = "0 0 20px rgba(255,255,255,0.18)";
  } else if (hovered) {
    background = "#151515";
    boxShadow = "0 0 22px rgba(255,255,255,0.25)";
  }

  return {
    backgroundColor: background,
    border: "1px solid rgba(255,255,255,0.18)",
    color,
    padding: "10px 22px",
    borderRadius: "0.75rem",
    fontWeight: "600",
    fontSize: "0.9rem",
    transition: "all 0.25s ease-in-out",
    boxShadow,
    cursor: disabled ? "not-allowed" : "pointer",
  };
}
