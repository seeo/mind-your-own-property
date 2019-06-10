/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope
    let getAllProperties = (callback, userIdFromCookies) => {

        console.log("printing out the userIdFromCookies in the models home page...");
        console.log(userIdFromCookies);
        // let username = userNameCallback();
        // console.log("printing out the userId value response cookieeee in modelsss...");
        // console.log(userIdFromCookies);

        let queryString = `SELECT * FROM properties where properties.user_id = '${userIdFromCookies}' ORDER BY id ASC;`;
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
    //so we test below what exactly is being done when we do not assign a property name to the getAllProperties function as in 'a';
    //in case a, the compiler/computer gives the same property name as our getAllProperties function
    //and we also test below what exactly is being done when we assign a property name to the getAllProperties function as in 'b';
    //in case b, the computer gives the property name we assigned to the getAllProperties function, which can be confusing...
    // let a = {
    //     getAllProperties,
    // };

    // let b = {
    //     modelsomething: getAllProperties,
    // };
    // console.log("here");
    // console.log(a);
    // console.log(b);
    //end of test
    return {
        getAllProperties,
    };
};
