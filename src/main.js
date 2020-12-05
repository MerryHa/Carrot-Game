'use strict';
import PopUp from './popup.js';
import Field from './field.js';
import * as sound from './sound.js';

const CARROT_COUNT=10;
const BUG_COUNT=5;
const GAME_DURATION_SEC=10;

const gameBtn=document.querySelector('.game__button');
const gameTimer=document.querySelector('.game__timer');
const gameScore=document.querySelector('.game__score');

let started=false;
let score=0;
let timer=undefined; //🌟🌟🌟

const gameFinishBanner=new PopUp();
gameFinishBanner.setClickListener(()=>{
    startGame();
});

const gameField=new Field(CARROT_COUNT,BUG_COUNT);
gameField.setClickListener(onItemClick);

function onItemClick(item){
    if(!started){
        return;
    }
    if(item==='carrot'){
        score++;
        updateScoreBoard();
        if(score===CARROT_COUNT){
            finishGame(true);
        }
    }else if(item==='bug'){
        finishGame(false);
    }
}

gameBtn.addEventListener('click',()=>{
    if(started){
        stopGame();
    }else{
        startGame();
    }
});


function updateScoreBoard(){
    gameScore.textContent=CARROT_COUNT-score;
}
function finishGame(win){
    started=false;
    hideGameBtn();
    stopGameTimer();
    win?sound.playWin():sound.playBug();
    gameFinishBanner.showWithText(win?'YOU WON🎉':'YOU LOST💥');
}

function startGame(){
    started=true;
    score=0;
    sound.playbg();
    initGame();
    showStopBtn();
    showTimerAndScore();
    startGameTimer();
}

function stopGame(){
    started=false;
    sound.playAlert();
    hideGameBtn();
    stopGameTimer();
    gameFinishBanner.showWithText('Replay❓');
}

function startGameTimer(){
    let remainingTimeSec=GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec);
    timer=setInterval(() => {
        if(remainingTimeSec<=0){
            clearInterval(timer);
            finishGame(CARROT_COUNT===score);
            return;
        }else{
            updateTimerText(--remainingTimeSec);
        }
    }, 1000);
}
function stopGameTimer(){
    clearInterval(timer);
    sound.stopbg();
}
function updateTimerText(time){
    let minutes=Math.floor(time/60);
    let seconds=time%60;
    gameTimer.textContent=`${minutes}:${seconds}`;
}
function showTimerAndScore(){
    gameTimer.style.visibility='visible';
    gameScore.style.visibility='visible';
}

function showStopBtn(){
    const icon=gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    gameBtn.style.visibility='visible';
}
function hideGameBtn(){
    gameBtn.style.visibility='hidden';
}
function initGame(){
    score=0;
    gameScore.textContent=CARROT_COUNT;
    gameField.init();
}

