var routes = require('./routes');

module.exports = function(app) {

    routes = routes.get();

    for(var r in routes) {
        var route = routes[r];
        var middleware = [];
        if(route.authentication) {
            var authentication_path = './library/authentication/{method}.js'.replace('{method}', route.authentication);
            var authenticate = require(authentication_path);
            middleware.push(authenticate);
        }
        if(route.authorization) {
            var authorize_path = './library/authorization/{method}.js'.replace('{method}', route.authorization);
            var authorize = require(authorize_path);
            middleware.push(authorize);
        }

        var controller_path = './controllers/{controller}.js'.replace('{controller}', route.controller);
        var controller = require(controller_path);
        middleware.push(controller[route.callback]);

        app[route.method](route.endpoint, middleware);
    }

    return app;
};
