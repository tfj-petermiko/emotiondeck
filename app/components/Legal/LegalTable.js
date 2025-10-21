"use client";

export default function LegalTable({ rows }) {
  return (
    <div className="w-[80%] mx-auto mt-8 border border-gray-800 rounded-2xl overflow-hidden bg-gray-900 p-6 md:p-10 shadow-md">
      <table className="w-full text-sm md:text-base border-collapse">
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-gray-800">
              <td className="p-3 text-gray-400 w-1/3">{row.label}</td>
              <td className="p-3 text-white leading-relaxed">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
