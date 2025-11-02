"use client";

import React, { useState, useEffect } from "react";
import EnterName from "../components/focus/EnterName";
import RoomList from "../components/focus/RoomList";

export default function FocusRoomsPage() {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const storedName = localStorage.getItem("focus_name");
    if (storedName) setUserName(storedName);
  }, []);

  const handleNameSubmit = (name) => {
    localStorage.setItem("focus_name", name);
    setUserName(name);
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white flex items-center justify-center">
      {!userName ? (
        <EnterName onSubmit={handleNameSubmit} />
      ) : (
        <RoomList userName={userName} />
      )}
    </main>
  );
}
