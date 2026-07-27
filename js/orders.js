const orders = JSON.parse(localStorage.getItem("orders")) || [];

const container = document.getElementById("orders");

if(orders.length===0){

container.innerHTML="<h3>No Orders Yet</h3>";

}

orders.forEach(order=>{

container.innerHTML+=`

<div class="card p-3 mb-3">

<h4>${order.date}</h4>

<p>${order.status}</p>

<p>${order.paymentMethod}</p>

<p>${order.items.length} Items</p>

</div>

`;

});
