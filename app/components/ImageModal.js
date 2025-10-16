"use client";

import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function ImageModal({ imageSrc, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {imageSrc && (
        <motion.div
          key="overlay"
          className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 9999,
            width: "100vw",
            height: "100vh",
          }}
        >
          <motion.div
            key="image-wrapper"
            className="relative flex items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
          >
            <img
              src={imageSrc}
              alt="Zoomed emotion"
              style={{
                maxWidth: "85vw",
                maxHeight: "85vh",
                borderRadius: "12px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                margin: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "16px",
                right: "24px",
                color: "white",
                fontSize: "2rem",
                fontWeight: 300,
                cursor: "pointer",
                background: "none",
                border: "none",
              }}
              aria-label="Close"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
