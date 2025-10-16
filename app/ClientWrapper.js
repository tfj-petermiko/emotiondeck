"use client";
import { useEffect } from "react";

export default function ClientWrapper({ children }) {
  useEffect(() => {
    // 🚫 Disable right-click
    const handleContextMenu = (e) => e.preventDefault();

    // 🚫 Block developer tools / copy / save
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && ["s", "S", "u", "U", "c", "C"].includes(e.key)) ||
        (e.ctrlKey && e.shiftKey && ["I", "i", "J", "j"].includes(e.key)) ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <>{children}</>;
}
