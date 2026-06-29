import { useNavigate } from "react-router-dom";

import "./Dashboard.css";

import Logo from "../../components/Logo/Logo";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Timer from "../../components/Timer/Timer";
import RoomCard from "../../components/RoomCard/RoomCard";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <Logo subtitle="Mission Dashboard" />

        <ProgressBar progress={25} />

        <Timer />

        <div className="rooms-grid">
          <RoomCard
            roomNumber={1}
            title="Hand Gesture Search"
            description="Search the laboratory using hand gestures to find hidden clues."
            unlocked={true}
            onClick={() => navigate("/room1")}
          />

          <RoomCard
            roomNumber={2}
            title="Cipher Decoder"
            description="Decode the encrypted AI security code."
            unlocked={false}
          />

          <RoomCard
            roomNumber={3}
            title="Puzzle Assembly"
            description="Assemble the laboratory puzzle."
            unlocked={false}
          />

          <RoomCard
            roomNumber={4}
            title="Energy Orb"
            description="Guide the energy orb through the electric maze."
            unlocked={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;