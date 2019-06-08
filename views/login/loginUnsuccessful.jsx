const React = require('react');
const Layout = require('../layout');
class LoginUnsuccessful extends React.Component {
    render() {
        return (<Layout title="Unsuccessful Login">
            <h3>Oops</h3>
            <h4>Login Unsuccessful. Please try again</h4>
            <h5><a href="/Login">Login</a> again here.</h5>

        </Layout>);
    }
}

module.exports = LoginUnsuccessful;