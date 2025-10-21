"use client";

import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { FilesetResolver, FaceLandmarker } from "@mediapipe/tasks-vision";

/**
 * 🎥 EmotionDeck — FACS Analyzer v1.5
 * -----------------------------------
 * Local real-time facial emotion analysis (7→30 mapping)
 * Combines face-api.js + MediaPipe + EmotionDeck expansion layer.
 */

export default function FACSRealtimeOverlay() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [emotion, setEmotion] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [relatedEmotions, setRelatedEmotions] = useState([]);
  const [definition, setDefinition] = useState("");
  const [isReady, setIsReady] = useState(false);

  // 🎨 Emotion mapping layer (7 → 30)
  const emotionMap = {
    happy: {
      label: "Joy",
      related: ["Pride", "Love", "Serenity", "Hope"],
      definition:
        "Joy represents positive energy and emotional warmth. It may expand into love, gratitude, or peaceful contentment.",
      color: "#10B981",
    },
    sad: {
      label: "Sadness",
      related: ["Melancholy", "Regret", "Compassion", "Reflection"],
      definition:
        "Sadness allows emotional release and empathy. It often reflects compassion and awareness of loss.",
      color: "#60A5FA",
    },
    angry: {
      label: "Anger",
      related: ["Frustration", "Defiance", "Determination", "Disgust"],
      definition:
        "Anger channels energy toward change or protection. It can transform into determination and resilience.",
      color: "#EF4444",
    },
    fearful: {
      label: "Fear",
      related: ["Anxiety", "Worry", "Insecurity", "Anticipation"],
      definition:
        "Fear alerts us to potential danger. When managed, it sharpens awareness and helps us prepare for challenges.",
      color: "#FACC15",
    },
    surprised: {
      label: "Surprise",
      related: ["Curiosity", "Awe", "Confusion", "Excitement"],
      definition:
        "Surprise is the moment of transition between not knowing and discovery — it opens the door to curiosity.",
      color: "#F97316",
    },
    disgusted: {
      label: "Disgust",
      related: ["Contempt", "Irritation", "Moral Awareness", "Rejection"],
      definition:
        "Disgust protects us from harm — physical or moral. It can signal boundaries or ethical discomfort.",
      color: "#A855F7",
    },
    neutral: {
      label: "Neutral",
      related: ["Calmness", "Tranquillity", "Acceptance", "Reflection"],
      definition:
        "Neutrality is emotional balance — a state of clarity, acceptance, and observation without reaction.",
      color: "#9CA3AF",
    },
  };

  // 🧠 Load models once
  useEffect(() => {
    const init = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
        await faceapi.nets.faceExpressionNet.loadFromUri("/models");

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

        startCamera(landmarker);
        setIsReady(true);
      } catch (err) {
        console.error("❌ Error initializing FACS overlay:", err);
      }
    };

    init();
  }, []);

  // 🎥 Camera
  const startCamera = (landmarker) => {
    const video = videoRef.current;
    navigator.mediaDevices
      ?.getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          video.play();
          runDetection(video, landmarker);
        };
      })
      .catch((err) => console.error("Camera error:", err));
  };

  // 🧩 Continuous detection
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
          ctx.strokeStyle = "rgba(255,255,255,0.4)";
          ctx.lineWidth = 1.1;
          ctx.stroke();

          await detectEmotion(video);
        }
      }
      requestAnimationFrame(detect);
    };

    detect();
  };

  // 🎭 Emotion detection
  const detectEmotion = async (video) => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if (detections?.length > 0) {
      const expr = detections[0].expressions;
      const sorted = Object.entries(expr).sort((a, b) => b[1] - a[1]);
      const [emo, conf] = sorted[0];
      const mapped = emotionMap[emo];
      setEmotion(mapped.label);
      setConfidence((conf * 100).toFixed(1));
      setRelatedEmotions(mapped.related);
      setDefinition(mapped.definition);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold text-white mb-2">
        🎥 EmotionDeck — FACS Analyzer v1.5
      </h2>
      <p className="text-gray-400 mb-4 text-center w-[70%]">
        Extended emotion recognition — from 7 basic expressions to the full
        EmotionDeck emotional spectrum.
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
        <div
          className="mt-8 text-center border border-gray-800 rounded-xl p-5 bg-gray-900/70 shadow-inner max-w-xl"
          style={{ borderColor: emotionMap[emotion.toLowerCase()]?.color }}
        >
          <h3 className="text-2xl font-semibold text-white mb-2">
            Detected Emotion:{" "}
            <span
              className="capitalize font-bold"
              style={{ color: emotionMap[emotion.toLowerCase()]?.color }}
            >
              {emotion}
            </span>
          </h3>
          <p className="text-gray-400 mb-2">
            Confidence: <span className="text-gray-200">{confidence}%</span>
          </p>
          <p className="text-gray-300 mb-4 italic">{definition}</p>

          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {relatedEmotions.map((r, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-sm bg-gray-800 text-emerald-400 border border-gray-700"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
