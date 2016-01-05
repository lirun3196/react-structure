/**
 * Created by Lirun on 2015/12/24.
 */

function start(){
    console.log( 'Request handler "start" was called' );
}

function upload(){
    console.log( 'Request handler "upload" was called' );
}

exports.start = start;
exports.upload = upload;