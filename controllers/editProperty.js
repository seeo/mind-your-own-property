module.exports = (allModels) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let editPropertyRequestHandler = (request, response) => {
        if (request.cookies.userId != undefined) {
            response.render("./property/edit_property");
        } else {
            //please log in
            console.log("user not logged in at addProp controller, no cookies detected, redirecting to login page");
            response.redirect('/login');
        }
    }
    let editPropertyControllerCallback = (request, response) => {
        let userIdFromCookies;
        let propertyId = parseInt(request.params.id);
        console.log("printing out the propertyId / request.params.id in edit property controller callllbackkk: ...")
        console.log(propertyId);
        userIdFromCookies = request.cookies.userId;
        console.log("printing out the userIdFromCookies / request.cookies.userId in edit property controller callllbackkk: ...")
        console.log(userIdFromCookies);
        const data = {
            name: request.body.name,
            address: request.body.address,
            photo: request.body.photo,
            rental_mth: request.body.rental_mth,
            day_credit: request.body.day_credit,
            bank_name: request.body.bank_name,
        };

        const resultCallback = (result) => {
            console.log("edit property controller starting upppp:... ");
            console.log("printing out the result in edit prop controller: ...");
            console.log(result);
            //bring user to the home page and display all properties once new property is added
            response.render('/property/view_property');
        };
        allModels.editPropertyModelsObject.editProperty(data, resultCallback, userIdFromCookies, propertyId);
    };
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        editPropertyRequestHandler,
        editPropertyControllerCallback,
    };
}