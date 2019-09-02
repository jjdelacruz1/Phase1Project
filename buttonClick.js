var wrapper = document.getElementById('mainWrapper')
var button = document.getElementById('ok')

button.addEventListener('click', function () {
  wrapper.classList.toggle('blur')
})

var button2 = document.getElementById('notok')



var randomJoke = $.ajax({
  jsonp: false,
  url: "http://api.icndb.com/jokes/random",
  success: function(data) {
    var joke = data.value.joke;
    console.log(joke)
    return joke
  }
})
.then(function(response){
  console.log(response.value.joke)
  var joke = response.value.joke
  return joke
})
.then(button2.addEventListener('click', function (event) {
  wrapper.innerHTML = `<div class="d-flex justify-content-center                           align-items-center flex-column">
                        <h1>You are not old enough!</h1>
                        <h2>Please get older and enjoy this joke!</h2>
                        <h3>Random Chuck Norris Joke:</h3>
                        <p>${event}</p>
                        </div>`
  wrapper.classList.toggle('blur')
}))

