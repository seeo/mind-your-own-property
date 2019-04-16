const React = require('react');
const Layout = require('../layout');
class Login extends React.Component {
    render() {
        return (<Layout>
                    <h2>Welcome back!</h2>
                    <h3>Sign in to your MYOP account</h3>
                        <form method="post" action="/login" >
                            <input type="text" name="username" placeholder = "username" />
                            <input type="password" name="password" placeholder = "password" />
                            <input type="submit" value="Submit" />
                        </form>
                        <form method = "get" action = "/" >
                            <input type = "submit" value = "Cancel" />
                        </form>
                </Layout>);
    }
}

module.exports = Login;