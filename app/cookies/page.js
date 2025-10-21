import LegalTable from "../components/Legal/LegalTable";

export default function PrivacyPolicyPage() {
  const data = [
    { label: "Purpose", value: "Explains how EmotionDeck uses cookies and similar technologies to improve the website’s functionality and user experience." },
    { label: "What Are Cookies", value: "Cookies are small text files stored on your device when you visit a website. They help remember your preferences and enhance performance." },
    { label: "Types of Cookies Used", value: "EmotionDeck uses essential cookies for site operation and analytics cookies to measure performance and improve content." },
    { label: "Third-Party Cookies", value: "Some cookies are set by trusted third parties, including Google Analytics and PayPal, for secure payments and visitor insights." },
    { label: "Duration", value: "Session cookies are deleted after you close your browser. Persistent cookies may remain on your device for up to 12 months." },
    { label: "Control and Management", value: "You can disable or delete cookies through your browser settings. Some features of EmotionDeck may not function properly if cookies are disabled." },
    { label: "Consent", value: "By using EmotionDeck, you consent to the use of cookies as described in this policy." },
    { label: "Changes to This Policy", value: "We may update this Cookies Policy from time to time. Any changes will be reflected on this page." },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-gray-300 font-sans py-16">
      {/* 🩶 Intro Section */}
      <section className="text-center w-[80%] mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Cookies Policy — EmotionDeck
        </h1>
        <p className="text-gray-400 mb-4">
          Last updated: <strong>October 2025</strong>
        </p>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          This Cookies Policy explains how <strong>EmotionDeck</strong> uses cookies
          and similar tracking technologies to provide a better experience,
          understand how visitors interact with the site, and ensure smooth performance.
        </p>
      </section>

      {/* 🍪 Legal Table */}
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
