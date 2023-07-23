'use strict';


const body=document.body;
let secretnumber=Math.trunc(Math.random()*21)+1;
let score=20;
let highscore=0;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent='No number!';
        body.style.backgroundColor='red';
        
    }
    else if(guess===secretnumber){
        document.querySelector('.message').textContent='Correct Number!';
        body.style.backgroundColor='green';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=secretnumber;
        //To set the highscore of game
        if(score>highscore){
            highscore=score;
            console.log(highscore);
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess>secretnumber){
        if(score>1){
        document.querySelector('.message').textContent='Too High';
        score=score-1;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You lost the game';
            document.querySelector('.score').textContent=0;
        }

    }
    else{
        if(score>1){
        document.querySelector('.message').textContent='Too Low';
        score=score-1;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You lost the game';
            document.querySelector('.score').textContent=0;
        }
    }
})

//For starting the game again
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretnumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=20;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    body.style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});



