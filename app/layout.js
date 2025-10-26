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
    <html
      lang="en"
      style={{
        backgroundColor: "#101010",
        color: "#eeeeee",
      }}
    >
      <head>
        {/* 🩶 Prevent white flash before hydration */}
        <meta name="theme-color" content="#101010" />
        <meta name="background-color" content="#101010" />
        <meta name="color-scheme" content="dark" />

        {/* ✅ Early inline style to force dark background instantly */}
        <style>{`
          html, body {
            background-color: #101010 !important;
            color: #eeeeee !important;
            font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          }
        `}</style>

        {/* ✅ Load global styles */}
        <link rel="stylesheet" href="/globals.css" />
      </head>

      <body
        style={{
          backgroundColor: "#101010",
          color: "#eeeeee",
        }}
        className="bg-neutral-900 text-white min-h-screen overflow-visible antialiased flex flex-col select-none"
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
