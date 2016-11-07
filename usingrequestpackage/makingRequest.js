var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function(){
        console.log("We have an error. Throwing error.");
          throw err;
       })
       .on('response', function(response){
          console.log("Response staus code: ", response.statusCode);
          console.log("Response message: ", response.statusMessage);
          console.log("Response content type: ", response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));