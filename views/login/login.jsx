const React = require('react');
const Layout = require('../layout');
class Login extends React.Component {
    render() {
        return (<Layout title = "MYOP - Login">
                    <h3>Login to your account</h3>
                        <form method="post" action="/login" >
                            <input type="text" name="username" className="form-control" placeholder = "Enter username" size = "20" />
                            <input type="password" name="password" className="form-control" placeholder= "Password" size= "20" />
                            <input type="submit" className="btn btn-primary" defaultValue="Login"/>
                        </form>
                    <h6><a href="/register">Sign up</a> for an account!</h6>

                </Layout>);
    }
}

module.exports = Login;