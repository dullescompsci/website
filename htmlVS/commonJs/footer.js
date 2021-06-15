var footer = React.createElement(
	"footer",
	{ "class": "page-footer font-small bg-dark" },
	React.createElement(
		"div",
		{ "class": "footer-copyright text-center py-3 text-light" },
		"Dulles Computer Science 2021-2022",
		React.createElement("br", null)
	),
	React.createElement(
		"div",
		{ "class": "footer-copyright text-muted text-center small" },
		"This is a student social media site. Opinions expressed on this site are not necessarily those held by Fort Bend ISD and shall not be attributed to Fort Bend ISD."
	)
);
ReactDOM.render(footer, document.getElementById('footer'));