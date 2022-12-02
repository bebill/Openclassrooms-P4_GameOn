function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelectorAll(".close");


const form = document.querySelector("#reserve");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDay = document.querySelector("#birthdate");
const pastTournament = document.querySelector("#quantity");
const placeTournament = document.querySelectorAll(".location");
const consent = document.querySelector("#checkbox1");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal event
closeModal.forEach((close) => close.addEventListener("click", hideModal));
// close modal form
function hideModal() {
  modalbg.style.display = "none";
}

//Quand on submit, il verifie toutes les erreurs
form.addEventListener("submit", e => {
  e.preventDefault();

  formSubmit();
})

function formSubmit() {
  // obtenir toutes les valeurs des inputs
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const birthDayValue = birthDay.valueAsDate;
  const pastTournamentValue = pastTournament.value.trim();
  const placeTournamentValue = placeTournament.checked; 
  const consentValue = consent.checked;

  // first name verify
    if (firstNameValue === "" ) {
      let message = "Veuillez remplir le champ du nom.";
      setError(firstName, message);
    } else if (!firstNameValue.match(/^[a-zA-Z-\s]+$/)) {
      let message = "Le champ du nom doit contenir uniquement des lettres.";
      setError(firstName, message);
    } else if (firstNameValue.length < 2) {
        let message = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        setError(firstName, message);
    } else {
      setSuccess(firstName);
    }
  
  //last name verify

  } 



function setError(elem,message) {
  const formData = elem.parentElement;
  const error = formData.querySelector("small");

  //ajout du message d'erreur
  error.innerText = message;

  //ajout class erreur
  formData.className = "formData error";
}


function setSuccess(elem) {
  const formData = elem.parentElement;
  formData.className = "formData success";
}