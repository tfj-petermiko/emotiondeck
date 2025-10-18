"use client";
import { motion } from "framer-motion";
import { useState } from "react";

/* =========================================
   🌍 EMOTIONDECK WORLD MAP v8.0 — One Country, One Emotion
   ========================================= */

export default function WorldMap() {
  const [hovered, setHovered] = useState(null);

  // 🎨 Fixed 5-colour palettes
  const palettes = {
    northAmerica: ["#60a5fa", "#93c5fd", "#a5b4fc", "#fcd34d", "#38bdf8"],
    southAmerica: ["#fbbf24", "#fb7185", "#f87171", "#fde047", "#facc15"],
    europe: ["#34d399", "#a78bfa", "#4ade80", "#86efac", "#22d3ee"],
    africa: ["#fbbf24", "#fcd34d", "#84cc16", "#f87171", "#10b981"],
    asia: ["#34d399", "#f97316", "#84cc16", "#22d3ee", "#a78bfa"],
    oceania: ["#c084fc", "#a855f7", "#9333ea", "#d8b4fe", "#e879f9"],
  };

  const pick = (palette, i) => palette[i % palette.length];

  const regions = [
    // 🇺🇸 NORTH AMERICA
    { name: "Canada", coords: [-100, 55], color: pick(palettes.northAmerica, 0), image: "/private_images/worldmap/OneEmotion_Serenity_Canada_Male_Adult.webp" },
    { name: "USA", coords: [-95, 30], color: pick(palettes.northAmerica, 1), image: "/private_images/worldmap/OneEmotion_Determination_USA_Female_Adult.webp" },
    { name: "Mexico", coords: [-102, 12], color: pick(palettes.northAmerica, 2), image: "/private_images/worldmap/OneEmotion_Joy_Mexico_Female_YoungAdult.webp" },
    { name: "Cuba", coords: [-78, 12], color: pick(palettes.northAmerica, 3), image: "/private_images/worldmap/OneEmotion_Hope_Cuba_Male_Senior.webp" },
    { name: "Greenland", coords: [-32, 70], color: pick(palettes.northAmerica, 4), image: "/private_images/worldmap/OneEmotion_Calmness_Greenland_Male_Adult.webp" },

    // 🌎 SOUTH AMERICA
    { name: "Brazil", coords: [-50, -30], color: pick(palettes.southAmerica, 0), image: "/private_images/worldmap/OneEmotion_Passion_Brazil_Male_YoungAdult.webp" },
    { name: "Argentina", coords: [-60, -48], color: pick(palettes.southAmerica, 1), image: "/private_images/worldmap/OneEmotion_Pride_Argentina_Female_Adult.webp" },
    { name: "Chile", coords: [-68, -60], color: pick(palettes.southAmerica, 2), image: "/private_images/worldmap/OneEmotion_Gratitude_Chile_Female_Senior.webp" },
    { name: "Peru", coords: [-75, -25], color: pick(palettes.southAmerica, 3), image: "/private_images/worldmap/OneEmotion_Spirituality_Peru_Male_Adult.webp" },
    { name: "Colombia", coords: [-74, -5], color: pick(palettes.southAmerica, 4), image: "/private_images/worldmap/OneEmotion_Celebration_Colombia_Female_YoungAdult.webp" },
    { name: "Suriname", coords: [-54, -6], color: pick(palettes.southAmerica, 0), image: "/private_images/worldmap/OneEmotion_Diversity_Suriname_Male_Adult.webp" },

    // 🌍 EUROPE
    { name: "United Kingdom", coords: [0, 48], color: pick(palettes.europe, 0), image: "/private_images/worldmap/OneEmotion_Composure_UnitedKingdom_Male_Senior.webp" },
    { name: "France", coords: [5, 40], color: pick(palettes.europe, 1), image: "/private_images/worldmap/OneEmotion_Love_France_Female_Adult.webp" },
    { name: "Germany", coords: [12, 47], color: pick(palettes.europe, 2), image: "/private_images/worldmap/OneEmotion_Discipline_Germany_Male_Adult.webp" },
    { name: "Italy", coords: [16, 35], color: pick(palettes.europe, 3), image: "/private_images/worldmap/OneEmotion_Devotion_Italy_Female_YoungAdult.webp" },
    { name: "Poland", coords: [21, 47], color: pick(palettes.europe, 4), image: "/private_images/worldmap/OneEmotion_Hope_Poland_Male_Senior.webp" },
    { name: "Russia", coords: [40, 55], color: pick(palettes.europe, 0), image: "/private_images/worldmap/OneEmotion_Strength_Russia_Male_Adult.webp" },
    { name: "Spain", coords: [-1, 33], color: pick(palettes.europe, 1), image: "/private_images/worldmap/OneEmotion_Warmth_Spain_Female_Adult.webp" },
    { name: "Turkey", coords: [40, 33], color: pick(palettes.europe, 2), image: "/private_images/worldmap/OneEmotion_Hospitality_Turkey_Male_Adult.webp" },
    { name: "Norway", coords: [9, 57], color: pick(palettes.europe, 3), image: "/private_images/worldmap/OneEmotion_Serenity_Norway_Female_Senior.webp" },
    { name: "Finland", coords: [23, 60], color: pick(palettes.europe, 4), image: "/private_images/worldmap/OneEmotion_Focus_Finland_Male_Adult.webp" },
    { name: "Iceland", coords: [-10, 62], color: pick(palettes.europe, 0), image: "/private_images/worldmap/OneEmotion_Freedom_Iceland_Male_Senior.webp" },

    // 🌍 AFRICA
    { name: "Morocco", coords: [-7, 25], color: pick(palettes.africa, 0), image: "/private_images/worldmap/OneEmotion_Mystery_Morocco_Female_Adult.webp" },
    { name: "Algeria", coords: [10, 15], color: pick(palettes.africa, 1), image: "/private_images/worldmap/OneEmotion_Resilience_Algeria_Male_Adult.webp" },
    { name: "Egypt", coords: [32, 17], color: pick(palettes.africa, 2), image: "/private_images/worldmap/OneEmotion_Wisdom_Egypt_Male_Senior.webp" },
    { name: "Nigeria", coords: [10, 0], color: pick(palettes.africa, 3), image: "/private_images/worldmap/OneEmotion_Energy_Nigeria_Female_YoungAdult.webp" },
    { name: "Senegal", coords: [-12, 5], color: pick(palettes.africa, 4), image: "/private_images/worldmap/OneEmotion_Harmony_Senegal_Male_Adult.webp" },
    { name: "Ethiopia", coords: [43, -2], color: pick(palettes.africa, 0), image: "/private_images/worldmap/OneEmotion_Faith_Ethiopia_Male_Senior.webp" },
    { name: "DR Congo", coords: [25, -15], color: pick(palettes.africa, 1), image: "/private_images/worldmap/OneEmotion_Courage_DRcongo_Female_Adult.webp" },
    { name: "Tanzania", coords: [40, -20], color: pick(palettes.africa, 2), image: "/private_images/worldmap/OneEmotion_Unity_Tanzania_Male_Adult.webp" },
    { name: "South Africa", coords: [24, -50], color: pick(palettes.africa, 3), image: "/private_images/worldmap/OneEmotion_Reconciliation_SouthAfrica_Male_Senior.webp" },
    { name: "Madagascar", coords: [52, -32], color: pick(palettes.africa, 4), image: "/private_images/worldmap/OneEmotion_Curiosity_Madagascar_Female_YoungAdult.webp" },

    // 🌏 ASIA
    { name: "India", coords: [82, 10], color: pick(palettes.asia, 0), image: "/private_images/worldmap/OneEmotion_Spirituality_India_Male_Adult.webp" },
    { name: "China", coords: [110, 25], color: pick(palettes.asia, 1), image: "/private_images/worldmap/OneEmotion_Harmony_China_Female_Senior.webp" },
    { name: "Japan", coords: [135, 40], color: pick(palettes.asia, 2), image: "/private_images/worldmap/OneEmotion_Discipline_Japan_Male_Adult.webp" },
    { name: "Iran", coords: [55, 25], color: pick(palettes.asia, 3), image: "/private_images/worldmap/OneEmotion_Dignity_Iran_Female_Adult.webp" },
    { name: "Pakistan", coords: [75, 25], color: pick(palettes.asia, 4), image: "/private_images/worldmap/OneEmotion_Faith_Pakistan_Male_Senior.webp" },
    { name: "Saudi Arabia", coords: [50, 15], color: pick(palettes.asia, 0), image: "/private_images/worldmap/OneEmotion_Honour_SaudiArabia_Male_Adult.webp" },
    { name: "Indonesia", coords: [110, -17], color: pick(palettes.asia, 1), image: "/private_images/worldmap/OneEmotion_Joyfulness_Indonesia_Female_YoungAdult.webp" },
    { name: "Philippines", coords: [134, -2], color: pick(palettes.asia, 2), image: "/private_images/worldmap/OneEmotion_Gratitude_Philippines_Female_Adult.webp" },
    { name: "Bangladesh", coords: [101, 12], color: pick(palettes.asia, 3), image: "/private_images/worldmap/OneEmotion_Perseverance_Bangladesh_Male_Adult.webp" },
    { name: "Kazakhstan", coords: [65, 45], color: pick(palettes.asia, 4), image: "/private_images/worldmap/OneEmotion_Pride_Kazakhstan_Male_Senior.webp" },
    { name: "Mongolia", coords: [95, 40], color: pick(palettes.asia, 0), image: "/private_images/worldmap/OneEmotion_Freedom_Mongolia_Male_Adult.webp" },

    // 🦘 AUSTRALIA + OCEANIA
    { name: "Australia", coords: [135, -40], color: pick(palettes.oceania, 0), image: "/private_images/worldmap/OneEmotion_Calmness_Australia_Female_Adult.webp" },
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
          EmotionDeck — One World, Many Faces, One Humanity 🕊️🕊️
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
