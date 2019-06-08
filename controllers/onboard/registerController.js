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
            password: request.body.password,
            email: request.body.email
        };

        const resultCallback = (result) => {
            console.log("register controller starting upppp:... ");
            console.log("printing out the result: ...");
            console.log(result);
            response.render('./register/registerSuccessful');
        };
        allModels.registerModelsObject.registerNewUser(data, resultCallback);
    };
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        registerControllerCallback,
        registerRequestHandler,
    };
}