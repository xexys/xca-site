let routes = {};


export const init = async (config) => {
    routes = config.routes.reduce((acc, route) => {
        const {
            id,
            pattern,
            method,
            controller,
            action,
        } = route;

        const handler = require(controller)[action];

        acc[id] = {
            id,
            method: method || 'GET',
            pattern,
            handler,
        };

        return acc;
    }, {});
};


export const getRoutes = () => {
    return routes;
};
