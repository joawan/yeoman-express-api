

module.exports = function(req, res, next) {
    console.log('Checking token');
    var access_token = req.query.oauth_token;
    if(!access_token) {
        console.log('No token');
        next();
    }

    next();
};