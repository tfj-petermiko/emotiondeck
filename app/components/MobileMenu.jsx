"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  // 🔒 Disable page scrolling when the menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const tabs = [
    { icon: "🏠", name: "Home", desc: "Discover EmotionDeck — A Visual Journey Into Human Emotion", href: "/" },
    { icon: "💠", name: "Free Collection", desc: "Start Your Journey — The Free Gateway to Emotion Perception", href: "/free" },
    { icon: "🔓", name: "Get PRO Access", desc: "Unlock Advanced Phases, Exclusive Datasets, and Educational Tools", href: "/pro" },
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
              width: "30vw", // ✅ 30% of the screen width
              minWidth: "320px", // ✅ Minimum width for small screens
              height: "100vh",
              background: "#0b0b0b",
              color: "#fff",
              zIndex: 9999,
              padding: "2.5rem",
              borderRight: "1px solid #222",
              boxShadow: "8px 0 30px rgba(0,0,0,0.8)",
            }}
          >
            <h2 style={{ marginBottom: "2rem", fontSize: "1.4rem", color: "#aaa" }}>
              EmotionDeck Navigation
            </h2>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ color: "#888", textAlign: "left", fontSize: "0.85rem" }}>
                  <th style={{ paddingBottom: "0.75rem" }}></th>
                  <th style={{ paddingBottom: "0.75rem" }}></th>
                  <th style={{ paddingBottom: "0.75rem" }}></th>
                </tr>
              </thead>
              <tbody>
                {tabs.map((tab, i) => (
                  <tr
                    key={i}
                    onClick={closeMenu}
                    style={{
                      borderBottom: "1px solid #222",
                      cursor: "pointer",
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
                          whiteSpace: "nowrap",
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
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tab.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
