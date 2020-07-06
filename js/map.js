"use strict";

function initMap() {
  // The location of Uluru
  var uluru = { lat: 40.6696326, lng: -73.9330109 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru,
  })
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
	position: uluru,
	map: map,
	icon: {
		url: "../img/Ellipse 11.png",
		scaledSize: new google.maps.Size(64, 64)
	}
});

}


