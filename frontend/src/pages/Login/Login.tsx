import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../components/Logo/Logo";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import "./Login.css";

function Login() {

    // State Variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Login Button Click
    const handleLogin = () => {

        // We will add validation and API call later

        console.log("Email :", email);
        console.log("Password :", password);

    };

    return (

        <div className="login-container">

            <div className="login-card">

                <Logo subtitle="AI Security Authentication" />

                <Input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Link
                    to="/story"
                    className="login-link"
                >
                    <Button
                        text="LOGIN"
                        onClick={handleLogin}
                    />
                </Link>

            </div>

        </div>

    );

}

export default Login;