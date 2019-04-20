/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope
    let viewProperty = (callback, userIdFromCookies, propertyId) => {
        let queryString = `SELECT * FROM properties WHERE (properties.user_id = '${userIdFromCookies}'AND properties.id = ${propertyId});`;
        dbPoolInstance.query(queryString, (error, result) => {
            if (error) {
                console.log("view property query error in models", error);
            } else {
                // invoke callback function with results after query has executed
                console.log("printing out the view property result.rows in models: ...");
                console.log(result.rows);
                callback(result.rows);
            }
        });
    };
    return {
        viewProperty,
    };
};
