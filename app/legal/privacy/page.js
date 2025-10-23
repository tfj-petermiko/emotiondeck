"use client";

import { useState } from "react";
import Link from "next/link";
import Table from "../../components/Table/Table";
import { baseButtonStyle } from "../../styles/buttonStyle"; // ✅ shared button style

export default function CookiesPolicyPage() {
  const [hovered, setHovered] = useState(false);


  const data = [
    { label: "Purpose", value: "Explains how EmotionDeck handles and protects user data." },
    { label: "Data Collected", value: "Contact information, payment details (via PayPal), and basic technical analytics." },
    { label: "Legal Basis", value: "All data is processed in compliance with GDPR and UK Data Protection Law, based on consent and legitimate interest." },
    { label: "Data Retention", value: "Information is retained only as long as necessary to operate and improve the service." },
    { label: "Third Parties", value: "EmotionDeck integrates with PayPal for payments, Google Analytics for anonymous statistics, and Vercel for hosting." },
    { label: "Security", value: "Data is transmitted securely via HTTPS with strict access control and no local storage of personal details." },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-gray-300 font-sans py-16">
      {/* 🧾 Header */}
      <section className="text-center w-[80%] mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Privacy Policy — EmotionDeck
        </h1>
        <p className="text-gray-400 mb-4">
          Last updated: <strong>October 2025</strong>
        </p>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          EmotionDeck values your privacy. This policy outlines how we collect,
          use, and protect personal information in accordance with GDPR and UK
          Data Protection regulations.
        </p>
      </section>

      {/* 🩶 Legal Table */}
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
          style={baseButtonStyle(hovered)} // ✅ shared style from app/styles/buttonStyle.js
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
