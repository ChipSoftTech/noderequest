var url = require('url');
var helper = require(rootpath + '/helpers.js');
var partials = require(rootpath + '/partials.js');

function process(req, res) {
    console.log("routes.breads.index.js.process");

    var result = '';

    result =
        '<!DOCTYPE html>' +
        '<html lang="en">' +
        partials.head() +
        '<body>' +
        partials.header() +
        '    <div class="container">' +
        '        <div class="menu row">' +
        '            <div class="jumbotron">' +
        '                <h1>The Bakery</h1>' +
        '                <h2>at Some University</h2>' +
        '            </div>' +
        '        </div>' +
        '        ' +
        '        <div class="menu row">' +
        '            <div class="col-sm-12">' +
        '                <div class="productsrow">';

    db.home.forEach( function(val) {
        result +=
            '<div class="product menu-category">' +
            '  <div class="menu-category-name list-group-item active">' + val.caption + '</div>' +
            '  <div class="product-image">' +
            '    <img class="product-image menu-item list-group-item" src="img/assets/' + val.image + '">' +
            '   </div>' +
            '   <a href="./mockuptoday.html" class="menu-item list-group-item">' + val.message + '<span class="badge">' + val.button + '</span></a>' +
            '</div>';        
    });
    
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