const React = require('react');
const Layout = require('../layout');
class RegisterNewUser extends React.Component {
    render() {
        return (<Layout title = "New User">
                    <h5>Create new user</h5>
                    <form method = "post" action = "/register">
                        <input type = "text" name = "username" placeholder = "Choose your username"/>
                        <input type = "password" name = "password" placeholder = "Setup your password"/>
                        <input type = "email" name = "email" placeholder = "Sign up with an email"/>
                        <input type = "submit" value = "Submit"/>
                    </form>
                    <form method = "get" action = "/">
                        <input type = "submit" value = "Cancel"/>
                    </form>
                 </Layout>);
    }
}
module.exports = RegisterNewUser;