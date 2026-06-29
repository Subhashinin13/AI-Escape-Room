import "./Input.css";

interface InputProps {

    type: string;

    placeholder: string;

    value: string;

    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

function Input({

    type,

    placeholder,

    value,

    onChange

}: InputProps) {

    return (

        <input

            className="custom-input"

            type={type}

            placeholder={placeholder}

            value={value}

            onChange={onChange}

        />

    );

}

export default Input;