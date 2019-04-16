/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope
    let getAllProperties = (callback) => {
        // let username = userNameCallback();
        // console.log("printing out the userId value response cookieeee in modelsss...");
        // console.log(userIdFromCookies);

        let queryString = `SELECT * FROM properties where properties.user_id = 1;`;
        dbPoolInstance.query(queryString, (error, result) => {
            if (error) {
                console.log("home query error", error);
            } else {
                // invoke callback function with results after query has executed
                console.log("printing out home page result.rowsssss: ");
                console.log(result.rows);
                callback(result.rows);
            }
        });
    };
    return {
        homeModelFunction: getAllProperties
    };
};
