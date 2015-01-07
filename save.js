var fs = require('fs');
//moment to record time
var moment = require('moment');

//saves json to disk to be analyzed later
exports.file = function (filename, data) {

	//add 200 status code
	data['status'] = 200;

	data['lastUpdated'] = moment.utc();
	
	//convert object to json
	json = JSON.stringify(data);

	fs.writeFile("json/" + filename + '.json', json, function(err) {
	    if(err) {
	        console.log(err);
	    } 
	}); 
}