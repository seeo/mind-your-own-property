var cloudinary = require('cloudinary').v2;
//require cloudinary npm package above so that we can call on the uploader method

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
   //TODO : should i include a cookies checker here? i.e. can only add property if have cookies

        console.log("HELLO ADD PROPERTY");
        let path;
        let photo_property_upload_main = "";
        //const public_id;

        photo_property_upload_main = request.file.path;

        console.log('photo path in add prop', photo_property_upload_main)
        cloudinary.uploader.upload(photo_property_upload_main, function(error, result){
            console.log("printing result of cloudinary uploader", result);
            console.log("printing error of cloudinary uploader", error);
            path = result.url;

            const data = {
                name: request.body.name,
                address: request.body.address,
                photo: path,
                rental_mth: request.body.rental_mth,
                day_credit: request.body.day_credit,
                bank_name: request.body.bank_name,
                user_id: request.cookies.userId,
                // public_id: request.body.public_id,
                // photo_property_upload_main: path,
            };

            const resultCallback = (result) => {
                console.log("add property controller starting upppp:... ");
                console.log("printing out the result in add prop controller: ...");
                console.log(result);
                //bring user to the home page and display all properties once new property is added
                response.redirect('/');
            };
            allModels.addPropertyModelsObject.addNewProperty(data, resultCallback);
        }) //cloudinary uploader method ends here
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