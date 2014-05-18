var url = require('url');
var helper = require(rootpath + '/lib/helpers.js');
var partials = require(rootpath + '/lib/partials.js');

function process(req, res) {
    console.log("routes.breads.index.js.process");

    var result =
        '<!DOCTYPE html>' +
        '<html lang="en">' +
        partials.head() +
        '<body>' +
        partials.header() +
        '<div class="container">' +
        '    <div class="menu row">' +
        '        <div class="col-sm-12">' +
        '            <div class="center-block text-center">' +
        '                <h1>Our Breads</h1>' +
        '                <p class="lead">What\'s Baking</p>' +
        '            </div> ' +
        '        </div>    ' +
        '    </div>        ' +
        ' <div class="menu row">' +
        '    <div class="col-sm-12">' +
        '        <div class="productsrow">';


    for (var key in db.breads) {
        var val = db.breads[key];

        var d = new Date();
        var n = d.getDay();
        result +=
            '<div class="product menu-category">' +
            '  <div class="menu-category-name list-group-item active">' + val.caption + '</div>' +
            '  <div class="product-image">' +
            '    <img class="product-image menu-item list-group-item" src="/img/assets/' + val.image + '">' +
            '   </div>' +
            '   <a href="#" class="menu-item list-group-item">' + val.message + '<span class="badge">' + val.button + '</span></a>' +
            '</div>';
    }

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