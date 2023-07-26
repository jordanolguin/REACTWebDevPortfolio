import React from "react";

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="navContainer">
      <div className="nav">
        <p className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            home
          </a>
        </p>
        <p className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            about me
          </a>
        </p>
        <p className="nav-item">
          <a
            href="#work"
            onClick={() => handlePageChange("Work")}
            className={currentPage === "Work" ? "nav-link active" : "nav-link"}
          >
            work
          </a>
        </p>
        <p className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            contact me
          </a>
        </p>
      </div>
    </div>
  );
}
