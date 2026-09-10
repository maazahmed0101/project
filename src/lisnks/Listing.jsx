import React from "react";
import { NavLink } from "react-router-dom";
function Listing() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>login</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Listing;
