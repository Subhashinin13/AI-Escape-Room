import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Story.css";

const storyText = `Year 2048.

You are one of the brightest AI Engineers in the world.

You have been invited to Neural Labs to test a revolutionary Artificial Intelligence system.

But something goes terribly wrong...

The AI locks down the entire laboratory and seals every exit.

To escape, you must solve four intelligent puzzle rooms.

Each room tests a different engineering skill.

Can you defeat the AI before time runs out?`;

const Story = () => {
  const navigate = useNavigate();

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(storyText.substring(0, index));
      index++;

      if (index > storyText.length) {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="story-container">

      <div className="story-card">

        <h1>Mission Briefing</h1>

        <div className="story-box">
          <p>{displayText}</p>
        </div>

        <div className="story-buttons">

          <button
            className="skip-btn"
            onClick={() => navigate("/dashboard")}
          >
            Skip
          </button>

          <button
            className="continue-btn"
            onClick={() => navigate("/dashboard")}
          >
            Continue
          </button>

        </div>

      </div>

    </div>
  );
};

export default Story;