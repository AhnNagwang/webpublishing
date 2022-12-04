//Trigger
$(function() {
  $('.trigger').click(function() {
    $(this).toggleClass('active')
    $('.modal-gnb').fadeToggle()
  })
})

//Audio Cotrols;
let bgm = document.getElementById('myAudio');
bgm.volume = 0.1;