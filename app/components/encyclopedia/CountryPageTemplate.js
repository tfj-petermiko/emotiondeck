"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CountryPageTemplate({ data }) {
  const router = useRouter();
  const [hoveredBack, setHoveredBack] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);

  const handleBackClick = () => {
    setLoadingBack(true);
    setTimeout(() => {
      router.back(); // returns to the previous page
    }, 800);
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

      <br /><br />
{/* Back link */}
<div className="text-center mt-16 mb-24 relative z-10">
  <p
    onClick={() => router.back()}
    className="text-emerald-400 hover:text-emerald-300 cursor-pointer transition-colors duration-300 inline-block"
  >
    Discover the Next Story — Another Nation, Another Emotion
  </p>
</div>

      <br /><br />
    </main>
  );
}
