"use client";

export default function Table({ data = [] }) {
  // ✅ Safety check
  if (!Array.isArray(data)) {
    console.error("❌ Table: expected 'data' to be an array, received:", data);
    return null;
  }

  return (
    <div className="overflow-x-auto mt-10">
      <table className="w-full text-sm md:text-base border-collapse border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-b border-neutral-800 hover:bg-neutral-800/40 transition-all"
            >
              <td className="p-4 text-blue-400 font-semibold w-1/3 text-left">
                {row.label}
              </td>
              <td className="p-4 text-gray-300 leading-relaxed text-left">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
