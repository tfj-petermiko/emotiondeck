"use client";

import { useState, useEffect } from "react";

/**
 * 🎥 EmotionDeck CameraCheck Component
 * -------------------------------------
 * Checks camera availability and permissions.
 * Displays friendly messages for:
 *  - ✅ Camera ready
 *  - ⚠️ Access denied
 *  - ❌ No camera found
 */
export default function CameraCheck({ onCameraReady }) {
  const [status, setStatus] = useState("checking"); // checking | ok | denied | notfound

  useEffect(() => {
    const checkCamera = async () => {
      try {
        // 1️⃣ Check available video devices
        const devices = await navigator.mediaDevices.enumerateDevices();
        const hasCamera = devices.some((d) => d.kind === "videoinput");

        if (!hasCamera) {
          setStatus("notfound");
          return;
        }

        // 2️⃣ Request permission to use camera
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStatus("ok");
        onCameraReady?.(stream);
      } catch (err) {
        console.warn("Camera permission error:", err.name);
        if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
          setStatus("denied");
        } else {
          setStatus("notfound");
        }
      }
    };

    checkCamera();
  }, [onCameraReady]);

  return (
    <div className="w-full text-center my-8">
      {status === "checking" && (
        <p className="text-gray-400 animate-pulse">Checking camera availability...</p>
      )}

      {status === "ok" && (
        <p className="text-emerald-400 font-semibold">Camera detected – ready for FACS analysis.</p>
      )}

      {status === "denied" && (
        <div className="text-amber-400 font-medium max-w-lg mx-auto">
          Camera access is blocked.<br />
          Click the lock icon in your browser’s address bar and select{" "}
          <span className="text-white font-semibold">Allow</span> to enable the camera.
        </div>
      )}

      {status === "notfound" && (
        <div className="text-red-400 font-medium max-w-lg mx-auto">
          No camera detected.<br />
          Connect a webcam and refresh this page.
        </div>
      )}
    </div>
  );
}
