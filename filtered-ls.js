var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2],(err,data)=>{
    data.forEach(element => {
        if(path.extname(element) == '.'+ process.argv[3])
            console.log(element);
    });
});