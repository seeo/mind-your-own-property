/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope
    let addNewProperty = (data, callback) => {
        let values = [  data.name,
                        data.address,
                        data.photo,
                        data.rental_mth,
                        data.day_credit,
                        data.bank_name,
                        data.user_id,
                        data.public_id
                    ];
        let queryString = `INSERT INTO properties (name, address, photo_url, rental_mth, day_credit, bank_name, user_id, public_id) VALUES ($1,$2,$3,$4,$5,$6,$7, $8) RETURNING *;`;

        dbPoolInstance.query(queryString, values, (error, result) => {
            if (error) {
                console.log("add property query error in models", error);
            } else {
                // invoke callback function with results after query has executed
                console.log("printing out the add property result.rows in models: ...");
                console.log(result.rows);
                callback(result.rows);
            }
        });
    };
    return {
        addNewProperty,
    };
};
