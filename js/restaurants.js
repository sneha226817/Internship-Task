const container = document.getElementById("restaurantContainer");

function displayRestaurants(list){

container.innerHTML="";

list.forEach(r=>{

container.innerHTML += `

<div class="col-lg-4 col-md-6 mb-4">

<div class="card h-100 shadow">

<img src="${r.image}" class="card-img-top" height="220">

<div class="card-body">

<h4>${r.name}</h4>

<p>

Cuisine :
${r.cuisine}

</p>

<p>

⭐ ${r.rating}

</p>

<a
href="menu.html?id=${r.id}"
class="btn btn-warning w-100">

View Menu

</a>

</div>

</div>

</div>

`;

});

}

displayRestaurants(restaurants);

function filterRestaurants(){

const keyword=document
.getElementById("search")
.value
.toLowerCase();

const cuisine=document
.getElementById("cuisineFilter")
.value;

const rating=parseFloat(
document.getElementById("ratingFilter").value
);

const filtered=restaurants.filter(r=>{

return (

r.name.toLowerCase().includes(keyword)

&&

(cuisine=="" || r.cuisine==cuisine)

&&

r.rating>=rating

);

});

displayRestaurants(filtered);

}

document
.getElementById("search")
.addEventListener("keyup",filterRestaurants);

document
.getElementById("cuisineFilter")
.addEventListener("change",filterRestaurants);

document
.getElementById("ratingFilter")
.addEventListener("change",filterRestaurants);
