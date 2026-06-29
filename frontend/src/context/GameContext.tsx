import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface Mission {
  title: string;
  completed: boolean;
}

interface GameContextType {
  inventory: string[];
  setInventory: React.Dispatch<React.SetStateAction<string[]>>;

  hintsFound: number;
  setHintsFound: React.Dispatch<React.SetStateAction<number>>;

  assistantTitle: string;
  assistantSubtitle: string;
  assistantDescription: string;

  updateAssistant: (
    title: string,
    subtitle: string,
    description: string
  ) => void;

  missions: Mission[];
  setMissions: React.Dispatch<
    React.SetStateAction<Mission[]>
  >;
}

const GameContext = createContext<GameContextType | null>(
  null
);

export const GameProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [inventory, setInventory] = useState<string[]>([]);

  const [hintsFound, setHintsFound] = useState(0);

  const [assistantTitle, setAssistantTitle] =
    useState("🤖 AI Assistant");

  const [assistantSubtitle, setAssistantSubtitle] =
    useState("Welcome Engineer");

  const [assistantDescription, setAssistantDescription] =
    useState(
      "Search the laboratory to find clues."
    );

  const [missions, setMissions] = useState([
    {
      title: "Find Password",
      completed: false,
    },

    {
      title: "Unlock Computer",
      completed: false,
    },

    {
      title: "Escape Laboratory",
      completed: false,
    },
  ]);

  const updateAssistant = (
    title: string,
    subtitle: string,
    description: string
  ) => {
    setAssistantTitle(title);
    setAssistantSubtitle(subtitle);
    setAssistantDescription(description);
  };

  return (
    <GameContext.Provider
      value={{
        inventory,
        setInventory,

        hintsFound,
        setHintsFound,

        assistantTitle,
        assistantSubtitle,
        assistantDescription,

        updateAssistant,

        missions,
        setMissions,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error(
      "useGame must be used inside GameProvider"
    );
  }

  return context;
};