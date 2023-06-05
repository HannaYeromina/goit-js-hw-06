const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const {
        elements: {
            email, password
        }
    } = event.currentTarget

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
      }
    
      const objResult = {email: email.value, password: password.value};
      console.log(objResult);
      event.currentTarget.reset();
   
});

