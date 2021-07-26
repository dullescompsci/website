import React from "react";
import { Link, withRouter } from "react-router-dom";
import './Header.css';

function Header(props) {
  return (
    <div className="navigation">
      <nav class="navbar">
        <div class="row">
          <div class="column">
            <Link class="navbar-logo" to="/">
                <img src="dullescs.png" alt="Dulles Logo, ofc" width="200" height="75"></img>
            </Link>
          </div>

          <div class="column">
            <ul class="">
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>

                <Link class="nav-link" to="/news">
                  Announcements
                </Link>

                <Link class="nav-link" to="/resources">
                  Member Resources
                </Link>

                <Link class="nav-link" to="/archive">
                  Archive
                </Link>

                <Link class="nav-link" to="/about">
                   About Us
                </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;