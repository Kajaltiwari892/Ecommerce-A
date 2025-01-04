
let form = document.getElementById("form");
form.addEventListener("submit", function () {
  event.preventDefault();
  let name = form.name.value;
  let email = form.email.value;
  let password = form.password.value;
  let userObj = {name, email, password};
  /// lets check user email is present in database or not
  fetch('http://localhost:3000/user')
    .then((res) => res.json())
    .then((data) => {
      let user = data.filter((el, i) => el.email == email);
      if (user.length != 0) {
        /// user present
        alert("User already registred, please login");
        window.location.href = "login.html"
      } else {
        /// user is not present
        /// push the user into json server
        fetch('http://localhost:3000/user', {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userObj),
        }).then(() => {
          alert("Signup Sucessfull");
          window.location.href = "login.html"
        });
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Something wenr wrong, Please try again later");
    });
});
