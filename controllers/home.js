module.exports = (allModels) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let homeControllerCallback = (request, response) => {
        console.log("printing out the request.cookies.userId in the controllers homeeee: ...");
        // let username = request.cookies.username;
        // if (username === undefined) {
        //   response.status(401).send("You must be logged in to view this page. Please log in and try again.");
        // } else {
        // const userNameCallback = () => {
        //   return username;
        // }
          let userIdFromCookies = request.cookies.userId;
          console.log("printing out the userIdFromCookies in the controllers home page...");
          console.log(userIdFromCookies);

        const resultCallback = (result) => {
            console.log("home controller: ");
            console.log(result);
           
            response.render('./home/home', {house: result});
        };
        allModels.homeModelsObject.getAllProperties(resultCallback, userIdFromCookies);
        // } 
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
