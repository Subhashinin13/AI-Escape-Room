import "./HUD.css";

interface HUDProps {
  room: string;
  time: string;
  hintsFound: number;
  totalHints: number;
}

const HUD = ({
  room,
  time,
  hintsFound,
  totalHints,
}: HUDProps) => {
  return (
    <div className="hud">

      <div className="hud-box left">
        <div className="hud-title">⏳ TIME REMAINING</div>
        <div className="hud-value">{time}</div>
      </div>

      <div className="hud-center">
        <h1>{room}</h1>
        <p>Search The Laboratory</p>
      </div>

      <div className="hud-box right">
        <div className="hud-title">🔎 HINT FOUND</div>
        <div className="hud-value">
          {hintsFound}/{totalHints}
        </div>
      </div>

    </div>
  );
};

export default HUD;