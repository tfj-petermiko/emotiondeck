"use client";
import { useEffect } from "react";

export default function ClientProtector() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => e.preventDefault();

    // Disable common dev shortcuts
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

  return null; // invisible, only runs effects
}
