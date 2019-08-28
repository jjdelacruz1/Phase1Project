var wrapper = document.getElementById('mainWrapper');
var button = document.getElementById('ok');

button.addEventListener('click', function(){
  wrapper.classList.toggle("blur")
})

var button2 = document.getElementById('notok')

button2.addEventListener('click', function(){
  wrapper.innerHTML = '<h1>You are not old enough!</h1>'
  wrapper.classList.toggle("blur")
})