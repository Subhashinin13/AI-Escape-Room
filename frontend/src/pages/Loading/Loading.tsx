import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loading.css";

function Loading() {

    const [progress, setProgress] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {

        const interval = setInterval(() => {

            setProgress((prev) => {

                if (prev >= 100) {

                    clearInterval(interval);

                    navigate("/login");

                    return 100;
                }

                return prev + 1;

            });

        }, 30);

        return () => clearInterval(interval);

    }, [navigate]);

    return (

        <div className="loading-container">

            <h1 className="game-title">

                Escape From Neural Labs

            </h1>

            <p className="loading-text">

                Initializing AI System...

            </p>

            <div className="progress-bar">

                <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                ></div>

            </div>

            <h2>{progress}%</h2>

        </div>

    );

}

export default Loading;