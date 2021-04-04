import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import cv from "../assets/cv/Ross-McIntyre-CV.pdf";

const MobileDropdown = ({dropdownClickHandler}) => {
  const location = useLocation();


  // $("#close, .current").click(function(){
  //     console.log('Clicked')
  //     $(".dropdown-link").slideUp(1000).animate({height: "1vh", lineHeight: "1vh"}, 1)
  //     setTimeout(function(){$("#dropbtn").css("display", "block")}, 1000);
  //     $("#close").css("display", "none");
  // });
  const [styles, setStyles] = useState({
    display: "block",
    height: "1vh",
    lineHeight: "1vh",
  });

  useEffect(() => {
    let interval = 1;
    const animate = setInterval(() => {
      if (interval >= 25) {
        clearInterval(animate);
      }
      setStyles({
        ...styles,
        height: `${interval}vh`,
        lineHeight: `${interval}vh`,
      });
      interval += 0.1;
    }, 1);
  }, []);

  

  const closeDropdown = () => {
    let interval = 25;
    const animate = setInterval(() => {
      if (interval <= 5) {
        clearInterval(animate);
        dropdownClickHandler()
        return;
      }
      setStyles({
        ...styles,
        height: `${interval}vh`,
        lineHeight: `${interval}vh`,
      });
      interval -= 0.1;
    }, 1);
  }

  return (
    <>
      <button className="close-btn" onClick={closeDropdown}>
        <i className="fas fa-times"></i>
      </button>
      <Link
        to="/"
        className={
          location.pathname === "/"
            ? "dropdown-link current"
            : "dropdown-link navLink"
        }
        style={styles}
        onClick={closeDropdown}
      >
        Home
      </Link>
      <Link
        to="/About"
        className={
          location.pathname === "/About"
            ? "dropdown-link current"
            : "dropdown-link navLink"
        }
        style={styles}
      >
        About
      </Link>
      <Link
        to="/Portfolio"
        className={
          location.pathname === "/Portfolio"
            ? "dropdown-link current"
            : "dropdown-link navLink"
        }
        style={styles}
      >
        Portfolio
      </Link>
      <a href={cv} className="dropdown-link navLink" style={styles}>
        CV
      </a>
    </>
  );
};

export default MobileDropdown;
