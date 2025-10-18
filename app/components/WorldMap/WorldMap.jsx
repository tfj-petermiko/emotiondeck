"use client";
import { motion } from "framer-motion";
import { useState } from "react";

/* =========================================
   🌍 EMOTIONDECK WORLD MAP v2.6 — Minimal Circle Portraits (200 px max)
   ========================================= */

export default function WorldMap() {
  const [hovered, setHovered] = useState(null);

  // 🌐 12 Regions (shared placeholder image)
  const regions = [
    { name: "South Asian", coords: [80, 25], color: "#86efac", image: "/private_images/free/phase_1/Anticipation_European_Adult_Female.webp" },
    { name: "Central Asian", coords: [70, 45], color: "#f472b6", image: "/private_images/free/phase_1/Anticipation_European_Adult_Female.webp" },
    { name: "East Asian", coords: [110, 35], color: "#4ade80", image: "/private_images/free/phase_1/Anticipation_European_Adult_Female.webp" },
    { name: "European", coords: [15, 50], color: "#34d399", image: "/private_images/free/phase_1/Anticipation_European_Adult_Female.webp" },
    { name: "Middle Eastern", coords: [45, 30], color: "#fde047", image: "/private_images/free/phase_1/Anticipation_European_Adult_Female.webp" },
    { name: "North African", coords: [10, 30], color: "#fb923c", image: "/private_images/free/phase_1/Anticipation_European_Adult_Female.webp" },
    { name: "Sub-Saharan African", coords: [25, -5], color: "#facc15", image: "/private_images/free/phase_1/Anticipation_European_Adult_Female.webp" },
    { name: "North American", coords: [-100, 40], color: "#60a5fa", image: "/private_images/free/phase_1/Anticipation_European_Adult_Female.webp" },
    { name: "South American", coords: [-60, -15], color: "#fcd34d", image: "/private_images/free/phase_1/Anticipation_European_Adult_Female.webp" },
    { name: "Native American", coords: [-70, 10], color: "#a78bfa", image: "/private_images/free/phase_1/Anticipation_European_Adult_Female.webp" },
    { name: "Australian Aboriginal", coords: [135, -25], color: "#c084fc", image: "/private_images/free/phase_1/Anticipation_European_Adult_Female.webp" },
    { name: "Polynesian", coords: [-160, -15], color: "#38bdf8", image: "/private_images/free/phase_1/Anticipation_European_Adult_Female.webp" },
  ];

  // 🧭 Longitude/latitude → map coordinates
  const project = ([lon, lat]) => [(lon + 180) * 5.4, (90 - lat) * 5.6];

  // 💫 Pulsing animation
  const pulse = {
    scale: [1, 1.3, 1],
    opacity: [0.8, 1, 0.8],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <section
      className="relative w-screen h-screen overflow-hidden text-white"
      style={{
        background: "linear-gradient(to bottom, #0b0b0b, #111111, #0b0b0b)",
      }}
    >
      {/* 🏷️ Title */}
      <div className="absolute top-8 left-0 w-full text-center z-50">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-wide text-gray-100 drop-shadow-lg">
          One World, Many Faces
        </h2>
      </div>

      {/* 🌍 Map with hotspots */}
      <svg
        viewBox="0 0 2000 1001"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 w-full h-full"
      >
        {/* Base Map */}
        <image
          href="/WorldMap.svg"
          width="2000"
          height="1001"
          opacity="0.55"
          style={{ filter: "brightness(0.65)" }}
        />

        {/* Hotspot Pulses */}
        {regions.map((r) => {
          const [cx, cy] = project(r.coords);
          return (
            <motion.g key={r.name}>
              <motion.circle
                cx={cx}
                cy={cy}
                r={22}
                fill={r.color}
                opacity={0.15}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.25, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx={cx}
                cy={cy}
                r={10}
                fill={r.color}
                className="cursor-pointer"
                animate={pulse}
                whileHover={{
                  scale: 2,
                  filter: "drop-shadow(0 0 12px rgba(255,255,255,0.8))",
                }}
                onMouseEnter={() => setHovered(r)}
                onMouseLeave={() => setHovered(null)}
              />
            </motion.g>
          );
        })}
      </svg>

      {/* 🟣 Circular Portrait Tooltip (max 200 px) */}
      {hovered && (
        <motion.div
          className="absolute z-50 text-center pointer-events-none"
          style={{
            left: `${(hovered.coords[0] + 180) * 5.4}px`,
            top: `${(90 - hovered.coords[1]) * 5.6 - 140}px`,
            transform: "translate(-50%, 0)",
          }}
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div
            className="rounded-full overflow-hidden shadow-xl border border-neutral-800 mx-auto"
            style={{
              width: "200px",
              height: "200px",
              background: "#111",
              boxShadow: "0 0 15px rgba(255,255,255,0.08)",
            }}
          >
            <motion.img
              src={hovered.image}
              alt="Portrait"
              className="rounded-full"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.95) contrast(1.05)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
