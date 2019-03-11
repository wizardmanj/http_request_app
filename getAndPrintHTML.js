var https = require('https');    


function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
  
  
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

getAndPrintHTML()