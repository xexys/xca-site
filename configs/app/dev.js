const path = require('path');

const {SERVER_PATH} = require('../constants');


const resolvePath = (...paths) => require.resolve(path.join(...paths));


const resolveServerPath = modulePath => resolvePath(SERVER_PATH, modulePath);


module.exports = {
    app: {
        port: 3000,
    },

    lib: {
        // xcaDbClient: {
        //     path: resolveServerPath('lib/xcaDbClient'),
        //     params: {
        //         connectionString: 'mongodb://localhost:27017/xca',
        //     },
        // },

        // urlManager: {
        //     path: resolveServerPath('lib/urlManager'),
        //     params: {
        //         routes: [{
        //             id: 'site:index',
        //             pattern: '/',
        //             controller: resolveServerPath('controllers/site'),
        //             action: 'siteIndex',
        //         }, {
        //             id: 'site:about',
        //             pattern: '/about',
        //             controller: resolveServerPath('controllers/site'),
        //             action: 'siteAbout',
        //         }],
        //     },
        // },

        test1: {
            path: resolveServerPath('lib/test1'),
        },

        test2: {
            path: resolveServerPath('lib/test2'),
        },

        test3: {
            path: resolveServerPath('lib/test3'),
        },

        // assetsManager: {

        // },

        // user: {

        // },

        // accessControl: {

        // },

        // errorHandler: {

        // },

        // logger: {
        //     addToContext: true,
        // },

        // cache: {
        //     addToContext: true,
        // },
    },
};
