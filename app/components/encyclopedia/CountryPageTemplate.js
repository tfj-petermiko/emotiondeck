"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function CountryPageTemplate({ data }) {
  const router = useRouter();
  const [nextCountry, setNextCountry] = useState(null);
  const [nextSlug, setNextSlug] = useState(null);
  const [prevCountry, setPrevCountry] = useState(null);
  const [prevSlug, setPrevSlug] = useState(null);

  useEffect(() => {
    const continents = {
      Europe: [
        "Albania","Andorra","Aland Islands","Armenia","Austria","Azerbaijan","Belarus","Belgium",
        "Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czechia","Denmark","Estonia",
        "Faroe Islands","Finland","France","Georgia","Germany","Gibraltar","Greece","Guernsey",
        "Hungary","Iceland","Ireland","Isle of Man","Italy","Jersey","Kosovo","Latvia",
        "Liechtenstein","Lithuania","Luxembourg","Malta","Moldova","Monaco","Montenegro",
        "Netherlands","North Macedonia","Norway","Poland","Portugal","Romania","San Marino",
        "Scotland","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey",
        "Ukraine","United Kingdom","Vatican City","Wales","Svalbard","Arctic Circle","Ceuta","Melilla"
      ],
      Asia: [
        "Afghanistan","Bahrain","Bangladesh","Bhutan","Brunei","Cambodia","China","East Timor","India",
        "Indonesia","Iran","Iraq","Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos",
        "Lebanon","Malaysia","Maldives","Mongolia","Myanmar","Nepal","North Korea","Oman","Pakistan",
        "Palestine","Philippines","Qatar","Saudi Arabia","Singapore","South Korea","Sri Lanka","Syria",
        "Taiwan","Tajikistan","Thailand","Turkmenistan","United Arab Emirates","Uzbekistan","Vietnam",
        "Yemen","Hong Kong","Macau","Tibet"
      ],
      Africa: [
        "Algeria","Angola","Ascension Island","Benin","Botswana","Burkina Faso","Burundi","Cabo Verde",
        "Cameroon","Chad","Comoros","Congo","Democratic Republic of the Congo",
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
      Oceania: [
        "Australia","American Samoa","Cocos Islands","Cook Islands","Fiji",
        "Kiribati","Marshall Islands","Micronesia","New Caledonia","New Zealand","Niue","Norfolk Island",
        "Northern Mariana Islands","Palau","Papua New Guinea","Pitcairn Islands","Samoa","Solomon Islands",
        "Tokelau","Tonga","Tuvalu","Vanuatu"
      ],
    };

    const countryList = Object.values(continents).flat();
    const slugs = countryList.map((c) =>
      c.toLowerCase().replace(/\s+/g, "-")
    );

    if (typeof window !== "undefined") {
      const currentSlug = decodeURIComponent(window.location.pathname.split("/").pop().toLowerCase());
      const currentIndex = slugs.indexOf(currentSlug);
      const index = currentIndex >= 0 ? currentIndex : 0;

      const nextIndex = (index + 1) % slugs.length;
      const prevIndex = (index - 1 + slugs.length) % slugs.length;

      setNextCountry(countryList[nextIndex]);
      setNextSlug(slugs[nextIndex]);
      setPrevCountry(countryList[prevIndex]);
      setPrevSlug(slugs[prevIndex]);
    }
  }, []);

  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans relative">
      {/* Header */}
      <section className="text-center mt-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          EmotionDeck Encyclopedia {data.country}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          {data.subtitle}
        </motion.p>
      </section>

{/* Archetype Section */}
<motion.section
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.6 }}
  className="mt-8 w-[80%] mx-auto border border-gray-800 rounded-2xl overflow-hidden"
>
  <div className="bg-gray-900 p-6 md:p-10">
    <center>
      <h2 className="text-2xl font-semibold">{data.archetype}</h2>
    </center>
    <p className="text-center text-gray-300 italic mb-6">{data.quote}</p>
    <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
      {data.intro}
    </p>

    <table className="w-full text-sm md:text-base border-collapse">
      <tbody>
        <tr className="border-b border-gray-800 align-middle">
          {/* Left spacer column */}
          <td className="w-[20%]" />

          {/* Middle column — enlarged for text */}
          <td className="w-[55%] p-3 text-white">
            <p className="text-gray-300 mb-1 leading-relaxed text-justify max-w-3xl">
              {data.overview1}
            </p>
            <p className="text-gray-300 mt-4 mb-4 leading-relaxed text-justify max-w-3xl">
              {data.overview2}
            </p>
          </td>

          {/* Right column — image vertically centered */}
          <td className="p-3 w-[250px] text-center align-middle">
            <div className="flex items-center justify-center h-full">
              <div className="w-[250px] rounded-xl overflow-hidden border border-gray-700 shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src={data.image}
                  alt={data.archetype}
                  className="object-cover w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-gray-300 text-xs mt-2">{data.archetype}</p>
          </td>
        </tr>

        {data.sections.map((section, index) => (
          <tr key={index} className="border-b border-gray-800">
            <td className="p-3 text-gray-300">{section.label}</td>
            <td className="p-3 text-gray-300 text-justify leading-relaxed" colSpan={2}>
              {section.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</motion.section>



{/* Navigation Buttons */}
<div className="text-center mt-20 mb-24 relative z-10">
  {prevCountry && (
    <button
      onClick={() => (window.location.href = `/encyclopedia/${prevSlug}`)}
      style={{
        backgroundColor: "#10B981",
        color: "#fff",
        border: "none",
        padding: "10px 24px",
        borderRadius: "9999px",
        fontWeight: "600",
        fontSize: "0.9rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
        transition: "background-color 0.2s ease, transform 0.2s ease",
        cursor: "pointer",
        marginRight: "10px",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#34D399")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#10B981")}
    >
      ← Previous Story ({prevCountry})
    </button>
  )}

  {nextCountry && (
    <button
      onClick={() => (window.location.href = `/encyclopedia/${nextSlug}`)}
      style={{
        backgroundColor: "#10B981",
        color: "#fff",
        border: "none",
        padding: "10px 24px",
        borderRadius: "9999px",
        fontWeight: "600",
        fontSize: "0.9rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
        transition: "background-color 0.2s ease, transform 0.2s ease",
        cursor: "pointer",
        marginLeft: "10px",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#34D399")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#10B981")}
    >
      Next Story ({nextCountry}) →
    </button>
  )}
</div>


</main>
);
}

