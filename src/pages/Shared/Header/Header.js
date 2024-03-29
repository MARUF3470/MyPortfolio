import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../components/Picture/m-logo-png-transparent.png'
const Header = () => {
    const menu = <>
        <li><Link to='/' className='btn btn-ghost'>About Me</Link></li>
        <li><Link to='/blog' className='btn btn-ghost'>Blogs</Link></li>
        <li><Link to='/contact' className='btn btn-ghost'>Contact Me</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menu
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-12' src={logo} alt="" /> Maruf Hossain</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        menu
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;