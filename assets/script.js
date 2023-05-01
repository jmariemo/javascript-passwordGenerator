// defines variable generateBtn to later add event listener onto CSS button
var generateBtn = document.querySelector("#generate");

// this is the function to prompt user for all password parameters 
// this will all load before the click is heard
// after click is heard, function writePassword will roll then prompting function generatePassword

function generatePassword() {
  let passwordLength = parseInt(prompt("How long should password be?\nPlease enter number between 8 and 128."));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid character length, please enter a number between 8 and 128 to proceed.");
    return generatePassword();
  }
  if (!passwordLength) {
    return ""
  }

  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseCharacters = lowercaseCharacters.toUpperCase();
  const numericCharacters = "1234567890";
  const specialCharacaters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var includeLowercase = confirm("Include lowercase characters in password?");
  var includeUppercase = confirm("Include uppercase characters in password?");
  var includeNumeric = confirm("Include numbers in password?");
  var includeSpecial = confirm("Include special characters in password?");
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Invalid character options, please select at least one character type to proceed.");
  }

  let passwordCharacters = [];

  if(includeLowercase) {
    var lowercaseCharactersArray = lowercaseCharacters.split("");
    passwordCharacters = passwordCharacters.concat(lowercaseCharactersArray);
  }

  if(includeUppercase) {
    var uppercaseCharactersArray = uppercaseCharacters.split("")
    passwordCharacters = passwordCharacters.concat(uppercaseCharactersArray);
  }

  if(includeNumeric) {
    var numericCharactersArray = numericCharacters.split("");
    passwordCharacters = passwordCharacters.concat(numericCharactersArray);
  }

  if(includeSpecial) {
    var specialCharacatersArray = specialCharacaters.split("");
    passwordCharacters = passwordCharacters.concat(specialCharacatersArray);
  }

  let results = "";

  for (var i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    let randomCharacter = passwordCharacters[randomIndex];
    results += randomCharacter;
  }
  
  return results;
}

// this function writes generated random password to the #password CSS box
// defines password variable as results of generatePassword function
// defines passwordText variable as output to #password CSS ID element
// defines passwordText output value as the passord variable
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
