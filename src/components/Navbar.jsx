import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useLocation } from "react-router-dom";

const Navbar = () => {

    const homeLocation = useLocation();

    const isHomePage = homeLocation.pathname === '/';

    const navbarStyle = {
        backgroundColor: `url(${isHomePage ? 'bg-[#9538E2]' : 'white'})`,
        color: isHomePage ? "white" : "black"
    };

    return (
        <div style={navbarStyle} className="navbar bg-[#f2f2f2] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/statistics'>Statistics</NavLink>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                    </ul>
                </div>
                <NavLink to='/' className="text-xl font-bold">Gadget Heaven</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 font-semibold">
                    <NavLink className={({ isActive }) =>
                                `${isActive ? ' text-white' : ''}`
                            } to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) =>
                                `${isActive ? 'text-[#9538E2] ' : ''}`
                            } to='/statistics'>Statistics</NavLink>
                    <NavLink className={({ isActive }) =>
                                `${isActive ? 'text-[#9538E2]' : ''}`
                            } to='/dashboard'>Dashboard</NavLink>
                    <NavLink className={({ isActive }) =>
                                `${isActive ? 'text-[#9538E2]' : ''}`
                            } to='/login'>Login</NavLink>
                    
                </ul>
            </div>
            <div className="navbar-end gap-5">
                {/* <Link className="h-10 w-10 border bg-white text-black rounded-full flex justify-center items-center"><IoCartOutline /></Link> */}
                <div className=" bg-base-100 text-black rounded-full border">
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item"></span>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                <div className="card-body">
                                    
                                    
                                    <div className="card-actions">
                                    <NavLink to='/dashboard'><button className="btn btn-primary btn-block ">Dashboard</button></NavLink> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-base-100 text-black rounded-full border">
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <div className="text-2xl">
                                        <CiHeart />
                                    </div>
                                    <span className="badge badge-sm indicator-item"></span>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                <div className="card-body">
                                    
                                    <div className="card-actions">
                                      <NavLink to='/dashboard'><button className="btn btn-primary btn-block ">Dashboard</button></NavLink>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;