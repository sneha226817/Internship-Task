const stages = [
    "Preparing Food 🍳",
    "Cooking 👨‍🍳",
    "Out For Delivery 🚚",
    "Delivered ✅"
];

let i = 0;
let p = 25;

const status = document.getElementById("trackStatus");
const bar = document.getElementById("trackBar");

const interval = setInterval(() => {

    i++;

    if(i >= stages.length){

        clearInterval(interval);

        return;

    }

    p += 25;

    status.innerHTML = stages[i];

    bar.style.width = p + "%";

    bar.innerHTML = p + "%";

},4000);
