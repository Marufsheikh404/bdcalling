import { NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, LogOut } = useAuth();
    const handleLogOut = () => {
        LogOut();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "LogOut Successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-white font-semibold bg-yellow-600" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/bookdetails"
                    className={({ isActive }) =>
                        isActive ? "text-white font-semibold bg-yellow-600" : ""
                    }
                >
                    Listed Book
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/page"
                    className={({ isActive }) =>
                        isActive ? "text-white font-semibold bg-yellow-600" : ""
                    }
                >
                    Page To Read
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm bg-red-200">
            <div className="navbar-start">
                {/* Dropdown for small screens */}
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">Vibe Book</a>
            </div>

            {/* Menu for large screens */}
            <div className="navbar-center flex lg:flex gap-3">
                <ul className="menu menu-horizontal px-3">{links}</ul>
            </div>

            {/* Right side buttons */}
            <div className="navbar-end flex gap-3">
                {
                    user ? <button onClick={handleLogOut} className="btn bg-red-500 px-2 font-bold">LogOut</button> :
                        <> <NavLink to={'/login'}><button className="btn bg-[#23BE0A] px-3 text-white">Sign In</button></NavLink>
                            <NavLink to={'/signUp'}><button className="btn bg-[#59C6D2] px-3 text-white">Sign Up</button></NavLink></>
                }
            </div>
        </div>
    );
};

export default Navbar;
