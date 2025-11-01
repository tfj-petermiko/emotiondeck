"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { baseButtonStyle } from "../../styles/buttonStyle.js";

export default function PaymentsPolicyPage() {
  const [hovered, setHovered] = useState(false);

  const data = [
    {
      label: "Payment Provider",
      value:
        "All EmotionDeck transactions are securely processed through PayPal (Europe) S.à r.l. et Cie, S.C.A., a licensed and regulated financial institution under Luxembourg banking law.",
    },
    {
      label: "Security",
      value:
        "Transactions are encrypted and protected by advanced SSL/TLS standards. EmotionDeck does not store, process, or have access to any card or banking details.",
    },
    {
      label: "Data Handling",
      value:
        "All payment information is handled exclusively by PayPal. EmotionDeck only receives confirmation of successful payments and does not collect or retain sensitive financial data.",
    },
    {
      label: "GDPR Compliance",
      value:
        "EmotionDeck processes payment-related information strictly for transaction verification, under the legal basis of 'legitimate interest' and in full compliance with GDPR and UK Data Protection Law.",
    },
    {
      label: "Access Type",
      value:
        "Access to EmotionDeck PRO is time-limited or resource-limited, depending on the selected plan or purchase type. Each purchase grants non-transferable access to specific digital content or functionality.",
    },
    {
      label: "Refunds",
      value:
        "Refunds are available in cases of technical errors, duplicate transactions, or other valid circumstances. Requests can be submitted via the official contact form available on the EmotionDeck website.",
    },
    {
      label: "Third Parties",
      value:
        "PayPal acts as the sole intermediary for payments. EmotionDeck also uses Vercel for secure hosting and Google Analytics for anonymous usage statistics.",
    },
    {
      label: "Transparency",
      value:
        "EmotionDeck ensures all payment and account data are processed transparently, securely, and in accordance with the principles of fairness and accountability.",
    },
  ];

  return (
    <main className="ed-legal-page">
      {/* Header */}
      <section className="ed-legal-header">
        <h1 className="ed-legal-title">Payments & Security</h1>
        <p className="ed-legal-updated">
          Last updated: <strong>October 2025</strong>
        </p>
        <p className="ed-legal-intro">
          EmotionDeck ensures all payments are processed securely through PayPal.
          We never store credit card details, and every transaction is encrypted
          and handled in full compliance with GDPR and UK financial standards.
        </p>
      </section>

      {/* 💳 Payments Info Table */}
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
