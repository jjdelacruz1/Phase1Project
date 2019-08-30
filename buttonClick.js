var wrapper = document.getElementById('mainWrapper')
var button = document.getElementById('ok')

button.addEventListener('click', function () {
  wrapper.classList.toggle('blur')
})

var button2 = document.getElementById('notok')


var joke = 'https://api.chucknorris.io/jokes/random'
console.log(joke.value)
button2.addEventListener('click', function () {
  wrapper.innerHTML = `<h1>You are not old enough!</h1>
                        <p>Testing out another line</p>`
  wrapper.classList.toggle('blur')
})
