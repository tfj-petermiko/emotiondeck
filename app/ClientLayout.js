"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import ClientProtector from "./ClientProtector";
import MobileMenu from "./components/MobileMenu/MobileMenu";

export default function ClientLayout({ children }) {
  useEffect(() => {
    const updateScrollState = () => {
      const html = document.documentElement;
      const body = document.body;
      const needsScroll = html.scrollHeight > window.innerHeight + 2;

      if (needsScroll) {
        html.classList.add("has-scroll");
        body.classList.add("has-scroll");
      } else {
        html.classList.remove("has-scroll");
        body.classList.remove("has-scroll");
      }
    };

    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    const observer = new MutationObserver(updateScrollState);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", updateScrollState);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-white">
      {/* 🧩 Client-side protection */}
      <ClientProtector />

      {/* 🧭 Sticky Header */}
      <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-gray-800 shadow-[0_4px_8px_rgba(0,0,0,0.4)] pt-3 pb-2">
        <div className="max-w-7xl mx-auto px-4">
          <MobileMenu />
        </div>
      </header>

      {/* 🧱 Main content (scrolls freely) */}
      <main className="flex-1 pt-[70px] pb-[90px] mt-[2px]">
        {children}
      </main>

      {/* 🧩 Sticky Footer (always visible, never hidden) */}
      <footer className="sticky bottom-0 z-40 border-t border-gray-800 bg-neutral-950/90 backdrop-blur-md py-5 text-center text-gray-400 text-sm leading-relaxed shadow-[0_-4px_8px_rgba(0,0,0,0.4)]">
        <div className="max-w-4xl mx-auto px-6">
          <DynamicFooterText />
        </div>
      </footer>

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
    </div>
  );
}

// 🩶 Dynamic footer text loader
function DynamicFooterText() {
  const [footerText, setFooterText] = useState("");

  useEffect(() => {
    const loadFooter = async () => {
      try {
        const res = await fetch("/content/global/footer.txt");
        if (!res.ok) throw new Error("Footer text not found");
        const text = await res.text();
        setFooterText(text);
      } catch (err) {
        console.error("⚠️ Error loading footer text:", err);
        setFooterText("");
      }
    };
    loadFooter();
  }, []);

  return <p className="whitespace-pre-line">{footerText || "Loading..."}</p>;
}
