console.log('starting default property seed file');

module.exports = (dbPoolInstance) => {
    let seedDefault = () => {
        console.log("assessing query ");
        let queryString;
        let values;
        for (let user_id = 1; user_id < 50; user_id++) {
        values = [
                    'Yay!',
                    'Your First Rental Property Avenue!',
                    'https://res.cloudinary.com/dp4soym81/image/upload/v1560229311/myop-express/default_house_image_qzqdj4.jpg',
                    2700,
                    5,
                    'UOB',
                    user_id
                ];

             queryString = `INSERT into properties
        (name, address, photo_url, rental_mth, day_credit, bank_name, user_id)
            VALUES
         ($1, $2, $3, $4, $5, $6, $7);`;
         }

         dbPoolInstance.query(queryString, values, (error, result) => {
             if (error) {
                 console.log("error in dbPoolInstance query", error);
             } else {
                 // invoke callback function with results after query has executed
                 console.log("add default property for every user_id");
                 console.log(result.rows);
             }
         });
    }
    console.log("just before returning the query");
    return seedDefault;
    };
