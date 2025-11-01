"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { baseButtonStyle } from "../styles/buttonStyle";

export default function LegalClient() {
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
    {
      label: "Payments & Security",
      value: "Learn how EmotionDeck handles transactions securely through PayPal.",
      href: "/legal/payments",
    },
  ];

  const data = [
    {
      label: "Compliance",
      value:
        "All documents align with UK GDPR and EU data protection standards.",
    },
    {
      label: "Hosting",
      value: "EmotionDeck is hosted on Vercel (EU data centres).",
    },
    {
      label: "Transparency",
      value:
        "We strive for clear, accessible, and user-friendly legal information.",
    },
  ];

  return (
    <main className="ed-legal-page">
      <section className="ed-legal-header">
        <h1 className="ed-legal-title">Legal Information</h1>
        <p className="ed-legal-updated">
          Last updated: <strong>October 2025</strong>
        </p>
        <p className="ed-legal-intro">
          Welcome to the legal section of EmotionDeck. Access our Privacy
          Policy, Terms, Cookies, and Payment details written transparently in
          compliance with UK and EU law.
        </p>
      </section>

      {/* 📜 Legal Links Table */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 0px 20px rgba(255,255,255,0.08)",
        }}
        className="ed-legal-table"
      >
        <table>
          <tbody>
            {legalLinks.map((item, index) => (
              <tr key={index} className="ed-legal-row">
                <td className="ed-legal-label">
                  <Link
                    href={item.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </td>
                <td className="ed-legal-value">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.section>

      {/* 🩶 General Legal Info */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 0px 20px rgba(255,255,255,0.08)",
        }}
        className="ed-legal-table"
      >
        <table>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="ed-legal-row">
                <td className="ed-legal-label">{row.label}</td>
                <td className="ed-legal-value">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.section>

      {/* 🟢 Return Button */}
      <div className="ed-legal-return">
        <Link
          href="/"
          style={baseButtonStyle(hovered)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="inline-block hover:scale-105 transition-transform"
        >
          Back
        </Link>
      </div>
    </main>
  );
}
