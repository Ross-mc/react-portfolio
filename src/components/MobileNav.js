import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import cv from "../assets/cv/Ross-McIntyre-CV.pdf";
import MobileDropdown from "./MobileDropdown"

const MobileNav = () => {
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

  const [isDropdown, toggleDropdown] = useState(false);

  const location = useLocation();

  const dropdownClickHandler = () => {
    toggleDropdown(!isDropdown)
  }

  return (
    <nav class="mobile-nav">
      <div class="dropdown">
        <div>
          <button class="btn  btn-primary" id="dropbtn" onClick={dropdownClickHandler}>
            Navigation &nbsp;<i class="fa fa-caret-down"></i>
          </button>
        </div>
        {isDropdown && MobileDropdown}
      </div>
    </nav>
  );
};

export default MobileNav;
