import LegalTable from "../components/Legal/LegalTable";

export default function PrivacyPolicyPage() {
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
      <section className="legal-table">
        <table>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.label}</td>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
