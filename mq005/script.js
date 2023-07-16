var button = document.getElementById("button")
var nav = document.querySelector("nav")
var span = document.querySelector("span")
var count = 0
button.onclick = function(){
  nav.style = 'display: block;'
  button.style = 'background-color: white;color: black;'
  count++
  span.id = 'click'
  if(count % 2 == 0){
    nav.style = 'display: none';
    button.style = 'background-color: #323834; color: white;'
    span.id = 'newclick'
  }
}