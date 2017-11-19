var mod = require('./module')

var dir = process.argv[2]
var ext = process.argv[3]

mod(dir, ext, callme)

function callme(err,data) {
    if(err) console.log(err);
    console.log(data);
}