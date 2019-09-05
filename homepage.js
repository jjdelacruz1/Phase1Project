document.addEventListener("DOMContentLoaded", function() {
  console.log("Hello! The DOM is ready.");
  document.getElementById("search-bar").value = "";
  document.getElementById("search-form").addEventListener("keyup", function(e) {
    e.preventDefault();
    console.log(e);
    console.log(sessionStorage);
    sessionStorage.clear();
    var location = document.getElementById("search-bar").value;
    sessionStorage.setItem("location", location);
  });
});
