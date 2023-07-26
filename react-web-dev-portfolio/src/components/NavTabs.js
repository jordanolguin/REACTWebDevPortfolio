import React from "react";
import { Link } from "react-router-dom";

export default function NavTabs() {
  return (
    <div className="navContainer">
      <div className="nav">
        <p className="nav-item">
          <Link to={"/"}>home</Link>
        </p>
        <p className="nav-item">
          <Link to={"/about"}>about me</Link>
        </p>
        <p className="nav-item">
          <Link to={"/work"}>work</Link>
        </p>
        <p className="nav-item">
          <Link to={"/contact"}>contact me</Link>
        </p>
      </div>
    </div>
  );
}
