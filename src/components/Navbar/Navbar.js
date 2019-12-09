import React from "react";
import "./style.css";
import css from './styles';

function Navbar({currentScore, highScore}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/" >
        Clicky Game
      </a>

      <div id="header">
        <h3> Click images to score points </h3>
      </div>


      <div id="scores">
        <p style={css.para}> Current Score: {currentScore} </p> 
        <p> High Score: {highScore}</p>
      </div>
    </nav>
  );
}

export default Navbar;
