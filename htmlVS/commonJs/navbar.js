var navBar = React.createElement(
    "nav",
    { "class": "navbar navbar-expand-md bg-dark navbar-dark" },
    React.createElement(
        "div",
        { "class": "container-fluid" },
        React.createElement(
            "div",
            { "class": "navbar-header" },
            React.createElement(
                "button",
                { type: "button", "class": "navbar-toggler", "data-toggle": "collapse", "data-target": "#mainNavBar" },
                React.createElement("span", { "class": "navbar-toggler-icon" })
            ),
            React.createElement(
                "a",
                { href: "index.html", "class": "navbar-brand" },
                "DHS CS"
            )
        ),
        React.createElement(
            "div",
            { "class": "collapse navbar-collapse", id: "mainNavBar" },
            React.createElement(
                "ul",
                { "class": "nav navbar-nav navbar-right" },
                React.createElement(
                    "li",
                    { "class": "nav-item", id: "nav-bar-home" },
                    React.createElement(
                        "a",
                        { "class": "nav-link", href: "index.html" },
                        "Home"
                    )
                ),
                React.createElement(
                    "li",
                    { "class": "nav-item", id: "nav-bar-announ" },
                    React.createElement(
                        "a",
                        { "class": "nav-link", href: "announcements.html" },
                        "Announcements"
                    )
                ),
                React.createElement(
                    "li",
                    { "class": "nav-item", id: "nav-bar-resources" },
                    React.createElement(
                        "a",
                        { "class": "nav-link", href: "resources.html" },
                        "Resources"
                    )
                ),
                React.createElement(
                    "li",
                    { "class": "nav-item", id: "nav-bar-archive" },
                    React.createElement(
                        "a",
                        { "class": "nav-link", href: "archive.html" },
                        "Archive"
                    )
                ),
                React.createElement(
                    "li",
                    { "class": "nav-item dropdown" },
                    React.createElement(
                        "a",
                        { "class": "nav-link dropdown-toggle", href: "#", id: "nav-drop-link", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                        "Club Info"
                    ),
                    React.createElement(
                        "div",
                        { "class": "dropdown-menu", "aria-labelledby": "navbarDropdownMenuLink" },
                        React.createElement(
                            "a",
                            { id: "nav-bar-about", "class": "dropdown-item", href: "about.html" },
                            "About Us"
                        ),
                        React.createElement(
                            "a",
                            { id: "nav-bar-contact", "class": "dropdown-item", href: "contact.html" },
                            "Contact Us"
                        ),
                        React.createElement(
                            "a",
                            { id: "nav-bar-officers", "class": "dropdown-item", href: "officers.html" },
                            "Officers"
                        )
                    )
                )
            )
        )
    )
);
ReactDOM.render(navBar, document.getElementById('navbar'));