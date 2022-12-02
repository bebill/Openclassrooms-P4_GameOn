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
  const pastTournamentValue = pastTournament.valueAsNumber;
  const placeTournamentValue = placeTournament.checked; 
  const consentValue = consent.checked;

  // first name verify
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
  
  //last name verify
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

//email verify
    if (emailValue === "" ) {
      let message = "Veuillez remplir le champ de l'adresse mail.";
      setError(email, message);
    } else if(!emailVerify(emailValue)) {
      let message = "Veuillez saisir une adresse mail valide.";
      setError(email, message);
    } else {
      setSuccess(email);
    }


//birthday verify
    if (birthDayValue === null ) {
      let message = "Veuillez indiquer votre date de naissance.";
      setError(birthDay, message); 
    } else if(birthDayValue > Date.now()) {
      let message = "Veuillez saisir une date de naissance valide.";
      setError(birthDay, message);
    } else if(birthDayValue < birthDay.min) {
      let message = "Veuillez saisir une date de naissance valide. BITCH.";
      setError(birthDay, message);
    }
    
    else {
      setSuccess(birthDay);
    }


//past tournaments participation verify
    if (!pastTournamentVerify(pastTournamentValue)) {
      let message = "Veuillez saisir une valeur numérique.";
      setError(pastTournament, message);
    } else if (pastTournamentValue > 99) {
      let message = "Veuillez saisir une valeur inférieure ou égale à 99.";
      setError(pastTournament, message);
    } else {
      setSuccess(pastTournament);
    }





}












//fonction message erreur
function setError(elem,message) {
  const formData = elem.parentElement;
  const error = formData.querySelector("small");
  //ajout du message d'erreur
  error.innerText = message;
  //ajout class erreur
  formData.className = "formData error";
}

//fonction succès
function setSuccess(elem) {
  const formData = elem.parentElement;
  formData.className = "formData success";
}

function emailVerify(email) {
  /*
  Adresse mail valide : xyz.abc@example.com
  peut/doit contenir : 
    lettres  a-z
    chiffres 0-9
    caractères spécifiques . - _ @
  */
  return (
    /^[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z]+$/.test(email)
  );
}

function pastTournamentVerify(pastTournament) {
  return (
    /^[0-9]+$/.test(pastTournament)
  );
}




// set max birthdate input to today

//  let today = Date.now();
// //  let dd = today.getDate();
// //  let mm = today.getMonth() + 1; //January is 0!
// //  let yyyy = today.getFullYear();

// //   if (dd < 10) {
// //     dd = '0' + dd;
// //   }

// //   if (mm < 10) {
// //     mm = '0' + mm;
// //   } 
    
//   today = yyyy + '-' + mm + '-' + dd;
//  document.getElementById("birthdate").setAttribute("max", today);
