module.exports = (allModels) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let addPropertyRequestHandler = (request, response) => {
        response.render("./property/add_property");
    }
    let addPropertyControllerCallback = (request, response) => {

        const data = {
            name: request.body.name,
            address: request.body.address,
            photo: request.body.photo,
            rental_mth: request.body.rental_mth,
            day_credit: request.body.day_credit,
            bank_name: request.body.bank_name,
            user_id: request.cookies.userId
        };

        const resultCallback = (result) => {
            console.log("add property controller starting upppp:... ");
            console.log("printing out the result: ...");
            console.log(result);
            response.redirect('/');
        };
        allModels.addPropertyModelsObject.addNewProperty(data, resultCallback);
    };
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        addPropertyRequestHandler,
        addPropertyControllerCallback,
    };
}