import "./globals.css";
import Script from "next/script";
import ClientProtector from "./ClientProtector"; // ✅ client-side security
import MobileMenu from "./components/MobileMenu"; // ✅ global navigation

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  alternates: { canonical: "https://emotiondeck.com" },
  title: "EmotionDeck — Train Your Perception. Understand Human Emotion.",
  description:
    "EmotionDeck helps you learn to recognise, interpret, and understand human emotion through subtle facial expressions, mindful observation, and guided visual learning.",
  keywords:
    "EmotionDeck, emotion recognition, facial expressions, empathy, emotion perception, learn emotions, human emotion training, psychology, mindfulness, emotional intelligence",
  verification: {
    google: "IDzJ4Cn66z4WCWBw3l2BI6IRKH-POLMXrDzfDsRjGwc",
  },
  openGraph: {
    title: "EmotionDeck — Train Your Perception. Understand Human Emotion.",
    description:
      "Explore the full EmotionDeck visual learning platform — perceive and understand human emotions through detailed facial expressions and mindful observation.",
    url: "https://emotiondeck.com",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview-main.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck main preview image",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck — Train Your Perception. Understand Human Emotion.",
    description:
      "Train your perception and understand subtle human expressions with the EmotionDeck visual learning platform.",
    images: ["https://emotiondeck.com/preview-main.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white min-h-screen overflow-visible antialiased flex flex-col select-none">
        {/* 🧱 Client-side security layer */}
        <ClientProtector />

        {/* 🍔 Global Mobile Menu */}
        <MobileMenu />

        {/* 📊 Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-03QS8ZLH5G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-03QS8ZLH5G', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* 🌍 Google Translate Widget */}
        <div
          id="google_translate_element"
          style={{
            position: "fixed",
            top: "12px",
            right: "12px",
            zIndex: 9999,
            backgroundColor: "rgba(23, 23, 23, 0.85)",
            color: "#f5f5f5",
            borderRadius: "10px",
            padding: "4px 8px",
            fontSize: "0.9rem",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
          }}
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            window.googleTranslateElementInit = function() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'pl,en,de,fr,it,es,pt,ru,ja,zh-CN',
                layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
              }, 'google_translate_element');
            };
          `}
        </Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        {/* 🧠 Main Page Content */}
        <main className="flex-grow">{children}</main>

{/* 🌐 Footer */}
<footer className="border-t border-gray-800 bg-neutral-950/80 backdrop-blur-sm py-20 text-center text-gray-400 text-sm leading-relaxed mt-32">
  <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
    <div className="text-gray-500 text-center space-y-1">
      <p>EmotionDeck © 2025 — See. Feel. Understand.</p>
      <br />
      <br />
    </div>
  </div>
</footer>

      </body>
    </html>
  );
}
