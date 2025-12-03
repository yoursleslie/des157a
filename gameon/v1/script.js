((function(){

    'use strict';
    console.log('reading js');


    const start = document.querySelector ('#start');

    
    const middle = document.querySelector ('#middle');
    const end = document.querySelector ('#end');
   


    const fnum = document.querySelector ('#finalNUm')
   const number = Math.floor(Math.random() * 100);

   fnum.innerHTML = `<h2> ${number} </h2>`

}()));