// Create web server
// Create a web server that can respond to requests for /comments.json 
// with a JSON string of comments back to the browser.
// 1. Create a web server that can send back a response containing a JSON string, 
//    specifically a stringified version of an array of objects, when it receives 
//    a request to the URL '/comments.json'. Use the JSON.stringify() method to 
//    convert the array of objects to a string before you send the response.
// 2. Remember to set the Content-Type header of the response to 'application/json'.
// 3. Finally, remember to send the response back to the client by calling the 
//    .end() method.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29
  };
  res.end(JSON.stringify(myObj));
});

server.listen(3000, '
