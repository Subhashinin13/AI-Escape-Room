import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

import Logo from "../../components/Logo/Logo";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { validateLogin } from "../../validations/LoginValidation";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    const validation = validateLogin(email, password);

    setErrors({
      email: validation.email || "",
      password: validation.password || "",
    });

    if (Object.keys(validation).length === 0) {
      navigate("/story");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <Logo />

        <Input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />

        <Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />

        <Button
          text="LOGIN"
          onClick={handleLogin}
        />

      </div>
    </div>
  );
};

export default Login;