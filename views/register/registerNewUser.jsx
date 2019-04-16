const React = require('react');
const Layout = require('./layout');
class registerNewUser extends React.Component {
    render() {
        return (
            <html>
                <head></head>
                <body>
                    <h1>Create new account</h1>
                    <h3>
                        <form style={{ margin: '5px 0' }} method="post" action="/register" >
                            <p>Username: <input type="text" name="username" />
                            </p>
                            <p>Password: <input type="password" name="password" />
                            </p>
                            <input type="submit" value="Submit" />
                        </form>
                        <form method="get" action="/" >
                            <input type="submit" value="Cancel" />
                        </form>
                    </h3>
                </body>
            </html>
        );

    }
}

module.exports = registerNewUser;