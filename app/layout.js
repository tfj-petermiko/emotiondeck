"use client";

import "./globals.css";
import { useEffect } from "react";
import ClientLayout from "./ClientLayout";
import DynamicHead from "./components/DynamicHead";

export default function RootLayout({ children }) {
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
        const text = node.nodeValue?.trim();
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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google" content="notranslate" />
        <title>EmotionDeck</title>
      </head>

      <body className="bg-neutral-900 text-white min-h-screen antialiased flex flex-col select-none overflow-visible">
        <DynamicHead />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
