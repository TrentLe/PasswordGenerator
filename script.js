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

// Ask how many characters does the user want

let pLength = prompt(`How many characters would you like in your password ?`);

//if less than 8 try again

if (pLength < 8) {
  alert('You need more characters my guy !');
}

// ask for numbers



// ask for special characters

// if yes to all generate random password using all parameters

// else if yes to numbers and no to special characters

// else if yes to special characters and no to numbers

// else you need something my guy

// generate and print password for user
function generatePassword() {
  
}
// ask if they want to do it again