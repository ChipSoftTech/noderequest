var url = require('url');
var path = require('path');
var helper = require('./lib/helpers.js');
var partials = require('./lib/partials.js');

function handle(req, res) {
    var q = req.url.indexOf("?");
    
    var file;
    
    if( q < 0) {
        file = './routes' + req.url;
    } else {
        file = './routes' + req.url.substring(0,q);
        
    }

    try {
        var route = require(file);
    } catch (e) {

        try {
            var moduleName = require.resolve(file);
            console.log("requesthandler.handle: Error in: " + moduleName);
            console.log(e);

            result = partials.page500();
            res.writeHead(500, {
                "Context-Type": "text/plain"
            });
            res.write(result);
            res.end();
            return;

        } catch (e) {
            console.log("requesthandler.handle: No route found for: " + file);

            result = partials.page404();
            res.writeHead(404, {
                "Context-Type": "text/plain"
            });
            res.write(result);
            res.end();
            return;
        }
    }

    route.process(req, res);
}

exports.handle = handle;