var wrapper = document.getElementById('mainWrapper');
var button = document.getElementById('ok');

button.addEventListener('click', function(){
  console.log('clicked')
  wrapper.classList.toggle("blur")
})