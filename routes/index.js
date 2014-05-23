var glob = require('glob'),
    fs  = require('fs');

module.exports.get = function() {

    var route_dir = process.cwd()+'/routes';
    var routes = [];

    var files = glob.sync('**/*.json', { cwd: route_dir });
    for (var f in files) {
        var file = "{dir}/{file}".replace('{dir}', route_dir).replace('{file}', files[f]);
        var route = fs.readFileSync(file, {encoding: 'utf-8'});
        try {
            route = JSON.parse(route);
            routes = routes.concat(route);
        } catch(e) {
            console.log('Cannot parse routes file as JSON');
            console.log(e);
            process.exit(0);
        }
    }
    return routes;
};