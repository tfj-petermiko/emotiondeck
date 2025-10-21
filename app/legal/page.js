"use client";

import { useState } from "react";
import Link from "next/link";

export default function LegalPage() {
  const [hovered, setHovered] = useState(false);

  const legalLinks = [
    {
      label: "Privacy Policy",
      value: "How EmotionDeck collects, stores, and protects your personal data.",
      href: "/legal/privacy",
    },
    {
      label: "Terms of Use",
      value: "Understand your rights and responsibilities when using EmotionDeck.",
      href: "/legal/terms",
    },
    {
      label: "Cookies Policy",
      value: "Learn how EmotionDeck uses cookies and similar technologies.",
      href: "/legal/cookies",
    },
  ];

  const data = [
    {
      label: "Compliance",
      value: "All documents align with UK GDPR and EU data protection standards.",
    },
    {
      label: "Hosting",
      value: "EmotionDeck is hosted on Vercel (EU data centres).",
    },
    {
      label: "Transparency",
      value: "We strive for clear, accessible, and user-friendly legal information.",
    },
  ];

  const baseButtonStyle = {
    backgroundColor: hovered ? "#34D399" : "#10B981",
    color: "#ffffff",
    border: "none",
    padding: "10px 24px",
    borderRadius: "9999px",
    fontWeight: "600",
    fontSize: "0.9rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
    transition: "background-color 0.2s ease, transform 0.2s ease",
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-gray-300 font-sans py-16">
      <section className="text-center w-[80%] mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Legal Information — EmotionDeck
        </h1>
        <p className="text-gray-400 mb-4">
          Last updated: <strong>October 2025</strong>
        </p>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Welcome to the legal section of EmotionDeck.
          Here you can access our Privacy Policy, Terms of Use, and Cookies Policy —
          all written transparently in compliance with UK and EU law.
        </p>
      </section>

      {/* 📜 Legal Links Table */}
      <section className="legal-table w-[80%] mx-auto mb-20">
        <table className="w-full border-collapse border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
          <tbody>
            {legalLinks.map((item, index) => (
              <tr
                key={index}
                className="border-b border-neutral-800 hover:bg-neutral-800/40 transition-all"
              >
                <td className="p-4 font-semibold text-blue-400 w-1/3 text-left">
                  <Link
                    href={item.href}
                    className="hover:text-blue-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </td>
                <td className="p-4 text-gray-300 leading-relaxed text-left">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 🩶 Legal Info Table */}
      <section className="legal-table w-[80%] mx-auto mb-16">
        <table className="w-full border-collapse border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-b border-neutral-800 hover:bg-neutral-800/40 transition-all"
              >
                <td className="p-4 font-semibold text-blue-400 w-1/3 text-left">
                  {row.label}
                </td>
                <td className="p-4 text-gray-300 leading-relaxed text-left">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 🟢 Return Button */}
      <div className="text-center mt-16 mb-20">
        <Link
          href="/"
          style={baseButtonStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="inline-block hover:scale-105 transition-transform"
        >
          ← Return
        </Link>
      </div>
    </main>
  );
}
