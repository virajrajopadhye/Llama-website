var i = 0;
var txt = 'Hi, my name is LLAMANATOR. I am a domesticated South American camelid';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}