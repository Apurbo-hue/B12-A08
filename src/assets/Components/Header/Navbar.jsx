import React from 'react';
import gitHub from './../../images/github.png'
import logo from './../../images/logo.png'
import { Link } from 'react-router';

const Navbar = () => {

    const links =
        <>

            <li><Link to="/">Home</Link></li>
            <li><a>Apps</a></li>
            <li><a>Installation</a></li>

        </>
    return (
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl text-[#6d36e6]"><img src={logo} alt="" />HERO.IO</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/Apurbo-hue' target='blank' className="btn bg-linear-to-r from-[#6d36e6] to-[#995df0]"><img src={gitHub} alt="failed to load" />Contribute</a>
  </div>
</div>
    );
};

export default Navbar;