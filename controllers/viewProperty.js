module.exports = (allModels) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
    // let viewPropertyRequestHandler = (request, response) => {
    //     let userIdFromCookies;
    //     if (request.cookies.userId != undefined) {
    //         userIdFromCookies = request.cookies.userId;
    //         response.render("./property/view_property");
    //     } else {
    //         //please log in
    //         console.log("user not logged in at addProp controller, no cookies detected, redirecting to login page");
    //         response.redirect('/login');
    //     }
    // }
    let viewPropertyControllerCallback = (request, response) => {
        let propertyId = parseInt(request.params.id);
        console.log("printing out the request.params.id in viewProperty controller callllllBacckk: ...")
        console.log(propertyId);
        let userIdFromCookies;
        if (request.cookies.userId === undefined) {
            //please log in to view your properties (need to capture cookie data to identify user);
            console.log("user not logged in at viewProp controller, no cookies detected, redirecting to login");
            response.redirect('/login');
        }else{
            userIdFromCookies = request.cookies.userId;
            console.log("printing out the request.cookies.userId: ...")
            console.log(userIdFromCookies);
            const resultCallback = (result) => {
                console.log("view prop controller starting upppp:... ");
                console.log("printing out the result in view prop controller: ...");
                console.log(result);
                
                //bring user to the home page and display all properties once new property is added
                response.render('./property/view_property', {house: result});
            };
            allModels.viewPropertyModelsObject.viewProperty(userId, (error, result) => {
                
            })
            allModels.viewPropertyModelsObject.viewProperty(resultCallback, userIdFromCookies, propertyId);
        }
    };
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        viewPropertyControllerCallback,
    };
}