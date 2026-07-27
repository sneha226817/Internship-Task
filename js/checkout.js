let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadSummary(){

const container=document.getElementById("summaryItems");

container.innerHTML="";

let subtotal=0;

cart.forEach(item=>{

const qty=item.quantity || 1;

subtotal += item.price*qty;

container.innerHTML +=`

<div class="d-flex justify-content-between mb-2">

<div>

<b>${item.name}</b>

<br>

Qty : ${qty}

</div>

<div>

$${(item.price*qty).toFixed(2)}

</div>

</div>

`;

});

const gst=subtotal*0.05;

const delivery=cart.length?5:0;

const grand=subtotal+gst+delivery;

document.getElementById("subtotal").innerHTML="$"+subtotal.toFixed(2);

document.getElementById("gst").innerHTML="$"+gst.toFixed(2);

document.getElementById("grand").innerHTML="$"+grand.toFixed(2);

}

loadSummary();

function placeOrder(){

const order={

customer:{

name:document.getElementById("name").value,

phone:document.getElementById("phone").value,

address:document.getElementById("address").value,

city:document.getElementById("city").value,

pincode:document.getElementById("pincode").value

},

deliveryTime:document.getElementById("deliveryTime").value,

paymentMethod:document.getElementById("paymentMethod").value,

items:cart,

status:"Order Placed",

date:new Date().toLocaleString()

};

if(
order.customer.name==="" ||
order.customer.phone==="" ||
order.customer.address===""
){

alert("Please fill all required fields");

return;

}

localStorage.setItem("currentOrder",JSON.stringify(order));

window.location.href="success.html";

}
