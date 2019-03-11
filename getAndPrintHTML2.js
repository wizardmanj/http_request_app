var https = require('https');    


function getAndPrintHTML2 (options) {

    https.get(requestOptions, function (response) {
        
        var finalData = '';
        
        response.setEncoding('utf8');
        
        response.on('data', function (data) {
            finalData += data.toString();
        });
        
        
        response.on('end', function() {
            console.log(finalData);
        });
        
    });
    
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getAndPrintHTML2(requestOptions);