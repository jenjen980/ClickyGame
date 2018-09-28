import React from "react";
import "./NavBar.css";



const NavBar = props => (
  <div className="nav">
      <ul>
          <li>Click Image to Begin</li>
          <li id="message">Correct: {props.correct}</li>
          <li>Current Score: {props.curScore}</li>
          <li>Top Score: {props.topScore}</li>

      </ul>
    </div>
);

export default NavBar;