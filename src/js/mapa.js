window.onload = () => {
  initMap();
}
 
 let map;
       let infoWindow;
      function initMap() {
        // con HTML5 geolocation.
        if (navigator.geolocation) {

          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var myLatlng = new google.maps.LatLng(pos)
            var opciones = {
                center: myLatlng,
                zoom: 15
            }
            map = new google.maps.Map(document.getElementById("map"),  opciones);
            infoWindow = new google.maps.InfoWindow();
            console.log(infoWindow);
            var marker = new google.maps.Marker({
                position: pos,
                 map: map,
                });
            // infoWindow.setPosition(pos);
            // infoWindow.setContent('Location found.');
            // infoWindow.open(map);
            map.setCenter(pos);
            var request = {
     location: myLatlng,
     radius: 3000,
     types: ['restaurant']
   };

   // Creamos el servicio PlaceService y enviamos la petición.
   var service = new google.maps.places.PlacesService(map);

   service.nearbySearch(request, function(results, status) {
       // si el status es ok ejecutamos el for 
     if (status === google.maps.places.PlacesServiceStatus.OK) {
       for (var i = 0; i < results.length; i++) {
           // pasamos a resultados al la funciones que se encargara de crear los marcadores 
           // para cada restaurante en el radio de su ubicacion
         crearMarcador(results[i]);
       }
     }
   });
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // navegador no soporta geolocalización
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }


      function crearMarcador(place){
   // Creamos un marcador
   var marker = new google.maps.Marker({
     map: map,
     position: place.geometry.location
   });

 // Asignamos  evento click del marcador
   google.maps.event.addListener(marker, 'click', function() {
     infoWindow.setContent(place.name);
     infoWindow.open(map, this);
   });
   mostrarLugares(place);
   }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }