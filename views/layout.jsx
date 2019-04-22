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
                    <header>
                        <nav className="navbar navbar-expand-lg navbar-light" style={{'background-color': 'rgb(55,117,166)'}}>
                            <div id = "logo-container-in-navbar">
                                <a className="navbar-brand" href="/">
                                    <img src = "/images/myop_logo_2.png" width="220" height="70" alt="logo"/>
                                </a>
                            </div>
                            <div className="collapse navbar-collapse" id = "navbar-supported-content">
                                <ul className="navbar-nav" id = "navbar-home-to-aboutus">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/tracking">Add </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/overview">Financial Overview</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/transactions">Transactions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About us</a>
                                    </li>
                                </ul>
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbar-account-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Account&nbsp; <img src="https://img.icons8.com/office/35/000000/person-male.png" />
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
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </body>
            </html>
        );
    }
}

module.exports = Layout;
