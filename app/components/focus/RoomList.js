"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "../../../lib/supabaseClient";
import CreateRoom from "./CreateRoom";
import RoomView from "./RoomView";

export default function RoomList({ userName }) {
  const [rooms, setRooms] = useState([]);
  const [activeRoom, setActiveRoom] = useState(null);

  // Fetch and subscribe to changes
  useEffect(() => {
    fetchRooms();

    const channel = supabase
      .channel("realtime:focus_rooms")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "focus_rooms" },
        () => fetchRooms()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Fetch rooms
  const fetchRooms = async () => {
    const { data, error } = await supabase
      .from("focus_rooms")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error("Error fetching rooms:", error);
    setRooms(data || []);
  };

  // Auto-cleanup: delete room on leave
  const handleLeaveRoom = async (room) => {
    try {
      await supabase.from("focus_rooms").delete().eq("id", room.id);
      setActiveRoom(null);
    } catch (error) {
      console.error("Error deleting room:", error.message);
    }
  };

  // Go into room view
  if (activeRoom) {
    return (
      <RoomView
        room={activeRoom}
        userName={userName}
        onLeave={() => handleLeaveRoom(activeRoom)}
      />
    );
  }

  // Main list
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h1 className="text-3xl font-bold text-emerald-400 mb-6">
        Welcome, {userName}
      </h1>

      <p className="text-gray-400 mb-8">
        Join an existing Focus Room or create your own.
      </p>

      <div className="space-y-4 max-w-lg mx-auto">
        {rooms.length === 0 && (
          <p className="text-gray-500">No active rooms yet.</p>
        )}

        {rooms.map((room) => (
          <div
            key={room.id}
            onClick={() => setActiveRoom(room)}
            className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-4 text-left hover:border-emerald-400 transition-all cursor-pointer"
          >
            <h3 className="text-white font-semibold">{room.name}</h3>
            <p className="text-gray-400 text-sm">
              {room.participants} participant
              {room.participants !== 1 ? "s" : ""}
            </p>
          </div>
        ))}
      </div>

      <CreateRoom userName={userName} />
    </motion.div>
  );
}
