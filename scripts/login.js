let form = document.getElementById('login-form');
form.addEventListener('submit',function(){
    event.preventDefault();
    let email = form.email.value;
    let password = form.password.value;
//checking email is present in database or not
fetch('http://localhost:3000/user')
.then((res)=>res.json())
.then((data)=>{
    let user = data.filter((el,i)=> el.email == email);
    if(user.length != 0){
        //user present
        //check for password
        if(user[0].password == password){
            alert("Login Seccessful...!");
            localStorage.setItem("loginData", JSON.stringify(user[0]))
            window.location.href = "index.html"
        }else{
            alert("PAssword is wrong , Please login with right password")
        }
    }else{
        //user not present
        alert("User not registered ,Please Signup...");
        window.location.href ="signup.html"
    }
})
.catch((err)=>{
    console.log(err);
    alert("Something wenr wrong, Please try again later");
});
});
