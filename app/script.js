let playerRed = document.getElementById("first");
let playerGreen = document.getElementById("second");
let playerBlue = document.getElementById("third");
let playerYellow = document.getElementById("fourth");
let playerRedSecond = document.getElementById("fifth");


function startGame() {

    alert('The race is about to start...')

    playerRed.src = "img/red.gif";
    playerGreen.src = "img/green.gif";
    playerBlue.src = "img/blue.gif";
    playerYellow.src = "img/yellow.gif";
    playerRedSecond.src = "img/red.gif";

    let playerRedPos = 0;
    let playerGreenPos = 0;
    let playerBluePos = 0;
    let playerYellowPos = 0;
    let playerRedSecondPos = 0;

    function finishGame() {
        let winner = '';
        if (playerRedPos >= document.body.clientWidth - 80) {
            playerRed.style.paddingLeft = document.body.clientWidth - 80 + 'px';
            winner = 'Red horse no. 1'            
        } else if (playerGreenPos >= document.body.clientWidth - 80) {
            playerGreen.style.paddingLeft = document.body.clientWidth - 80 + 'px';
            winner = 'Green horse'
        } else if (playerBluePos >= document.body.clientWidth - 80) {
            playerBlue.style.paddingLeft = document.body.clientWidth - 80 + 'px';
            winner = 'Blue horse'
        } else if (playerYellowPos >= document.body.clientWidth - 80) {
            playerYellow.style.paddingLeft = document.body.clientWidth - 80 + 'px';
            winner = 'Yellow horse'
        } else {
            playerRed.style.paddingLeft = document.body.clientWidth - 80 + 'px';
            winner = 'Red horse no. 2'
        }
        alert(`The winner is ${winner}!`);
        document.getElementById('winner').innerText = winner
        resetGame();
    }

    let id = setInterval(frame, 50);

    function frame() {
        if (playerRedPos >= document.body.clientWidth - 80 ||
            playerGreenPos >= document.body.clientWidth - 80 ||
            playerBluePos >= document.body.clientWidth - 80 ||
            playerYellowPos >= document.body.clientWidth - 80 ||
            playerRedSecondPos >= document.body.clientWidth - 80) {
            finishGame();
            clearInterval(id);

        } else {
            playerRedPos += (Math.random() * 10 + 1);
            playerRed.style.paddingLeft = playerRedPos + 'px';

            playerGreenPos += (Math.random() * 10 + 1);
            playerGreen.style.paddingLeft = playerGreenPos + 'px';

            playerBluePos += (Math.random() * 10 + 1);
            playerBlue.style.paddingLeft = playerBluePos + 'px';

            playerYellowPos += (Math.random() * 10 + 1);
            playerYellow.style.paddingLeft = playerYellowPos + 'px';

            playerRedSecondPos += (Math.random() * 10 + 1);
            playerRedSecond.style.paddingLeft = playerRedSecondPos + 'px';
        }
    }

    function resetGame() {
        playerRed.style.paddingLeft = 0;
        playerGreen.style.paddingLeft = 0;
        playerBlue.style.paddingLeft = 0;
        playerYellow.style.paddingLeft = 0;
        playerRedSecond.style.paddingLeft = 0;
    }
}

document.getElementById("start__button").addEventListener("click", function () {
    startGame();
})