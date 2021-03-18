import React from "react";
import { Link } from "react-router-dom";

const TopBar = ({ user }) => {

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Itunes Top 100</li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
