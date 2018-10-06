// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var icon = {
    url: 'images/earthquake.png', // url
    scaledSize: new google.maps.Size(15, 15), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};

$(document).ready(function() {
  console.log("Let's get coding!");
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.78, lng: -122.44},

      zoom: 8
    });
  }
  initMap();
  var marker = new google.maps.Marker({
          position: map.center,
          map: map,
          title: 'SF!'
        });

  $.ajax({
    type: "GET",
    // url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"
    url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"
  })
  .then(function(quakes) {
    console.log(quakes);
    console.log("totalEarthquakes", quakes.features.length);
    console.log("firstEarthquake", quakes.features[0]);
    console.log("earthquakeTitle", quakes.features[0].properties.title);
    console.log("earthquakeCoordinates", quakes.features[0].geometry.coordinates);
    console.log(new Date(quakes.features[0].properties.time).toString());
    console.log((new Date().getTime() - quakes.features[0].properties.time) / 1000 / 60 / 60);
    quakes.features.forEach(function(quake) {
      $("#info").append(`<p>${quake.properties.title.split('of')[1]}</p>`);
      var earthquake = new google.maps.Marker({
              position: {lat: quake.geometry.coordinates[1], lng: quake.geometry.coordinates[0]},
              icon: icon,
              map: map,
              title: quake.properties.title
            });
    })

  })
  .catch(function(err) {
    console.log(err);
  })


});
