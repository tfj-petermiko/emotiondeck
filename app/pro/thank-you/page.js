"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const phase = searchParams.get("phase") || "3";
  const [phaseInfo, setPhaseInfo] = useState({ title: "", access: "" });
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (phase === "3") {
      setPhaseInfo({
        title: "Phase 3 — Young Adults",
        access: "7-day access has been activated for your account.",
      });
    } else if (phase === "4") {
      setPhaseInfo({
        title: "Phase 4 — Children Collection",
        access: "7-day access has been activated for your account.",
      });
    }

    setCurrentUrl(window.location.href);
  }, [phase]);

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("✅ Link has been copied! Save it somewhere safe for future access.");
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-white flex items-center justify-center px-6 select-none">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 w-full max-w-lg text-center select-none">

        <h1 className="text-2xl font-semibold mb-2 select-none">✅
          {phaseInfo.title}
        </h1>

        <p className="text-gray-400 mb-8 select-none">{phaseInfo.access}</p>

        <div className="bg-gray-700 rounded-xl p-4 mb-6 text-sm text-gray-300 select-none">
          <p className="mb-2 select-none">
            💾 Please <strong>save this link</strong> — it is your personal access page.
          </p>

          <p className="break-all text-emerald-400 mb-3 select-none">
            {currentUrl}
          </p>

          <button
            onClick={copyLink}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm transition select-none"
          >
            Copy Link
          </button>
        </div>

        <p className="text-sm text-gray-500 select-none">
          You can open your collection anytime using the saved link above.
        </p>
        <p className="text-sm text-gray-500 mb-2 select-none">
          Access will expire automatically after seven days.
        </p>
        <p className="text-sm text-gray-500 select-none">
          A PayPal receipt has been sent to your email as proof of purchase.
        </p>
      </div>
    </main>
  );
}
