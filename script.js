// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// FUnction for password
function generatePassword() {
  

// Ask how many characters does the user want

let pLength = prompt(`How many characters would you like in your password ? (Choose between 8-128 characters) `);

//if less than 8 try again

if (pLength < 8) {
  alert('You need more characters My Guy !');
  
} else if (pLength > 128) {
  alert(`Whoa whoa whoa slow your role bucko`);
}

// Ask for numbers, special characters, capital and lowercase letters

var number = confirm('Do you want numbers ?');
var spcChar = confirm('Do you want special characters ?');
var upCase = confirm('Do you want capital letters ?');
var loCase = confirm('DO you want lower case letters ?');

// if yes to all generate random password using all parameters

// else if yes to numbers and no to special characters

// else if yes to special characters and no to numbers

// else you need something my guy

// generate and print password for user

// ask if they want to do it again

}