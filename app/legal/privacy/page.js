"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function PrivacyPolicyPage() {
  const [hovered, setHovered] = useState(false);

  const data = [
    {
      label: "Purpose",
      value: "Explains how EmotionDeck handles and protects user data.",
    },
    {
      label: "Data Collected",
      value:
        "Contact information, payment details (via PayPal), and basic technical analytics.",
    },
    {
      label: "Legal Basis",
      value:
        "All data is processed in compliance with GDPR and UK Data Protection Law, based on consent and legitimate interest.",
    },
    {
      label: "Data Retention",
      value:
        "Information is retained only as long as necessary to operate and improve the service.",
    },
    {
      label: "Third Parties",
      value:
        "EmotionDeck integrates with PayPal for payments, Google Analytics for anonymous statistics, and Vercel for hosting.",
    },
    {
      label: "Security",
      value:
        "Data is transmitted securely via HTTPS with strict access control and no local storage of personal details.",
    },
  ];

  return (
    <main className="ed-legal-page">
      {/* Header */}
      <section className="ed-legal-header">
        <h1 className="ed-legal-title">Privacy Policy</h1>
        <p className="ed-legal-updated">
          Last updated: <strong>October 2025</strong>
        </p>
        <p className="ed-legal-intro">
          EmotionDeck values your privacy. This policy outlines how we collect,
          use, and protect personal information in accordance with GDPR and UK
          Data Protection regulations.
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
