// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  var input = parseInt(prompt("Choose a lenght between 8 and 128"));

  //if statement checks to ensure input meets criteria
  if (input >= 8 && input <= 128) {
    alert("You have selected " + input + " characters." );
    var choices = "";
  // else statement returns to generate password function
  } else {
    alert("Please enter a valid character amount between 8 and 128");
    generatePassword();
  }
  // confirm checks if user wants to include lowercase
  var includeLowercase = confirm("Would you like to include lowercase letters in your password?");
  
  //if statement checks if user includes lowercase if so append lowercase to choices variable
  if (includeLowercase) {

    choices += lowercase;

  }
  //confirm checks if user wants to include numbers
  var includeNumbers = confirm("Would you like to include numbers in your password?");
    
  //if statement checks if user includes numbers if so append numbers to choices variable
  if (includeNumbers) {

    choices += numbers;

  }
  //confirm checks if user wants to include special characters
  var includeSpecial = confirm("Would you like to include special characters in your password?");
  //if statement checks if user includes special characters if so append special to choices variable
  if (includeSpecial) {

    choices += special;

  }
  //confirm checks if user wants to include uppercase 
  var includeUppercase = confirm("Would you like to include uppercase letters in your password?");
  //if statement checks if user includes uppercase if so append uppercase to choices variable
  if (includeUppercase) {

    choices += uppercase;

  }
  //new variable passwordResult empty string
  var passwordResult = "";
  //for loop uses math.random to randomly generate passwordResult
  for (var i = 0; i < input; i++) {
    
    passwordResult += choices[Math.floor(Math.random() * choices.length)];

  }
  //return passwordResult variable
  return (passwordResult);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);