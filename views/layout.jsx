var React = require('react');

class Layout extends React.Component {
    render() {
        // console.log("Printing out the this.props.title in the layout.jsx");
        // console.log(this.props.title);
        // console.log("Done printing out the this.props.title in the layout jsx");
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                    <link rel="stylesheet" href="/main.css"/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                <div id="page-container">
                    <div id="content-wrap">
                    <header>
                        <nav className="navbar sticky-top navbar-expand-lg navbar-light" id = "main-navbar">

                            <div id = "logo-container-in-navbar">
                                <a className="navbar-brand" href="/">
                                    <img src = "/images/myop_logo_2.png" width="220" height="70" alt="logo"/>
                                </a>
                            </div>

                            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-supported-content" aria-expanded="false">
                                <span className = "navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id = "navbar-supported-content">
                                <ul className="navbar-nav" id = "navbar-home-to-aboutus">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Home</a>
                                    </li>
                                    <li>
                                        <div className = "nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbar-add-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Add</a>
                                            <div className="dropdown-menu" aria-labelledby="navbar-add-dropdown">
                                                <a className="dropdown-item" href="/add_property">new property</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">new tenant</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">new agent</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">new transaction</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Portfolio Overview</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Transactions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About us</a>
                                    </li>
                                </ul>

                                <div className="nav-item dropdown" id="navbar-user-account-container">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbar-account-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Account&nbsp; <img src="https://img.icons8.com/cotton/64/000000/gender-neutral-user--v2.png"/>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbar-account-dropdown">
                                        <a className="dropdown-item" href="#">Profile</a>
                                        <a className="dropdown-item" href="#">Settings</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="/logout">Logout</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>

                            {this.props.children}
                    </div>
                    <footer id="footer" className="clearfix">
                        <div className ="container">
                            <ul className="list-unstyled list-inline text-center">
                                <a href="https://twitter.com/siangeeeo" target="_blank">Twitter</a> | <span> </span>
                                <a href="https://github.com/seeo/mind-your-own-property" target="_blank">Github</a> | <span> </span>
                                <a href="https://www.linkedin.com/in/siangeeeo/" target="_blank">LinkedIn</a>
                                <p className="message">Created with &hearts; by <span className="name">Christophe Eo Siang Ee with General Assembly</span></p>
                                <p className="message">Copyright 2019</p>
                            </ul>
                        </div>
                    </footer>
                    </div>

                    <script type="text/javascript" src="jquery.min.js"></script>
                    <script type="text/javascript" src="jquery.ui.widget.js"></script>
                    <script type="text/javascript" src="jquery.iframe-transport.js"></script>
                    <script type="text/javascript" src="jquery.fileupload.js"></script>
                    <script type="text/javascript" src="jquery.cloudinary.js"></script>

                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </body>
            </html>
        );
    }
}

module.exports = Layout;
