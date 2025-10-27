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
  { icon: "🎓", name: "Learn & Grow", desc: "Boost Emotional Intelligence through Practice", href: "/learn" },
  { icon: "🌍", name: "Encyclopedia", desc: "The First Global Emotion Encyclopedia", href: "/encyclopedia" },
  { icon: "🔒", name: "EmotionDeck PRO", desc: "Exclusive Collection - Access Required", href: "/pro" },
  { icon: "⚙️", name: "AI Generator", desc: "Create Portraits with the EmotionDeck Generator", href: "/ai-generator" },
  { icon: "📜", name: "Legal", desc: "Privacy Policy, Terms of Use, and Cookies", href: "/legal" },
];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          background: "rgba(10,10,10,0.95)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "1rem",
          padding: "1.8rem 2.4rem",
          zIndex: 10000,
          borderBottom: "1px solid #222",
          boxShadow: "0 3px 14px rgba(0,0,0,0.65)",
          backdropFilter: "blur(8px)",
        }}
      >
        <button
  onClick={toggleMenu}
  style={{
    backgroundColor: "#141414",
    color: "#f5f5f5",
    border: open ? "1px solid #555" : "1px solid #2a2a2a",
    padding: "1rem",
    borderRadius: "1.2rem",
    cursor: "pointer",
    boxShadow: open
      ? "0 0 12px rgba(255,255,255,0.15)"
      : "0 0 6px rgba(0,0,0,0.5)",
    transition: "all 0.25s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#181818";
    e.currentTarget.style.border = "1px solid #666";
    e.currentTarget.style.boxShadow = "0 0 14px rgba(255,255,255,0.2)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#141414";
    e.currentTarget.style.border = open
      ? "1px solid #555"
      : "1px solid #2a2a2a";
    e.currentTarget.style.boxShadow = open
      ? "0 0 12px rgba(255,255,255,0.15)"
      : "0 0 6px rgba(0,0,0,0.5)";
  }}
>
  {open ? <X size={38} strokeWidth={1.6} /> : <Menu size={38} strokeWidth={1.6} />}
</button>


        <div
          style={{
            fontSize: "1.6rem",
            fontWeight: "600",
            letterSpacing: "0.7px",
            userSelect: "none",
          }}
        >
          EmotionDeck
        </div>
      </header>

      <div style={{ height: "110px" }}></div>

      {open && (
        <>
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
              padding: "3rem",
              borderRight: "1px solid #222",
              boxShadow: "8px 0 30px rgba(0,0,0,0.8)",
              overflowY: "auto",
            }}
          >
<h2
  style={{
    marginBottom: "1rem",
    fontSize: "1.45rem",
    color: "#aaa",
  }}
>
  Menu
</h2>

<div style={{ height: "2.8rem" }}></div>

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
                    <td style={{ padding: "1rem 0.5rem 1rem 0" }}>{tab.icon}</td>
                    <td style={{ padding: "1rem 0.5rem" }}>
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
                        padding: "1rem 0",
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

            <div
              style={{
                marginTop: "2.2rem",
                textAlign: "justify",
                fontSize: "0.88rem",
                lineHeight: "1.75",
                color: "#999",
              }}
            >
<div
  style={{
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#fff",
    marginBottom: "0.8rem",
  }}
>
  EmotionDeck - One World, Many Emotions
</div>

<p style={{ marginBottom: "1rem", color: "#ccc", lineHeight: "1.75" }}>
  Created in October 2025 by <strong>Peter Miko</strong>, EmotionDeck is a long-term psychological
  and cultural project exploring how emotion, culture, history, upbringing, and ethnicity shape the
  way humanity feels and expresses itself. It bridges psychology, art, and anthropology to form a
  visual atlas of human emotion, revealing how traditions, values, and social contexts influence the
  way we express and perceive feelings.
  <br /><br />
  Inspired by the analytical psychology of <strong>Carl Gustav Jung</strong> and the emotional
  research of <strong>Paul Ekman</strong>, EmotionDeck combines depth and science to explore the
  emotional patterns that define and connect humanity. It also introduces the world’s first
  encyclopedia of emotional archetypes, mapping the psychological and cultural essence of every
  nation through its symbolic emotional identity.
</p>

<br />

<p style={{ color: "#aaa", fontStyle: "italic", marginBottom: "1.2rem" }}>
  “To see emotion is to understand humanity.”
</p>

<div
  style={{
    width: "100%",
    height: "1px",
    backgroundColor: "rgba(255,255,255,0.15)",
    marginTop: "1.2rem",
    marginBottom: "0.5rem",
  }}
></div>

              <div
                style={{
                  textAlign: "center",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.8rem",
                }}
              >
                <span>Connect with the creator on </span>
                <a
                  href="https://www.facebook.com/tfj.petermiko"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa", textDecoration: "none" }}
                  onMouseOver={(e) => (e.target.style.color = "#93c5fd")}
                  onMouseOut={(e) => (e.target.style.color = "#60a5fa")}
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

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
