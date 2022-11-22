let pass = document.getElementById("pass");
let checkpass = document.getElementById("checkpass");
let form1 = document.getElementById("informations");
let form2 = document.getElementById("pro");
let form3 = document.getElementById("hobbies");
let formOK = true;


//Event error first form

form1.addEventListener("submit", function(event){
    event.preventDefault();
    let userInput = document.querySelector("#user");
    if(userInput.value === ""){
        let inputError = document.createElement("p");
        let span = document.createElement("span");
        let msgPlace = document.querySelector("form:first-of-type fieldset:first-of-type")
        let labelPlace = document.querySelector("form:first-of-type fieldset:first-of-type label")
        inputError.innerHTML = "Veuillez rentrer un nom d'utilisateur";
        span.innerHTML = "*";
        inputError.classList.add("erreur");
        userInput.classList.add("erreur");
        span.classList.add("erreur");
        msgPlace.appendChild(inputError);
        labelPlace.appendChild(span);
        formOK = false; 
        
    }
    
    let emailInput = document.querySelector("#email");
    let emailSymbol = emailInput.value.indexOf("@" , 0);
    let emailDot = emailInput.value.indexOf("." , 0);
   if(!(emailSymbol > 0 && emailDot > 0) && !(emailSymbol < emailDot)) {
        let inputError = document.createElement("p");
        let span = document.createElement("span");
        let msgPlace = document.querySelector("form:first-of-type fieldset:nth-of-type(2)")
        let labelPlace = document.querySelector("form:first-of-type fieldset:nth-of-type(2) label")
        span.innerHTML = "*";
        inputError.innerHTML = "Veuillez rentrer un email valide";
        inputError.classList.add("erreur");
        emailInput.classList.add("erreur");
        span.classList.add("erreur");
        msgPlace.appendChild(inputError);
        labelPlace.appendChild(span);

        formOK = false; 
   }
   
   let passInput = document.querySelector("#mdp");
   let passCheckInput = document.querySelector("#checkpass");
   if(passInput.value === ""){
        let inputError = document.createElement("p");
        let span = document.createElement("span");
        let msgPlace = document.querySelector("form:first-of-type fieldset:nth-of-type(3)")
        let labelPlace = document.querySelector("form:first-of-type fieldset:nth-of-type(3) label")
        inputError.innerHTML = "Veuillez rentrer un mot de passe valide";
        span.innerHTML = "*";
        inputError.classList.add("erreur");
        passInput.classList.add("erreur");
        span.classList.add("erreur");
        msgPlace.appendChild(inputError);
        labelPlace.appendChild(span);
        formOK = false; 
   }
   
   if(passInput.value !== passCheckInput.value) {
        let inputError = document.createElement("p");
        let span = document.createElement("span");
        let msgPlace = document.querySelector("form:first-of-type fieldset:last-of-type")
        let labelPlace = document.querySelector("form:first-of-type fieldset:last-of-type label")
        inputError.innerHTML = "Les mots de passe ne correspondent pas";
        span.innerHTML = "*";
        span.classList.add("erreur");
        inputError.classList.add("erreur");
        passCheckInput.classList.add("erreur")
        msgPlace.appendChild(inputError);
        labelPlace.appendChild(span);
        formOK = false; 
   }



});

//Event error second form

form2.addEventListener("submit", function(event) {
     event.preventDefault();
    let divLevel = document.querySelectorAll("level")
    if(divLevel.value !== true) {
        let inputError = document.createElement("p");
        let span = document.createElement("span");
        let msgPlace = document.querySelector("#etudes");
        let labelPlace = document.querySelector("#firsth3")
        inputError.classList.add("erreur");
        span.classList.add("erreur");
        inputError.innerHTML = "Veuillez selectionner une option";
        span.innerHTML = "*";
        msgPlace.appendChild(inputError);
        labelPlace.appendChild(span);
        formOK = false;
    }
    
    let divPro = document.querySelectorAll("prodev")
    if(divPro.value !== true) {
        let inputError = document.createElement("p");
        let span = document.createElement("span");
        let msgPlace = document.querySelector("#profil");
        let labelPlace = document.querySelector("#secondh3")
        inputError.classList.add("erreur");
        span.classList.add("erreur");
        inputError.innerHTML = "Veuillez selectionner une option";
        span.innerHTML = "*";
        msgPlace.appendChild(inputError);
        labelPlace.appendChild(span);
        formOK = false;   
    }
});