"use client";

import { useEffect } from "react";
import Script from "next/script";
import ClientProtector from "./ClientProtector";
import MobileMenu from "./components/MobileMenu";

export default function ClientLayout({ children }) {
  // 🧩 Initialise Google Translate safely after window is ready
  useEffect(() => {
    const initGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "pl,en,de,fr,it,es,pt,ru,ja,zh-CN",
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          },
          "google_translate_element"
        );
      }
    };

    // Wait for script to load fully
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    window.googleTranslateElementInit = initGoogleTranslate;
    document.body.appendChild(script);

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-white">
      {/* Client-side security layer */}
      <ClientProtector />

      {/* Sticky header */}
      <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-gray-800 shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
        <MobileMenu />
      </header>

      {/* Scrollable main section */}
      <main className="flex-1 overflow-y-auto">{children}</main>

      {/* Sticky footer */}
      <footer className="sticky bottom-0 z-40 border-t border-gray-800 bg-neutral-950/90 backdrop-blur-sm py-6 text-center text-gray-400 text-sm leading-relaxed shadow-[0_-4px_8px_rgba(0,0,0,0.4)]">
        <div className="max-w-4xl mx-auto px-6">
          <p>EmotionDeck © 2025 — See. Feel. Understand.</p>
        </div>
      </footer>

      {/* Google Analytics */}
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

      {/* Google Translate container */}
      <div
        id="google_translate_element"
        style={{
          position: "fixed",
          top: "14px",
          right: "14px",
          zIndex: 100000,
          backgroundColor: "rgba(20, 20, 20, 0.95)",
          color: "#f5f5f5",
          borderRadius: "10px",
          padding: "6px 10px",
          fontSize: "0.9rem",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
        }}
      />
    </div>
  );
}
