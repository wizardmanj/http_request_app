var htmlFunctions = require('./http-functions');

htmlFunctions.getHTML(requestOptions, printHTML);

function printHTML (html) {
    console.log(html);
  }  

var requestOptions = {
  host: 'sytantris.github.io',  
  path: '/http-examples/step5.html'
};