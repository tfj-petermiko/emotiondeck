"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import ClientProtector from "./ClientProtector";
import MobileMenu from "./components/MobileMenu/MobileMenu";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // 🧩 Allow scroll for PRO main page
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

  // 🧠 Number protection (moved from layout.js)
  useEffect(() => {
    const protectNumbers = () => {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );

      let node;
      while ((node = walker.nextNode())) {
        const text = node.nodeValue.trim();
        if (!text || !/\d/.test(text)) continue;

        const parent = node.parentElement;
        if (
          !parent ||
          ["SCRIPT", "STYLE", "META", "HEAD", "TITLE", "NOSCRIPT"].includes(
            parent.tagName
          )
        )
          continue;

        if (!parent.hasAttribute("data-protected-number")) {
          parent.setAttribute("data-protected-number", "true");
          parent.setAttribute("translate", "no");
          parent.classList.add("no-freeze-number");
        }
      }
    };

    protectNumbers();
    const observer = new MutationObserver(() => protectNumbers());
    observer.observe(document.body, { childList: true, subtree: true });
    const interval = setInterval(protectNumbers, 3000);

    console.log("✅ EmotionDeck number protection active (safe global version)");

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-white">
      <ClientProtector />

      {/* 🧭 Sticky Header */}
      <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-gray-800 shadow-[0_4px_8px_rgba(0,0,0,0.4)] pt-3 pb-2">
        <div className="max-w-7xl mx-auto px-4">
          <MobileMenu />
        </div>
      </header>

      {/* 📄 Main content */}
      <main className="flex-1">{children}</main>

      {/* 🧩 Static Footer */}
      <footer className="sticky bottom-0 z-40 border-t border-gray-800 bg-neutral-950/90 backdrop-blur-md py-5 text-center text-gray-400 text-sm leading-relaxed shadow-[0_-4px_8px_rgba(0,0,0,0.4)]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="whitespace-pre-line">
            EmotionDeck © 2025 - See. Feel. Understand.
          </p>
        </div>
      </footer>

      {/* 🌐 Google Translate Widget */}
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
                includedLanguages: 'en,pl,es,fr,de,it,pt,ru,zh-CN,ja,ko,ar,tr,nl,sv,cs,uk,hi,th,ro,el',
                layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
              },
              'google_translate_element'
            );
          }
        `}
      </Script>

      {/* 🔘 Translator container */}
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
          gtag('config', 'G-03QS8ZLH5G', { page_path: window.location.pathname });
        `}
      </Script>
    </div>
  );
}
