

module.exports = function(req, res, next) {
    console.log('checking basic auth that i found in request');
    next();
};