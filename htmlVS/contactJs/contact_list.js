var list = React.createElement(
			"ul",
			{ "class": "contact-info" },
			React.createElement(
						"li",
						null,
						"Text @dhscs to 81010 to join Remind"
			),
			React.createElement(
						"li",
						null,
						"Email us at ",
						React.createElement(
									"a",
									{ href: "dullescomputerscience@gmail.com" },
									"dullescomputerscience@gmail.com"
						)
			)
);
ReactDOM.render(list, document.getElementById('contact-list'));