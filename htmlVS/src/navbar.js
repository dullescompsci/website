const navBar = (<nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#mainNavBar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a href="index.php" class="navbar-brand">DHS CS</a>
            </div>

            <div class="collapse navbar-collapse" id="mainNavBar">
                <ul class="nav navbar-nav navbar-right">
                    <li class="nav-item" id="nav-bar-home"><a class="nav-link" href="index.php">Home</a></li>
                    <li class="nav-item" id="nav-bar-announ"><a class="nav-link" href="announcements.php">Announcements</a></li>
                    <li class="nav-item" id="nav-bar-resources"><a class="nav-link"href="resources.php">Resources</a></li>
                    <li class="nav-item" id="nav-bar-archive"><a class="nav-link"href="archive.php">Archive</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="nav-drop-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Club Info
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <a id="nav-bar-about" class="dropdown-item" href="about.php">About Us</a>
                          <a id="nav-bar-contact" class="dropdown-item" href="contact.php">Contact Us</a>
                          <a id="nav-bar-officers" class="dropdown-item" href="officers.php">Officers</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>);
ReactDOM.render(navBar, document.getElementById('navbar'));