"use client";

import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { FilesetResolver, FaceLandmarker } from "@mediapipe/tasks-vision";

/**
 * 🎥 EmotionDeck — Live FACS Analyzer
 * ------------------------------------
 * Real-time facial emotion recognition + landmark mesh overlay.
 * Uses MediaPipe FaceLandmarker (new API) + face-api.js emotion detection.
 */
export default function FACSRealtimeOverlay() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [emotion, setEmotion] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        // 🧠 Load face-api.js models
        await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
        await faceapi.nets.faceExpressionNet.loadFromUri("/models");

        // 🧩 Load MediaPipe Vision Tasks
        const vision = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );

        const landmarker = await FaceLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
          },
          outputFaceBlendshapes: false,
          numFaces: 1,
        });

        // 🎥 Start the camera stream
        startCamera(landmarker);
        setIsReady(true);
      } catch (err) {
        console.error("❌ Error initializing FACS overlay:", err);
      }
    };

    init();
  }, []);

  // 🎥 Camera setup and start
  const startCamera = (landmarker) => {
    const video = videoRef.current;
    if (!navigator.mediaDevices?.getUserMedia) {
      alert("Camera not supported by your browser.");
      return;
    }

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          video.play();
          runDetection(video, landmarker);
        };
      })
      .catch((err) => {
        console.error("Camera access error:", err);
        alert(
          "Camera access denied. Please allow access in your browser settings."
        );
      });
  };

  // 🧠 Continuous detection loop
  const runDetection = (video, landmarker) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const detect = async () => {
      if (video.readyState === 4) {
        const results = landmarker.detect(video);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Draw face mesh
        if (results.faceLandmarks?.length) {
          ctx.beginPath();
          for (const p of results.faceLandmarks[0]) {
            ctx.lineTo(p.x * canvas.width, p.y * canvas.height);
          }
          ctx.strokeStyle = "rgba(16,185,129,0.7)";
          ctx.lineWidth = 1.2;
          ctx.stroke();

          await detectEmotion(video);
        }
      }
      requestAnimationFrame(detect);
    };

    detect();
  };

  // 🧩 Emotion recognition (face-api.js)
  const detectEmotion = async (video) => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if (detections?.length > 0) {
      const expr = detections[0].expressions;
      const sorted = Object.entries(expr).sort((a, b) => b[1] - a[1]);
      const [emo, conf] = sorted[0];
      setEmotion(emo);
      setConfidence((conf * 100).toFixed(1));
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold text-white mb-2">
        🎥 EmotionDeck — Live FACS Analyzer
      </h2>
      <p className="text-gray-400 mb-4 text-center w-[70%]">
        Real-time facial emotion recognition and muscle overlay.
      </p>

      <div className="relative w-[640px] h-[480px] border border-gray-700 rounded-xl overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          width="640"
          height="480"
          className="absolute top-0 left-0"
        />
        <canvas
          ref={canvasRef}
          width="640"
          height="480"
          className="absolute top-0 left-0"
        />
      </div>

      {!isReady && (
        <p className="text-gray-400 mt-4 animate-pulse">
          Initializing models and camera...
        </p>
      )}

      {emotion && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">
            Detected Emotion:{" "}
            <span className="text-emerald-400 capitalize">{emotion}</span>
          </h3>
          <p className="text-gray-400">
            Confidence: <span className="text-gray-200">{confidence}%</span>
          </p>
        </div>
      )}
    </div>
  );
}
