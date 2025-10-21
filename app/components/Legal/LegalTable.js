export default function LegalTable({ data = [] }) {
  // ✅ Safety check
  if (!Array.isArray(data)) {
    console.error("❌ LegalTable: expected 'data' to be an array, received:", data);
    return null;
  }

  return (
    <div className="overflow-x-auto mt-10">
      <table className="w-full text-sm md:text-base border-collapse">
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-800">
              <td className="p-3 text-gray-400 w-1/3 font-medium">{row.label}</td>
              <td className="p-3 text-white leading-relaxed">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
