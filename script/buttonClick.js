/* eslint-disable no-unused-vars */

var wrapper = document.getElementById('mainWrapper')
var button = document.getElementById('ok')

button.addEventListener('click', function () {
  wrapper.classList.toggle('blur')
})

var button2 = document.getElementById('notok')

function getJokeFromResponse (data) {
  var joke = data.value.joke
  return joke
}

function renderJoke (joke) {
  console.log(joke, 'this is inside the second then, chained promise')
  wrapper.innerHTML = `<div class="chucknorris-container d-flex justify-content-center align-items-center flex-column">
  <img src='img/chucknorris-logo.png' height="150px;">
      <h1 class="joke-title">YOU ARE NOT OLD ENOUGH!</h1>
      <h2 class="joke-subheading">Please get older and enjoy this random Chuck Norris joke <img src="img/sunglasses.png" height="32px"></h2>
      <h3 class="joke-container">"${joke}"</h3>
      </div>`;
  wrapper.classList.toggle("blur");

}

function renderUnderPage () {
  var randomJoke = $.ajax({
    jsonp: false,
    url: 'http://api.icndb.com/jokes/random'
  })
    .then(getJokeFromResponse)
    .then(renderJoke)
}

button2.addEventListener('click', renderUnderPage)
