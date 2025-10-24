"use client";

import { useState } from "react";
import Link from "next/link";
import { baseButtonStyle } from "../../styles/buttonStyle"; // ✅ shared button style

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
    <main className="min-h-screen bg-neutral-900 text-gray-300 font-sans py-16">
      {/* 🧾 Header */}
      <section className="text-center w-[80%] mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Payments & Security — EmotionDeck
        </h1>
        <p className="text-gray-400 mb-4">
          Last updated: <strong>October 2025</strong>
        </p>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          EmotionDeck ensures all payments are processed securely through PayPal.
          We never store credit card details, and every transaction is encrypted
          and handled in full compliance with GDPR and UK financial standards.
        </p>
      </section>

      {/* 💳 Payments Info Table */}
      <section className="legal-table w-[80%] mx-auto">
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
          href="/legal"
          style={baseButtonStyle(hovered)} // ✅ shared style
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="inline-block hover:scale-105 transition-transform"
        >
          ← Back
        </Link>
      </div>
    </main>
  );
}
