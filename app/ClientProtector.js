"use client";

import { useEffect } from "react";

export default function ClientProtector() {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();

    const handleKeyDown = (e) => {
      const blocked =
        (e.ctrlKey && ["s", "S", "u", "U", "c", "C"].includes(e.key)) ||
        (e.ctrlKey && e.shiftKey && ["I", "i", "J", "j"].includes(e.key)) ||
        e.key === "F12";

      if (blocked) e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
