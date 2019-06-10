var cloudinary = require('cloudinary').v2;
//require cloudinary npm package above so that we can call on the uploader method

module.exports = (allModels) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let editPropertyRequestHandler = (request, response) => {
        let resultCallback;
        let userIdFromCookies;
        let propertyId = parseInt(request.params.id);
            if (request.cookies.userId != undefined) {
                userIdFromCookies = request.cookies.userId;
                resultCallback = (result) => {
                    console.log("edit property request handler starting upppp:... ");
                    console.log("printing out the result of getProperty in edit prop controller: ...");
                    console.log(result);
                    //bring user to the home page and   display all properties once new property is added
                    response.render('./property/edit_property', {house: result});
                };
                }else{
                //please log in
                console.log("user not logged in at addProp controller, no cookies detected, redirecting to login page");
                response.redirect('/login');
            }
        allModels.editPropertyModelsObject.getProperty(resultCallback, userIdFromCookies, propertyId);
    }
    let editPropertyControllerCallback = (request, response) => {
        console.log("HELLO EDIT PROPERTY");

        let path;
        let photo_property_upload_main = "";
        console.log("print out request here: ", request.body);

        console.log("print out request.file here: ", request.file);

        photo_property_upload_main = request.file.path;
        console.log('photo path in edit prop here: ', photo_property_upload_main)
        cloudinary.uploader.upload(photo_property_upload_main, function (error, result){

                console.log("printing result of cloudinary uploader", result);
                console.log("printing error of cloudinary uploader", error);
                path = result.url;

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
                    photo: path,
                    rental_mth: request.body.rental_mth,
                    day_credit: request.body.day_credit,
                    bank_name: request.body.bank_name,
                };

                const resultCallback = (result) => {
                    console.log("edit property controller starting upppp:... ");
                    console.log("printing out the result in edit prop controller: ...");
                    console.log(result);
                    //bring user to the home page and display all properties once new property is added
                    response.render('./property/view_property', {
                        house: result
                    });
                };
                allModels.editPropertyModelsObject.editProperty(data, resultCallback, userIdFromCookies, propertyId)
            })
    };

    //temporarily remove the deleteProperty request handler, in future I wanna use the bootstrap modal to issue a feedback warning before the delete is properly run

    //  let deletePropertyRequestHandler = (request, response) => {
    //      if (request.cookies.userId != undefined) {
    //          let data = parseInt(request.params.id);
    //          response.render(`./property/delete_property`, {
    //              data
    //          });
    //      } else {
    //          //please log in
    //          console.log("user not logged in at add Propertyyyy controller, no cookies detected, redirecting to login page");
    //          response.redirect(`/login`);
    //      }
    //  };

     let deletePropertyControllerCallback = (request, response) => {
        let userIdFromCookies;
        let propertyId = parseInt(request.params.id);
        if (request.cookies.userId != undefined) {
            userIdFromCookies = request.cookies.userId;
            console.log("printing out the propertyId / request.params.id in delete property controller callllbackkk: ...")
            console.log(propertyId);
            console.log(userIdFromCookies);

            const resultCallback = (result) => {
                console.log("delete property controller starting upppp:... ");
                console.log("printing out the result in delete prop controller: ...");
                console.log(result);
                //bring user to the home page and display all properties once new property is added
                response.redirect(`/`);
            };
        allModels.editPropertyModelsObject.deleteProperty(resultCallback, userIdFromCookies, propertyId);
        }else{
             //if no cookies, please go to log in page;
             console.log("user not logged in, no permission to delete, redirecting to login page");
             response.redirect(`/login`);
        }
     };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        editPropertyRequestHandler,
        editPropertyControllerCallback,
        // deletePropertyRequestHandler, //removed this temporarily... might utilise this for bootstrap modal later...
        deletePropertyControllerCallback,
    };
}