

exports.find = function(req, res, next){
    console.log('doing the deed');
    res.send(200, {text: 'many orders'});
};

exports.get = function(req, res, next){
    console.log('doing the deed');
    res.send(200, {text: 'one order'});
};