var fs = require('fs');
//Filesystem Module
fs.readFile('input.txt',function(err,data){
    if(err){
        console.log(err);
    }else{
    console.log("console data read Async is" + data.toString());
    }
});

fs.close()

var data = fs.readFileSync('input.txt');
console.log("console data read Sync is" + data.toString());
console.log("this is the end");
