module.exports = (app, allModels) => {


    /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *    ALL ROUTES FOR POKEMON CONTROLLER
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
    app.post(`/add_property`, addPropertyController.addPropertyControllerCallback);

    const viewPropertyController = require(`./controllers/property/viewPropertyController`)(allModels);
    app.get(`/property/:id`, viewPropertyController.viewPropertyControllerCallback);
    //propertyController.getProperty)

    //the editPropertyController has both edit and delete features
    const editPropertyController = require(`./controllers/property/editPropertyController`)(allModels);
    app.get(`/property/:id/edit`, editPropertyController.editPropertyRequestHandler);
    app.put(`/property/:id/`, editPropertyController.editPropertyControllerCallback);

    //for now, when building the delete feature, am going to build w/o warning feedback to user, just to test if the delete from database works
    // app.get(`/property/:id/delete`, editPropertyController.deletePropertyRequestHandler);
    app.delete(`/property/:id/`, editPropertyController.deletePropertyControllerCallback);


};
