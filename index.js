//Function to randomize an integer 1-6
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const player1 = getRandomInteger(1, 6);
const player2 = getRandomInteger(1, 6);

//Array to store all images' file paths 0-5
const diceImages = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png",
];

//define player 1 and 2
const changeImagePlayer1 = document.querySelector(".img1");
const changeImagePlayer2 = document.querySelector(".img2");

//change player1's image based on the random number (setAttribute to the file path location in the array)
if (player1 >= 1 && player1 <= 6) {
    console.log(player1);
    changeImagePlayer1.setAttribute("src", diceImages[player1 - 1]);
} else {
    console.log("Invalid number for player 1");
}

//change player2's image based on the random number (setAttribute to the file path location in the array)
if (player2 >= 1 && player2 <= 6) {
    console.log(player2);
    changeImagePlayer2.setAttribute("src", diceImages[player2 - 1]);
} else {
    console.log("Invalid number for player 2");
}

//Result of the roll
if (player1 === player2) {
    document.querySelector("h1").innerHTML = 'Draw';
} else if (player1 > player2) {
    document.querySelector("h1").innerHTML = 'Player1 Wins';
} else if (player1 < player2) {
    document.querySelector("h1").innerHTML = 'Player2 Wins';
}

//Create a reference to the refresh button
const refreshButton = document.querySelector(".refresh");

//reload the page when the refresh button's clicked
refreshButton.addEventListener("click", function() {
    location.reload();
});