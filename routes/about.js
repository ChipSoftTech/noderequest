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
        partials.header('about');
        
    result +=        
        '<div class="container">' +
        '	<div class="row hidden-xs">' +
        '       <div class="col-md-12">' +
        '           <div class="jumbotron aboutus"></div>' +
        '		    <div class="menu-caption">' +
        '			    <h4>About The Bakery</h4>' +
        '    		</div>' +
        '       </div>' +
        '	</div>' +
        
        
        //SMALL screen only!
        '	<div class="row visible-xs">' +
        '		<div class="col-sm-12">' +
        '			<div class="center-block text-center">' +
        '				<h1>About</h1>' +
        '               <h4>the bakery</h4>' +        
        '			</div>' +
        '		</div>' +
        '	</div>' +

        '   <div class="menu-caption">' +
        '		<div class="row">' +
        '			<div class="col-md-12">' +
        '					    <p class="hidden-xs">' +
        '			    			Treat yourself to a sampling of the finest artisan breads, decadent desserts and original coffee blends in town. The Bakery at Some University offers all these and more for those with discerning tastes. From croissants and muffins for your morning meeting, bourbon balls and truffles for a unique gift to the most elaborate or elegantly simple wedding cake, The Bakery puts its professional touch on all its creations.' +
        '				    	</p>' +
        '			    		<p class="hidden-xs">' +
        '			    			Under the management of Chef Good Cooker, the talented baking and pastry chefs create delicious desserts you won\'t be able to resist.' +
        '				    	</p>' +
        '				    	<p>' +
        '                           <span>The Bakery produces a wonderful variety of specialty-baked goods, pastries, cookies and candies.</span>' +
        '				    		<span class="hidden-xs">They also produce wholesale restaurant dessert for over 20 of your favorite local restaurants.</span>' +
        '                           <span class="hidden-xs">The Bakery\'s specialty is assisting you in creating one-of-a-kind cakes for weddings, corporate celebrations and high profile special events. Cakes produced by The Bakery range from simply elegant to the most complex decorations. The Bakery does it all!</span>' +
        '				    	</p>' +
        '			</div>' +
        '		</div>';     

    
    result +=  
     '<div class="row">' +
    '      <div id="time-outer" class="col-md-12">' +
    '          <div class="col-md-3">' +
    '            <h4>Our Time</h4>' +
    '          </div>' +
    '        <div id="time-container" class="col-md-9">' +
            '				<p>' +
            '					Monday - Friday: 6:30am-6pm <br>' +
            '					 Saturday: 7am-4pm' +
            '				</p>' +        
    '        </div>' +
    '     </div><!-- /map-outer -->' +
    '     <div id="map"></div><!-- here for anchor link only -->' +  
    '  </div> <!-- /row -->';
    
  result +=
    '<div class="row">' +
    '      <div id="map-outer" class="col-md-12">' +
    '          <div id="address" class="col-md-3">' +
    '            <h4>Our Location</h4>' +
    '            <address>' +
    '            <strong>Some University</strong><br>' +
    '                66 Clark Memorial Bridge<br>' +
    '                Louisville, KY 40202<br>' +
    '                <abbr>P:</abbr> +555 555-5555' +
    '           </address>' +
    '          </div>' +
    '        <div id="map-container" class="col-md-9"></div>' +
    '     </div><!-- /map-outer -->' +
    '  </div> <!-- /row -->';
    
  result +=   
    '  <div class="row">' +
    '    <div id="form-outer" class="col-md-12">' +  
    '    <h4>Contract Us</h4>' +        
    '    <form id="form-container" class="form-horizontal" name="commentform">' +
    '      <div class="form-group">' +
    '          <div class="col-md-3">' +
    '              <input type="text" class="form-control" id="first_name" name="first_name" placeholder="First Name"/>' +
    '          </div>' +
    '          <div class="col-md-3">' +
    '              <input type="text" class="form-control" id="last_name" name="last_name" placeholder="Last Name"/>' +
    '          </div>' +
    '          <div class="col-md-6 input-group">' +
    '          <span class="input-group-addon">@</span>' +
    '              <input type="email" class="form-control" id="email" name="email" placeholder="Email Address"/>' +
    '          </div>' +
    '      </div>' +
    '      <div class="form-group">' +
    '          <div class="col-md-12">' +
    '              <textarea rows="6" class="form-control" id="comments" name="comments" placeholder="Your question or comment here"></textarea>' +
    '          </div>' +
    '      </div>' +
    '      <div class="form-group">' +
    '          <div class="col-md-6">' +
    '              <button type="submit" value="Submit" class="btn btn-warning pull-right">Send</button>' +
    '          </div>' +
    '      </div>' +
    '  </form>' +
    '  </div>' +        
    '</div><!-- /row -->';       

        
 

    result +=
        '	</div>  <!-- /menu-caption -->' +
        '</div>  <!-- /container -->' + 
        partials.footer() +
        '   <script src="http://maps.google.com/maps/api/js?sensor=false"></script>' + 
            
        '   <script>   ' + 
        '   function init_map() {' +
        '       var var_location = new google.maps.LatLng(38.264417,-85.75147);' +
        '       var var_mapoptions = {' +
        '         center: var_location,' +
        '         zoom: 14' +
        '       };' +
        '       var var_marker = new google.maps.Marker({' +
        '           position: var_location,' +
        '           map: var_map,' +
        '           title:"Venice"});' +
        '        var var_map = new google.maps.Map(document.getElementById("map-container"),' +
        '           var_mapoptions);' +
        '       var_marker.setMap(var_map);    ' +
        '     }' +
        '      google.maps.event.addDomListener(window, "load", init_map);' +
        ' </script>' +
            
            
            
        '</body>' +
        '</html>';

    res.writeHead(200, {
        "Context-Type": "text/plain"
    });
    res.write(result);
    res.end();
}

exports.process = process;