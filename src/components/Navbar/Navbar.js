import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/" >
        Clicky Game
      </a>

      <div id="header">
        <h3> Click images to score points </h3>
      </div>


      <div id="scores">
        <p> Current Score: </p> 
        <p> High Score: </p>
      </div>
    </nav>
  );
}

export default Navbar;
