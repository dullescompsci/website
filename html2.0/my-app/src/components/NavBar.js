import React from "react";
import { Link, withRouter } from "react-router-dom";
import './NavBar.css';

function NavBar(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            React Multi-Page Website
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">

                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>

                <Link class="nav-link" to="/about">
                  About
                </Link>

                <Link class="nav-link" to="/contact">
                  Contact
                </Link>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;