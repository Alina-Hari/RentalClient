import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { LuAmpersand } from "react-icons/lu";

function Navbar() {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return (
        <div className="navbar w-full h-[10%] bg-base-200 md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">
                            <button>Home</button>
                        </Link></li>

                        <li><Link to="/apartments">
                            <button>Apartments</button>
                        </Link></li>
                    </ul>
                </div>
            </div>


            <div className="navbar-center">
                <Link className="btn btn-ghost text-xl md:text-3xl" to="/">
                    <div className="flex items-center"><span>Click</span><span className="rotate-180"><LuAmpersand /></span>
                        <span>Rent</span></div>
                </Link>
            </div>
            <div className="navbar-end justify-end">
                <div className="flex gap-4">

                    {isLoggedIn && (
                        <>
                            <button onClick={logOutUser}>Logout</button>
                            <div className="avatar">
                                <div className="w-8 bg-accent mask mask-hexagon ">
                                    <Link to='/userprofile'><span className="text-white pl-3 text-center align-middle">{user && user.name[0]}</span></Link>
                                </div>
                            </div>
                        </>
                    )}

                    {!isLoggedIn && (
                        <>
                            <Link to="/login">
                                <button>Login</button>
                            </Link>
                        </>
                    )}
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;