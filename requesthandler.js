var url = require('url');
var helper = require('./helpers');
var partials = require('./partials');

function handle(req, res) {
    var pathname = url.parse(req.url).pathname;

    //Get the route file for require
    //example of using try/catch
    try {
        //console.log("File to require: ./route" + pathname.toLowerCase().replace(new RegExp('/', 'g'), ''));
        var route = require("./route" + pathname.toLowerCase().replace(new RegExp('/', 'g'), ''));
    } catch (e) {
        console.log("requesthandler.handle: No route found for: " + "./route" + pathname.toLowerCase().replace(new RegExp('/', 'g'), ''));

        result =
            '<!DOCTYPE html>' +
            '<html lang="en">' +
            partials.head() +
            '<body>' +
            partials.header() +
            '    <div class="container">' +
            '    <div class="menu row">' +
            '        <div class="col-sm-12">' +
            '            <div class="center-block text-center">' +
            '                <h1>404 Not Found</h1>' +
            '                <p class="lead">requested page not found</p>' +
            '            </div> ' +
            '        </div>    ' +
            '    </div>        ' +
            '    </div> <!--/container-->' +
            partials.footer() +
            '</body>' +
            '</html>';

        res.writeHead(404, {
            "Context-Type": "text/plain"
        });
        res.write(result);
        res.end();
        return;
    }

    route.process(req, res);
}

exports.handle = handle;