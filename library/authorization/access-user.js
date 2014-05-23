module.exports = function(req, res, next) {
    console.log('checking user access');
    next();
};