const params = new URLSearchParams(window.location.search);

const restaurantId = Number(params.get("id"));

const restaurant = restaurants.find(r => r.id === restaurantId);

document.getElementById("restaurantName").innerHTML = restaurant.name;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function updateCart(){

document.getElementById("cart-count").innerHTML = cart.length;

}

updateCart();

function displayMenu(items){

const container = document.getElementById("menuContainer");

container.innerHTML="";

items.forEach(food=>{

container.innerHTML +=`

<div class="col-lg-4 mb-4">

<div class="card shadow h-100">

<img src="${food.image}" class="card-img-top" height="220">

<div class="card-body">

<h4>${food.name}</h4>

<p>${food.description}</p>

<p>

⭐ ${food.rating}

</p>

<p>

${food.veg
? '<span class="badge bg-success">Veg</span>'
: '<span class="badge bg-danger">Non Veg</span>'}

</p>

<h5>$${food.price}</h5>

<button
class="btn btn-warning w-100 mb-2"
onclick="addCart(${food.id})">

Add To Cart

</button>

<button
class="btn btn-outline-danger w-100"
onclick="addWishlist(${food.id})">

❤️ Wishlist

</button>

</div>

</div>

</div>

`;

});

}

displayMenu(menu.filter(m=>m.restaurant===restaurantId));

function addCart(id){

const item = menu.find(m => m.id === id);

const existing = cart.find(c => c.id === id);

if(existing){

existing.quantity = (existing.quantity || 1) + 1;

}else{

cart.push({
...item,
quantity:1
});

}

localStorage.setItem("cart", JSON.stringify(cart));

updateCart();

alert("Added to Cart");

}

function addWishlist(id){

const item=menu.find(m=>m.id===id);

wishlist.push(item);

localStorage.setItem("wishlist",JSON.stringify(wishlist));

alert("Added To Wishlist");

}

document.getElementById("searchFood").addEventListener("keyup",filterMenu);

document.getElementById("vegFilter").addEventListener("change",filterMenu);

function filterMenu(){

const text=document.getElementById("searchFood").value.toLowerCase();

const type=document.getElementById("vegFilter").value;

let foods=menu.filter(f=>f.restaurant===restaurantId);

foods=foods.filter(f=>

f.name.toLowerCase().includes(text)

&&

(type==="all"

||

(type==="veg" && f.veg)

||

(type==="nonveg" && !f.veg)

)

);

displayMenu(foods);

}
