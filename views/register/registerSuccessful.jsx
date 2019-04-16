const React = require('react');
const Layout = require('../layout');
class RegisterSuccessful extends React.Component {
    render() {
        console.log("Running RegisterSuccessful jsx file nowwww...");
        return (<Layout>
                    <h5>Your account has been created.</h5>
                    <h5>Please proceed <a href="/login">here</a> to login</h5>
                </Layout>);
    }
}
module.exports = RegisterSuccessful;
