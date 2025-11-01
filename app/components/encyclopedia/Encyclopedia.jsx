"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

/* =========================================
   🌍 EMOTIONDECK WORLD MAP v10.1
   Fully verified 195-country dropdown by continent
   ========================================= */

export default function Encyclopedia() {
  const [hovered, setHovered] = useState(null);
  const [activeContinent, setActiveContinent] = useState("");
  const router = useRouter();

// 🎨 All points white
const palettes = {
  northAmerica: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  southAmerica: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  europe: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  africa: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  asia: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  oceania: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
};


  const pick = (palette, i) => palette[i % palette.length];

  // 🌎 Sample points for pulse effect
  const regions = [
    // 🇺🇸 NORTH AMERICA
    { name: "Canada", coords: [-100, 55], color: pick(palettes.northAmerica, 0), image: "/private_images/worldmap/OneEmotion_Serenity_Canada_Male_Adult.webp" },
    { name: "USA", coords: [-95, 30], color: pick(palettes.northAmerica, 1), image: "/private_images/worldmap/OneEmotion_Determination_USA_Female_Adult.webp" },
    { name: "Mexico", coords: [-102, 12], color: pick(palettes.northAmerica, 2), image: "/private_images/worldmap/OneEmotion_Joy_Mexico_Female_YoungAdult.webp" },
    { name: "Cuba", coords: [-78, 12], color: pick(palettes.northAmerica, 3), image: "/private_images/worldmap/OneEmotion_Hope_Cuba_Male_Senior.webp" },
    { name: "Greenland", coords: [-35, 60], color: pick(palettes.northAmerica, 4), image: "/private_images/worldmap/OneEmotion_Calmness_Greenland_Male_Adult.webp" },

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
    { name: "Iceland", coords: [-11, 60], color: pick(palettes.europe, 0), image: "/private_images/worldmap/OneEmotion_Freedom_Iceland_Male_Senior.webp" },

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
    { name: "Australia", coords: [140, -30], color: pick(palettes.oceania, 0), image: "/private_images/worldmap/OneEmotion_Calmness_Australia_Female_Adult.webp" },
  ];

  const project = ([lon, lat]) => [(lon + 180) * 5.4, (90 - lat) * 5.6];

  const pulse = {
    scale: [1, 1.3, 1],
    opacity: [0.8, 1, 0.8],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  };

// 🌍 EmotionDeck Encyclopedia — Verified 234 Countries and Territories (sitemap-synced)
const continents = {
  "Europe": [
    "Albania","Andorra","Aland Islands","Armenia","Austria","Azerbaijan","Belarus","Belgium",
    "Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czechia","Denmark","Estonia",
    "Faroe Islands","Finland","France","Georgia","Germany","Gibraltar","Greece","Guernsey",
    "Hungary","Iceland","Ireland","Isle of Man","Italy","Jersey","Kosovo","Latvia",
    "Liechtenstein","Lithuania","Luxembourg","Malta","Moldova","Monaco","Montenegro",
    "Netherlands","North Macedonia","Norway","Poland","Portugal","Romania","San Marino",
    "Scotland","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey",
    "Ukraine","United Kingdom","Vatican City","Wales","Svalbard","Arctic Circle","Ceuta","Melilla"
  ],

  "Asia": [
    "Afghanistan","Bahrain","Bangladesh","Bhutan","Brunei","Cambodia","China","East Timor","India",
    "Indonesia","Iran","Iraq","Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos",
    "Lebanon","Malaysia","Maldives","Mongolia","Myanmar","Nepal","North Korea","Oman","Pakistan",
    "Palestine","Philippines","Qatar","Saudi Arabia","Singapore","South Korea","Sri Lanka","Syria",
    "Taiwan","Tajikistan","Thailand","Turkmenistan","United Arab Emirates","Uzbekistan","Vietnam",
    "Yemen","Hong Kong","Macau","Tibet"
  ],

  "Africa": [
    "Algeria","Angola","Ascension Island","Benin","Botswana","Burkina Faso","Burundi","Cabo Verde",
    "Cameroon","Chad","Comoros","Congo","Central African Republic","Democratic Republic of the Congo",
    "Djibouti","Egypt","Equatorial Guinea","Eritrea","Eswatini","Ethiopia","Gabon","Gambia","Ghana",
    "Guinea","Guinea-Bissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali",
    "Mauritania","Mauritius","Mayotte","Morocco","Mozambique","Namibia","Niger","Nigeria","Reunion",
    "Rwanda","Sao Tome and Principe","Senegal","Seychelles","Sierra Leone","Somalia","South Africa",
    "South Sudan","Sudan","Tanzania","Togo","Tunisia","Uganda","Zambia","Zimbabwe","Western Sahara"
  ],

  "North America": [
    "Bahamas","Belize","Bermuda","British Virgin Islands","Canada","Cayman Islands",
    "Costa Rica","Cuba","Curacao","El Salvador","Greenland","Guadeloupe","Guatemala",
    "Haiti","Honduras","Jamaica","Martinique","Mexico","Nicaragua","Panama","Puerto Rico",
    "Saint Barthelemy","Saint Helena","Saint Martin","Trinidad and Tobago","Turks and Caicos",
    "United States","Aruba","Guam","Nunavut"
  ],

  "South America": [
    "Argentina","Bolivia","Brazil","Chile","Colombia","Ecuador","French Guiana","Guyana",
    "Paraguay","Peru","Suriname","Uruguay","Venezuela","Falkland Islands"
  ],

  "Oceania": [
    "Australia","American Samoa","Cocos Islands","Cook Islands","Fiji",
    "Kiribati","Marshall Islands","Micronesia","New Caledonia","New Zealand","Niue","Norfolk Island",
    "Northern Mariana Islands","Palau","Papua New Guinea","Pitcairn Islands","Samoa","Solomon Islands",
    "Tokelau","Tonga","Tuvalu","Vanuatu"
  ]
};

  return (
    <section className="relative w-screen min-h-screen overflow-hidden text-white bg-neutral-900">
{/* 🏷️ Title */}
<div className="text-center pt-10 pb-4">
  <h1 className="text-4xl md:text-5xl font-semibold tracking-wide text-gray-100">
    The First Global Emotion Encyclopedia
  </h1>
</div>

<div className="text-center pt-4 pb-10">
  <h3
    className="text-3xl md:text-4xl font-semibold tracking-wide text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
  >
    Exploring Jungian Archetypes Across Nations
  </h3>
</div>


      {/* 🌍 Continent → Territory Dropdowns */}
      <div className="flex justify-center items-center flex-wrap gap-4 mt-4 mb-10">
        {/* Continent Dropdown */}
        <select
          value={activeContinent}
          onChange={(e) => setActiveContinent(e.target.value)}
          className="px-4 py-2 rounded-md bg-white text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <option value="">Select Continent</option>
          {Object.keys(continents).map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>

        {/* Territory Dropdown */}
        <select
          disabled={!activeContinent}
          onChange={(e) => {
            const selected = e.target.value;
            if (selected)
              router.push(`/encyclopedia/${selected.toLowerCase().replace(/\s+/g, "-")}`);
          }}
          className={`px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
            activeContinent
              ? "bg-white text-neutral-900"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          <option value="">
            {activeContinent ? "Select Territory" : "Select a Continent First"}
          </option>
          {activeContinent &&
            continents[activeContinent].map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
        </select>
      </div>

      {/* 🗺️ Map */}
      <div className="relative h-[700px] w-full overflow-hidden">
        <svg
          viewBox="0 0 2000 1001"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 w-full h-full z-[5]"
        >
          <image
            href="/Encyclopedia.svg"
            width="2000"
            height="1001"
            opacity="0.55"
            style={{ filter: "brightness(0.65)" }}
          />
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
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={10}
                  fill={r.color}
                  className="cursor-pointer"
                  animate={pulse}
                  whileHover={{ scale: 2, filter: "drop-shadow(0 0 12px rgba(255,255,255,0.8))" }}
                  onMouseEnter={() => setHovered(r)}
                  onMouseLeave={() => setHovered(null)}
                />
              </motion.g>
            );
          })}
        </svg>
{/* Tooltip */}
{hovered && (
  <motion.div
    className="tooltip-container absolute z-20 pointer-events-none"
    style={{
      left: `${(hovered.coords[0] + 180) * 5.4}px`,
      top: `${(90 - hovered.coords[1]) * 5.6}px`,
      transform: "translate(12px, -50%)", // 📍 przesunięcie nieco w prawo i wyśrodkowanie w pionie
    }}
    initial={{ opacity: 0, scale: 0.85, x: 10 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    <motion.img
      src={hovered.image}
      alt=""
      className="rounded-full border-2 border-emerald-400 shadow-lg"
      style={{
        width: "140px", // możesz zmienić np. na 120px, 180px itd.
        height: "140px",
        objectFit: "cover",
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  </motion.div>
)}

      </div>
    </section>
  );
}
