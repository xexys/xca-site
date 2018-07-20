const path = require('path');

const {SERVER_PATH} = require('../constants');


const resolvePath = (...paths) => require.resolve(path.join(...paths));


const resolveServerPath = modulePath => resolvePath(SERVER_PATH, modulePath);


module.exports = {
    app: {
        port: 3000,

        secretKeys: ['im a newer secret', 'i like turtle'],
    },

    modules: {
        dbClient: {
            connectionString: 'mongodb://localhost:27017/xca',
        },

        urlManager: {
            routes: [{
                id: 'site:index',
                pattern: '/',
            }, {
                id: 'site:about',
                pattern: '/about',
            }],
        },

        session: {
            key: 'xca:sess',
        },

        // test1: {
        //     path: resolveServerPath('lib/test1'),
        // },

        // test2: {
        //     path: resolveServerPath('lib/test2'),
        // },

        // test3: {
        //     path: resolveServerPath('lib/test3'),
        // },

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
