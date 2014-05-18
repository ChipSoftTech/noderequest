var url = require('url');
var helper = require(rootpath + '/helpers.js');
var partials = require(rootpath + '/partials.js');

function process(req, res) {
    console.log("routes.today.js.process");

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
        '                <h1>Today\'s Breads</h1>' +
        '                <p class="lead">What\'s Baking</p>' +
        '            </div> ' +
        '        </div>    ' +
        '    </div>        ' +
            ' <div class="menu row">' +
            '    <div class="col-sm-12">' +
            '        <div class="productsrow">' +
            '            <div class="product menu-category">' +
            '                <div class="menu-category-name list-group-item active">Baguette</div>' +
            '                <div class="product-image">' +
            '                    <img class="product-image menu-item list-group-item" src="img/assets/baguette2.jpg">' +
            '                </div> <a href="mockupdetail.html" class="menu-item list-group-item">&nbsp;<span class="badge">$1.99</span></a>' +
            '            </div>' +
            '            <div class="product menu-category">' +
            '                <div class="menu-category-name list-group-item active">Vienna</div>' +
            '                <div class="product-image">' +
            '                    <img class="product-image menu-item list-group-item" src="img/assets/bread6.jpg">' +
            '                </div> <a href="#" class="menu-item list-group-item">&nbsp;<span class="badge">$2.50</span></a>' +
            '            </div>' +
            '            <div class="product menu-category">' +
            '                <div class="menu-category-name list-group-item active">Sourdough</div>' +
            '                <div class="div-image">' +
            '                    <img class="product-image menu-item list-group-item" src="img/assets/bread7.jpg">' +
            '                </div> <a href="#" class="menu-item list-group-item">&nbsp;<span class="badge">$1.20</span></a>' +
            '            </div>' +
            '            <div class="product menu-category">' +
            '                <div class="menu-category-name list-group-item active">Rye</div>' +
            '                <div class="product-image">' +
            '                    <img class="product-image menu-item list-group-item" src="img/assets/bread8.jpg">' +
            '                </div> <a href="#" class="menu-item list-group-item">&nbsp;<span class="badge">$3.50</span></a>' +
            '            </div>' +
            '            <div class="product menu-category">' +
            '                <div class="menu-category-name list-group-item active">Olive Rosemary</div>' +
            '                <div class="product-image">' +
            '                    <img class="product-image menu-item list-group-item" src="img/assets/bread9.jpg">' +
            '                </div> <a href="#" class="menu-item list-group-item">&nbsp;<span class="badge">$4.25</span></a>' +
            '           </div>' +
            '            <div class="product menu-category">' +
            '                <div class="menu-category-name list-group-item active">Potato Garlic</div>' +
            '                <div class="product-image">' +
            '                    <img class="product-image menu-item list-group-item" src="img/assets/bread10.jpg">' +
            '                </div> <a href="#" class="menu-item list-group-item">&nbsp;<span class="badge">$2.10</span></a>' +
            '            </div>  ' +
            '            <div class="product menu-category">' +
            '                <div class="menu-category-name list-group-item active">Semolina</div>' +
            '                <div class="product-image">' +
            '                    <img class="product-image menu-item list-group-item" src="img/assets/bread11.jpg">' +
            '                </div> <a href="#" class="menu-item list-group-item">&nbsp;<span class="badge">$6.15</span></a>' +
            '            </div>  ' +
            '            <div class="product menu-category">' +
            '                <div class="menu-category-name list-group-item active">Ciabatta</div>' +
            '                <div class="product-image">' +
            '                    <img class="product-image menu-item list-group-item" src="img/assets/bread12.jpg">' +
            '                </div> <a href="#" class="menu-item list-group-item">&nbsp;<span class="badge">$3.25</span></a>' +
            '            </div>  ' +
            '            <div class="product menu-category">' +
            '                <div class="menu-category-name list-group-item active">talian Herb</div>' +
            '                <div class="product-image">' +
            '                    <img class="product-image menu-item list-group-item" src="img/assets/bread13.jpg">' +
            '                </div> <a href="#" class="menu-item list-group-item">&nbsp;<span class="badge">$3.25</span></a>' +
            '            </div>  ' +
            '            <div class="product menu-category">' +
            '                <div class="menu-category-name list-group-item active">Challah</div>' +
            '                <div class="product-image">' +
            '                    <img class="product-image menu-item list-group-item" src="img/assets/bread14.jpg">' +
            '                </div> <a href="#" class="menu-item list-group-item">Available<span class="badge">$3.25</span></a>' +
            '            </div>  ' +
            '            <div class="product menu-category">' +
            '                <div class="menu-category-name list-group-item active">Honey Oat Pecan</div>' +
            '                <div class="product-image">' +
            '                    <img class="product-image menu-item list-group-item" src="img/assets/bread15.jpg">' +
            '                </div> <a href="#" class="menu-item list-group-item">&nbsp;<span class="badge">$2.75</span></a>' +
            '            </div>' +
            '            <div class="product menu-category">' +
            '                <div class="menu-category-name list-group-item active">Daily Bread Schedule</div>' +
            '                <div class="product-image">' +
            '                    <img class="product-image menu-item list-group-item" src="img/assets/breadschedule.jpg">' +
            '                </div> <a href="#" class="menu-item list-group-item">See Our<span class="badge">Bread Schedule</span></a>' +
            '            </div>        ' +            
            '        </div>  <!--/productsrow-->' +
            '    </div>' +
            '</div> <!--/row-->' +
        '</div> <!--/container-->' +
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