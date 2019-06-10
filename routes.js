const multer = require('multer')
module.exports = (app, allModels, cloudinary) => {

/* adding multer configs here: */
/*source: https: //medium.com/@TheJesseLewis/how-to-make-a-basic-html-form-file-upload-using-multer-in-an-express-node-js-app-16dac2476610 */
const multerConfig = {

    storage: multer.diskStorage({
        //Setup where the user's file will go
        destination: function (req, file, next) {
            next(null, './public/photo-storage');
        },

        //Then give the file a unique name
        filename: function (req, file, next) {
            console.log(file);
            const ext = file.mimetype.split('/')[1];
            next(null, file.fieldname + '-' + Date.now() + '.' + ext);
        }
    }),

    //A means of ensuring only images are uploaded.
    fileFilter: function (req, file, next) {
        if (!file) {
            next();
        }
        const image = file.mimetype.startsWith('image/');
        if (image) {
            console.log('photo uploaded');
            next(null, true);
        } else {
            console.log("file not supported");
            //TODO:  A better message response to user on failure.
            return next();
        }
    }
};

    // app.post('/add_property', multer(multerConfig).single('photo_property_upload_main'), function (req, res) {
    //     cloudinary.uploader.upload(req.file.path, function (result) {
    //         //save pubicid
    //         res.send(result);
    //         console.log("Photo sent to cloudinary's servers", result);
    //     });
    // });

    /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *    ALL ROUTES FOR MYOP CONTROLLER
     *  =========================================
     *  =========================================
     *  =========================================
     */

    // require the controller

    const homeController = require(`./controllers/homeController`)(allModels);
    app.get(`/`, homeController.homeControllerCallback);

    const registerController = require(`./controllers/onboard/registerController`)(allModels);
    app.get(`/register`, registerController.registerRequestHandler);
    app.post(`/register`, registerController.registerControllerCallback);

    const loginController = require(`./controllers/onboard/loginController`)(allModels);
    app.get(`/login`, loginController.loginRequestHandler);
    app.post(`/login`, loginController.loginControllerCallback);

    const logoutController = require(`./controllers/onboard/logoutController`)(allModels);
    app.get(`/logout`, logoutController.logoutRequestHandler);
    // app.post('/logout', logoutController.logoutControllerCallback);

    const addPropertyController = require(`./controllers/property/addPropertyController`)(allModels);
    app.get(`/add_property`, addPropertyController.addPropertyRequestHandler);
    //once property is added via the add_property form, and click submit, the user is redirected to home page
    app.post(`/add_property`,
            multer(multerConfig).single('photo_property_upload_main'),
            addPropertyController.addPropertyControllerCallback);

    const viewPropertyController = require(`./controllers/property/viewPropertyController`)(allModels);
    app.get(`/property/:id`, viewPropertyController.viewPropertyControllerCallback);
    //propertyController.getProperty)

    //the editPropertyController has both edit and delete features
    const editPropertyController = require(`./controllers/property/editPropertyController`)(allModels);
    app.get(`/property/:id/edit`, editPropertyController.editPropertyRequestHandler);
    app.put(`/property/:id/`,
            multer(multerConfig).single('photo_property_upload_main'),
            editPropertyController.editPropertyControllerCallback);

    //for now, when building the delete feature, am going to build w/o warning feedback to user, just to test if the delete from database works
    // app.get(`/property/:id/delete`, editPropertyController.deletePropertyRequestHandler);
    app.delete(`/property/:id/`, editPropertyController.deletePropertyControllerCallback);


};
