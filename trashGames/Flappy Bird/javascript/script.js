const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");
let jumping = 0;
let score = 0
let characterTop;

hole.addEventListener('animationiteration', () => { //hole의 애니메이션이 끝날때마다(hole이 맨끝에 있을때)
    var random = (Math.random()*50+30); //random변수에 30 ~ 70사이의 수를 집어넣고
    hole.style.bottom = random + '%'; //random값을 hole의 bottom값으로 설정
    counter++
});

setInterval(function(){
  characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); //10ms마다 캐릭터의 top위치를 characterTop이라는 변수에 저장히고
  if(!jumping){
    character.style.top = (characterTop+3) + "px"; //캐릭터의 위치를 10ms마다 3px씩 떨어트리기
  }
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  console.log(holeTop);
  var cTop = -(500-characterTop);
  if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
    character.style.top = 100 + "px";
    counter = 0
  }
},10);

function jump(){
  jumping = 1
  let jumpCount = 0
  const jumpInterval = setInterval(function(){
    characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if((characterTop>6)&&(jumpCount<15)){
      character.style.top = (characterTop-5) + "px";
    }
    if(jumpCount>20){
      clearInterval(jumpInterval);
      jumping=0
      jumpCount=0
    }
    jumpCount++
  },10);
}