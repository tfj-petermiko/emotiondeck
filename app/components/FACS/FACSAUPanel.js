"use client";

import { motion } from "framer-motion";

/**
 * 🧠 EmotionDeck — FACS AU Monitor
 * ---------------------------------
 * Displays active Facial Action Units (AUs) based on the detected emotion.
 * Used alongside FACSRealtimeOverlay.
 */
export default function FACSAUPanel({ emotion }) {
  // 🎭 Mapping of emotions → Facial Action Units (FACS)
  const emotionToAUs = {
    happy: [
      { code: "AU6", name: "Cheek Raiser" },
      { code: "AU12", name: "Lip Corner Puller" },
    ],
    sad: [
      { code: "AU1", name: "Inner Brow Raiser" },
      { code: "AU4", name: "Brow Lowerer" },
      { code: "AU15", name: "Lip Corner Depressor" },
    ],
    angry: [
      { code: "AU4", name: "Brow Lowerer" },
      { code: "AU5", name: "Upper Lid Raiser" },
      { code: "AU7", name: "Lid Tightener" },
      { code: "AU23", name: "Lip Tightener" },
    ],
    fearful: [
      { code: "AU1", name: "Inner Brow Raiser" },
      { code: "AU2", name: "Outer Brow Raiser" },
      { code: "AU5", name: "Upper Lid Raiser" },
      { code: "AU20", name: "Lip Stretcher" },
      { code: "AU26", name: "Jaw Drop" },
    ],
    surprised: [
      { code: "AU1", name: "Inner Brow Raiser" },
      { code: "AU2", name: "Outer Brow Raiser" },
      { code: "AU5", name: "Upper Lid Raiser" },
      { code: "AU26", name: "Jaw Drop" },
    ],
    disgusted: [
      { code: "AU9", name: "Nose Wrinkler" },
      { code: "AU10", name: "Upper Lip Raiser" },
    ],
    neutral: [],
  };

  const activeAUs = emotionToAUs[emotion?.toLowerCase()] || [];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-[300px] bg-neutral-950/70 border border-gray-800 rounded-2xl p-4 ml-6 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
    >
      <h3 className="text-lg font-semibold text-white mb-3 text-center">
        Facial Action Units (FACS)
      </h3>

      {activeAUs.length > 0 ? (
        <ul className="space-y-2">
          {activeAUs.map((au) => (
            <motion.li
              key={au.code}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-between text-sm text-gray-300 bg-neutral-800/50 px-3 py-2 rounded-lg border border-gray-700"
            >
              <span className="font-mono text-emerald-400">{au.code}</span>
              <span>{au.name}</span>
            </motion.li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm text-center italic">
          No active AUs detected.
        </p>
      )}
    </motion.div>
  );
}
