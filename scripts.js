const wrongImage = './images/wrong.png'
const correctImage = './images/check.png'
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
    } else {
        attempts++;
        if (guess === targetNumber) {
            message.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
            guessInput.disabled = true;
        } else if (guess < targetNumber) {
            message.textContent = "Try a higher number.";
        } else {
            message.textContent = "Try a lower number.";
        }
    }
}

function checkName() {
    const nameInput = document.getElementById("usersName")
    const usernameMessage = document.getElementById("nameMessage")
    const usernameContainer = document.querySelector(".usernameContainer");
    const gameContainer = document.querySelector(".gameContainer");
    const resultImage = document.getElementById("resultImage");

    if (nameInput.value.toLowerCase() === "cynthia") {
        usernameMessage.textContent = "No, you are my girlfriend! Please Enter 'His world' to play!";

        gameContainer.classList.add("hidden");

        usernameContainer.classList.remove("hidden");
        usernameContainer.classList.add("slide-in");
        // resultImage.src = correctImage; // correct url
    } else {
        usernameMessage.textContent = "Enjoy the game!";

        usernameContainer.classList.add("hidden");

        gameContainer.classList.remove("hidden");
        gameContainer.classList.add("slide-in");
        // resultImage.src = wrongImage; // incorrect url
    }
}
