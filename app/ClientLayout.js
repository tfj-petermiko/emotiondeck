"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import ClientProtector from "./ClientProtector";
import MobileMenu from "./components/MobileMenu/MobileMenu";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;
    const isProMain =
      pathname === "/pro" || pathname === "/pro/" || pathname === "/pro/index";

    if (isProMain) {
      body.classList.add("allow-scroll");
    } else {
      body.classList.remove("allow-scroll");
    }
  }, [pathname]);

  return (
    <div
      className="flex flex-col min-h-screen text-white"
      style={{
        background: "linear-gradient(to bottom, #0b0b0b, #111111, #0b0b0b)",
      }}
      suppressHydrationWarning
    >
      <ClientProtector />

      <header className="sticky top-0 z-50 bg-neutral-900/90 backdrop-blur-md border-b border-gray-800 shadow-[0_4px_8px_rgba(0,0,0,0.4)] py-2">
        <div className="max-w-7xl mx-auto px-4">
          <MobileMenu />
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="sticky bottom-0 z-40 border-t border-gray-800 bg-neutral-950/90 backdrop-blur-md py-5 text-center text-gray-400 text-sm leading-relaxed shadow-[0_-4px_8px_rgba(0,0,0,0.4)]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="whitespace-pre-line">
            EmotionDeck © 2025 - See. Feel. Understand.
          </p>
        </div>
      </footer>

      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              {
                pageLanguage: 'en',
                includedLanguages:
                  'en,pl,es,fr,de,it,pt,ru,zh-CN,ja,ko,ar,tr,nl,sv,cs,uk,hi,th,ro,el',
                layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
              },
              'google_translate_element'
            );
          }
        `}
      </Script>

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

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-03QS8ZLH5G"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-03QS8ZLH5G', { page_path: window.location.pathname });
        `}
      </Script>
    </div>
  );
}
