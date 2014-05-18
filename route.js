var url = require('url');
var helper = require('./helpers');
var partials = require('./partials');

function process(req, res) {
    console.log("route.process: start");

    var result =
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
        '                <div class="productsrow">' +
        '                    <div class="product menu-category">' +
        '                        <div class="menu-category-name list-group-item active">Today\'s Breads</div>' +
        '                        <div class="product-image">' +
        '                            <img class="product-image menu-item list-group-item" src="img/assets/dailybread.jpg">' +
        '                        </div> <a href="./mockuptoday.html" class="menu-item list-group-item">Available<span class="badge">Today\'s Breads</span></a>' +
        '                    </div>     ' +                  
        '                    <div class="product menu-category">' +
        '                        <div class="menu-category-name list-group-item active">Daily Bread Schedule</div>' +
        '                        <div class="product-image">' +
        '                           <img class="product-image menu-item list-group-item" src="img/assets/breadschedule.jpg">' +
        '                        </div> <a href="#" class="menu-item list-group-item">See Our<span class="badge">Bread Schedule</span></a>' +
        '                    </div>' +
        '                    <div class="product menu-category">' +
        '                        <div class="menu-category-name list-group-item active">Breakfast</div>' +
        '                        <div class="product-image">' +
        '                            <img class="product-image menu-item list-group-item" src="img/assets/breadkfastbread.jpg">' +
        '                        </div> <a href="#" class="menu-item list-group-item">Get Your Day Started<span class="badge">Breakfast</span></a>' +
        '                    </div>' +
        '                    <div class="product menu-category">' +
        '                        <div class="menu-category-name list-group-item active">Lunch</div>' +
        '                        <div class="product-image">' +
        '                            <img class="product-image menu-item list-group-item" src="img/assets/lunch2.jpg">' +
        '                        </div> <a href="#" class="menu-item list-group-item">Fresh & Healthy<span class="badge">Lunch</span></a>' +
        '                    </div>' +
        '                    <div class="product menu-category">' +
        '                        <div class="menu-category-name list-group-item active">Soup of the Day</div>' +
        '                        <div class="div-image">' +
        '                            <img class="product-image menu-item list-group-item" src="img/assets/soup.jpg">' +
        '                        </div> <a href="#" class="menu-item list-group-item">See All Our<span class="badge">Soups</span></a>' +
        '                    </div>' +
        '                    <div class="product menu-category">' +
        '                        <div class="menu-category-name list-group-item active">Dessert</div>' +
        '                        <div class="product-image">' +
        '                            <img class="product-image menu-item list-group-item" src="img/assets/dessert2.jpg">' +
        '                        </div> <a href="#" class="menu-item list-group-item">Gourmet<span class="badge">Desserts</span></a>' +
        '                    </div>' +
        '                    <div class="product menu-category">' +
        '                        <div class="menu-category-name list-group-item active">Catering</div>' +
        '                        <div class="product-image">' +
        '                            <img class="product-image menu-item list-group-item" src="img/assets/groupbread.jpg">' +
        '                        </div> <a href="#" class="menu-item list-group-item">Order Ahead<span class="badge">Catering</span></a>' +
        '                    </div>' +
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

    console.log("route.process: done");
}


exports.process = process;