let pass = document.getElementById("pass");
let checkpass = document.getElementById("checkpass");
let form1 = document.getElementById("informations");
let form2 = document.getElementById("pro");
let form3 = document.getElementById("hobbies");
let formOK = true;


form1.addEventListener("submit", function(event){
    event.preventDefault();
    let userInput = document.querySelector("#user");
    if(userInput.value === ""){
        let inputError = document.createElement("p");
        let msgPlace = document.querySelector("form:first-of-type fieldset:first-of-type")
        inputError.innerHTML = "Veuillez rentrer un nom d'utilisateur";
        inputError.classList.add("erreur");
        userInput.classList.add("erreur");
        msgPlace.appendChild(inputError);
        formOK = false; 
        
    }
    
    let emailInput = document.querySelector("#email");
    let emailSymbol = emailInput.value.indexOf("@" , 0);
    let emailDot = emailInput.value.indexOf("." , 0);
   if(!(emailSymbol > 0 && emailDot > 0) && !(emailSymbol < emailDot)) {
        let inputError = document.createElement("p");
        let msgPlace = document.querySelector("form:first-of-type fieldset:nth-of-type(2)")
        inputError.innerHTML = "Veuillez rentrer un email valide";
        inputError.classList.add("erreur");
        emailInput.classList.add("erreur");
        msgPlace.appendChild(inputError);
        formOK = false; 
   }
   
   let passInput = document.querySelector("#mdp");
   let passCheckInput = document.querySelector("#checkpass");
   if(passInput.value === ""){
        let inputError = document.createElement("p");
        let msgPlace = document.querySelector("form:first-of-type fieldset:nth-of-type(3)")
        inputError.innerHTML = "Veuillez rentrer un mot de passe valide";
        inputError.classList.add("erreur");
        passInput.classList.add("erreur")
        msgPlace.appendChild(inputError);
        formOK = false; 
   }
   
   if(passInput.value !== passCheckInput.value) {
       let inputError = document.createElement("p");
        let msgPlace = document.querySelector("form:first-of-type fieldset:last-of-type")
        inputError.innerHTML = "Les mots de passe ne correspondent pas";
        inputError.classList.add("erreur");
        passCheckInput.classList.add("erreur")
        msgPlace.appendChild(inputError);
        formOK = false; 
   }



});


form2.addEventListener("submit", function(event) {
     event.preventDefault();
    let divPro = document.querySelectorAll("prodev")
    if(divPro.value !== true) {
        let inputError = document.createElement("p");
        let msgPlace = document.querySelector("#etudes");
        inputError.classList.add("erreur");
        inputError.innerHTML = "Veuillez selectionner une option";
        msgPlace.appendChild(inputError);
        formOK = false;
    }
});