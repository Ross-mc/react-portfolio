import React from "react";
import { Link, useLocation } from "react-router-dom";
import cv from "../assets/cv/Ross-McIntyre-CV.pdf";
const NavBar = () => {
  const location = useLocation();

  // <nav id="fullNav">
  //               <div class="nav-list justify-content">
  //                   <div class="nav-item"><a href="index.html" class="current">Home</a></div>
  //                   <div class="nav-item"><a href="#top" class="navLink">About Me</a></div>
  //               </div>
  //               <div class="nav-list justify-content-end">
  //                   <div class="nav-item"><a href="my-portfolio.html" class="navLink">Portfolio</a></div>
  //                   <div class="nav-item"><a href="mailto:rossmci90@hotmail.co.uk" class="navLink">Contact</a></div>
  //               </div>
  //           </nav>


  // className={location.pathname === "/" ? "current" : "navLink"}
  return (
    <nav id="fullNav">
      <div className="nav-list justify-content">
        <div className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "current" : "navLink"}>
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/About" className={location.pathname === "/About" ? "current" : "navLink"}>
            About
          </Link>
        </div>
      </div>
      <div className="nav-list justify-content-end">
        <div className="nav-item">
          <Link to="/Portfolio" className={location.pathname === "/Portfolio" ? "current" : "navLink"}>
            Portfolio
          </Link>
        </div>
        <div className="nav-item">
          <a href={cv} className="navLink">CV</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
