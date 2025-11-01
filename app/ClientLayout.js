"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import ClientProtector from "./ClientProtector";
import MobileMenu from "./components/MobileMenu/MobileMenu";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [hydrated, setHydrated] = useState(false);

  // Prevent flicker before hydration
  useEffect(() => {
    const timer = setTimeout(() => {
      document.documentElement.classList.add("styled");
      document.body.classList.add("styled");
      setHydrated(true);
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  // Allow scroll only on /pro pages
  useEffect(() => {
    const body = document.body;
    const isProMain =
      pathname === "/pro" || pathname === "/pro/" || pathname === "/pro/index";
    if (isProMain) body.classList.add("allow-scroll");
    else body.classList.remove("allow-scroll");
  }, [pathname]);

  // Force dark palette override
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "force-gray-style";
    style.innerHTML = `
      [class*="bg-slate-900"],
      [style*="#0f172a"],
      [style*="rgb(15, 23, 42)"] {
        background-color: #1a1a1a !important;
        border-color: #2b2b2b !important;
        color-scheme: dark !important;
      }
      * {
        background-color: rgba(26, 26, 26, var(--bg-opacity, 1)) !important;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  if (!hydrated) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#0b0b0b",
          color: "#eee",
          transition: "opacity 0.25s ease-in-out",
          opacity: 0,
        }}
      />
    );
  }

  return (
    <div className="ed-layout" style={{ opacity: hydrated ? 1 : 0 }} suppressHydrationWarning>
      <ClientProtector />

      <header className="ed-header">
        <div className="ed-header-inner">
          <MobileMenu />
        </div>
      </header>

      <main className="ed-main">{children}</main>

      <footer className="ed-footer">
        <div className="ed-footer-inner">
          <p className="whitespace-pre-line">
            EmotionDeck © 2025 - See. Feel. Understand.
          </p>
        </div>
      </footer>

      {/* 🌍 Google Translate */}
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

      <div id="google_translate_element" className="ed-translate" />

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
