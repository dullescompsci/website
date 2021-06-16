var welcome = React.createElement(
    "div",
    { "class": "col" },
    React.createElement(
        "div",
        { "class": "row" },
        React.createElement(
            "h4",
            { "class": "display-3" },
            "Welcome!"
        ),
        React.createElement("hr", null),
        React.createElement(
            "p",
            { "class": "lead text-justify" },
            "Official meetings are every ",
            React.createElement(
                "strong",
                null,
                "Tuesday"
            ),
            " and ",
            React.createElement(
                "strong",
                null,
                "Thursday"
            ),
            ", but you can come any day Ms. Coffman's in to catch up or get ahead. The meeting are always in ",
            React.createElement(
                "strong",
                null,
                "Ms. Coffman's room (KLAB)"
            ),
            ".  This room is to the left of library."
        ),
        React.createElement(
            "a",
            { href: "resources.html", "class": "btn btn-primary" },
            "Click Here to Get Started!"
        )
    )
);
ReactDOM.render(welcome, document.getElementById('homepage-welcome'));