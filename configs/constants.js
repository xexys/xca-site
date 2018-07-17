const path = require('path');


const ROOT_PATH = path.resolve(__dirname, '..');

const SERVER_PATH = path.join(ROOT_PATH, 'dist/server');

const CLIENT_PATH = path.join(ROOT_PATH, 'dist/client');


module.exports = {
    ROOT_PATH,
    SERVER_PATH,
    CLIENT_PATH,
};
