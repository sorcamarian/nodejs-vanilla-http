// The main file
// example inspired from: https://www.youtube.com/watch?v=pYOltVz7kL0&index=13&list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_
// YouTube channer: (thenewboston) https://www.youtube.com/channel/UCJbPGzawDH1njbqV-D5HqKw

// Instructions
// 1) In the command line write: node main.js
//  (command line should be open in this directory)
// 2) In the browser, navigate to address:  http://localhost:8000/  

/* 
  var verionsInfo = { 
   node : 4.4.7,
   npm  : 3.10.6
  }
*/


var http = require('http');

// handle user requests  
function onRequest(request, response) {
  console.log("onRequest() called, URL is: " + request.url);
  
  // See what these objects contain
  // console.dir(request);
  // console.dir(response);
  
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  
  // end the response
  response.end( function() {
    // callback
    console.log("Response has been ended");
  });
}

// Create the server and listen on port 8000 - http://localhost:8000/  
http.createServer(onRequest).listen(8000);
console.log("Server started");