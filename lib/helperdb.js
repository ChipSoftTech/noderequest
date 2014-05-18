//Cache db in memory to only read db file once per worker
db = {};

var start = function () {
    db.home = {};
    require('fs').readFileSync('./db/home.db').toString().split(/\r?\n/).forEach(function (line) {
        var l = JSON.parse(line);
        db.home[l.key] = l.val;
    });
    
    db.breads = {};
    require('fs').readFileSync('./db/breads.db').toString().split(/\r?\n/).forEach(function (line) {
        var l = JSON.parse(line);
        db.breads[l.key] = l.val;
    });    
}

exports.start = start;