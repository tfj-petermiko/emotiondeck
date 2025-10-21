import LegalTable from "../components/Legal/LegalTable";

export default function PrivacyPolicyPage() {
  const data = [
    { label: "Purpose", value: "Defines the terms and conditions for using the EmotionDeck website and its content." },
    { label: "Acceptance of Terms", value: "By accessing or using EmotionDeck, you agree to comply with these Terms of Use and the Privacy Policy." },
    { label: "Intellectual Property", value: "All images, text, and AI-generated artworks are owned by EmotionDeck and protected by international copyright law." },
    { label: "Permitted Use", value: "Content may only be used for personal, educational, or non-commercial purposes unless written permission is granted." },
    { label: "Prohibited Actions", value: "Users must not copy, distribute, modify, or attempt to hack or disrupt the site in any way." },
    { label: "Third-Party Services", value: "EmotionDeck integrates third-party services such as PayPal and Google Analytics, each governed by their own policies." },
    { label: "Liability Disclaimer", value: "EmotionDeck is provided 'as is' without warranties. We are not liable for any damages arising from its use." },
    { label: "Changes to Terms", value: "EmotionDeck may update these Terms occasionally. Continued use of the website after updates implies acceptance." },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-gray-300 font-sans py-16">
      <section className="text-center w-[80%] mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Terms of Use — EmotionDeck
        </h1>
        <p className="text-gray-400 mb-4">
          Last updated: <strong>October 2025</strong>
        </p>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          These Terms govern the use of <strong>EmotionDeck</strong> and outline
          the responsibilities of both the user and the creator.  
          Please read them carefully before viewing or purchasing any content.
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
