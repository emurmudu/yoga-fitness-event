import { Link, NavLink } from "react-router-dom";
import userPic from '../../assets/user.png'

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/members">Members</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-200 shadow-md px-10">
            <div className="navbar-start">

                <div className="dropdown">
                    <div className=" flex flex-row-reverse justify-center items-center gap-2">
                        <h1 className=" text-xl md:text-2xl lg:text-3xl text-pink-400 font-bold">YoGa</h1>
                        <label tabIndex={0} className="btn btn-primary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}

                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-vertical lg:menu-horizontal px-1 text-pink-400 font-bold ">

                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={userPic} />
                    </div>
                </label>
                <NavLink to="/login">
                    <button className="btn text-pink-400 font-bold">Login</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;