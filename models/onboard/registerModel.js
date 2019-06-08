/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const SALT = 'batman';
const sha256 = require('js-sha256');
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope
    let registerNewUser = (data, callback) => {
        let hash = sha256(data.password + SALT);
        let values = [data.username, hash, data.email];
        let queryString = 'INSERT INTO users (username, password, email) VALUES ($1,$2,$3) RETURNING *;';

        dbPoolInstance.query(queryString, values, (error, result) => {
            if (error) {

                console.log("register query error", error);

            } else {

                // invoke callback function with results after query has executed
                console.log("printing out the register result.rows: ...");
                console.log(result.rows);
                callback(result.rows);
            }
        });
    };
    return {
        registerNewUser,
    };
};
