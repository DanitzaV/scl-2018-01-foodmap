function splash(){
    setTimeout( () => {
      location = 'index.html';
    },2000)
}

let inputsearch;
let container;
let datos;
let juntarDatos;


function obtenerFood(data) {
  console.log(data)
    const src = data.photos[0].getUrl({ maxHeight: 100 });
   
   
  //go  de ayuda https://reviblog.net/2016/01/08/api-javascript-de-google-maps-buscar-lugares-cercanos/
   // Creamos el servicio PlaceService y enviamos la petición.
 
    contenedor.innerHTML += `             
                 <div class="col-6 col-md-4 places">
  <img src="${src}" class="figure-img img-fluid rounded placesImg" data-toggle="modal" data-target="#${data.place_id}" >
  <p class="titulo-place">${data.name}</p>
</div>
<div class="modal fade" id="${data.place_id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">${data.name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <div id="mapa"></div>
                <div class="form-group">
                  <p>direccion: ${data.vicinity}</p>
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Message:</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Send message</button>
            </div>
          </div>
        </div>
      </div>
`

let mapPlace = new google.maps.Map(document.getElementById('mapa'), {
  center: {
      lat: data.geometry.location.lat(),
      lng: data.geometry.location.lng()
  },
  zoom: 16
});
let marker = new google.maps.Marker({
  map: mapPlace,
  position: data.geometry.location
});

google.maps.event.addListener(marker, 'click', function () {
  infowindow.setContent(data.name);
  infowindow.open(mapPlace, this);
})
     
} 
 





