import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="nav_logo">LOGO</div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link to="/main">INICIO</Link>
        <Link to="/contact">CONTACTO</Link>
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;


  /* <div className="navbar">
      <div className="nav_logo">LOGO</div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <a href="#">INICIO</a>
        <a href="#">BIO</a>
        <a href="#">PORTAFOLIO</a>
        <a href="#">CONTACTO</a>
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div> */

