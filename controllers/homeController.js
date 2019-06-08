module.exports = (allModels) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
    let homeControllerCallback = (request, response) => {
        console.log("printing out the request.cookies.userId in the controllers homeeee: ...");
        let userIdFromCookies;
        console.log("cookie" + request.cookies.userId);
        //if user is not logged in, he cannot see the home page and will get redirected to the login page
        if(request.cookies.userId === undefined){
            response.redirect('/login');
        } else {
            userIdFromCookies = request.cookies.userId;
            console.log("printing out the userIdFromCookies in the controllers home page...");
            console.log(userIdFromCookies);

            const resultCallback = (result) => {
                console.log("home controller: ");
                console.log(result);
                response.render('./home/home', {
                    house: result
                });
            };
            allModels.homeModelsObject.getAllProperties(resultCallback, userIdFromCookies);
        }
    };
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        homeControllerCallback,
    };
}
