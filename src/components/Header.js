import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header(props) {
    return (
        <div className="navigation">
            <nav class="navbar">
                <div class="logo headertext">
                    <Link class="left" to="/">
                        <img src="https://raw.githubusercontent.com/dullescompsci/website/4cea4bc66e8d2d11fca27e3f64ecd0e7174ee267/public/Capture.svg" alt="The logo, duh"></img>
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
                    <Link class="headertext" to="/officers">
                        Officers
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;