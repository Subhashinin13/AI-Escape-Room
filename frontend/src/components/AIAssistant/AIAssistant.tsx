import "./AIAssistant.css";

interface AIAssistantProps {
  title: string;
  message: string;
}

const AIAssistant = ({ title, message }: AIAssistantProps) => {
  return (
    <div className="assistant">

      <div className="assistant-header">
        🤖 AI Assistant
      </div>

      <div className="assistant-content">

        <h3>{title}</h3>

        <p>{message}</p>

      </div>

    </div>
  );
};

export default AIAssistant;