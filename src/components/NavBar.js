import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [navClassName, setClassName] = useState("topnav");
  const loadMenu = () => {
    if (navClassName === "topnav") {
      setClassName("topnav responsive");
    } else {
      setClassName("topnav");
    }
  };
  const location = useLocation();
  return (
    <div>
      <div className={navClassName}>
        <Link
          to="/races"
          className={location.pathname === "/races" ? "active" : ""}
        >
          Races
        </Link>
        <Link
          to="/teams"
          className={location.pathname === "/teams" ? "active" : ""}
        >
          Teams
        </Link>
        <Link
          to="/drivers"
          className={location.pathname === "/drivers" ? "active" : ""}
        >
          Drivers
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About
        </Link>
        <button className="icon" onClick={loadMenu}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
