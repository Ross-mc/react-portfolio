import React, { useState } from "react";
import MobileDropdown from "./MobileDropdown";

const MobileNav = () => {
 
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
