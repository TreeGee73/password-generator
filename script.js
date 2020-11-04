// Assignment Code
var generateBtn = document.querySelector("#generate");

// var pwButton = document.getElementById("generate")
// var pwLowLets = confirm("Do you want your password to contain lower case letters?")
// console.log(pwLowLets)
// var pwCapLets = confirm("Do you want your password to contain capital letters?")
// console.log(pwCapLets)
// var pwNumbers = confirm("Do you want your password to contain numbers?")
// console.log(pwNumbers)
// var pwSpecChars = confirm("Do you want your password to contain special characters?")
// console.log(pwSpecChars)














// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  var pwLowLets = confirm("Do you want your password to contain lower case letters?")
  console.log(pwLowLets)
  var pwCapLets = confirm("Do you want your password to contain capital letters?")
  console.log(pwCapLets)
  var pwNumbers = confirm("Do you want your password to contain numbers?")
  console.log(pwNumbers)
  var pwSpecChars = confirm("Do you want your password to contain special characters?")
  console.log(pwSpecChars)
}
