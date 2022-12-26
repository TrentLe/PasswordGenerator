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


var inc = ['!','@','#','$','%','^','&','*','_','-','+','>','<']
var num = [0,1,2,3,4,5,6,7,8,9]
var letters = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a']
var cap = letters.toUpperCase;

var pass = [];
var choice;

// FUnction for password
function generatePassword() {
  

// Ask how many characters does the user want

let pLength = prompt(`How many characters would you like in your password ? (Choose between 8-128 characters) `);

//if less than 8 try again

if (pLength < 8) {
  alert('You need more characters My Guy !');
  generatePassword();
} else if (pLength > 128) {
  alert(`Whoa whoa whoa slow your role bucko`);
  generatePassword();
}

// Ask for numbers, special characters, capital and lowercase letters

var number = confirm('Do you want numbers ?');
var spcChar = confirm('Do you want special characters ?');
var upCase = confirm('Do you want capital letters ?');
var loCase = confirm('Do you want lower case letters ?');

// if yes to all generate random password using all parameters
if (number && spcChar && upCase && loCase ) {
  choice = letters.concat(num, inc, cap);
}
// else if yes to numbers and no to special characters

// else if yes to special characters and no to numbers

// else you need something my guy

// generate and print password for user
for (let i = 0; i < pLength; i++) {
  var decision = choice[Math.floor(Math.random() * choice.length)];
  pass.push(decision);
}

var finPass = pass.join('');


document.getElementById('password').textContent = finPass;

return finPass;

}