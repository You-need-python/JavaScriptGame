//사용 변수
const GAME_TIME = 9;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let checkInterval;
let TypingInterval;
let words;
let randomIndex;
const input = document.querySelector('.word-input');
const word = document.querySelector('.word');
const score_text = document.querySelector('.score');
const time_text = document.querySelector('.time');
const button = document.querySelector('.btn');


init();


function init(){
  words = ["apple","banana","big","small","taehyuk"]
  buttonChange("start")
  input.addEventListener('input', checkMatch);
  TypingInterval = setInterval(checkTyping,50);
}


function checkStatus(){
  if(!isPlaying && time === 0){
     buttonChange("start")
     clearInterval(checkInterval)
  }
}


function checkTyping(){
  if(isPlaying){
     input.readOnly = false;
  }else{
     input.readOnly = true;
     input.value = "";
  }
}


function checkMatch(){
  if(input.value.toLowerCase() === word.innerText.toLowerCase()){
    score++;
    score_text.innerText = score;
    input.value = "";
    randomText();
  }
}


function randomText(){
  console.log(randomIndex);
  randomIndex = Math.floor(Math.random() * words.length);
  while(words[randomIndex]===word.innerText){
    randomIndex = Math.floor(Math.random() * words.length);
    console.log(randomIndex);
  }
  word.innerText = words[randomIndex];
}


buttonChange("start")


function run(){
  if(!isPlaying){
    isPlaying = true;
    time = GAME_TIME;
    score = 0;
    randomText();
    input.focus();
    score_text.innerText = 0;
    timeInterval = setInterval(count,1000);
    checkInterval = setInterval(checkStatus,50);
    buttonChange("good luck!")
  }
}


function count(){
  //조건 ? 참일때 : 거짓일때
  time > 0 ? time-- : isPlaying = false;
  if(!isPlaying){
    clearInterval(timeInterval); 
  }
  time_text.innerText = time; 
}


function buttonChange(text){
  button.innerText = text;
  text === "start" ? button.classList.remove("loading") : button.classList.add("loading");
}