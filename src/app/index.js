// @flow

import express from 'express';
import path from 'path';
import serializeJs from 'serialize-javascript';

import {ROOT_PATH} from './constants';


export class AppLib {}


const app = express();


const appLib = {};


let appConfig = {};


const isAppLibSubclass = Ctor => Object.getPrototypeOf(Ctor) === AppLib;


const initLib = name => {
    const {path, params = {}} = appConfig.lib[name];

    // eslint-disable-next-line global-require, import/no-dynamic-require
    const module = require(path);

    // eslint-disable-next-line new-cap
    const lib = module.default && isAppLibSubclass(module.default) ? new module.default() : module;

    return Promise.resolve(lib.init(params)).then(() => lib);
};


export const getLib = name => {
    if (!appLib[name]) {
        appLib[name] = initLib(name);
    }

    return appLib[name];
};


export const init = async config => {
    appConfig = config;

    return Promise.all(Object.keys(appConfig.lib).map(name => getLib(name)));
};


export const start = () => {
    const port = appConfig.app.port || 3000;

    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`XCA app listening on port ${port}!`);
    });
};
