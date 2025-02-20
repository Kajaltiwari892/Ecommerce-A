let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = form.name.value;
  let email = form.email.value;
  let password = form.password.value;
  let userObj = { name, email, password };

  // Check if the user email is already present in the database
  fetch('https://accurate-working-longship.glitch.me/db.json')
    .then((res) => res.json())
    .then((data) => {
      // Assuming the JSON structure is { "products": [...], "user": [...] }
      let users = data.user || [];
      let existingUser = users.filter((el) => el.email === email);
      if (existingUser.length !== 0) {
        // User already exists
        alert("User already registered, please login");
        window.location.href = "login.html";
      } else {
        // User is not present; push the new user data
        fetch('https://accurate-working-longship.glitch.me/db.json', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userObj)
        })
        .then(() => {
          alert("Signup Successful");
          window.location.href = "login.html";
        })
        .catch((err) => {
          console.error(err);
          alert("Something went wrong, please try again later");
        });
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Something went wrong, please try again later");
    });
});
