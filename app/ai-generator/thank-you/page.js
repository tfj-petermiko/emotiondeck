"use client";

export default function AIGeneratorThankYou() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white flex items-center justify-center px-6">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 text-center max-w-lg">
        <h1 className="text-3xl font-bold text-emerald-400 mb-4">🎉 Thank You!</h1>
        <p className="text-gray-300 mb-4">
          Your payment was successful. You now have <strong>10 available generations</strong> in the EmotionDeck AI Generator.
        </p>
        <p className="text-gray-400">
          Each click on “Generate Portrait” uses one generation credit.
        </p>
        <button
          onClick={() => (window.location.href = "/ai-generator")}
          className="mt-6 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full text-white transition"
        >
          Go to Generator →
        </button>
      </div>
    </main>
  );
}
