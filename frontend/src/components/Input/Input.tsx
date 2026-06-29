import "./Input.css";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  error,
}: InputProps) => {
  return (
    <div className="input-wrapper">
      <input
        className="custom-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default Input;