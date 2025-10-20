"use client";

import React, { useEffect, useState } from "react";
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
    <div className="flex flex-col min-h-screen bg-neutral-900 text-white">
      <ClientProtector />

      <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-gray-800 shadow-[0_4px_8px_rgba(0,0,0,0.4)] pt-3 pb-2">
        <div className="max-w-7xl mx-auto px-4">
          <MobileMenu />
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="sticky bottom-0 z-40 border-t border-gray-800 bg-neutral-950/90 backdrop-blur-md py-5 text-center text-gray-400 text-sm leading-relaxed shadow-[0_-4px_8px_rgba(0,0,0,0.4)]">
        <div className="max-w-4xl mx-auto px-6">
          <DynamicFooterText />
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
          gtag('config', 'G-03QS8ZLH5G', { page_path: window.location.pathname });
        `}
      </Script>
    </div>
  );
}

// Footer text loader
function DynamicFooterText() {
  const [footerText, setFooterText] = useState("");

  useEffect(() => {
    const loadFooter = async () => {
      try {
        const res = await fetch("/content/global/footer.txt");
        if (!res.ok) throw new Error("Footer text not found");
        const text = await res.text();
        setFooterText(text);
      } catch {
        setFooterText("");
      }
    };
    loadFooter();
  }, []);

  return <p className="whitespace-pre-line">{footerText || "Loading..."}</p>;
}
