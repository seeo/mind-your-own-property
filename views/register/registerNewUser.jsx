const React = require('react');
const Layout = require('../layout');
class RegisterNewUser extends React.Component {
    render() {
        return (<Layout title = "MYOP - Sign up">
                    <h3>Sign up here</h3>
                    <form method = "post" action = "/register">
                            <small id="usernameHelp" className="form-text text-muted">Do not forget your username</small>
                        <input type="text" name="username" className="form-control" aria-describedby="usernameHelp" placeholder = "Enter username"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else</small>
                        <input type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="passwordHelp" className="form-text text-muted">Keep your password safe</small>
                        <input type="password" className="form-control" aria-describedby="passwordHelp" name = "password" placeholder = "Password"/>

                    <input type = "submit" className = "btn btn-primary" value = "Submit"/>
                    </form>

                    <h6><a href="/login">Log in</a> here if you already have an account</h6>
                 </Layout>);
    }
}
module.exports = RegisterNewUser;