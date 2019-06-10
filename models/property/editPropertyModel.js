/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope
    let getProperty = (callback, userIdFromCookies, propertyId) => {
        let queryString =   `SELECT * FROM properties
                            WHERE properties.user_id='${userIdFromCookies}'
                            AND properties.id='${propertyId}';`;

        dbPoolInstance.query(queryString, (error, result) => {
            if (error) {
                console.log("edit property getProperty pre-fill query error in models", error);
            } else {
                // invoke callback function with results after query has executed
                console.log("printing out the edit property getProperty pre-fill result.rows in models: ...");
                console.log(result.rows);
                callback(result.rows);
            }
        });
    };

    let editProperty = (data, callback, userIdFromCookies, propertyId) => {
        // [data.name, data.address, data.photo, data.rental_mth, data.day_credit, data.bank_name];
        let queryString =   `UPDATE properties
                            SET name = '${data.name}',
                            address = '${data.address}',
                            photo_url = '${data.photo}',
                            rental_mth = '${data.rental_mth}',
                            day_credit = '${data.day_credit}',
                            bank_name = '${data.bank_name}'
                            WHERE properties.user_id='${userIdFromCookies}'
                            AND properties.id='${propertyId}'
                            RETURNING *;`;
        // ORDER BY id ASC
        // let queryString = `UPDATE properties SET (name, address, photo_url, rental_mth, day_credit, bank_name) = ('${data.name}', '${data.address}', '${data.photo}', '${data.rental_mth}', ${data.day_credit}, '${data.bank_name}') WHERE properties.user_id='${userIdFromCookies}' AND properties.id='${propertyId}' RETURNING *;`;
        // let queryString = `UPDATE properties SET (name, address, photo_url, rental_mth, day_credit, bank_name) = VALUES ($1,$2,$3,$4,$5,$6) WHERE properties.user_id='${userIdFromCookies}' AND properties.id='${propertyId}' RETURNING *;`;

        dbPoolInstance.query(queryString, (error, result) => {
            if (error) {
                console.log("edit property query error in models", error);
            } else {
                // invoke callback function with results after query has executed
                console.log("printing out the edit property result.rows in models: ...");
                console.log(result.rows);
                callback(result.rows);
            }
        });
    };

     let deleteProperty = (callback, userIdFromCookies, propertyId) => {
         let queryString = `DELETE FROM properties
                            WHERE properties.user_id = '${userIdFromCookies}'
                            AND properties.id = '${propertyId}'
                            RETURNING *;`;

         dbPoolInstance.query(queryString, (error, result) => {
             if (error) {
                 console.log("delete property query error in edit prop model", error);
             } else {
                 // invoke callback function with results after query has executed
                 console.log("printing out the delete property result.rows in edit prop model: ...");
                 console.log(result.rows);
                 callback(result.rows);
             }
         });
     };

    return {
        getProperty,
        editProperty,
        deleteProperty,
    };
};
