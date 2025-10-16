"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ViewPage() {
  const [hasAccess, setHasAccess] = useState(false);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const access = params.get("access");

    if (access === "pro2025") {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 7); // 7 days access
      const accessData = {
        token: "pro2025",
        expires: expiryDate.toISOString(),
      };
      localStorage.setItem("emotiondeck_access", JSON.stringify(accessData));
      setHasAccess(true);
    } else {
      const saved = localStorage.getItem("emotiondeck_access");
      if (saved) {
        const data = JSON.parse(saved);
        const now = new Date();
        const expiry = new Date(data.expires);
        if (data.token === "pro2025" && now < expiry) {
          setHasAccess(true);
        } else {
          setExpired(true);
        }
      }
    }
  }, []);

  if (expired) {
    return (
      <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold mb-4">Access Expired</h1>
        <p className="text-gray-400 mb-6">
          Your 7-day access has ended. Renew anytime to continue exploring the
          EmotionDeck PRO Collection.
        </p>
        <Link
          href="/pro/checkout"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full"
        >
          Renew Access (£5)
        </Link>
      </main>
    );
  }

  if (!hasAccess) {
    return (
      <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold mb-4">Access Required</h1>
        <p className="text-gray-400 mb-6">
          This collection is available for PRO users only.
        </p>
        <Link
          href="/pro/checkout"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full"
        >
          Unlock 7-Day Access (£5)
        </Link>
      </main>
    );
  }

  const images = [
    "/private_images/phase2/img1.jpg",
    "/private_images/phase2/img2.jpg",
    "/private_images/phase2/img3.jpg",
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-white px-6 py-20 text-center">
      <h1 className="text-3xl font-bold mb-8">EmotionDeck PRO Collection</h1>
      <p className="text-gray-400 mb-8">
        View-only access — expires in 7 days — EmotionDeck ©
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <div key={i} className="relative select-none pointer-events-none">
            <img
              src={src}
              alt={`PRO Image ${i + 1}`}
              draggable="false"
              className="rounded-2xl shadow-lg w-full object-cover"
              onContextMenu={(e) => e.preventDefault()}
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 font-bold text-4xl">
              EmotionDeck ©
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
