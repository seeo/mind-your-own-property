const React = require('react');
const Layout = require('./layout');
class RegisterNewUser extends React.Component {
    render() {
        return (<Layout title = "New User">
                    <h3>Create new user</h3>
                    <form method = "post" action = "/register">
                        <input type = "text" name = "username" placeholder = "enter your name"/>
                        <input type = "password" name = "password" placeholder = "enter your password"/>
                        <input type = "email" name = "email" placeholder = "enter your email"/>
                        <input type = "submit" value = "Submit"/>
                    </form>
                    <form method = "get" action = "/">
                        <input type = "submit" value = "Cancel"/>
                    </form>
                 </Layout>);
    }
}
module.exports = RegisterNewUser;