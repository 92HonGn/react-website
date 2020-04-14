import React, { useState } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            {/* <img src={logo} alt="Beach Resort"/> */}
            <h1>日本の旅</h1>
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={() => setOpen(!open)}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={ open ? "nav-links show-nav" : "nav-links" }>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/rooms">旅館種類</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}