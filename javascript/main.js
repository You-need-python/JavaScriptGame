$(function(){
  const trigger = $('#trigger');
  const menu = $('.header ul');
  $(trigger).on('click',function(e){
    e.preventDefault();
    menu.slideToggle();
  });
})

$(function(){
  const typing = [$('.card-typing'), 'TypingGame/index.html'];
  
  openGame(typing[0],typing[1]);
  function openGame(game, link){
    $(game).on('click',function(){
      window.open(link);
    })
  }
})