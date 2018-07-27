mostrarLugares()


let inputsearch;
let container;
let datos;
let juntarDatos;
function obtenerFood(dato) {
    juntarDatos = dato;
    console.log(juntarDatos)
    container =  document.getElementById('contenedor');
    let col12 = document.createElement('div')
    col12.classList = 'col-12 col-sm-6 col-md-3 text-center justify-content-center';
    let card = document.createElement('div');
    card.classList= 'card ';
    card.id = 'card'
    card.setAttribute('data-toggle','modal');
    card.setAttribute('data-target','#exampleModal');
    card.style.width ='18rem';
    let p =  document.createElement('p');
    p.classList = 'nombre'
    let titutoRestaurant = document.createTextNode(juntarDatos.name)
    p.appendChild(titutoRestaurant);
    card.appendChild(p)
   col12.appendChild(card);
   container.appendChild(col12);
  

//    document.getElementById('exampleModalLabel').appendChild(titulomodal);
   let contenedormodal = document.getElementById('modal');
   contenedormodal.innerHTML+= `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="exampleModalLabel">${juntarDatos.name}</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body" id="modal-body">
         
       </div>
     </div>
   </div>
 </div>`
     
     inputsearch =  document.getElementById('searchfood').value;
     
     document.getElementById('card').addEventListener('click', function () {
         
     })
 
 // function searchFood(food){
 // fetch( `https://developers.zomato.com/api/v2.1/search?apikey=345cfa259714c1f5bcdb75e1bec7cfe8&entity_id=83&entity_type=city&q=${food}&count=6`).then(response => response.json()
 // ).then(respuestaJson => {
 //  console.log(respuestaJson);
 //     // mostrarLugares(respuestaJson)
 // })
 
 // }
 }

function mostrarLugares() {
//    console.log(juntarDatos);
     

//   let restaurantes =  data.restaurants;
//   console.log(restaurantes)
 
 
    
// //     container.innerHTML = `<div class="col-12 col-sm-6 col-md-3 text-center justify-content-center">
                    
// //     <img class="card-img-top" src="${e.restaurant.featured_image}"  alt="Card image cap">
   
// //    </div>`
 

 
 
}




