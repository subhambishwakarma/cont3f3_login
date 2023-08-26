const fullname=document.getElementById("fullname");
const email=document.getElementById("email");
const password=document.getElementById("password");
const logout_btn=document.getElementById("logout-btn");
let users=JSON.parse(localStorage.getItem("users"))
fullname.textContent=" "+users.fullname;
email.textContent=" "+users.email;
password.textContent=" "+users.password;
logout_btn.addEventListener("click",()=>{
    fullname.textContent="";
    email.textContent="";
    password.textContent="";

    localStorage.clear();
    window.location.href='/contest_3_signUp/index.html'
})
