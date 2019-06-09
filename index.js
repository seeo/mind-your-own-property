const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

/* adding multer configs here:   */
const multer = require('multer');
//multer will create a new folder
const upload = multer({ dest: './uploads/' });

//load cloudinary v2 module at index.js
const cloudinary = require('cloudinary').v2;


/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

// Set up middleware
app.use(methodOverride('_method'));

app.use(cookieParser());

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * ===================================
 *                DB
 * ===================================
 * ===================================
 */

// db contains *ALL* of our models
const allModels = require('./db');

/**
 * ===================================
 * ===================================
 * Routes
 * ===================================
 * ===================================
 */

// get the thing that contains all the routes
const setRoutesFunction = require('./routes');

// call it and pass in the "app" so that we can set routes on it (also models)
setRoutesFunction(app, allModels);

/**
 * ===================================
 * Listen to requests on port 3011
 * ===================================
 */
const PORT = process.env.PORT || 3011;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port ' + PORT + ' ~~~'));

let onClose = function () {

    server.close(() => {
        console.log('Process terminated')
        allModels.pool.end(() => console.log('Shut down db connection pool'));
    })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);
