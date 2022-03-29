import React from "react";
import "../styles/navbar.css"

function navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div className="container-fluid">
          <div className="navbar-brand" id="wherefont">
            <h3 id="where">
              <b>Where in the world ?</b>
            </h3>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
