(function() {
    'use strict';

   
    const cards = document.querySelectorAll('.flip-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

   
    const observerOptions = { threshold: 0.5 };

    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const front = entry.target.querySelector('.flip-card-front');
            if (entry.isIntersecting) {
                front.style.transition = 'background-color 0.5s ease';
                front.style.backgroundColor = 'rgb(72, 63, 85)';
                front.style.borderColor = 'rgb(180,180,180)';
            } else {
                front.style.backgroundColor = ''; 
                front.style.borderColor = '';
            }
        });
    }, observerOptions);

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const back = entry.target.querySelector('.flip-card-back');
            if (entry.isIntersecting) {
                back.style.transition = 'background-color 0.5s ease';
                back.style.backgroundColor = 'rgba(37, 35, 39)';
                back.style.borderColor = 'rgba (0,0,0,0,54)';
            } else {
                back.style.backgroundColor = '';
                back.style.borderColor = '';
            }
        });
    }, observerOptions);



    
    cards.forEach(card => observer.observe(card));
    cards.forEach(card => observer2.observe(card) );

}());



