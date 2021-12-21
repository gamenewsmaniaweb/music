var source = "https://www.mboxdrive.com/Jim%20Yosef_%20Electro-Light_%20Anna%20Yvette_%20Deaf%20Kev%20_%20Tobu%20-%20Destiny%20[Official%20Instrumental](MP3_160K)%20(mp3cut.net).mp3";

var audio = new Audio(); // use the constructor in JavaScript, just easier that way

audio.addEventListener("load", function() {

  audio.play();

}, true);

audio.src = source;

audio.autoplay = true; // add this

$("#playBtn").click(function() {

  audio.play();

});

$("#pauseBtn").click(function() {

  audio.pause();

});

$("#stopBtn").click(function() {

  audio.pause();

  audio.currentTime = 0;

});
