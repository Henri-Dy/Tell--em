import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeControl from './ThemeControl';
import CreateTold from '../Pages/CreateTold';


const Navbar = () => {
  const [appendCreateTold, setAppendCreateTold] = useState(false);

  const handleCreateTold = () => {
    setAppendCreateTold(!appendCreateTold);
  }

  return (
    <div className='sticky w-full top-0 z-[99] mb-4'>
      <div className="navbar bg-gradient-to-r from-cyan-500 to-green-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to="/">Homepage</Link></li>
              <li><Link onClick={handleCreateTold}>Create Idea</Link></li>
              <li><Link to="/Connexion">Connexion</Link></li>
              <li><Link to="/">Open Source?</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn btn-ghost text-white text-xl">Tell 'Em</a>
          <ThemeControl />
        </div>
      </div>
      {appendCreateTold && <CreateTold />} {/* Affichage conditionnel du composant */}
    </div>
  )
}

export default Navbar;
