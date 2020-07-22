// Assignment Code
var generateBtn = document.querySelector("#generate");

var digits = [`0`,`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`,`9`];
var lowerCase = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
var upperCase = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
var specialCharacter = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `_`,`-`, `+`];




function createPassword() {
  //found do function on https://developer.mozilla.org/en-US/
  do {
    var confirmLength = prompt(`How many Characters do you want in your password? (Please choose between 8 to 128 characters)`);
  } while (confirmLength <= 7 || confirmLength >= 129);

    var selectDigits = confirm(`Would you like to include digits?`);
    var selectLowercase = confirm(`Would you like Lowercase Letters?`);
    var selectUppercase = confirm(`Would you like to include Uppercase Letters?`);
    var selectSpecialCharacter = confirm(`Would you like to include special characters?`);
   
    var passwordCharacters = [] 
  //use of concat found on https://developer.mozilla.org/en-US/
    if(selectDigits) {
      passwordCharacters = passwordCharacters.concat(digits)
    }

    if(selectLowercase) {
      passwordCharacters = passwordCharacters.concat(lowerCase)
    }

    if(selectUppercase) {
      passwordCharacters = passwordCharacters.concat(upperCase)
    }

    if(selectSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialCharacter)
    }
    
    console.log(passwordCharacters)

    var randomPassword = ""
    
    for(var i = 0; i < confirmLength; i++) {
      randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(randomPassword)
    }
    
    return randomPassword;
}
// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//chaining is asynchronous
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
