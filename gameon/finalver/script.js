((function(){

    'use strict';
    console.log('reading js');


    const startgame = document.querySelector('#startgame');
    const gamecontrol = document.querySelector ('#gamecontrol');
    const gamearea = document.querySelector ('#game');
    const data = {
        players: ['player1', 'player2'],
        p1guess: 0,
        p2guess: 0,
        index: 0
    };

    const fnum = document.querySelector ('#finalNUm')
    const number = Math.floor(Math.random() * 100);
    console.log (number);
    // fnum.innerHTML = `<h2> ${number} </h2>`;



    startgame.addEventListener ('click', function(){
        gamecontrol.innerHTML = '<h2> Game has started </h2>';
        gamecontrol.innerHTML += '<button id = "quit"> want to start over?</button>';

        document.querySelector('#quit').addEventListener('click', function(){
            location.reload();
        });

        setupturn ();
        data.index = Math.round(Math.random ());
        console.log (data.index);
        console.log ('set up the turn');
        

    });

   function setupturn (){
    gamearea.innerHTML = `<h2> ${data.players[data.index]} guess a number between 1 - 100 <h2>`;

    // gamecontrol.innerHTML = '<h2> Game has started </h2>';
    gamearea.innerHTML += '<input type = "text" id="number" name="number1">';
   };

    
}()));