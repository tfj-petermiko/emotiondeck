"use client";
import WorldMap from "../components/WorldMap/WorldMap";

export default function WorldPage() {
  return (
    <main className="flex-grow flex flex-col text-white overflow-hidden">
      <div className="flex-1 w-full overflow-hidden">
        <WorldMap />
      </div>
    </main>
  );
}
