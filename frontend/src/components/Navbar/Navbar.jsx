import { NavLink } from 'react-router-dom';
import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling

function Navbar() {
  return (
    <nav aria-label="Main navigation">
      <div className="container">
        <h1>MindBloom</h1>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} aria-current="page">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/mood-tracker" className={({ isActive }) => isActive ? 'active' : ''}>
              Mood Tracker
            </NavLink>
          </li>
          <li>
            <NavLink to="/journal" className={({ isActive }) => isActive ? 'active' : ''}>
              Journal
            </NavLink>
          </li>
          <li>
            <NavLink to="/meditations" className={({ isActive }) => isActive ? 'active' : ''}>
              Meditations
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;