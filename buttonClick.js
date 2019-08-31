var wrapper = document.getElementById('mainWrapper')
var button = document.getElementById('ok')

button.addEventListener('click', function () {
  wrapper.classList.toggle('blur')
})

var button2 = document.getElementById('notok')

button2.addEventListener('click', function () {
  wrapper.innerHTML = `<h1>You are not old enough!</h1>
                        <h2>Please get older and enjoy this joke!</h2>
                        <h3>Random Chuck Norris Joke:</h3>
                        <p></p>`
  wrapper.classList.toggle('blur')
})

$.ajax({
  jsonp: false,
  url: "http://api.icndb.com/jokes/random",
  success: function(data) {
    var joke = data.value.joke;
    console.log(joke)
  }
});
