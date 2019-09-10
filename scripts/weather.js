

// function onReady(callback) {    
//   var intervalId = window.setInterval(function() {
//     if (document.getElementsByTagName('body')[0] !== undefined) {
//       window.clearInterval(intervalId);
//       callback.call(this);
//     }
//   }, 1000);
// }

// function setVisible(selector, visible) {
//   document.querySelector(selector).style.display = visible ? 'block' : 'none';
// }

// onReady(function() {
//   setVisible('.page', true);
//   setVisible('#loading', false);
// });



function weatherBalloon( cityName, key ) {
//   var key = '{yourkey}';
  var key = 'b0dad107edfff3d097f3635ea3770e16';
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
    drawWeather(data);
  document.getElementById("loader").style.display = "none";
  document.getElementById("main-page").style.display = "block";
  })
  .catch(function() {
    // catch any errors
  });
  debugger
}

function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('main').innerHTML = d.weather[0].main;
	document.getElementById('temp').innerHTML = celcius;
	document.getElementById('location').innerHTML = d.name;
    document.getElementById('wind').innerHTML = d.wind.speed;
}

var getParams = function (url) {
    debugger
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
    weatherBalloon(params.city, params.key)
	return params;
    console.log(params);
};



window.onload = function() {
  document.getElementById("main-page").style.display = "none";
//   weatherBalloon( 'london' );
  debugger
  getParams(window.location.href);
}
