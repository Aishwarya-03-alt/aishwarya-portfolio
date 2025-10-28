$(document).ready(function(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  $('.main-nav a').each(function(){
    if($(this).attr('href') === path){
      $(this).css('text-decoration','underline');
    }
  });
});
