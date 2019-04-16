module.exports = (allModels) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let homeControllerCallback = (request, response) => {
        console.log("printing out the request.cookies.userId in the controllers homeeee: ...");
        console.log(request.cookies.userId);
        let userIdFromCookies = request.cookies.userId;
        // let username = request.cookies.username;
        // if (username === undefined) {
        //   response.status(401).send("You must be logged in to view this page. Please log in and try again.");
        // } else {
        // const userNameCallback = () => {
        //   return username;
        // }
        const resultCallback = (result) => {
            console.log("home controller: ");
            console.log(result);
           
            response.render('./home/home', {house: result});
        };
        allModels.homeModelsObject.homeModelFunction(resultCallback);
        // } 
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        homeControllerCallback: homeControllerCallback
    };
}
