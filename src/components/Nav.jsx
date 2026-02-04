import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isOpen]);
  
  return (
    <nav className="nav" ref={navRef}>
      <a href="/" className="title"><h1 data-nav-title>BlissfulCastle</h1></a>
      <button 
        className = "hamburger"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}>
          ☰
      </button>
      <ul className={isOpen ? 'open': ''} onClick={() => setIsOpen(false)}>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "option active" : "option")}>Home</NavLink></li>
        <li><NavLink to="/code" className={({ isActive }) => (isActive ? "option active" : "option")}>Code</NavLink></li>
        <li><NavLink to="/curriculum" className={({ isActive }) => (isActive ? "option active" : "option")}>Curriculum</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav
