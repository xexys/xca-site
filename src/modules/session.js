import session from 'koa-session';


export const createMiddleware = (app, config = {}) => {
    return session(app, config);
};
