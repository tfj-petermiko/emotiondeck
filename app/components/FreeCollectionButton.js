"use client";
import { event } from "../lib/gtag";

export default function FreeCollectionButton() {
  const handleClick = () => {
    event({
      action: "open_free_collection",
      category: "engagement",
      label: "Open Free Collection Button",
    });
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition"
    >
      Open Free Collection
    </button>
  );
}
