var myButton = document.querySelector("#myButton");
var heading = document.querySelector('h1');

function yell (){
  console.log("AHHHHH!")
  myButton.innerText = "AHHHH!"
}
var toggle = null
function yell (){
    toggle = !toggle
    heading.innerText = toggle
}

function whisper() {
  myButton.innerText = "Shhhhhh..."
}
myButton.addEventListener('click', yell)
heading.addEventListener('click', whisper)
