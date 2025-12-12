((function () {
    'use strict';
    console.log('reading js');

    const madLib = document.querySelector('#content');
    const submit = document.querySelector('form');

    const bgMusic = new Audio("madlibs_bg.mp3");
    bgMusic.loop = true;
    bgMusic.volume = 0.4;

    window.addEventListener('click', () => bgMusic.play());
    window.addEventListener('keydown', () => bgMusic.play());

    submit.addEventListener('submit', function (event) {
        event.preventDefault();

        const adj1 = document.querySelector('#adjective1').value;
        const noun1 = document.querySelector('#noun1').value;
        const adj2 = document.querySelector('#adjective2').value;
        const verbing = document.querySelector('#verbING').value;
        const creasingle = document.querySelector('#creatureSingle').value;
        const creaplu = document.querySelector('#creaturePlural').value;
        const weapon = document.querySelector('#weapon').value;
        const verbP = document.querySelector('#verbPAST').value;
        const excla = document.querySelector('#exclamation').value;
        const adj3 = document.querySelector('#adjective3').value;
        const letnum = document.querySelector('#letterNum').value;
        const num = document.querySelector('#number').value;
        const adj4 = document.querySelector('#adjective4').value;

        if (adj1 == '') { alert("please provide an adjective"); }
        else if (noun1 == '') { alert("please provide a noun"); }
        else if (adj2 == '') { alert("please provide an adjective"); }
        else if (verbing == '') { alert("please provide a verb ending in -ING"); }
        else if (creasingle == '') { alert("please provide a creature"); }
        else if (creaplu == '') { alert("please provide a creature (plural)"); }
        else if (weapon == '') { alert("please provide a weapon"); }
        else if (verbP == '') { alert("please provide a past tense verb"); }
        else if (excla == '') { alert("please provide an exclamation"); }
        else if (adj3 == '') { alert("please provide an adjective"); }
        else if (letnum == '') { alert("please provide a letter/number"); }
        else if (num == '') { alert("please provide a number"); }
        else if (adj4 == '') { alert("please provide an adjective"); }
        else {
            submit.innerHTML = "";

            madLib.innerHTML = `
                <h2>Your New Adventure</h2>
                <p>In a ${adj1} galaxy many, many years ago far, far away, a brave young hero picked up their trusty ${noun1} and set off to ${adj2}. When they were ${verbing} along the grimy streets, a mysterious stranger leaned over and proclaimed, "Only you can rescue us from the evil ${creasingle}."</p>
                <p>Abruptly, a group of ${creaplu} appeared, brandishing their ${weapon}. The hero ${verbP} bravely and bellowed, "${excla}". With ${adj3} speed, they leapt into their StarFighter - ${letnum} and set off towards the stars.</p>
                <p>They knew the destiny of the galaxy was in ${num} brave rebels and one powerful ${noun1}. When the ship disappeared in hyperspace, the last sound echoing in the air was ${adj4} laughter.</p>
                <button id="restartButton" type="button">Start Over?</button>
            `;

            document.querySelector('#restartButton').addEventListener('click', () => {
                location.reload();
            });
        }

    });

}))();





