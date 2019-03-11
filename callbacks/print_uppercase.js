var htmlData = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
  };
  
function printUpperCase (html) {
    // console.log('printUpperCase');
    console.log(html.toUpperCase());
}

htmlData.getHTML(requestOptions, printUpperCase);
