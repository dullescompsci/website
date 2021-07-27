import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header(props) {
    return (
        <div className="navigation">
            <nav class="navbar">
                <div class="logo headertext">
                    <Link class="left" to="/">
                        <img src="Capture.svg" alt="The logo, duh"></img>
                    </Link>
                </div>
                <div class="navmenu">
                    <Link class="headertext" to="/">
                        Home
                    </Link>
                    <Link class="headertext" to="/news">
                        News
                    </Link>
                    <Link class="headertext" to="/resources">
                        Resources
                    </Link>
                    <Link class="headertext" to="/archive">
                        Archive
                    </Link>
                    <Link class="headertext" to="/about">
                            About Us
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;