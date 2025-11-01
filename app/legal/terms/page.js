"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function TermsOfUsePage() {
  const [hovered, setHovered] = useState(false);

  const data = [
    {
      label: "Purpose",
      value:
        "Defines the terms and conditions for using the EmotionDeck website and its content.",
    },
    {
      label: "Acceptance of Terms",
      value:
        "By accessing or using EmotionDeck, you agree to comply with these Terms of Use and the Privacy Policy.",
    },
    {
      label: "Intellectual Property",
      value:
        "All images, text, and AI-generated artworks are owned by EmotionDeck and protected by international copyright law.",
    },
    {
      label: "Permitted Use",
      value:
        "Content may only be used for personal, educational, or non-commercial purposes unless written permission is granted.",
    },
    {
      label: "Prohibited Actions",
      value:
        "Users must not copy, distribute, modify, or attempt to hack or disrupt the site in any way.",
    },
    {
      label: "Third-Party Services",
      value:
        "EmotionDeck integrates third-party services such as PayPal and Google Analytics, each governed by their own policies.",
    },
    {
      label: "Liability Disclaimer",
      value:
        "EmotionDeck is provided 'as is' without warranties. We are not liable for any damages arising from its use.",
    },
    {
      label: "Changes to Terms",
      value:
        "EmotionDeck may update these Terms occasionally. Continued use of the website after updates implies acceptance.",
    },
  ];

  return (
    <main className="ed-legal-page">
      {/* Header */}
      <section className="ed-legal-header">
        <h1 className="ed-legal-title">Terms of Use</h1>
        <p className="ed-legal-updated">
          Last updated: <strong>October 2025</strong>
        </p>
        <p className="ed-legal-intro">
          These Terms govern the use of <strong>EmotionDeck</strong> and outline
          the responsibilities of both the user and the creator. Please read
          them carefully before viewing or purchasing any content.
        </p>
      </section>

      {/* Legal Table */}
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
            {data.map((row, index) => (
              <tr key={index} className="ed-legal-row">
                <td className="ed-legal-label">{row.label}</td>
                <td className="ed-legal-value">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.section>

      {/* Return Button */}
      <div className="ed-legal-return">
        <Link
          href="/legal"
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
