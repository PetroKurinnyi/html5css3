function initMap() {
  const uluru = { lat: 34.064, lng: -118.413 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
