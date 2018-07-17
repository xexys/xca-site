// @flow

const config = require('./configs/app');
const {init, start} = require('./dist/server/app');


init(config)
    .then(start)
    .catch(console.log); // eslint-disable-line no-console
