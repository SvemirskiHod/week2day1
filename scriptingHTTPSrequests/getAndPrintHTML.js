var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


  https.get(requestOptions, function (response) {
    var appended = "";
    response.setEncoding('utf8');
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
    appended += data;
    });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
    response.on('end', function() {
    console.log("Here is the appended data: \n ", appended);
    console.log('Response stream complete.');
  });

});
  /* Add your code here */

}

getAndPrintHTML();