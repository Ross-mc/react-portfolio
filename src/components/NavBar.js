import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import cv from "../assets/cv/Ross-McIntyre-CV.pdf";
const NavBar = () => {
  const location = useLocation();

  const [isHovered, setHovered] = useState(false)

  const toggleHover = () => {
    setHovered(!isHovered)
  }

  return (

    // $(".navLink").mouseenter(function(){
    //   //     $(".current").css("color", "whitesmoke");
    //   // });
    //   // $(".navLink").mouseleave(function(){
    //   //     $(".current").css("color", "#008B8B");
    //   // });

    <nav id="fullNav">
      <div className="nav-list justify-content">
        <div className="nav-item">
          <Link to="/" onMouseEnter={toggleHover} onMouseLeave={toggleHover} className={location.pathname === "/" ? isHovered ? "currentH" : "current" : "navLink"}>
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/About" onMouseEnter={toggleHover} onMouseLeave={toggleHover} className={location.pathname === "/About" ?  isHovered ? "currentH" : "current" : "navLink"}>
            About
          </Link>
        </div>
      </div>
      <div className="nav-list justify-content-end">
        <div className="nav-item">
          <Link to="/Portfolio" onMouseEnter={toggleHover} onMouseLeave={toggleHover} className={location.pathname === "/Portfolio" ?  isHovered ? "currentH" : "current" : "navLink"}>
            Portfolio
          </Link>
        </div>
        <div className="nav-item">
          <a href={cv} onMouseEnter={toggleHover} onMouseLeave={toggleHover} className="navLink">CV</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
