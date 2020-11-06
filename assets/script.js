// Assignment Code

var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var smLttrs = "abcdefghijklmnopqrstuvwxyz";
  var capLttrs = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
  var nbrs = "1234567890";
  var spChars = "~!@#$%^&*()_+{}:?><;.,";
  var password = "";
  var avalChars = "";

  // Determine the desired length of the password.
var pwLength = prompt("Please indicate a password length between 8 and 128.")
// Test if it's working correctly
console.log(pwLength)
if (pwLength >= 8 && pwLength <= 128) {
  console.log(pwLength)
}

else {
  alert("Your password must be at least 8, but no more than 128, characters \nPlease enter a valid number between 8 & 128.")
  return "";
}

// Determine if user wants lower case letters in the password.
var qrySmLttrs = confirm("Do you want to use lower case (a-z) letters in your password?")
// Test if it's working correctly
console.log(qrySmLttrs)

// Determine if user wants upper case letters in the password.
var qryCapLttrs = confirm("Do you want to use upper case (A-Z) letters in your password?")
// Test if it's working correctly
console.log(qryCapLttrs)

// Determine if user wants numbers in the password.
var qryNbrs = confirm("Do you want to use numbers (0-9) in your password?")
// Test if it's working correctly
console.log(qryNbrs)

// Determine if user wants special characters in the password.
var qrySpChars = confirm("Do you want to use special characters (!#$%&'()*+,-./:;<=>?@[]^_`{|}~) letters in your password?")
// Test if it's working correctly
console.log(qrySpChars)

// Validate at least one criteria was selected
// Execute random character selection based on password length
// If lower case letters are wanted, randomly select a letter from the smLttrs array.
if (qrySmLttrs) {
  avalChars += smLttrs
}

// If upper case letters are wanted, randomly select a letter from the capLttrs array.
if (qryCapLttrs) {
  avalChars += capLttrs
}

// If numbers are wanted, randomly select a number from the nbrs array.
if (qryNbrs) {
  avalChars += nbrs
}

// If special characters are wanted, randomly select a character from the spChars array.
if (qrySpChars) {
  avalChars += spChars
}

if (
  !qrySmLttrs && !qryCapLttrs && !qryNbrs && !qrySpChars
) {
  alert("Please select at least one criteria!");
  return "";
}

for (let i = 0; i < pwLength; i++) {
  
  password = password+avalChars[Math.floor(Math.random () * avalChars.length)];
}
return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);