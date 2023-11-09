let userName = prompt("Inserie nome: ");
let userSurname = prompt("Inserie cognome: ");
let preferiteColor = prompt("Inserie colore preferito: ");
let randomNumber = parseInt(Math.random() * 100);
let generatedPasswordTarget = document.getElementById("generated-password");

let generatedPassword = userName + userSurname + preferiteColor + randomNumber;

generatedPasswordTarget.innerHTML = `La password generata è: ${generatedPassword}`;