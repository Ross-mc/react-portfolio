import React from "react";
import { Link, useLocation } from "react-router-dom";
import cv from "../assets/cv/Ross-McIntyre-CV.pdf"
const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand py-3 navbar-dark bg-dark shadow-sm">
      <div className="container">
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
            <li className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
              <Link to="/Portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className={"nav-link"}>
              <Link to={cv} download target="_self">CV</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;








