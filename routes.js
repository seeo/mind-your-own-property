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

    const homeController = require(`./controllers/home`)(allModels);
    app.get(`/`, homeController.homeControllerCallback);

    const registerController = require(`./controllers/register`)(allModels);
    app.get(`/register`, registerController.registerRequestHandler);
    app.post(`/register`, registerController.registerControllerCallback);

    const loginController = require(`./controllers/login`)(allModels);
    app.get(`/login`, loginController.loginRequestHandler);
    app.post(`/login`, loginController.loginControllerCallback);

    const logoutController = require(`./controllers/logout`)(allModels);
    app.get(`/logout`, logoutController.logoutRequestHandler);
    // app.post('/logout', logoutController.logoutControllerCallback);

    const addPropertyController = require(`./controllers/addProperty`)(allModels);
    app.get(`/add_property`, addPropertyController.addPropertyRequestHandler);
    //once property is added via the add_property form, and click submit, the user is redirected to home page
    app.post(`/add_property`, addPropertyController.addPropertyControllerCallback); 

    const viewPropertyController = require(`./controllers/viewProperty`)(allModels);
    app.get(`/property/:id`, viewPropertyController.viewPropertyControllerCallback);

    const editPropertyController = require(`./controllers/editProperty`)(allModels);
    app.get(`/property/:id/edit`, editPropertyController.editPropertyRequestHandler);
    app.put(`/property/:id/`, editPropertyController.editPropertyControllerCallback);

    const deletePropertyController = require(`./controllers/deleteProperty`)(allModels);
    app.get(`/property/:id/delete`, deletePropertyController.deletePropertyRequestHandler);
    app.delete(`/property/:id/`, deletePropertyController.deletePropertyControllerCallback);

    //this part is not required for my project, but just keeping here for now
        // const tweedController = require('./controllers/tweed')(allModels);
        // app.get('/tweed', tweedController.tweed);
        // app.post('/tweed', tweedController.tweedControllerCallback);
  
};
