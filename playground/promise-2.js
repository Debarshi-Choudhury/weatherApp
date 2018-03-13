const request=require('request');


var geocodeAddress=(address)=>{
	return new Promise((resolve,reject)=>{
		var encodedAddress= encodeURIComponent(address);

		request({
			url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDUIHESQnXtTVueEmientwRKR78RgLu6xo`,
			json:true
		},(error,response,body)=>{
			if(error){
				reject('Unable to connect to google server.');
			}
			else if(body.status==='ZERO_RESULTS'){
				reject('Unable to find that address.');
			}
			else if(body.status==='OK'){
				resolve({
					address:body.results[0].formatted_address,
					latitude:body.results[0].geometry.location.lat,
					longitude:body.results[0].geometry.location.lng
				});
			}
			
		});
	});	
};

geocodeAddress('781006').then((location)=>{
	console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
	console.log(errorMessage);
});