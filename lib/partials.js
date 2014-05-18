var page404 = function () {
    var html = 
        '<!DOCTYPE html>' +
        '<html lang="en">' +
        head() +
        '<body>' +
        header() +
        '    <div class="container">' +
        '    <div class="menu row">' +
        '        <div class="col-sm-12">' +
        '            <div class="center-block text-center">' +
        '                <h1>404 '+ statusCodes['404'] + '</h1>' +
        '                <p class="lead">requested page not found</p>' +
        '            </div> ' +
        '        </div>    ' +
        '    </div>        ' +
        '    </div> <!--/container-->' +
        footer() +
        '</body>' +
        '</html>';
    return html;
}

var page500 = function () {
    var html = 
        '<!DOCTYPE html>' +
        '<html lang="en">' +
        head() +
        '<body>' +
        header() +
        '    <div class="container">' +
        '    <div class="menu row">' +
        '        <div class="col-sm-12">' +
        '            <div class="center-block text-center">' +
        '                <h1>500 '+ statusCodes['500'] + '</h1>' +
        '                <p class="lead">error in requested page</p>' +
        '            </div> ' +
        '        </div>    ' +
        '    </div>        ' +
        '    </div> <!--/container-->' +
        footer() +
        '</body>' +
        '</html>';
    return html;
}

var head = function () {
    var html = 
        '<head>' +
        '    <meta http-equiv="content-type" content="text/html; charset=UTF-8"> ' +
        '    <meta charset="utf-8">' +
        '    <title>The Bakery - Home</title>' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">' +
        '    <link href="/css/bootstrap.min.css" rel="stylesheet">' +
        '   ' +
        '    <!--[if lt IE 9]>' +
        '    <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>' +
        '    <![endif]-->' +
        '    <link rel="shortcut icon" href="/img/favicon.ico">' +
        '    <link rel="apple-touch-icon" href="/img/apple-touch-icon.html">' +
        '    <link rel="apple-touch-icon" sizes="72x72" href="/img/apple-touch-icon-72x72.html">' +
        '    <link rel="apple-touch-icon" sizes="114x114" href="/img/apple-touch-icon-114x114.html">' +
        '   ' +
        '    <link href="/css/font-awesome.min.css" type="text/css" rel="stylesheet">' +
        '   ' +
        '    <!-- CSS code from dirtynoderequest -->' +
        '    <link href="/css/noderequest.css" type="text/css" rel="stylesheet">' +
        '</head>';

    return html;
}

var header = function () {
    var html = 
        '<div class="navbar navbar-inverse navbar-fixed-top">' +
        '    <div class="container" style="">' +
        '        <div class="navbar-header">' +
        '            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">' +
        '                <span class="icon-bar"></span>' +
        '                <span class="icon-bar"></span>' +
        '                <span class="icon-bar"></span>' +
        '            </button>' +
        '            <a class="navbar-brand active" href="/">Home</a>' +
        '        </div>' +
        '        <div class="collapse navbar-collapse" style="">' +
        '          <ul class="nav navbar-nav">' +
        '              <li><a href="./today" class="" style="">Today\'s Bread</a></li>' +
        '              <li><a href="#" class="">Bread Schedule</a></li>' +
        '              <li><a href="#" class="">Breakfast</a></li>' +
        '              <li><a href="#" class="">Lunch</a></li>' +
        '              <li><a href="#" class="">Soup</a></li>' +
        '              <li><a href="#" class="">Dessert</a></li>' +
        '              <li><a href="#" class="">Catering</a></li>' +
        '              <li><a href="./about" class="">About</a></li>' +
        '              <li><a href="#" class="" contenteditable="false">Sign in</a></li>' +
        '          </ul>' +
        '        </div>' +
        '    </div>' +
        '</div>';
    return html;
}

var footer = function () {
    var html = 
        '    <script src="/js/jquery.min.js"></script>' +
        '    <script src="/js/bootstrap.min.js"></script>';
    return html;
}

exports.page404 = page404;
exports.page500 = page500;
exports.head = head;
exports.header = header;
exports.footer = footer;