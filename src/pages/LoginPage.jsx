import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
const API_URL = import.meta.env.VITE_API_URL


function LoginPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const { storeToken, authenticateUser, storeUser } = useContext(AuthContext);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password };

        axios
            .post(`${API_URL}/auth/login`, requestBody)
            .then((response) => {
                console.log("JWT token", response.data.authToken);
                console.log("Response", response.data.payload);

                storeUser(response.data.payload);
                storeToken(response.data.authToken);
                authenticateUser();
                navigate("/");
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            });
    };

    return (
        <div className="hero h-full">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>
                    <p className="py-6">Login to schedule visits effortlessly and find your dream apartment with ease.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-xl">
                    <form className="card-body" onSubmit={handleLoginSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                                <input type="email" placeholder="email" name="email" required value={email} className="input input-bordered" onChange={handleEmail} />
                            </label>
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Password</span>

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={handlePassword}
                                    required
                                    className="input input-bordered"
                                />
                            </label>
                        </div>

                        <button className="btn btn-primary rounded-xl mt-5" type="submit">Login</button>
                    </form>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <div className="flex flex-col align-middle items-center mb-5 justify-center">
                        <p>Don't have an account yet?</p>
                        <Link to={"/signup"}>Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;