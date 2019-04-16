/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const SALT = 'batman';
const sha256 = require('js-sha256');
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope
    let login = (data, loginSuccessfulCallback, loginUnsuccessfulCallback) => {
        let usernameInput = data.username;
        let passwordInput = sha256(data.password + SALT);
        let queryString = `SELECT * FROM users WHERE username='${data.username}';`;
        let userIdNumber = `SELECT id FROM users WHERE username='${data.username}';`;
        dbPoolInstance.query(queryString, (error, result) => {
            if (error) {
                console.log("login query error", error);
            } else {
                if (result.rows.length === 1) {
                    if (result.rows[0].password === passwordInput) {
                        //login successful
                        let hashedUsername = sha256(SALT + data.username);
                        // invoke callback function with results after query has executed
                        console.log("login result.rows: ");
                        console.log(result.rows);
                        loginSuccessfulCallback(userIdNumber, usernameInput, hashedUsername);
                    } else {
                        //wrong password entered
                        loginUnsuccessfulCallback();
                    }
                } else {
                    //wrong username entered
                    loginUnsuccessfulCallback();
                }
            }
        });
    };
    return {
        loginModelFunction: login
    };
};
