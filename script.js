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

//If less than 8 or more than 128 try again
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

//Different combonations on what the user may choose as input parameters
} else if (number && spcChar && loCase){

  choice = inc.concat(letters, num)

} else if (spcChar && upCase){

  choice = cap.concat(inc)

} else if (number && spcChar && upCase){

  choice = inc.concat(num, cap)

} else if (number && upCase && loCase){

  choice = cap.concat(num, letters)

} else if (number && upCase){

  choice = cap.concat(num)

} else if (number && spcChar){

  choice = inc.concat(num)

} else if (number && loCase){

  choice = letters.concat(num)

} else if (spcChar && upCase && loCase){

  choice = letters.concat(cap, inc)

} else if (spcChar && loCase){

  choice = letters.concat(inc)

} else if (upCase && loCase){

  choice = letters.concat(cap)

} else {
//User didnt choose enough parameters for a strong password
  alert('You need more than that my guy !')
  generatePassword();
}

// Generate and print password for user using their input
for (let i = 0; i < pLength; i++) {
  var decision = choice[Math.floor(Math.random() * choice.length)];
  pass.push(decision);
}

var finPass = pass.join('');

// Display newly generated password for user
document.getElementById('password').textContent = finPass;

return finPass;

}