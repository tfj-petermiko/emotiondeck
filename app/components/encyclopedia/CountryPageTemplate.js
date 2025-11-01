"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { baseButtonStyle } from "../../styles/buttonStyle.js";
import "../../globals.css";

function HoverButton({ label, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={baseButtonStyle(hovered, false)}
    >
      {label}
    </button>
  );
}

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
      const currentSlug = decodeURIComponent(
        window.location.pathname.split("/").pop().toLowerCase()
      );
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
    <main className="country-page">
      {/* Header */}
      <section className="country-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="country-title"
        >
          EmotionDeck Encyclopedia
          <br />
          <span className="country-subtitle">{data.country}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="country-intro"
        >
          {data.subtitle}
        </motion.p>
      </section>

      {/* Archetype Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 0px 20px rgba(255,255,255,0.08)",
        }}
        className="country-archetype-section"
      >
        <div className="country-archetype-card">
          <center>
            <h2 className="country-archetype-title">{data.archetype}</h2>
          </center>
          <p className="country-archetype-quote">{data.quote}</p>
          <p className="country-archetype-intro">{data.intro}</p>

          <table className="country-table">
            <tbody>
              <tr className="country-table-row">
                <td className="w-[20%]" />
                <td className="country-table-cell">
                  <p className="country-table-text">{data.overview1}</p>
                  <p className="country-table-text2">{data.overview2}</p>
                </td>

                <td className="p-3 w-[250px] text-center align-middle">
                  <div className="country-image-wrapper">
                    <div className="country-image-card">
                      <img
                        src={data.image}
                        alt={data.archetype}
                        className="country-image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className="country-image-caption">{data.archetype}</p>
                </td>
              </tr>

              {data.sections.map((section, index) => (
                <tr key={index} className="country-table-row">
                  <td className="country-section-label">{section.label}</td>
                  <td className="country-section-text" colSpan={2}>
                    {section.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Navigation Buttons */}
      <div className="country-nav">
        {prevCountry && (
          <HoverButton
            label={prevCountry}
            onClick={() =>
              (window.location.href = `/encyclopedia/${prevSlug}`)
            }
          />
        )}
        {nextCountry && (
          <HoverButton
            label={nextCountry}
            onClick={() =>
              (window.location.href = `/encyclopedia/${nextSlug}`)
            }
          />
        )}
      </div>
    </main>
  );
}
