import { useState } from "react";
import "./Room1.css";

import HUD from "../../components/HUD/HUD";
import Hotspot from "../../components/Hotspot/Hotspot";

import labRoom from "../../assets/rooms/lab-room.jpg";

// IMPORTANT
import room1Hotspots from "../../data/room1Hotspots";
import type { HotspotData } from "../../data/room1Hotspots";

const Room1 = () => {
  const [selectedObject, setSelectedObject] =
    useState<HotspotData | null>(null);

  const handleHotspotClick = (spot: HotspotData) => {
    setSelectedObject(spot);
  };

  return (
    <div className="room-page">
      {/* ================= HUD ================= */}

      <HUD
        time="59:42"
        room="ROOM 1"
        hintsFound={1}
        totalHints={12}
      />

      {/* ================= ROOM IMAGE ================= */}

      <div className="room-image-container">
        <img
          src={labRoom}
          alt="Laboratory"
          className="room-image"
        />

        {room1Hotspots.map((spot: HotspotData) => (
          <Hotspot
            key={spot.id}
            top={spot.top}
            left={spot.left}
            width={spot.width}
            height={spot.height}
            onClick={() => handleHotspotClick(spot)}
          />
        ))}
      </div>

      {/* ================= AI ASSISTANT ================= */}

      <div className="assistant-panel">
        <h2>
          {selectedObject
            ? selectedObject.title
            : "🤖 AI Assistant"}
        </h2>

        <h3>
          {selectedObject
            ? selectedObject.subtitle
            : "Welcome Engineer"}
        </h3>

        <p style={{ whiteSpace: "pre-line" }}>
          {selectedObject
            ? selectedObject.description
            : "Click on any highlighted object to begin your investigation."}
        </p>
      </div>
    </div>
  );
};

export default Room1;