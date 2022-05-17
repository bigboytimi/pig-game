'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = document.querySelector('.score').textContent = 20;
 
let highScore = document.querySelector('.highscore').textContent = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

 if(!guess){
     displayMessage('⛔️No Number!');

     
 } else if (guess === secretNumber){
     displayMessage('✅ Correct Number!')

     document.querySelector('.number').textContent = secretNumber;

     document.querySelector('body').style.backgroundColor = '#60b347';
     document.querySelector('.number').style.width = '30rem';
     
     if (score > highScore){
         highScore = score;

         document.querySelector('.highscore').textContent = score;
     }
 

    
 } else if (guess > secretNumber){
     if (score > 1) {
     displayMessage('📈Too high')
     score --;
     document.querySelector('.score').textContent = score;
     } else {
         displayMessage('You Lost!❌')
         score = 0;
         document.querySelector('.score').textContent = score;
     }
 } 

 
 else if (guess < secretNumber){
    if (score > 1) {
        displayMessage('📉Too low')
        score --;
        document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lost!❌')
            score = 0;
            document.querySelector('.score').textContent = score;
        }
 }
});

document.querySelector('.again').addEventListener('click', function (){
   
   score = 20;
   secretNumber = Math.trunc(Math.random() * 20) + 1;

   displayMessage('Start Game🤖');
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = " ";

   document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


})
