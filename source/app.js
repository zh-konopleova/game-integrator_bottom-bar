var snd = new Audio("./Button_Click.wav");

var buttons = document.querySelectorAll('.button--sound');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (e) {
    snd.play();
    snd.currentTime=0;
  });
}
