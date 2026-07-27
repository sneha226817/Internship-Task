function register(){

const user={

name:document.getElementById("name").value,

email:document.getElementById("email").value,

phone:document.getElementById("phone").value,

password:document.getElementById("password").value

};

if(!user.name || !user.email || !user.password){

alert("Please fill all required fields");

return;

}

let users=JSON.parse(localStorage.getItem("users")) || [];

const exists=users.find(u=>u.email===user.email);

if(exists){

alert("User already exists");

return;

}

users.push(user);

localStorage.setItem("users",JSON.stringify(users));

alert("Registration Successful");

window.location="login.html";

}

function login(){

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

let users=JSON.parse(localStorage.getItem("users")) || [];

const user=users.find(u=>u.email===email && u.password===password);

if(user){

localStorage.setItem("loggedUser",JSON.stringify(user));

alert("Login Successful");

window.location="account.html";

}

else{

alert("Invalid Email or Password");

}

}

function logout(){

localStorage.removeItem("loggedUser");

window.location="login.html";

}
