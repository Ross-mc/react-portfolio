import React, { useState } from "react";
import MobileDropdown from "./MobileDropdown";

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

  const dropdownClickHandler = () => {
    toggleDropdown(!isDropdown);
  };



  return (
    <nav className="mobile-nav">
      <div className="dropdown">
          {!isDropdown && (
            <button
              className={"btn  btn-primary"}
              id="dropbtn"
              onClick={dropdownClickHandler}
            >
              Navigation &nbsp;<i className="fa fa-caret-down"></i>
            </button>
          )}
        {isDropdown && <MobileDropdown dropdownClickHandler={dropdownClickHandler}/>}
      </div>
    </nav>
  );
};

export default MobileNav;
