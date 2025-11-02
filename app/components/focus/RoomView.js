"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { baseButtonStyle } from "../../styles/buttonStyle";
import {
  LiveKitRoom,
  VideoConference,
  useParticipants,
} from "@livekit/components-react";
import "@livekit/components-styles";

export default function RoomView({ room, userName, onLeave }) {
  const [token, setToken] = useState(null);
  const [hovered, setHovered] = useState(false);

  // Fetch LiveKit token for the current user and room
  useEffect(() => {
    const getToken = async () => {
      const resp = await fetch(`/api/livekit?room=${room.name}&user=${userName}`);
      const data = await resp.json();
      setToken(data.token);
    };
    getToken();
  }, [room, userName]);

  // Loading screen while connecting
  if (!token) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-400">
        <p>Connecting to room...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#0B0B0B] text-white flex flex-col items-center"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mt-8 mb-2"
      >
        <h1 className="text-4xl font-bold text-emerald-400 mb-2">{room.name}</h1>
        <p className="text-gray-400">Connected as {userName}</p>
      </motion.div>

      {/* Camera Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-6xl bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-6 shadow-lg mt-10 relative"
      >
        <LiveKitRoom
          video
          audio
          token={token}
          serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
          connect={true}
        >
          <ParticipantsDisplay onLeave={onLeave} />
          <VideoConference />
        </LiveKitRoom>
      </motion.div>

      {/* Leave Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="z-10"
      >
        <button
          onClick={onLeave}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ ...baseButtonStyle(hovered, false), marginTop: "2rem" }}
        >
          Leave Room
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ===== PARTICIPANTS DISPLAY (max 4 people) ===== */
function ParticipantsDisplay({ onLeave }) {
  const participants = useParticipants();

  const participantNames = participants
    .map((p) => p.name)
    .filter((name) => name && name !== "User");

  // If the room already has 4 participants, block entry
  if (participantNames.length >= 4) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0B0B0B]/95 text-center px-6 rounded-2xl z-50">
        <h1 className="text-3xl font-bold text-emerald-400 mb-4">
          This Focus Room is Full
        </h1>
        <p className="text-gray-400 max-w-md mb-8">
          The maximum capacity of 4 participants has been reached.
          Please join another room or create your own.
        </p>
        <button onClick={onLeave} style={baseButtonStyle(false, false)}>
          ← Back
        </button>
      </div>
    );
  }

  // If there are participants, display names only (no numbers or boxes)
  if (participantNames.length > 0) {
    return (
      <div className="absolute top-24 right-10 bg-transparent border-none px-5 py-2 text-right z-20">
        <span className="text-gray-300 text-sm">
          {participantNames.join(" • ")}
        </span>
      </div>
    );
  }

  // Nothing displayed if the user is alone
  return null;
}
