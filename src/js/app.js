


let inputsearch;

function obtenerFood() {
    inputsearch =  document.getElementById('searchfood').value;
    searchFood(inputsearch)
}



function searchFood(food){
fetch( `https://developers.zomato.com/api/v2.1/search?apikey=345cfa259714c1f5bcdb75e1bec7cfe8&entity_id=83&entity_type=city&q=${food}&count=6`).then(response => response.json()
).then(respuestaJson => {
 console.log(respuestaJson);
    mostrarLugares(respuestaJson)
})

}
let container;
function mostrarLugares(data) {
    console.log(data)
//   let restaurantes =  data.restaurants;
//   console.log(restaurantes)
//  container =  document.getElementById('contenedor');
//  restaurantes.forEach(e => {
//      let col12 = document.createElement('div')
//      col12.classList = 'col-12 col-sm-6 col-md-3 text-center justify-content-center';
//      let img = document.createElement('img');
//      img.classList= 'card-img-top';
//      img.setAttribute('src' , e.restaurant.featured_image);
     
//     col12.appendChild(img);
//     container.appendChild(col12);
// //     container.innerHTML = `<div class="col-12 col-sm-6 col-md-3 text-center justify-content-center">
                    
// //     <img class="card-img-top" src="${e.restaurant.featured_image}"  alt="Card image cap">
   
// //    </div>`
 
//  });
 
 
}



