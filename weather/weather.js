const request=require('request');

var getWeather=(lat,lng,callback)=>{
	request({
		url:`https://api.darksky.net/forecast/99b0159d6edb4851783aca6976215949/${lat},${lng}`,
		json:true
	},(error,response,body)=>{
		if(!error && response.statusCode===200){
			var results={
				temperature:body.currently.temperature,
				apparentTemperature:body.currently.apparentTemperature
			};
			callback(undefined,results);
		}else{
			callback('Unable to fetch weather.');		
		}
	});
};

module.exports.getWeather=getWeather;

