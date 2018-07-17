// @flow

import express from 'express';
import path from 'path';
import serializeJs from 'serialize-javascript';

import {ROOT_PATH} from './constants';


const app = express();


let appPort = 3000;


const appLib = {};


const initLib = (appConfig) => (
    Promise.all(Object.entries(appConfig.lib).map(([name, config]) => {
        const {path, params} = config;

        // eslint-disable-next-line global-require, import/no-dynamic-require
        const module = require(path);

        // TODO: Сделать проверку на инстанс правильного класса
        // eslint-disable-next-line new-cap
        const lib = typeof module.default === 'function' ? new module.default() : module;

        return lib.init(params).then(() => {
            appLib[name] = lib;
        });
    }))
);


// TODO: оформить в виде либы
const initView = () => {
    const safeJsonStringify = (obj: any): string => serializeJs(obj, {json: true});

    app.set('view engine', 'pug');
    app.set('views', path.join(ROOT_PATH, 'server/templates'));

    // Хелперы для pug шаблонов
    // eslint-disable-next-line no-param-reassign
    app.locals.safeJsonStringify = safeJsonStringify;
};

// TODO: оформить в виде либы, ф-ия для подключения статики
const initAssetsManager = () => {
    app.use('/static', express.static(path.join(ROOT_PATH, 'client')));
};


const createContext = (req, res) => {
    return {
        req,
        res,
    };
};


const wrapAsync = fn => (req, res, next) => {
    // $FlowFixMe Хз в чем тут дело, надо разбираться :(
    Promise.resolve(fn(createContext(req, res))).catch(next);
};


const initRouter = () => {
    const {getRoutes} = appLib.urlManager;

    const router = Object.values(getRoutes()).reduce((acc, {method, pattern, handler}) => {
        acc[method.toLowerCase()](pattern, wrapAsync(handler));

        return acc;
    }, express.Router());

    app.use(router);
};


const initApp = () => {
    initView();
    initAssetsManager();
    initRouter();
};


export const init = async (config: Object) => {
    appPort = Number(config.app.port) || appPort;


    // process.on('SIGINT', () => {
    //     // eslint-disable-next-line no-console
    //     console.log('XCA app exit through app termination');
    //     process.exit(0);
    // });

    return initLib(config).then(initApp);
};


export const start = () => {
    app.listen(appPort, () => {
        // eslint-disable-next-line no-console
        console.log(`XCA app listening on port ${appPort}!`);
    });
};

