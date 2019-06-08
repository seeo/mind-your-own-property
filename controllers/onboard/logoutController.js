module.exports = (allModels) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let logoutRequestHandler = (request, response) => {
        response.clearCookie('userId');
        response.clearCookie('username');
        response.clearCookie('loggedIn');
        response.redirect('/login');
    }
    // let logoutControllerCallback = (request, response) => {
    //      response.clearCookie('userId');
    //      response.clearCookie('username');
    //      response.clearCookie('loggedIn');

    //     const data = {
    //         username: request.body.username,
    //         password: request.body.password,
    //         email: request.body.email
    //     };

    //     const resultCallback = (result) => {
    //         console.log("logoutcontroller starting upppp:... ");
    //         console.log("printing out the result: ...");
    //         console.log(result);
    //         response.redirect('/');
    //     };
    //     allModels.logoutModelsObject.registerNewUser(data, resultCallback);
    // };
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        // logoutControllerCallback,
        logoutRequestHandler
    };
}