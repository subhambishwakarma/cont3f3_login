const fullname=document.getElementById("fullname");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirm-password");
const singUp=document.getElementById("singup-btn");
console.log(password.value)
console.log(confirmPassword.value)
let users;


function checkUserExistOrNot(){
    // let userObj={
    //     fullname:fullname,
    //     email:email,
    //     password:password,
    //     confirmPassword:confirmPassword


    // }
    let users=JSON.parse(localStorage.getItem("users"))

    let userObj=users.forEach(element => {
        return element.email===email.value;
        
    });

    if(userObj){
        return true;
    }
    return false;
}

function saveUser(fullname,email,password){
    let userObj={
        fullname:fullname.value,
        email:email.value,
        password:password.value,
    }
    // let users=JSON.parse(localStorage.getItem('users'))
    // if(users===null){
    //     users=[];
    // }
    // users.push(userObj)

    localStorage.setItem("users",JSON.stringify(userObj))
    fullname.value='';
    email.value='';
    password.value='';
    document.getElementById("succesful").style.display="block";
    setTimeout(()=>{
        window.location.href='./Profile';
    },2000)
  

}
singUp.addEventListener("click",(e)=>{
    e.preventDefault();
    

    if(fullname.value.trim()==='' || 
    email.value.trim()==='' ||
    password.value.trim()==='' ||
    confirmPassword.value.trim()==='')
    {
        document.getElementById("alert").style.display="block"
        console.log("empty")
    }
    else{
        document.getElementById("alert").style.display="none"
        if(password.value!==confirmPassword.value){
            console.log(password.value)
            console.log(confirmPassword.value)
            alert("Password mismatch");
            
            password.value='';
            confirmPassword.value='';
            console.log("password Mismatch")
        }
        else{
            if(localStorage.getItem("users")){
                if(checkUserExistOrNot(email)){
                    alert("User already exist")
                    console.log("userExist")

    
                }
                else{
                    saveUser(fullname,email,password,confirmPassword)
                    console.log("savedUser")
                    
    
                }

            }
            else{
                saveUser(fullname,email,password,confirmPassword)
                console.log("savedUser")


            }
           
        }
    }

})

