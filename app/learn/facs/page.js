"use client";

import FACSRealtimeOverlay from "../../components/FACS/FACSRealtimeOverlay";


export default function LearnFACSPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-gray-300 py-16">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-3">
          Learn & Grow - Facial Action Coding System (FACS)
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Discover how your face expresses emotions in real time.  
          The FACS system reveals which muscles activate during each emotion.
        </p>
      </section>

      <FACSRealtimeOverlay />

      <section className="mt-16 text-center text-gray-300 text-sm">
        <p>
          Learn how emotions move the human face - part of EmotionDeck Learn & Grow.
        </p>
      </section>
    </main>
  );
}
