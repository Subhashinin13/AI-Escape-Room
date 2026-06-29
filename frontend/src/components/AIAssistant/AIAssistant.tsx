import "./AIAssistant.css";

interface AIAssistantProps {
  title: string;
  subtitle: string;
  description: string;
}

const AIAssistant = ({
  title,
  subtitle,
  description,
}: AIAssistantProps) => {
  return (
    <div className="ai-assistant">
      <h2>🤖 AI Assistant</h2>

      <h3>{title}</h3>

      <h4>{subtitle}</h4>

      <p>{description}</p>
    </div>
  );
};

export default AIAssistant;