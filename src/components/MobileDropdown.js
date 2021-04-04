import React from "react";

const MobileDropdown = () => {
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
        >
          Portfolio
        </Link>
        <a href={cv} className="dropdown-link navLink">
          CV
        </a>
      </>
  )
}

export default MobileDropdown