var myNavbar = "";

myNavbar +=
	'<nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">';
myNavbar += '	<div class="container">';
myNavbar +=
	'		<a class="navbar-brand" href="index.html" title="Summary of my SheCodes learnings">';
myNavbar +=
	"			<img id='navbar-avatar' class='rounded-circle' src='images/avatar.png'></img>";
myNavbar += "		</a>";
myNavbar += "		<button";
myNavbar += '			class="navbar-toggler"';
myNavbar += '			type="button"';
myNavbar += '			data-bs-toggle="collapse"';
myNavbar += '			data-bs-target="#navbarNav"';
myNavbar += '			aria-controls="navbarNav"';
myNavbar += '			aria-expanded="false"';
myNavbar += '			aria-label="Toggle navigation"';
myNavbar += "		>";
myNavbar += '			<span class="navbar-toggler-icon"></span>';
myNavbar += "		</button>";
myNavbar += '		<div class="collapse navbar-collapse" id="navbarNav">';
myNavbar += '			<ul class="navbar-nav">';
myNavbar += '				<li class="nav-item">';
myNavbar +=
	'					<a class="nav-link active" aria-current="page" href="index.html"  title="Home">';
myNavbar += "						Home";
myNavbar += "					</a>";
myNavbar += "				</li>";
myNavbar += '				<li class="nav-item">';
myNavbar += '					<a class="nav-link" href="projects.html"  title="my Projects">';
myNavbar += "						Projects";
myNavbar += "					</a>";
myNavbar += "				</li>";
myNavbar += '				<li class="nav-item">';
myNavbar += '					<a class="nav-link" href="about_me.html"  title="About Me">';
myNavbar += "						About Me";
myNavbar += "					</a>";
myNavbar += "				</li>";
myNavbar += "			</ul>";
myNavbar += "		</div>";
myNavbar += "	</div>";
myNavbar += "</nav>";

function includeNavbar() {
	let navbarElement = document.querySelector("#nav-placeholder");
	navbarElement.innerHTML = myNavbar;
}

includeNavbar();
