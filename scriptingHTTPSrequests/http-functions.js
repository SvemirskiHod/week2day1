module.exports = function getHTML (options, callback) {
  var https = require('https');
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