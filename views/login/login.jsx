const React = require('react');
const Layout = require('../layout');
class Login extends React.Component {
    render() {
        return (<Layout title = "MYOP - Login">
                    <h2>Welcome back!</h2>
                    <h3>Sign in to your MYOP account</h3>
                        <form method="post" action="/login" >
                            <input type="text" name="username" placeholder = "Enter your username" size = "20" />
                            <input type="password" name="password" placeholder="Enter your password" size= "20" />
                            <input type="submit" defaultValue="Login"/>
                        </form>
                    <h6><a href="/register">Sign up</a> for an account!</h6>

                </Layout>);
    }
}

module.exports = Login;