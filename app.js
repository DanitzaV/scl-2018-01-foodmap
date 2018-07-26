
let inputsearch;

function obtenerFood() {
    inputsearch =  document.getElementById('searchfood').value;
    searchFood(inputsearch)
}



function searchFood(food){
fetch( `https://developers.zomato.com/api/v2.1/search?apikey=345cfa259714c1f5bcdb75e1bec7cfe8&entity_id=83&entity_type=city&q=${food}&count=6`).then(response => response.json()
).then(respuestaJson => {
 console.log(respuestaJson);
    
})



}

