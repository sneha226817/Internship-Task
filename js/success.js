let order = JSON.parse(localStorage.getItem("currentOrder"));

if (!order) {
    window.location.href = "index.html";
}

document.getElementById("paymentText").innerHTML =
    "Payment Method : " + order.paymentMethod;

let history = JSON.parse(localStorage.getItem("orders")) || [];

history.push(order);

localStorage.setItem("orders", JSON.stringify(history));

let progress = 25;

const statuses = [
    "Preparing Food 🍳",
    "Cooking 👨‍🍳",
    "Out For Delivery 🚚",
    "Delivered ✅"
];

let index = 0;

const bar = document.getElementById("progressBar");

const status = document.getElementById("status");

const timer = setInterval(() => {

    index++;

    if(index >= statuses.length){

        clearInterval(timer);

        return;

    }

    progress += 25;

    status.innerHTML = statuses[index];

    bar.style.width = progress + "%";

    bar.innerHTML = progress + "%";

},4000);
