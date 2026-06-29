import "./HUD.css";

interface HUDProps {
  time: string;
  room: string;
  hintsFound: number;
  totalHints: number;
}

const HUD = ({ time, room, hintsFound, totalHints }: HUDProps) => {
  return (
    <div className="hud">

      <div className="hud-card">
        <div className="hud-title">⏳ TIME REMAINING</div>
        <div className="hud-value timer">{time}</div>
      </div>

      <div className="hud-center">
        <h1>{room}</h1>
        <p>Search The Laboratory</p>
      </div>

      <div className="hud-card">
        <div className="hud-title">🔍 HINT FOUND</div>
        <div className="hud-value">
          {hintsFound} / {totalHints}
        </div>
      </div>

    </div>
  );
};

export default HUD;