"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ImageModal({ image, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [portalEl, setPortalEl] = useState(null);

  // Utwórz portal dopiero po stronie klienta
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPortalEl(document.body);
      setMounted(true);
    }
  }, []);

  if (!mounted || !portalEl || !image) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          key="image-wrapper"
          className="relative flex items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image}
            alt="Zoomed emotion"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white text-3xl font-light hover:text-gray-400"
            aria-label="Close"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    portalEl
  );
}
