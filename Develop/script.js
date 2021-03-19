// Assignment Code
var generateBtn = document.querySelector("#generate");
var length
var lowercase
var uppercase
var numeric
var specialChars
var finalPass = ''
var lowercaseString = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numericString = '1234567890'
var specialCharsString = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'


// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = finalPass
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function lu() {
  lowercaseString += uppercaseString
}

function ln() {
  lowercaseString += numericString
}

function ls() {
  lowercaseString += specialCharsString
}

function un() {
  uppercaseString += numericString
}

function us() {
  uppercaseString += specialCharsString
}

function ns() {
  numericString += specialCharsString
}

function justLowercase() {
  finalPass = ''
  for ( var i = 0; i < length; i++ ){
  finalPass += lowercaseString.charAt(Math.floor(Math.random() * lowercaseString.length));
  }
  console.log(finalPass);
}

function justUppercase() {
  finalPass = ''
  for ( var i = 0; i < length; i++ ){
  finalPass += uppercaseString.charAt(Math.floor(Math.random() * uppercaseString.length));
  }
  console.log(finalPass);
}

function justNumeric() {
  finalPass = ''
  for ( var i = 0; i < length; i++ ){
  finalPass += numericString.charAt(Math.floor(Math.random() * numericString.length));
  }
  console.log(finalPass);
}

function justSpecialChars() {
  finalPass = ''
  for ( var i = 0; i < length; i++ ){
  finalPass += specialCharsString.charAt(Math.floor(Math.random() * specialCharsString.length));
  }
  console.log(finalPass);
}

function generatePassword() {
  length = prompt("Choose a password length between 8 and 128 Characters");
  if(length < 8 || length > 128){
    alert('Please choose a length between 8 and 128 characters.');
  } else {
   lowercase = confirm('Do you want lowercase characters? (Yes = OK)');
   uppercase = confirm('Do you want uppercase characters? (Yes = OK)');
   numeric = confirm('Do you want numbers? (Yes = OK)');
   specialChars = confirm('Do you want special characters? (Yes = OK)');

   if(lowercase && uppercase && numeric && specialChars){
    lu();
    ln();
    ls();
    justLowercase();
    lowercaseString = 'abcdefghijklmnopqrstuvwxyz'

   } else if(lowercase && uppercase && numeric){
    lu();
    ln();
    justLowercase();
    lowercaseString = 'abcdefghijklmnopqrstuvwxyz'

   } else if(lowercase && uppercase && specialChars) {
    lu();
    ls();
    justLowercase();
    lowercaseString = 'abcdefghijklmnopqrstuvwxyz'

   } else if(uppercase && numeric && specialChars){
    un();
    us();
    justUppercase();
    uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

   } else if(lowercase && numeric && specialChars){
    ln();
    ls();
    justLowercase();
    lowercaseString = 'abcdefghijklmnopqrstuvwxyz'

   } else if(lowercase && uppercase) {
    lu();
    justLowercase();
    lowercaseString = 'abcdefghijklmnopqrstuvwxyz'

   } else if(lowercase && numeric){
    ln();
    justLowercase();
    lowercaseString = 'abcdefghijklmnopqrstuvwxyz'

   } else if(lowercase && specialChars){
    ls();
    justLowercase();
    lowercaseString = 'abcdefghijklmnopqrstuvwxyz'

   } else if(uppercase && numeric){
    un();
    justUppercase();
    uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

   } else if(uppercase && specialChars){
    us();
    justUppercase();
    uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

   } else if(numeric && specialChars){
    ns();
    justNumeric();
    numericString = '1234567890'

   } else if(lowercase){
    justLowercase();
   } else if(uppercase){
    justUppercase();
   } else if(numeric){
    justNumeric();
   } else if(specialChars){
    justSpecialChars();
   } else {
     alert('Please select a character type.')
   }
  console.log('lowercase ' + lowercase)
  console.log('uppercase ' + uppercase)
  console.log('numeric ' + numeric)
  console.log('specialChars ' + specialChars)
};
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

