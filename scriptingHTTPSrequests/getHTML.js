var https = require('https');
function getHTML (options, callback) {
  https.get(options, function (response) {
    var appended = "";
    response.setEncoding('utf8');
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
    appended += data;
    });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
    response.on('end', function() {
    callback(appended);
    console.log('Response stream complete.');
  });

});

 }


function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);