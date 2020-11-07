import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <h3><NavLink to="/" className="logo">Navbar</NavLink></h3>
      <ul className="nav-list">
        <li className="nav-item"><NavLink to="/use-form">use-form</NavLink></li>
        <li className="nav-item"><NavLink to="/">2</NavLink></li>
        <li className="nav-item"><NavLink to="/">3</NavLink></li>
      </ul>
    </nav>
  );
};
