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

const homeModelsFunction = require(`./models/homeModel`);
const homeModelsObject = homeModelsFunction(pool);

const registerModelsFunction = require(`./models/onboard/registerModel`);
const registerModelsObject = registerModelsFunction(pool);

const loginModelsFunction = require(`./models/onboard/loginModel`);
const loginModelsObject = loginModelsFunction(pool);

const addPropertyModelsFunction = require(`./models/property/addPropertyModel`);
const addPropertyModelsObject = addPropertyModelsFunction(pool);

const viewPropertyModelsFunction = require(`./models/property/viewPropertyModel`);
const viewPropertyModelsObject = viewPropertyModelsFunction(pool);

const editPropertyModelsFunction = require(`./models/property/editPropertyModel`);
const editPropertyModelsObject = editPropertyModelsFunction(pool);

//delete property models object is found within the edit property controller because the feature to delete property is found within the edit property page.
// const deletePropertyModelsFunction = require(`./models/editProperty`);
// const deletePropertyModelsObject = deletePropertyModelsFunction(pool);

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
    // logoutModelsObject
    //this part is not required for my project, but just keeping here for now
        // tweedModelsObject: tweedModelsObject
};
