import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "EmotionDeck - See. Feel. Understand.",
  description:
    "EmotionDeck helps you learn to recognise, interpret, and understand human emotion through visual learning.",
  icons: {
    icon: "/favicon.ico", // ✅ global favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white min-h-screen overflow-visible antialiased flex flex-col select-none">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
