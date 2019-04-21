/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope
    let deleteProperty = (callback, userIdFromCookies, propertyId) => {
        let queryString = `DELETE FROM properties WHERE properties.user_id = '${userIdFromCookies}' AND properties.id = '${propertyId}' RETURNING *;`;

        dbPoolInstance.query(queryString, (error, result) => {
            if (error) {
                console.log("delete property query error in models", error);
            } else {
                // invoke callback function with results after query has executed
                console.log("printing out the delete property result.rows in models: ...");
                console.log(result.rows);
                callback(result.rows);
            }
        });
    };
    return {
        deleteProperty,
    };
};
