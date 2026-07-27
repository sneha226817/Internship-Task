let items=JSON.parse(localStorage.getItem("wishlist")) || [];

const container=document.getElementById("wishlist");

if(items.length===0){

container.innerHTML="<h3>No Wishlist Items</h3>";

}

else{

items.forEach(item=>{

container.innerHTML+=`

<div class="card p-3 mb-3">

<h4>${item.name}</h4>

<p>${item.description}</p>

<h5>$${item.price}</h5>

</div>

`;

});

}
