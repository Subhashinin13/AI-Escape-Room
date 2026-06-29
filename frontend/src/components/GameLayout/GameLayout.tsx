import "./GameLayout.css";

import HUD from "../HUD/HUD";
import AIAssistant from "../AIAssistant/AIAssistant";
import Inventory from "../Inventory/Inventory";
import MissionPanel from "../MissionPanel/MissionPanel";

interface Props {
  room: string;
  time: string;

  hintsFound: number;
  totalHints: number;

  image: React.ReactNode;

  assistantTitle: string;
  assistantSubtitle: string;
  assistantDescription: string;

  inventory: string[];

  missions: {
    title: string;
    completed: boolean;
  }[];
}

const GameLayout = ({
  room,
  time,
  hintsFound,
  totalHints,
  image,
  assistantTitle,
  assistantSubtitle,
  assistantDescription,
  inventory,
  missions,
}: Props) => {
  return (
    <div className="game-layout">

      <HUD
        room={room}
        time={time}
        hintsFound={hintsFound}
        totalHints={totalHints}
      />

      <div className="game-image">
        {image}
      </div>

      <div className="bottom-panels">

        <AIAssistant
          title={assistantTitle}
          subtitle={assistantSubtitle}
          description={assistantDescription}
        />

        <MissionPanel
          missions={missions}
        />

        <Inventory
          items={inventory}
        />

      </div>

    </div>
  );
};

export default GameLayout;