function geoAPILocation() {
  // document.getElementById('locating').href = '';
  locating.href = "";
  coordinates.textContent = "";
  map.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    console.log(latitude);
    const longitude = position.coords.longitude;
    console.log(longitude);

    locating.textContent = "";
    // Link to external map is not a part of the HTML5 GeolocationAPI
    map.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    map.target = "_blank";
    console.log(map);
    map.innerText = "Click to see the map of your location!";
    coordinates.textContent = `Latitude: ${latitude}°, Longitude: ${longitude}°`;
  }

  function error() {
    locating.textContent = "You must be good at hide and seek!";
  }

  if (!navigator.geolocation) {
    locating.textContent =
      "For the love of all that is good, please cease use of Internet Explorer!";
  } else {
    locating.textContent =
      "The satellites are currently triangulating to calculate your exact position on Planet Earth";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

getLocation.addEventListener("click", geoAPILocation);
