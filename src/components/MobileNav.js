import React from "react";
import {Link, useLocation} from "react-router-dom";
import cv from "../assets/cv/Ross-McIntyre-CV.pdf";

const MobileNav = () => {

  const location = useLocation();

  return (
    <nav class="mobile-nav">
      <div class="dropdown">
        <div>
          <button class="btn  btn-primary" id="dropbtn">
            Navigation &nbsp;<i class="fa fa-caret-down"></i>
          </button>
        </div>
        <div id="closeDiv">
          <button class="btn btn-primary" id="close">
            X
          </button>
        </div>
        <Link to="/" className={location.pathname === "/" ? "dropdown-link current" : "dropdown-link navLink"}>
            Home
          </Link>
          <Link to="/About" className={location.pathname === "/About" ? "dropdown-link current" : "dropdown-link navLink"}>
            About
          </Link>
          <Link to="/Portfolio" className={location.pathname === "/Portfolio" ? "dropdown-link current" : "dropdown-link navLink"}>
            Portfolio
          </Link>
          <a href={cv} className="dropdown-link navLink">CV</a>
      </div>
    </nav>
  );
};

export default MobileNav
