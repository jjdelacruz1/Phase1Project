/*jshint esversion: 6 */

var wrapper = document.getElementById("mainWrapper");
var button = document.getElementById("ok");

button.addEventListener("click", function() {
  wrapper.classList.toggle("blur");
});

var button2 = document.getElementById("notok");

function getJokeFromResponse(data) {
  var joke = data.value.joke;
  return joke;
}

function renderJoke(joke) {
  wrapper.innerHTML = `<div class="d-flex justify-content-center align-items-center flex-column" style="height: 87vh;">
      <h1>You are not old enough!</h1>
      <h2>Please get older and enjoy this joke!</h2>
      <br>
      <h3>Random Chuck Norris Joke:</h3>
      <br>
      <h3 style="text-align: center;">${joke}</h3>
      <br>
      <img src="/img/chucknorris_logo_coloured_small@2x.png" style="height: 15rem;">
      </div>`;
  wrapper.classList.toggle("blur");
}

function renderUnderPage() {
  var randomJoke = $.ajax({
    jsonp: false,
    url: "http://api.icndb.com/jokes/random"
  })
    .then(getJokeFromResponse)
    .then(renderJoke);
}

button2.addEventListener("click", renderUnderPage);
