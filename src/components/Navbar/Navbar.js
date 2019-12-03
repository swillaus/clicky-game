import React from "react";
import "./style.css";

function Navbar({ card, handleClick }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#" >
        Clicky Game
      </a>

      <div id="header">
        <p> Click images to score points </p>
      </div>


      <div id="scores">
        <p> Current Score: </p> 
        <p> High Score: </p>
      </div>
    </nav>
  );
}

export default Navbar;
