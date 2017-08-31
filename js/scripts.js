var startGame = document.getElementById('js-newGameButton');
startGame.addEventListener('click', newGame);

var computerWins = document.getElementById('js-computerWinner');
var playerWins = document.getElementById('js-playerWinner');
computerWins.style.display = 'none';
playerWins.style.display = 'none';



/* player choice */

var pickScissors = document.getElementById('playerPicksScissors');
var pickRock = document.getElementById('playerPicksRock');
var pickPaper = document.getElementById('playerPicksPaper');

pickScissors.addEventListener('click', function () {
    playerPick('scissors');
});
pickRock.addEventListener('click', function () {
    playerPick('rock');

});
pickPaper.addEventListener('click', function () {
    playerPick('paper');
});
/* */
var gameState = 'notStarted'; //started,ended
var player = {
    name: ' ',
    score: 0
};
var computer = {
    score: 0
};

/* showing containers */

var newGameElem = document.getElementById('js-newGameElement');
var playerChoiceElem = document.getElementById('js-PlayerChoice');
var scoreTableElem = document.getElementById('js-ScoreTable');

function setGameElements() {
    switch (gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            playerChoiceElem.style.display = 'block';
            scoreTableElem.style.display = 'block';
            break;
        case 'ended':
            startGame.innerText = 'Jeszcze raz';
            newGameElem.style.display = 'block';
            playerChoiceElem.style.display = 'none';
            scoreTableElem.style.display = 'none';
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            playerChoiceElem.style.display = 'none';
            scoreTableElem.style.display = 'none';
    }
}

var playerNameElem = document.getElementById('js-playerName');
var playerScoreElem = document.getElementById('js-playerScore');
var computerScoreElem = document.getElementById('js-computerScore');
/*new game*/

function newGame() {
    player.name = prompt('imię gracza')
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
}

/* players choice */

function playerPick(playerPick) {
    console.log(playerPick);
}
/* computer choice */

var x = Math.random();
Math.floor(x * 3);

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random() * 3)];
}

setGameElements('default');

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerScore'),
    computerResultElem = document.getElementById('js-computerScore');

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' && playerPick == 'scissors') ||
        (computerPick == 'scissors' && playerPick == 'paper') ||
        (computerPick == 'paper' && playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
        addPoints();
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
        addPoints();
    } else {
        playerResultElem.innerHTML = "Draw!";
        computerResultElem.innerHTML = "Draw!";
    }
    playerResultElem.className = "player";
    computerResultElem.className = "computer";
}



function playerPick(playerPick) {
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
}
/*TABLE*/
var playerPoints = document.getElementById('js-playerPoints');
var computerPoints = document.getElementById('js-computerPoints');



function addPoints() {
    playerPoints.innerHTML = player.score;
    computerPoints.innerHTML = computer.score;
    finishGame();
}

/* who wins? */
console.log(playerPoints.innerText);

function finishGame() {

    if (playerPoints.innerText === '10') {
        playerWins.style.display = 'inline-block';
        setGameElements('started');

    } else if (computerPoints.innerText === '10') {
        computerWins.style.display = 'inline-block';
        setGameElements('started');

    }

}
