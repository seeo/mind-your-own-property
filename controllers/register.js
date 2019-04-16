module.exports = (allModels) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let registerRequestHandler = (request, response) => {
        response.render("./register/registerNewUser");
    }
    let registerControllerCallback = (request, response) => {

        const data = {
            username: request.body.username,
            password: request.body.password
        };

        const resultCallback = (result) => {
            console.log("register controller starting upppp:... ");
            console.log("printing out the result: ...");
            console.log(result);
            response.render('./register/registerSuccessful');
        };
        allModels.registerModelsObject.registerModelFunction(data, resultCallback);
    };
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        registerControllerCallback: registerControllerCallback,
        registerRequestHandler: registerRequestHandler
    };
}