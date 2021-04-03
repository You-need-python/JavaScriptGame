$(function(){
  var trigger = $('#trigger');
  var trigger2 = document.getElementById('trigger')
  var menu = $('.header ul');
  $(trigger).on('click',function(e){
    e.preventDefault();
    menu.slideToggle();
  });
})