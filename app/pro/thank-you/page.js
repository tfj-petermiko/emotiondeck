import { Suspense } from "react";
import ThankYouClient from "./ThankYouClient";

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  alternates: { canonical: "https://emotiondeck.com/pro/thank-you" },
  title: "EmotionDeck PRO - Thank You for Your Purchase",
  description:
    "Your EmotionDeck PRO purchase was successful. You now have full access to the selected emotional portrait collection for 7 days.",
  openGraph: {
    title: "EmotionDeck PRO - Purchase Successful",
    description:
      "Thank you for unlocking EmotionDeck PRO. Start exploring your emotional portrait collection now.",
    url: "https://emotiondeck.com/pro/thank-you",
    images: [
      {
        url: "https://emotiondeck.com/private_images/meta/pro_thankyou.webp",
        width: 1200,
        height: 630,
        alt: "EmotionDeck PRO Thank You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck PRO - Purchase Successful",
    description:
      "Your EmotionDeck PRO access is now active. Explore your purchased emotional portraits.",
    images: ["https://emotiondeck.com/private_images/meta/pro_thankyou.webp"],
  },
};

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="text-center mt-20 text-gray-400 animate-pulse">
          🔓 Loading your confirmation...
        </div>
      }
    >
      <ThankYouClient />
    </Suspense>
  );
}
