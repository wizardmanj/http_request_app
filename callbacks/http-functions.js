var https = require('https');    


function getHTML (options, callback) {

    https.get(requestOptions, function (response) {
        
        var finalData = '';
        
        response.setEncoding('utf8');
        
        response.on('data', function (data) {
            finalData += data.toString();
        });
        
        
        response.on('end', function() {
            callback(finalData);
        });
        
    });
    
}

function printHTML (html) {
    console.log(html);
  }  

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

module.exports = {
    getHTML
}

