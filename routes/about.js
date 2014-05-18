var url = require('url');
var helper = require(rootpath + '/lib/helpers.js');
var partials = require(rootpath + '/lib/partials.js');

function process(req, res) {
    console.log("routes.about.js.process");

    var result =
        '<!DOCTYPE html>' +
        '<html lang="en">' +
        partials.head() +
        '<body>' +
        partials.header('about') +
        '<div class="container">' +
        '    <div class="menu row">' +
        '        <div class="col-sm-12">' +
        '            <div class="center-block text-center">' +
        '                <h1>About us</h1>' +
        '                <p class="lead">What would you like to know?</p>' +
        '            </div> ' +
        '        </div>    ' +
        '    </div>        ' +
        ' <div class="menu row">' +
        '    <div class="col-sm-12">' +
        '        <div class="productsrow">';



    result +=
        '                </div>  <!--/productsrow-->' +
        '            </div>' +
        '        </div> <!--/row-->' +
        '    </div> <!--/container-->' +
        partials.footer() +
        '</body>' +
        '</html>';

    res.writeHead(200, {
        "Context-Type": "text/plain"
    });
    res.write(result);
    res.end();
}

exports.process = process;