"use client";

import "./globals.css";
import ClientLayout from "./ClientLayout";
import DynamicHead from "./components/DynamicHead";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>EmotionDeck — Explore Human Emotion</title>
        <meta
          name="description"
          content="EmotionDeck helps you learn to recognise, interpret, and understand human emotion through visual learning."
        />
      </head>

      <body className="bg-neutral-900 text-white min-h-screen overflow-visible antialiased flex flex-col select-none">
        {/* 🧠 Dynamic global metadata system */}
        <DynamicHead />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
