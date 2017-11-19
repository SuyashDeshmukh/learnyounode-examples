var fs = require('fs')
var path = require('path')

module.exports = function filter_Array(URL, extension, callme)  {
    fs.readdir(URL,(err,data)=>{
        if(err) return callme(err);
        data.forEach(element => {
            if(path.extname(element) == '.'+ extension)
                callme(null,element)
        });
    });
}