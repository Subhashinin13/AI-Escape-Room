import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {

    const [seconds, setSeconds] = useState(3600);

    useEffect(() => {

        const interval = setInterval(() => {

            setSeconds((prev) => {

                if (prev <= 0) {

                    clearInterval(interval);

                    return 0;

                }

                return prev - 1;

            });

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    return (

        <div className="timer-container">

            <h3>Time Remaining</h3>

            <h1>

                {String(minutes).padStart(2, "0")}:

                {String(remainingSeconds).padStart(2, "0")}

            </h1>

        </div>

    );

};

export default Timer;