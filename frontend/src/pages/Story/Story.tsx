import { Link } from "react-router-dom";
import "./Story.css";

function Story() {

    return (

        <div className="story-container">

            <h1>Mission Briefing</h1>

            <p>

                You are trapped inside the Neural Labs.

                Four AI security rooms protect the exit.

                Solve every challenge using your intelligence

                and hand gestures.

            </p>

            <Link to="/dashboard">

                <button>

                    Begin Mission

                </button>

            </Link>

        </div>

    );

}

export default Story;