"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { baseButtonStyle } from "../../styles/buttonStyle.js";

export default function CookiesPolicyPage() {
  const [hovered, setHovered] = useState(false);

  const data = [
    {
      label: "Purpose",
      value:
        "Explains how EmotionDeck uses cookies and similar technologies to improve the website’s functionality and user experience.",
    },
    {
      label: "What Are Cookies",
      value:
        "Cookies are small text files stored on your device when you visit a website. They help remember your preferences and enhance performance.",
    },
    {
      label: "Types of Cookies Used",
      value:
        "EmotionDeck uses essential cookies for site operation and analytics cookies to measure performance and improve content.",
    },
    {
      label: "Third-Party Cookies",
      value:
        "Some cookies are set by trusted third parties, including Google Analytics and PayPal, for secure payments and visitor insights.",
    },
    {
      label: "Duration",
      value:
        "Session cookies are deleted after you close your browser. Persistent cookies may remain on your device for up to 12 months.",
    },
    {
      label: "Control and Management",
      value:
        "You can disable or delete cookies through your browser settings. Some features of EmotionDeck may not function properly if cookies are disabled.",
    },
    {
      label: "Consent",
      value:
        "By using EmotionDeck, you consent to the use of cookies as described in this policy.",
    },
    {
      label: "Changes to This Policy",
      value:
        "We may update this Cookies Policy from time to time. Any changes will be reflected on this page.",
    },
  ];

  return (
    <main className="ed-legal-page">
      {/* Header */}
      <section className="ed-legal-header">
        <h1 className="ed-legal-title">Cookies Policy</h1>
        <p className="ed-legal-updated">
          Last updated: <strong>October 2025</strong>
        </p>
        <p className="ed-legal-intro">
          This Cookies Policy explains how <strong>EmotionDeck</strong> uses
          cookies and similar tracking technologies to provide a better
          experience, understand how visitors interact with the site, and ensure
          smooth performance.
        </p>
      </section>

      {/* 🍪 Legal Table */}
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
