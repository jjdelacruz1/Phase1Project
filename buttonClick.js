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
  console.log(joke, "this is inside the second then, chained promise");
  wrapper.innerHTML = `<div class="d-flex justify-content-center align-items-center flex-column">
      <h1>You are not old enough!</h1>
      <h2>Please get older and enjoy this joke!</h2>
      <h3>Random Chuck Norris Joke:</h3>
      <h3>${joke}</h3>
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
