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

    const homeController = require('./controllers/home')(allModels);
    app.get('/', homeController.homeControllerCallback);

    const registerController = require('./controllers/register')(allModels);
    app.get('/register', registerController.registerRequestHandler);
    app.post('/register', registerController.registerControllerCallback);

    const loginController = require('./controllers/login')(allModels);
    app.get('/login', loginController.loginRequestHandler);
    app.post('/login', loginController.loginControllerCallback);

    //this part is not required for my project, but just keeping here for now
        // const tweedController = require('./controllers/tweed')(allModels);
        // app.get('/tweed', tweedController.tweed);
        // app.post('/tweed', tweedController.tweedControllerCallback);
  
};
