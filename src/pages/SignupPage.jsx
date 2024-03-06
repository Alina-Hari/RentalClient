// src/pages/SignupPage.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [isAgent, setIsAgent] = useState(false)

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);
    const handleAgentCheckbox = (e) => { // TODO checkbox fix
        setIsAgent(e.target.checked)
        console.log(isAgent)
    }


    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password, name, isAgent: isAgent };

        axios.post(`${API_URL}/auth/signup`, requestBody)
            .then((response) => {
                navigate('/login');
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            }) // TODO checkbox
    };


    return (
        <div className="SignupPage">
            <h1>Sign Up</h1>

            <form onSubmit={handleSignupSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                />

                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleName}
                />

                <label>Check the box if you are an agent
                    <input type="checkbox" id="isAgent" name="isAgent" checked={isAgent}
                        onChange={handleAgentCheckbox}
                    />
                </label>

                <button type="submit">Sign Up</button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Already have account?</p>
            <Link to={"/login"}> Login</Link>
        </div>
    )
}

export default SignupPage;
