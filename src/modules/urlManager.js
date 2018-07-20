// @flow

import Router from 'koa-router';


const router = new Router();


export const setup = async (routes: Array<Object>): Promise<void> => {
    const siteRouter = new Router();

    siteRouter.get('site:index', '/', ({urlManager, session, response}) => {
        const n = Number(session.views) || 0;

        session.views = n + 1;

        response.body = `Привет мир! ${urlManager.buildUrl('site:index')} ${n}`;
    });

    router.use(siteRouter.routes());
};


export const getRouter = () => router;


export const buildUrl = (routeId: string, params: Object) => {
    return router.url(routeId, params);
};

