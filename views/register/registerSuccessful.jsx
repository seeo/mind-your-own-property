const React = require('react');
const Layout = require('./layout');
class RegisterSuccessful extends React.Component {
    render() {
        console.log("Running RegisterSuccessful jsx file nowwww...");
        return (<Layout>
                    <h3>Your account has been created.</h3>
                    <h3>Please proceed <a href="/login">here</a> to login</h3>
                </Layout>);
    }
}
module.exports = RegisterSuccessful;
