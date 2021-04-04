import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import cv from "../assets/cv/Ross-McIntyre-CV.pdf";

const MobileDropdown = () => {
  const location = useLocation();

    // $("#dropbtn").click(function(){
  //     $(".dropdown-link").css("display", "block").animate({height: "25vh", lineHeight: "25vh"}, 1000);
  //     $("#dropbtn").css("display", "none");
  //     $("#close").css("display", "block")
  // });

  // $("#close, .current").click(function(){
  //     console.log('Clicked')
  //     $(".dropdown-link").slideUp(1000).animate({height: "1vh", lineHeight: "1vh"}, 1)
  //     setTimeout(function(){$("#dropbtn").css("display", "block")}, 1000);
  //     $("#close").css("display", "none");
  // });
  const [styles, setStyles] = useState({
    display: "block",
    height: "1vh",
    lineHeight: "1vh"
  })

  useEffect(() => {
    let interval = 1;
    const animate = setInterval(() => {
      console.log(interval)
      if (interval === 25){
        clearInterval(animate)
      }
      setStyles({...styles, height: `${interval}vh`, lineHeight: `${interval}vh`})
      interval++;
    }, 40)
  }, [])
  



  return (
    <>
      <div id="closeDiv">
          <button class="btn btn-primary" id="close">
            X
          </button>
        </div>
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "dropdown-link current"
              : "dropdown-link navLink"
          }
          style = {styles}
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
          style = {styles}
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
          style = {styles}
        >
          Portfolio
        </Link>
        <a href={cv} className="dropdown-link navLink" style = {styles}>
          CV
        </a>
      </>
  )
}

export default MobileDropdown