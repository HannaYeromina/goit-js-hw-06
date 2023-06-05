const textInput = document.querySelector("input#name-input");
const spanValue = document.querySelector("span#name-output");


// textInput.addEventListener("input", (event) => {
//     if (event.currentTarget.value.trim() === "") {
//         spanValue.textContent = 'Anonymous';
//     } else {
//     spanValue.textContent = event.currentTarget.value.trim();
//     }
//  });

textInput.addEventListener("input", (event) => {
        
        spanValue.textContent = event.currentTarget.value.trim() || 'Anonymous';
        
     });