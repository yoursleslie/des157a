((function(){

    'use strict';
    console.log('reading js');

    //overlay 
        const madLib = document.querySelector('#content');

        const overlay = document.querySelector('#overlay');
        overlay.style.visibility = 'hidden';


    // form
    const submit = document.querySelector('form');

    submit.addEventListener('submit', function(event){
        event.preventDefault();

        const adj1 = document.querySelector('#adjective1').value;
        const noun1 = document.querySelector('#noun1').value;
        const adj2 = document.querySelector ('#adjective2').value;
        const verbing = document.querySelector('#verbING').value;
        const creasingle = document.querySelector ('#creatureSingle').value;
        const creaplu = document.querySelector ('#creaturePlural').value;
        const weapon = document.querySelector('#weapon').value;
        const verbP = document.querySelector('#verbPAST').value;
        const excla = document.querySelector('#exclamation').value;
        const adj3 = document.querySelector ('#adjective3').value;
        const letnum = document.querySelector ('#letterNum').value;
        const num = document.querySelector('#number').value;
        const adj4 = document.querySelector('#adjective4').value;


    //    madLib.innerHTML= `<p>In a ${adj1} galaxy many, many years ago far, far away, a brave young hero picked up their trusty ${noun1}and set off to ${adj2}. When they were  ${verbing} along the grimy streets, a mysterious stranger leaned over and proclaimed, "Only you can rescue us from the evil  ${creasingle}." </p>

    //     <p>Abruptly, a group of  ${creaplu} appeared, brandishing their  ${weapon}. The hero  ${verbP} bravely and bellowed,"${excla}". With  ${adj3} speed, they leapt into their StarFighter - ${letnum} and set off towards the stars. </p>

    //     <p>They knew the destiny of the galaxy was in  ${num} brave rebels and one powerful  ${noun1}. When the ship disappeared in hyperspace, the last sound echoing in the air was  ${adj4} laughter</p>`

        let myText;

        if (adj1 == ''){
            myText = "please provide an adjective";
            alert (myText);
        } else if (noun1 == ''){
            myText = "please provide a noun";
            alert (myText);
        } else if (adj2 == ''){
            myText = "please provide an adjective";
            alert (myText);
        } else if (verbing == ''){
            myText = "please provide a verb ending in -ING";
            alert (myText);
        } else if (creasingle == ''){
            myText = "please provide a creature";
            alert (myText);
        } else if (creaplu == ''){
            myText = "please provide a creature (plural)";
            alert (myText);
        } else if (weapon == ''){
            myText = "please provide a weapon";
            alert (myText);
        } else if (verbP == ''){
            myText = "please provide a past tense";
            alert (myText);
        } else if (excla == ''){
            myText = "please provide an exclmation (e.g.: wow";
            alert (myText);
        } else if (adj3 == ''){
            myText = "please provide an adjective";
            alert (myText);
        } else if (letnum == ''){
            myText = "please provide a letter and number";
            alert (myText);
        } else if (num == ''){
            myText = "please provide a number";
            alert (myText);
        } else if (adj4 == ''){
            myText = "please provide an adjective";
            alert (myText);
        } else {
        overlay.style.visibility='visible';

         madLib.innerHTML= `<p>In a ${adj1} galaxy many, many years ago far, far away, a brave young hero picked up their trusty ${noun1}and set off to ${adj2}. When they were  ${verbing} along the grimy streets, a mysterious stranger leaned over and proclaimed, "Only you can rescue us from the evil  ${creasingle}." </p>

        <p>Abruptly, a group of  ${creaplu} appeared, brandishing their  ${weapon}. The hero  ${verbP} bravely and bellowed,"${excla}". With  ${adj3} speed, they leapt into their StarFighter - ${letnum} and set off towards the stars. </p>

        <p>They knew the destiny of the galaxy was in  ${num} brave rebels and one powerful  ${noun1}. When the ship disappeared in hyperspace, the last sound echoing in the air was  ${adj4} laughter</p>`

        document.querySelector('#adjective1').value = '';
        document.querySelector('#noun1').value = '';
        document.querySelector ('#adjective2').value = '';
        document.querySelector('#verbING').value='';
        document.querySelector ('#creatureSingle').value ='';
        document.querySelector ('#creaturePlural').value ='';
        document.querySelector('#weapon').value = '';
        document.querySelector('#verbPAST').value = '';
        document.querySelector('#exclamation').value = '';
        document.querySelector ('#adjective3').value='';
        document.querySelector ('#letterNum').value ='';
        document.querySelector('#number').value ='';
        document.querySelector('#adjective4').value = '';
        }


    });
    

    

}()));