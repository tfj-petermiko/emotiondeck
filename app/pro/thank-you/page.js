"use client";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Thank you for your purchase! 🙏</h1>
      <p className="text-gray-300 max-w-md mb-8">
        Your payment was successful. You now have <strong>7-day view-only
        access</strong> to the EmotionDeck PRO Collection.
      </p>
      <Link
        href="/pro/view?access=pro2025"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition"
      >
        Access PRO Collection
      </Link>
    </main>
  );
}
