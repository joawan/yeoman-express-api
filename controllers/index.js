var routes = require('../routes');

exports.index = function(req, res, next) {
    res.send(200, {api_is: 'up'});
};

exports.endpoints = function(req, res, next) {
    routes = routes.get();
    res.send(200, routes);
};