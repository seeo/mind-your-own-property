/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */



const pg = require('pg');
const url = require('url');

var configs;

if (process.env.DATABASE_URL) {

    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    configs = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true
    };

} else {
    configs = {
        user: 'siangeeeo',
        host: '127.0.0.1',
        database: 'myop',
        port: 5432
    };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
    console.log('idle client error', err.message, err.stack);
});



/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

const homeModelsFunction = require('./models/home');
const homeModelsObject = homeModelsFunction(pool);

const registerModelsFunction = require('./models/register');
const registerModelsObject = registerModelsFunction(pool);

const loginModelsFunction = require('./models/login');
const loginModelsObject = loginModelsFunction(pool);

const addPropertyModelsFunction = require('./models/addProperty');
const addPropertyModelsObject = addPropertyModelsFunction(pool);

const viewPropertyModelsFunction = require('./models/viewProperty');
const viewPropertyModelsObject = viewPropertyModelsFunction(pool);

const editPropertyModelsFunction = require('./models/editProperty');
const editPropertyModelsObject = editPropertyModelsFunction(pool);

//this part is not required for my project, but just keeping here for now
    // const tweedModelsFunction = require('./models/tweed');
    // const tweedModelsObject = tweedModelsFunction(pool);

/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */
module.exports = {
    //make queries directly from here
    queryInterface: (text, params, callback) => {
        return pool.query(text, params, callback);
    },
    // get a reference to end the connection pool at server end
    pool,
    /*
     * ADD APP MODELS HERE
     */
    homeModelsObject,
    registerModelsObject,
    loginModelsObject,
    addPropertyModelsObject,
    viewPropertyModelsObject,
    editPropertyModelsObject,
    deletePropertyModelsObject,
    // logoutModelsObject
    //this part is not required for my project, but just keeping here for now
        // tweedModelsObject: tweedModelsObject
};
