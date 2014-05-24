var url = require('url');
var helper = require(rootpath + '/lib/helpers.js');
var partials = require(rootpath + '/lib/partials.js');

function process(req, res) {
    console.log("routes.index.js.process");

    var result = '';

    result =
        '<!DOCTYPE html>' +
        '<html lang="en">' +
        partials.head() +
        '<body>' +
        partials.header('home') +
        '    <div class="container">' +
        '        <div class="menu row">' +
        '            <div class="jumbotron">' +
        '                <h1>The Bakery</h1>' +
        '                <h2>at Some University</h2>' +
        '            </div>' +
        '            <div class="menu-caption hidden-xs">' + 
        '                <h4>Welcome to The Bakery</h4>' + 
        '                <p class="blog-post-meta">The Bakery at Some University offers world-class excellence in baking and pastry arts, including a variety of specialty baked goods, pastries, cookies and candies. The Bakery also produces wholesale restaurant desserts for several of SomeCity\'s premier restaurants and specializes in unique cakes for weddings, corporate celebrations and high profile special events.</p>' + 
        '            </div>' + 
        '        </div>' +
        '        ' +
        '        <div class="menu row">' +
        '            <div class="col-sm-12">' +
        '                <div class="productsrow">';

    
    for( var key in db.home)
    {
        var val = db.home[key];
        result +=
        '<div class="product menu-category">' +
        '  <div class="menu-category-name list-group-item active">' + val.caption + '</div>' +
        '  <div class="product-image">' +
        '    <a href="./' + key + '">' +            
        '      <img class="product-image menu-item list-group-item" src="/img/assets/' + val.image + '">' +
        '    </a>' +    
        '   </div>' +
        '   <a href="./' + key + '" class="menu-item list-group-item">' + val.message + '<span class="badge">' + val.button + '</span></a>' +
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