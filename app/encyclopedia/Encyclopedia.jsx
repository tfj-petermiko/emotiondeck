"use client";

import Encyclopedia from "../components/encyclopedia/Encyclopedia";

export default function EncyclopediaClient() {
  return (
    <main className="flex-grow flex flex-col text-white overflow-hidden">
      <div className="flex-1 w-full overflow-hidden">
        <Encyclopedia />
      </div>
    </main>
  );
}
