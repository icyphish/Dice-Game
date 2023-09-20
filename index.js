function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const player1 = getRandomInteger(1, 6);
const player2 = getRandomInteger(1, 6);

const diceImages = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png",
];

const changeImagePlayer1 = document.querySelector(".img1");
const changeImagePlayer2 = document.querySelector(".img2");

if (player1 >= 1 && player1 <= 6) {
    console.log(player1);
    changeImagePlayer1.setAttribute("src", diceImages[player1 - 1]);
} else {
    console.log("Invalid number for player 1");
}

if (player2 >= 1 && player2 <= 6) {
    console.log(player2);
    changeImagePlayer2.setAttribute("src", diceImages[player2 - 1]);
} else {
    console.log("Invalid number for player 2");
}

if (player1 === player2) {
    document.querySelector("h1").innerHTML = 'Draw';
} else if (player1 > player2) {
    document.querySelector("h1").innerHTML = 'Player1 Wins';
} else if (player1 < player2) {
    document.querySelector("h1").innerHTML = 'Player2 Wins';
}

// Get a reference to the refresh button element by its ID
const refreshButton = document.querySelector(".refresh");

// Add a click event listener to the button
refreshButton.addEventListener("click", function() {
    location.reload();
});