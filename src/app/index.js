// @flow

import Koa from 'koa';
import * as urlManager from '@/modules/urlManager';
import * as dbClient from '@/modules/dbClient';
import * as session from '@/modules/session';


const app = new Koa();

let server :? typeof app.server = null;

let appConfig = {};

let modulesConfig = {};


const initKeys = () => {
    app.keys = appConfig.secretKeys;
};


const initUrlManager = async () => {
    const {setup, getRouter, ...props} = urlManager;

    await setup(modulesConfig.urlManager.routes);

    app.context.urlManager = props;
    app.use(getRouter().routes());
};


const initDbClient = async () => {
    const {setup, getDb} = dbClient;

    await setup(modulesConfig.dbClient.connectionString);

    app.context.db = getDb();
};


const initSession = async () => {
    const {createMiddleware} = session;

    app.use(createMiddleware(app, modulesConfig.session));
};


export const init = async (config: Object): Promise<void> => {
    appConfig = config.app;
    modulesConfig = config.modules;

    await initKeys();
    await initDbClient();
    await initSession();
    await initUrlManager();
};


export const start = () => {
    const port = Number(appConfig.port) || 3000;

    server = app.listen({port}, () => {
        // eslint-disable-next-line no-console
        console.log(`XCA app listening on port ${port}!`);
    });
};


export const stop = () => {
    if (server) {
        server.close();
    }
};
