import "./globals.css";
import ClientLayout from "./ClientLayout";
import Script from "next/script";

export const metadata = {
  title: {
    default: "EmotionDeck — See. Feel. Understand.",
    template: "%s | EmotionDeck",
  },
  description:
    "EmotionDeck helps you learn to recognise, interpret, and understand human emotion through visual learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white min-h-screen antialiased flex flex-col select-none">
        {/* ✅ Number protection runs client-side via Script */}
        <Script id="protect-numbers" strategy="afterInteractive">
          {`
            (function() {
              function protectNumbers() {
                const walker = document.createTreeWalker(
                  document.body,
                  NodeFilter.SHOW_TEXT,
                  null,
                  false
                );
                let node;
                while ((node = walker.nextNode())) {
                  const text = node.nodeValue.trim();
                  if (!text || !/\\d/.test(text)) continue;
                  const parent = node.parentElement;
                  if (!parent || ["SCRIPT","STYLE","META","HEAD","TITLE","NOSCRIPT"].includes(parent.tagName)) continue;
                  if (!parent.hasAttribute("data-protected-number")) {
                    parent.setAttribute("data-protected-number", "true");
                    parent.setAttribute("translate", "no");
                    parent.classList.add("no-freeze-number");
                  }
                }
              }
              protectNumbers();
              const observer = new MutationObserver(protectNumbers);
              observer.observe(document.body, { childList: true, subtree: true });
              setInterval(protectNumbers, 3000);
              console.log("✅ EmotionDeck number protection active");
            })();
          `}
        </Script>

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
