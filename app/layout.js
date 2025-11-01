import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "EmotionDeck - See. Feel. Understand.",
  description:
    "EmotionDeck helps you learn to recognise, interpret, and understand human emotion through visual learning.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: "#0b0b0b", color: "#eee" }}>
      <head>
        {/* 🕶️ Prevent white flash before Tailwind loads */}
        <style>{`
          html, body {
            background-color: #0b0b0b !important;
            color: #eeeeee !important;
          }
        `}</style>
      </head>

      <body
        style={{
          backgroundColor: "#0b0b0b",
          color: "#eee",
        }}
        className="bg-neutral-900 text-white min-h-screen overflow-visible antialiased flex flex-col select-none"
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
