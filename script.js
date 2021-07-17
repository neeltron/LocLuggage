var map = L.map('map').fitWorld();
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
		zoomOffset: -1
	}).addTo(map);
function onLocationFound(e) {
  console.log(e.latlng['lat'])
  console.log(e.latlng['lng'])
  fetch("https://locluggage-api.neeltron.repl.co/input?x=" + e.latlng['lat'] + "&y=" + e.latlng['lng'])
  .then(function (response) {
    return response.json();
  })
  .then(function (coord) {
    console.log(coord);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
}
function onLocationError(e) {
	alert(e.message);
}
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
map.locate({setView: true, maxZoom: 16});
  