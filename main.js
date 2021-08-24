var btn = document.querySelector("#btn")
var light = document.querySelector(".light")
var range = document.querySelector(".range")

function btnToggle() {
    btn.classList.toggle("active")
    light.classList.toggle("on")
}
btn.addEventListener("click", btnToggle)

light.setAttribute(opacity,changelight)

function changelight(e) {
    const line = light.setAttribute(opacity,e)
}

var e =  light.value; 
light.oninput = function() {
 var e =  this.value;
}