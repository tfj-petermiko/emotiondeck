"use client";

import "./globals.css";
import { useEffect } from "react";
import ClientLayout from "./ClientLayout";
import DynamicHead from "./components/DynamicHead";

export default function RootLayout({ children }) {
  useEffect(() => {
    // 🧠 Protect numeric text from Google Translate freezing (safe version)
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

        // skip empty nodes or ones without digits
        if (!text || !/\d/.test(text)) continue;

        const parent = node.parentElement;

        // skip irrelevant tags that caused home page issues
        if (
          !parent ||
          ["SCRIPT", "STYLE", "META", "HEAD", "TITLE", "NOSCRIPT"].includes(
            parent.tagName
          )
        )
          continue;

        // apply safe translate protection
        if (!parent.hasAttribute("data-protected-number")) {
          parent.setAttribute("data-protected-number", "true");
          parent.setAttribute("translate", "no");
          parent.classList.add("no-freeze-number");
        }
      }
    };

    // run once when DOM ready
    protectNumbers();

    // watch for DOM updates (e.g. React renders, quiz updates)
    const observer = new MutationObserver(() => {
      protectNumbers();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // recheck periodically to catch Google Translate async updates
    const interval = setInterval(protectNumbers, 3000);

    console.log("✅ EmotionDeck number protection active (safe global version)");

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>EmotionDeck — Explore Human Emotion</title>
        <meta
          name="description"
          content="EmotionDeck helps you learn to recognise, interpret, and understand human emotion through visual learning."
        />
        <meta name="google" content="notranslate" />
      </head>

      <body className="bg-neutral-900 text-white min-h-screen overflow-visible antialiased flex flex-col select-none">
        {/* 🧠 Dynamic global metadata system */}
        <DynamicHead />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
