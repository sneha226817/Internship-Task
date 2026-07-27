const user=JSON.parse(localStorage.getItem("loggedUser"));

if(!user){

window.location="login.html";

}

document.getElementById("name").innerHTML=user.name;

document.getElementById("email").innerHTML=user.email;

document.getElementById("phone").innerHTML=user.phone;
