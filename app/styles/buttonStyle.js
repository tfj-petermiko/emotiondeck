// app/styles/buttonStyle.js
export const baseButtonStyle = (hovered = false, disabled = false) => ({
  backgroundColor: disabled
    ? "#374151"
    : hovered
    ? "#34D399"
    : "#10B981",
  color: "#ffffff",
  border: "none",
  padding: "10px 24px",
  borderRadius: "9999px",
  fontWeight: "600",
  fontSize: "0.9rem",
  boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
  transition: "background-color 0.2s ease, transform 0.2s ease",
  cursor: disabled ? "not-allowed" : "pointer",
});
