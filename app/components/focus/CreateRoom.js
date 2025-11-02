"use client";

import React, { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CreateRoom({ userName }) {
  const [roomName, setRoomName] = useState("");
  const [loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!roomName.trim()) return;

    setLoading(true);
    await supabase.from("focus_rooms").insert([{ name: roomName.trim() }]);
    setRoomName("");
    setLoading(false);
  };

  return (
    <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-8 mt-8">
      <form onSubmit={handleCreate}>
        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Enter room name"
          className="w-full p-3 mb-4 bg-[#0B0B0B] border border-[#2A2A2A] rounded-xl text-white text-center focus:outline-none focus:border-emerald-400"
        />
        <button
          type="submit"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={baseButtonStyle(hovered, false)}
          className="w-full"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Room"}
        </button>
      </form>
    </div>
  );
}
