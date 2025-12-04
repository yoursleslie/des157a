(function () {
    'use strict';
    console.log('reading js');

    const startBtn = document.querySelector('#startgame');
    const gameDiv = document.querySelector('#game');
    const wowSound = new Audio("wow.mp3");

    let secretNumber = 0;
    let currentPlayer = 1;

    startBtn.addEventListener('click', startGame);

    function startGame() {

        const bgMusic = new Audio("music.mp3");
        bgMusic.loop = true;
        bgMusic.volume = 0.4;
        bgMusic.play();

        startBtn.textContent = "Start Over";

        secretNumber = Math.floor(Math.random() * 100) + 1;
        currentPlayer = 1;

        console.log("Secret number:", secretNumber);

       
        const bgmusic = document.querySelector('#bgmusic');
        if (bgmusic) {
            bgmusic.play();
        }

        gameDiv.innerHTML = `
            <h3 id="feedback"></h3>
            <h2 id="turnDisplay">Player 1 — guess a number 1–100</h2>
            <input type="number" id="guessInput" placeholder="Enter number">
            <button id="guessBtn">Submit Guess</button>
        `;

        setupGuessing();
    }

    function setupGuessing() {
        const guessBtn = document.querySelector('#guessBtn');
        const guessInput = document.querySelector('#guessInput');
        const feedback = document.querySelector('#feedback');
        const turnDisplay = document.querySelector('#turnDisplay');

        guessBtn.addEventListener('click', () => {
            const guess = Number(guessInput.value);

            if (!guess || guess < 1 || guess > 100) {
                feedback.textContent = "Enter a valid number 1–100.";
                return;
            }

            
            if (guess === secretNumber) {
                wowSound.play(); 
                gameDiv.innerHTML = `
                    <h1>Player ${currentPlayer} WINS!</h1>
                    <h1>The number was ${secretNumber}</h1>
                `;
                  
                return;
            }

            
            if (guess < secretNumber) {
                feedback.textContent = "Too low!";
            } else {
                feedback.textContent = "Too high!";
            }

            
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            turnDisplay.textContent = `Player ${currentPlayer} — guess a number 1–100`;

            guessInput.value = "";
            guessInput.focus();
        });
    }

})();





