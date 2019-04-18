module.exports = (allModels) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let addPropertyRequestHandler = (request, response) => {
            if (request.cookies.userId != undefined){
            response.render("./property/add_property");
        }else{
            //please log in
            console.log("user not logged in at addProp controller, no cookies detected, redirecting to login page");
            response.redirect('/login');
        }
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
            console.log("printing out the result in add prop controller: ...");
            console.log(result);
            //bring user to the home page and display all properties once new property is added
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