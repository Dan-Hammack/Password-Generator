// Start working code
// User input variables:
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Start Password variable values:
// Special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
alpha2 = alpha.map(c => c.toUpperCase())
// Choices declared outside the if statement so they can be concatenated upon condition
var choices = [];
// converts letters to uppercase

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    }


    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");
    }

    if (confirmCharacter) {
        choices = choices.concat(character)
    }

    if (confirmNumber) {
        choices = choices.concat(number)
    }

    if (confirmLowercase) {
        choices = choices.concat(alpha)
    }

    if (confirmUppercase) {
        choices = choices.concat(alpha2)
    }

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables:
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    // Worked with a tutor to incorporate this option
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
// This copies the password value - works
// Code example demonstrated in a youtube video: 
// Source: https://youtu.be/9sT03jEwcaw
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}