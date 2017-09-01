var startGame = document.getElementById('js-newGameButton');
var computerWins = document.getElementById('js-computerWinner');
var playerWins = document.getElementById('js-playerWinner');
var newGameElem = document.getElementById('js-newGameElement');
var playerChoiceElem = document.getElementById('js-PlayerChoice');
var scoreTableElem = document.getElementById('js-ScoreTable');
var pickScissors = document.getElementById('playerPicksScissors');
var pickRock = document.getElementById('playerPicksRock');
var pickPaper = document.getElementById('playerPicksPaper');
var playerNameElem = document.getElementById('js-playerName');
var playerPoints = document.getElementById('js-playerPoints');
var computerPoints = document.getElementById('js-computerPoints');
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerScore'),
    computerResultElem = document.getElementById('js-computerScore');
var gameState = 'notStarted';
var player = {
    name: ' ',
    score: 0
};
var computer = {
    score: 0
};

/* player choice */
setGameElements('notStarted');
startGame.addEventListener('click', newGame);

pickScissors.addEventListener('click', function () {
    playerPick('scissors');
});
pickRock.addEventListener('click', function () {
    playerPick('rock');

});
pickPaper.addEventListener('click', function () {
    playerPick('paper');
});


/* showing containers */

function setGameElements(gameState) {

    switch (gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            playerChoiceElem.style.display = 'block';
            scoreTableElem.style.display = 'block';
            playerResultElem.innerHTML = '';
            computerResultElem.innerHTML = '';
            playerWins.style.display = 'none';
            computerWins.style.display = 'none';

            break;
        case 'ended':
            startGame.innerText = 'Jeszcze raz';
            newGameElem.style.display = 'block';
            playerChoiceElem.style.display = 'none';
            scoreTableElem.style.display = 'none';
            break;
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            playerChoiceElem.style.display = 'none';
            scoreTableElem.style.display = 'none';
            break;
    }
}

/*new game*/

function newGame() {
    player.name = prompt('imię gracza');
    if (player.name == '') {
        player.name = 'Player';
    }
    player.score = computer.score = 0;
    setGameElements('started');
    playerNameElem.innerHTML = player.name;
}


/* computer choice */

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random() * 3)];
}
/* players choice */
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
        assignPoints();
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
        assignPoints();
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

function assignPoints() {
    playerPoints.innerHTML = player.score;
    computerPoints.innerHTML = computer.score;
    CheckIfFinishGame();
}

function reset() {
    player.score = 0;
    computer.score = 0;
    playerPoints.innerHTML = player.score;
    computerPoints.innerHTML = computer.score;


}
/* who wins? */
function checkIfFinishGame() {

    if (player.score == 10 || computer.score == 10) {


        if (player.score == 10) {
            playerWins.style.display = 'inline-block';

        } else if (computer.score == 10) {
            computerWins.style.display = 'inline-block';

        }
        setGameElements('ended');
        reset();
    }
}
