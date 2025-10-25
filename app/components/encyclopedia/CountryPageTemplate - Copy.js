"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CountryPageTemplate({ data }) {
  const router = useRouter();
  const [hoveredBack, setHoveredBack] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);

  // ✅ Dodane: stan i efekt dla NextCountryLink
  const [nextCountry, setNextCountry] = useState(null);
  const [nextSlug, setNextSlug] = useState(null);

  useEffect(() => {
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
        "Cameroon","Central African Republic","Chad","Comoros","Congo","Democratic Republic of the Congo",
        "Djibouti","Egypt","Equatorial Guinea","Eritrea","Eswatini","Ethiopia","Gabon","Gambia","Ghana",
        "Guinea","Guinea-Bissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali",
        "Mauritania","Mauritius","Mayotte","Morocco","Mozambique","Namibia","Niger","Nigeria","Reunion",
        "Rwanda","Sao Tome and Principe","Senegal","Seychelles","Sierra Leone","Somalia","South Africa",
        "South Sudan","Sudan","Tanzania","Togo","Tunisia","Uganda","Zambia","Zimbabwe","Western Sahara"
      ],
      "North America": [
        "Bahamas","Barbados","Belize","Bermuda","British Virgin Islands","Canada","Cayman Islands",
        "Costa Rica","Cuba","Curacao","El Salvador","Greenland","Grenada","Guadeloupe","Guatemala",
        "Haiti","Honduras","Jamaica","Martinique","Mexico","Nicaragua","Panama","Puerto Rico",
        "Saint Barthelemy","Saint Helena","Saint Martin","Trinidad and Tobago","Turks and Caicos",
        "United States","Aruba","Guam","Nunavut"
      ],
      "South America": [
        "Argentina","Bolivia","Brazil","Chile","Colombia","Ecuador","French Guiana","Guyana",
        "Paraguay","Peru","Suriname","Uruguay","Venezuela","Falkland Islands"
      ],
      "Oceania": [
        "Australia","American Samoa","Christmas Island","Cocos Islands","Cook Islands","Fiji",
        "Kiribati","Marshall Islands","Micronesia","New Caledonia","New Zealand","Niue","Norfolk Island",
        "Northern Mariana Islands","Palau","Papua New Guinea","Pitcairn Islands","Samoa","Solomon Islands",
        "Tokelau","Tonga","Tuvalu","Vanuatu"
      ]
    };

    const countryList = Object.values(continents).flat();

    if (typeof window !== "undefined") {
      const current = decodeURIComponent(window.location.pathname.split("/").pop())
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      const index = countryList.indexOf(current);
      const next = countryList[(index + 1) % countryList.length];
      const slug = next.toLowerCase().replace(/\s+/g, "-");
      setNextCountry(next);
      setNextSlug(slug);
    }
  }, []);

  // 🔙 back click handler
  const handleBackClick = () => {
    setLoadingBack(true);
    setTimeout(() => router.back(), 800);
  };

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
            <h2 className="text-2xl font-semibold text-center mx-auto w-fit">
              {data.archetype}
            </h2>
          </center>
          <p className="text-center text-gray-400 italic mb-6">
            {data.quote}
          </p>

          <p className="text-gray-400 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            {data.intro}
          </p>

          <table className="w-full text-sm md:text-base border-collapse">
            <tbody>
              <tr className="border-b border-gray-800 align-top">
                <td className="w-1/4" />
                <td className="w-2/4 p-3 text-white">
                  <p className="text-gray-400 mb-1 leading-relaxed text-justify max-w-xl">
                    {data.overview1}
                  </p>
                  <p className="text-gray-400 mt-4 mb-4 leading-relaxed text-justify max-w-xl">
                    {data.overview2}
                  </p>
                </td>
                <td className="p-3 w-[200px] text-center align-top">
                  <div className="w-[200px] mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-md">
                    <br />
                    <img
                      src={data.image}
                      alt={data.archetype}
                      className="object-cover w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    {data.archetype}
                  </p>
                </td>
              </tr>

              {data.sections.map((section, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="p-3 text-gray-400">{section.label}</td>
                  <td
                    className="p-3 text-white text-justify leading-relaxed"
                    colSpan={2}
                  >
                    {section.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      <br />
      <br />

      {/* 🌍 Safe client-side link */}
      {nextCountry && (
        <div className="text-center mt-16 mb-24 relative z-10">
          <a
            href={`/encyclopedia/${nextSlug}`}
            className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 inline-block"
          >
            Discover the Next Story →<br />
            <span className="text-gray-400 text-sm">Next: {nextCountry}</span>
          </a>
          <br />
          <br />
        </div>
      )}
    </main>
  );
}
