// SETTINGS
const PORT = 3000;
const MAX_AGE = '30d';
const STATIC_FILES_FOLDER = 'client';
const REST_API_ROOT_ENDPOINT = '/api';

var express = require('express');
var app = express();


// STATIC FILES
app.use(express.static(__dirname + '/../' + STATIC_FILES_FOLDER, {maxAge: MAX_AGE}));


// REST API
var router = express.Router();

router.get('/example', function(request, response) {
	response.json({foo: 'bar'});
});
app.use(REST_API_ROOT_ENDPOINT, router);



var server = app.listen(PORT, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});