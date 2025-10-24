"use client";

import FACSRealtimeOverlay from "../../components/FACS/FACSRealtimeOverlay";

import Image from "next/image";

export default function ProFACSAnalyzerPage() {
  const samplePortrait = "/private_images/images/joy.webp";

  return (
    <main className="min-h-screen bg-neutral-900 text-gray-200 py-16">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-3">
          EmotionDeck PRO - Live Emotion Mirror
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Analyse your face in real time and compare it with the AI portraits from EmotionDeck Universe.
        </p>
      </section>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <FACSRealtimeOverlay />
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-3 text-white">AI Reference - Joy</h3>
          <Image
            src={samplePortrait}
            alt="EmotionDeck Joy Portrait"
            width={341}
            height={512}
            className="rounded-xl border border-gray-700 shadow-lg"
          />
          <p className="mt-3 text-gray-400 text-sm text-center w-64">
            Your detected emotion is compared to this global portrait.  
            The closer the expression, the higher your emotional match.
          </p>
        </div>
      </div>
    </main>
  );
}
