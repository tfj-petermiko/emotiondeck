"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const tabs = [
    { icon: "🏠", name: "Home", desc: "Explore EmotionDeck’s World of Human Emotion", href: "/" },
    { icon: "💠", name: "Free Collection", desc: "Begin Your Journey Into Emotion Perception", href: "/free" },
    { icon: "🌍", name: "Global Map", desc: "One Country, One Emotion", href: "/globalmap" },
    { icon: "🔓", name: "Get PRO Access", desc: "Unlock Full EmotionDeck Experience", href: "/pro" },
  ];

  return (
    <>
      {/* 🍔 / ❌ Toggle button */}
      <div
        style={{
          position: "fixed",
          top: "2rem",
          left: "2rem",
          zIndex: 9999,
        }}
      >
        <button
          onClick={toggleMenu}
          style={{
            background: open
              ? "linear-gradient(145deg, #1a1a1a, #0e0e0e)"
              : "linear-gradient(145deg, #0d0d0d, #181818)",
            color: "#f5f5f5",
            border: open ? "1px solid #666" : "1px solid #333",
            padding: "1rem",
            borderRadius: "1.2rem",
            cursor: "pointer",
            boxShadow: open
              ? "0 0 16px rgba(255,255,255,0.15)"
              : "0 0 12px rgba(255,255,255,0.05)",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 20px rgba(255,255,255,0.2)";
            e.currentTarget.style.border = "1px solid #777";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = open
              ? "0 0 16px rgba(255,255,255,0.15)"
              : "0 0 12px rgba(255,255,255,0.05)";
            e.currentTarget.style.border = open
              ? "1px solid #666"
              : "1px solid #333";
          }}
        >
          {open ? <X size={40} strokeWidth={1.6} /> : <Menu size={40} strokeWidth={1.6} />}
        </button>
      </div>

      {/* 📋 Menu panel */}
      {open && (
        <>
          {/* Background overlay */}
          <div
            onClick={closeMenu}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.85)",
              zIndex: 9998,
            }}
          />

          {/* Sidebar menu */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "25vw",
              minWidth: "300px",
              maxWidth: "90vw",
              height: "100vh",
              background: "#0b0b0b",
              color: "#fff",
              zIndex: 9999,
              padding: "2.5rem",
              borderRight: "1px solid #222",
              boxShadow: "8px 0 30px rgba(0,0,0,0.8)",
              overflowY: "auto",
            }}
          >
            <h2
              style={{
                marginBottom: "2rem",
                fontSize: "1.4rem",
                color: "#aaa",
                wordWrap: "break-word",
              }}
            >
              EmotionDeck Navigation
            </h2>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {tabs.map((tab, i) => (
                  <tr
                    key={i}
                    onClick={closeMenu}
                    style={{
                      borderBottom: "1px solid #222",
                      cursor: "pointer",
                      verticalAlign: "top",
                    }}
                  >
                    <td style={{ padding: "0.9rem 0.5rem 0.9rem 0" }}>{tab.icon}</td>
                    <td style={{ padding: "0.9rem 0.5rem" }}>
                      <Link
                        href={tab.href}
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          fontWeight: "500",
                          whiteSpace: "normal",
                          display: "inline-block",
                        }}
                      >
                        {tab.name}
                      </Link>
                    </td>
                    <td
                      style={{
                        padding: "0.9rem 0",
                        color: "#aaa",
                        fontSize: "0.85rem",
                        whiteSpace: "normal",
                        lineHeight: "1.4",
                      }}
                    >
                      {tab.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ✨ Extended project description directly under menu */}
            <div
              style={{
                marginTop: "2rem",
                textAlign: "justify",
                fontSize: "0.86rem",
                lineHeight: "1.7",
                color: "#999",
              }}
            >
<strong>🕊️ EmotionDeck — One World, Many Emotions.</strong>
<br /><br />
Launched in October 2025 and developed by Peter Miko, EmotionDeck is a long-term psychological and cultural project created from the perspective of a Highly Sensitive Person (HSP).  
It explores how emotion, culture, history, upbringing, and ethnicity shape the way humanity feels and expresses itself.  
<br /><br />
Bridging psychology, art, and anthropology, EmotionDeck forms a visual atlas of human emotion — revealing how traditions, values, and social contexts influence the way we express and perceive feelings.  
Its mission is to foster understanding across nations and generations by studying the emotional patterns that unite us, and the cultural differences that make us unique.  
<br /><br />
This project is continuously developed and refined — growing organically through ongoing creative and scientific work.  
<br /><br />

{/* 🔹 Left-aligned divider line (no space above quote) */}
<div
  style={{
    width: "60%",
    borderTop: "1px solid rgba(255,255,255,0.15)",
    marginTop: "1.5rem",
    marginBottom: "0.3rem",
  }}
></div>

<em>“To see emotion is to understand humanity.”</em>






            </div>
          </div>

          {/* Responsive width */}
          <style jsx>{`
            @media (max-width: 768px) {
              div[style*="position: fixed"][style*="border-right"] {
                width: 80vw !important;
                min-width: 0 !important;
                padding: 2rem 1.5rem !important;
              }
            }
          `}</style>
        </>
      )}
    </>
  );
}
