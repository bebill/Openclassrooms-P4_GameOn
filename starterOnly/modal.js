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
const closeModal = document.querySelectorAll(".close");

const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDay = document.querySelector("#birthdate");
const pastTournament = document.querySelector("#quantity");
const tournamentPlace = document.querySelectorAll('input[name="location"]');
const radioValidation = document.querySelector(".radioValidation");
const consent = document.querySelector("#checkbox1");

const submitForm = document.querySelector('.btn-submit');




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
  let isValid = true ;
  
  if (!firstNameVerify()) {
    isValid = false;
  } 
  if (!lastNameVerify()) {
    isValid = false;
  }
  if (!emailVerify()) {
    isValid = false;
  }
  if (!birthDayVerify()) {
    isValid = false;
  }
  if (!pastTournamentVerify()) {
    isValid = false;
  }
  if (!tournamentPlaceVerify()) {
    isValid = false;
  }
  if (!consentVerify()) {
    isValid - false;
  }

}














// error settings
function setError(elem,message) {
  const formData = elem.parentElement;
  const error = formData.querySelector("small");
  //set message
  error.innerText = message;
  //change class to error
  formData.className = "formData error";
}

// success settings
function setSuccess(elem) {
  const formData = elem.parentElement;
  //change class to success
  formData.className = "formData success";
}



// first name verify
function firstNameVerify() {
  const firstNameValue = firstName.value.trim();
  
  if (firstNameValue === "" ) {
    let message = "Veuillez remplir le champ du prénom.";
    setError(firstName, message);
  } else if (!firstNameValue.match(/^[a-zA-Z-éèà\s]+$/)) {
      let message = "Le champ du prénom doit contenir uniquement des lettres.";
      setError(firstName, message);
  } else if (firstNameValue.length < 2) {
      let message = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      setError(firstName, message);
  } else {
      setSuccess(firstName);
  }
}


  //last name verify
function lastNameVerify() {
  const lastNameValue = lastName.value.trim();

  if (lastNameValue === "" ) {
    let message = "Veuillez remplir le champ du nom.";
    setError(lastName, message);
  } else if (!lastNameValue.match(/^[a-zA-Z-éèà\s]+$/)) {
      let message = "Le champ du nom doit contenir uniquement des lettres.";
      setError(lastName, message);
  } else if (lastNameValue.length < 2) {
      let message = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      setError(lastName, message);
  } else {
      setSuccess(lastName);
  }
}


// email verify
function emailVerify() {
  const emailValue = email.value.trim();

  if (emailValue === "" ) {
    let message = "Veuillez remplir le champ de l'adresse mail.";
    setError(email, message);
  } else if(!emailRegex(emailValue)) {
      let message = "Veuillez saisir une adresse mail valide.";
      setError(email, message);
  } else {
      setSuccess(email);
  }
}

function emailRegex(email) {
  /*  Adresse mail valide : xyz.abc@example.com
      Format : "lettres/chiffres._-"  + "@" + "lettres/chiffres" + "." + "lettres"   */
  return (
    /^[a-z0-9.-_]+@[a-z0-9]+\.[a-z]+$/.test(email)
  );
}


//birthday verify
function birthDayVerify() {
  const birthDayValue = birthDay.valueAsDate;

  if (birthDayValue === null ) {
    let message = "Veuillez indiquer votre date de naissance.";
    setError(birthDay, message); 
  } else if(birthDayValue > Date.now()) {
      let message = "Veuillez saisir une date de naissance valide.";
      setError(birthDay, message);
  } else if(birthDayValue < Date.parse(birthDay.min)) {
      let message = "La date saisie est trop ancienne.";
      setError(birthDay, message);
  } else {
      setSuccess(birthDay);
  }
}

/* set max birthdate input to today

  let today = Date.now();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();
  if (dd < 10) {
     dd = '0' + dd;
   }

   if (mm < 10) {
     mm = '0' + mm;
   } 

   today = yyyy + '-' + mm + '-' + dd;
  document.getElementById("birthdate").setAttribute("max", today);
*/


//past tournament participation verify
function pastTournamentVerify() {
  const pastTournamentValue = pastTournament.valueAsNumber;
  
  if (!pastTournamentRegex(pastTournamentValue)) {
    let message = "Veuillez saisir une valeur numérique.";
    setError(pastTournament, message);
  } else if (pastTournamentValue > 99) {
      let message = "Veuillez saisir une valeur inférieure ou égale à 99.";
      setError(pastTournament, message);
  } else {
      setSuccess(pastTournament);
  }
}

function pastTournamentRegex(pastTournament) {
  return (
    /^[0-9]+$/.test(pastTournament)
  );
}


// tournament location verify
function tournamentPlaceVerify() {
  
  let tournamentPlaceValue = false;
 for(let i=0; i < tournamentPlace.length; i++) {
  if(tournamentPlace[i].checked === true) {
    tournamentPlaceValue = true;
    setSuccess(radioValidation);
   
  }
 }
 if(!tournamentPlaceValue) {
  let message = "Veuillez selectionner une option";
  setError(radioValidation, message);
 }
}

//consent verify
function consentVerify() {
  const consentValue = consent.checked;

  if (consentValue === false) {
    let message = "Veuillez accepter les termes et conditions"; 
    setError(consent, message);
  } else {
    setSuccess(consent);
  }
}


