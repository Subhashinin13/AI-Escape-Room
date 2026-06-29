import "./ProgressBar.css";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="progress-wrapper">

      <div className="progress-header">

        <h3>Mission Progress</h3>

        <span>{progress}%</span>

      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>

      </div>

    </div>
  );
};

export default ProgressBar;