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
                    {this.props.children}
                </body>
            </html>
        );
    }
}

module.exports = Layout;
