// Set up a variable to store the interval ID
let intervalId = null;

// Set up a variable to track whether the button is pressed
let buttonPressed = false;

// Function to generate a random number
function generateRandomNumber() {
  // Generate a random number between 1 and 10 (inclusive)
  const min = document.getElementById("min-input").value;
  const max = document.getElementById("max-input").value;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + +min;
  // Get a reference to the random-number element and set its text to the generated number
  const randomNumberElement = document.getElementById("random-number");
  randomNumberElement.innerHTML = randomNumber;
}

// Function to handle the button press event
function handleButtonPress() {
  // Set the buttonPressed variable to true
  buttonPressed = true;

  // Generate a random number
  generateRandomNumber();

  // Set the interval to generate a new random number every 1 second
  intervalId = setInterval(generateRandomNumber, 100);
}

// Function to handle the button release event
function handleButtonRelease() {
  // Set the buttonPressed variable to false
  buttonPressed = false;

  // Clear the interval
  clearInterval(intervalId);
  intervalId = null;
}
