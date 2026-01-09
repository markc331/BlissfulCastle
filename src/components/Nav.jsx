import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav">
      <a href="/" className="title"><h1>BlissfulCastle</h1></a>
      <button 
        className = "hamburger"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}>
          ☰
      </button>
      <ul className={isOpen ? 'open': ''}>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "option active" : "option")}>Home</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => (isActive ? "option active" : "option")}>Projects</NavLink></li>
        <li><NavLink to="/curriculum" className={({ isActive }) => (isActive ? "option active" : "option")}>Curriculum</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav