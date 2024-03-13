// src/pages/SignupPage.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function SignupPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [isAgent, setIsAgent] = useState(true)

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);
    const handleAgentCheckbox = (e) => {
        setIsAgent(!isAgent)
        console.log(isAgent)
    }


    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password, name, isAgent };

        axios.post(`${API_URL}/auth/signup`, requestBody)
            .then((response) => {
                navigate('/login');
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    };


    return (
        <div className="hero h-full">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p className="py-6">Sign up now to start booking visits. Got an apartment to rent out? Register today to list your property, manage bookings, and reach potential tenants more efficiently.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-xl">

                    <form className="card-body" onSubmit={handleSignupSubmit}>

                        <label className="label">
                            <span className="label-text">Name</span>

                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleName}
                                required
                                className="input input-bordered"
                            />
                        </label>

                        <label className="label">
                            <span className="label-text">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleEmail}
                                className="input input-bordered"
                                placeholder="email"
                                required
                            />
                        </label>
                        <label className="label">
                            <span className="label-text">Password</span>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handlePassword}
                                required
                                className="input input-bordered"
                            />
                        </label>


                        <label className="flex gap-1 items-center">
                            <input type="checkbox" id="isAgent" className="checkbox checkbox-xs checkbox-accent" name="isAgent" checked={isAgent}
                                onChange={handleAgentCheckbox}
                            />
                            <span className="label-text">I'm an agent</span>

                        </label>

                        <button className="btn btn-primary rounded-xl mt-5" type="submit">Sign Up</button>
                    </form>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <div className="flex flex-col align-middle items-center mb-5 justify-center">
                        <p>Already have account?</p>
                        <Link to={"/login"}> Login</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;
