let cart = JSON.parse(localStorage.getItem("cart")) || [];

let discount = 0;

function displayCart(){

const container=document.getElementById("cartItems");

container.innerHTML="";

if(cart.length===0){

container.innerHTML="<h3>Your cart is empty</h3>";

calculate();

return;

}

cart.forEach((item,index)=>{

container.innerHTML+=`

<div class="card mb-3">

<div class="row g-0">

<div class="col-md-3">

<img
src="${item.image}"
class="img-fluid rounded-start">

</div>

<div class="col-md-9">

<div class="card-body">

<h4>${item.name}</h4>

<p>${item.description}</p>

<h5>$${item.price}</h5>

<button
class="btn btn-success"
onclick="increase(${index})">

+

</button>

<span class="mx-3">

${item.quantity||1}

</span>

<button
class="btn btn-danger"
onclick="decrease(${index})">

-

</button>

<button
class="btn btn-outline-danger float-end"
onclick="removeItem(${index})">

Remove

</button>

</div>

</div>

</div>

</div>

`;

});

calculate();

}

function increase(index){

cart[index].quantity=(cart[index].quantity||1)+1;

save();

}

function decrease(index){

if((cart[index].quantity||1)>1){

cart[index].quantity--;

}else{

cart.splice(index,1);

}

save();

}

function removeItem(index){

cart.splice(index,1);

save();

}

function save(){

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}

function calculate(){

let subtotal=0;

cart.forEach(item=>{

subtotal+=item.price*(item.quantity||1);

});

subtotal-=discount;

let gst=subtotal*0.05;

let delivery=cart.length?5:0;

let grand=subtotal+gst+delivery;

document.getElementById("subtotal").innerHTML="$"+subtotal.toFixed(2);

document.getElementById("gst").innerHTML="$"+gst.toFixed(2);

document.getElementById("delivery").innerHTML="$"+delivery;

document.getElementById("grand").innerHTML="$"+grand.toFixed(2);

}

function applyCoupon(){

const code=document.getElementById("coupon").value;

if(code==="SAVE10"){

discount=10;

alert("Coupon Applied");

}

else if(code==="FOOD20"){

discount=20;

alert("Coupon Applied");

}

else{

alert("Invalid Coupon");

}

calculate();

}

displayCart();
