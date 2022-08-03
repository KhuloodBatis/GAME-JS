'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!🎉'
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value=23
// console.log(document.querySelector('.guess').value); 
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore =0;
 document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click',function() {
//  const guess = document.querySelector('.guess').value;
//  console.log(guess);
  // document.querySelector('.message').textContent = '🎉Correct Number!🎉'

  //!we alwayes give from user interface a string so we should to convert to number
  // console.log(typeof guess);//string 
   const guess = Number(document.querySelector('.guess').value);
   //?cheack type 
 console.log(guess, typeof guess);//number 
 
 if(!guess){
  document.querySelector('.message').textContent = '⛔ Not a Number'
 }else if( guess === secretNumber){
  document.querySelector('.message').textContent = '🎉Correct Number!🎉';
  // document.querySelector('.body').style.backgroundColor = '#55cc42';
  // document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;

  if(score>highscore){
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
 }else if ( guess > secretNumber){

  if(score >1){
    document.querySelector('.message').textContent = '📈Too High!';
    score = score-1;
    document.querySelector('.score').textContent = score;
  }else{
    document.querySelector('.message').textContent = '😏You lost the Game 💥';
    document.querySelector('.score').textContent = 0;
  }

 }else if ( guess < secretNumber){
  document.querySelector('.message').textContent = '📉Too Low!';
  score--;
  document.querySelector('.score').textContent = score;
}else{
  document.querySelector('.message').textContent = '😏You lost the Game 💥';
  document.querySelector('.score').textContent = 0;
}

});

document.querySelector('.again').addEventListener('click', function(){
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random()*20)+1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing....';
  document.querySelector('.guess').value=' ';
  highscore = 0
  document.querySelector('.highscore').textContent = 0


  
})