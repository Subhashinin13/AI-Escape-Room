import "./MissionPanel.css";

interface MissionPanelProps {
  missions: {
    title: string;
    completed: boolean;
  }[];
}

const MissionPanel = ({ missions }: MissionPanelProps) => {
  return (
    <div className="mission-panel">
      <h2>🎯 Objectives</h2>

      {missions.map((mission, index) => (
        <div className="mission-item" key={index}>
          {mission.completed ? "✅" : "⭕"} {mission.title}
        </div>
      ))}
    </div>
  );
};

export default MissionPanel;