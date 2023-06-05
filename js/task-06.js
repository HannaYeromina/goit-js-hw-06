const validationIinput = document.querySelector("input#validation-input");

validationIinput.addEventListener("blur", () => {
      if (validationIinput.value.length.trim() === Number(validationIinput.dataset.length)) {
        validationIinput.classList.remove("invalid");
        validationIinput.classList.add("valid");
     } else {
        validationIinput.classList.remove("valid");
        validationIinput.classList.add("invalid");
     }  
});



