var fs = require('fs');
var bufferstring = fs.readFileSync(process.argv[2]).toString();
console.log(bufferstring.split('\n').length -1); 