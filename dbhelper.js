//Cache db in memory to only read db file once per worker
db = {};

var start = function () {
    db.home = [];
    require('fs').readFileSync('dbtest.db').toString().split(/\r?\n/).forEach(function (line) {
        db.home.push(JSON.parse(line));
    });
}

exports.start = start;