// This supports Clusters and Domains
//
var cluster = require('cluster');
var url = require('url');
var http = require('http');
var path = require('path');
var fs = require('fs');


var PORT = +process.env.PORT || 1337;

if (cluster.isMaster) {
    // Use just 2 workers.  If you have multiple CPUs,
    // increase the number of forks.
    //
    // See the options in the cluster documentation.
    //
    // The important thing is that the master does very little,
    // increasing our resilience to unexpected errors.

    console.log('Application Starting - Master');

    cluster.fork();
    cluster.fork();

    cluster.on('disconnect', function (worker) {
        console.error('Disconnect worker on port ' + PORT + '!');
        cluster.fork();
    }); 
    
} else {
    // the worker process
    // called once per worker
    // each worker has its own memory
    console.log('Starting worker - listening on port: ' + PORT);
    
    //Cache application rootPath
    rootpath = path.dirname(require.main.filename);    

    //Load the databases
    console.log("Starting databases");
    
    var dbHelper = require(rootpath + '/lib/helperdb.js');
    dbHelper.start(); 
    
    var domain = require('domain');  
    
    var server = require('http').createServer(function (req, res) {
        var d = domain.create();
        d.on('error', function (er) {
            console.error('error: ', er.stack);

            // Note: uncaught error has occurred!
            // By definition, something unexpected occurred,
            try {
                // make sure we close down within 30 seconds
                var killtimer = setTimeout(function () {
                    process.exit(1);
                }, 30000);
                // But don't keep the process open just for that!
                killtimer.unref();

                // stop taking new requests.
                server.close();

                // Let the master know we're dead.  This will trigger a
                // 'disconnect' in the cluster master, and then it will fork
                // a new worker.
                cluster.worker.disconnect();

                // create the error
                var errorMessage = Error.http(500, null, er.stack);                
                console.log(errorMessage.status + ': ' + errorMessage.message + '\n' + errorMessage.data);

                // try to send an error to the request that triggered the problem
                res.writeHead(500, {
                    "Context-Type": "text/plain"
                });
                
                res.write(require(rootpath + '/lib/partials.js').page500());
                res.end();
            } catch (er2) {
                // oh well, not much we can do at this point.
                console.error('Error sending 500!', er2.stack);
            }
        });

        // Because req and res were created before this domain existed,
        // we need to explicitly add them.
        // See the explanation of implicit vs explicit binding below.
        d.add(req);
        d.add(res);

        // Now run the handler function in the domain.
        d.run(function () {
            var ext = path.extname(path.basename(req.url));              
            //console.log("ext: " + ext);
                        
            var helpers = require('./lib/helpers.js');
            var requestHandler = require('./requesthandler.js');            
            
            if(helpers.isMimeType(ext))
            {                
                helpers.getFile(req, res);    
            } else {
                requestHandler.handle(req, res);
            }
        });
    });
    server.listen(PORT);
}