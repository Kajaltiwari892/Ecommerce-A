let form = document.getElementById('login-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let email = form.email.value;
    let password = form.password.value;

    // Fetch the database JSON
    fetch('https://accurate-working-longship.glitch.me/db.json')
      .then((res) => res.json())
      .then((data) => {
          // Filter through the 'user' array inside the returned data object
          let user = data.user.filter(el => el.email === email);
          if(user.length !== 0) {
              // User present, check for password
              if(user[0].password === password) {
                  alert("Login Successful...!");
                  localStorage.setItem("loginData", JSON.stringify(user[0]));
                  window.location.href = "index.html";
              } else {
                  alert("Password is wrong, please login with the correct password");
              }
          } else {
              // User not present
              alert("User not registered, please sign up...");
              window.location.href = "signup.html";
          }
      })
      .catch((err) => {
          console.log(err);
          alert("Something went wrong, please try again later");
      });
});

