/**
 * Created by Lirun on 2015/12/23.
 */
var server = require('./server');
var router = require('./router');

server.start( router.route );