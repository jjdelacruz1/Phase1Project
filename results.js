const ajaxResponse = null
const searchTerm = 'happy hour'
const map = L.mapbox.map('map')
const markersArray = []

document.addEventListener('DOMContentLoaded', function () {
  const location = sessionStorage.getItem('location')
  var yelpAjaxRequest = {
    url: `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}&limit=10`,
    headers: { Authorization: `${yelpApiKey}` }
  }
  deleteMarkers()
  $.ajax(yelpAjaxRequest)
    .then(insertHtmlIntoContainer)
})

// // Start of load more results function (loads 10 at a time)
// const loadButton = document.getElementById("load-more");

// loadButton.addEventListener("click", function(e) {
//   console.log("You clicked the load more button!", e);

//   // const output = document.getElementById('output')
//   const location = sessionStorage.getItem("location");
//   const yelpApiKey =
//     "Bearer fpfUJj8DFp_jm-n0LNi5U4WL9AgyD3G2ieoAPAYccY2QUi-1ZCXSuHoa0uEaPY60BInSS_COQHHlqWp0VeKDOcgdPBHn9lYSC1_r6mJCI3y8aU63IHNfK6Lhr3xhXXYx";
//   const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
//   var yelpAjaxRequest = {
//     url: `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}&limit=10`,
//     headers: { Authorization: `${yelpApiKey}` }
//   };

//   $.ajax(yelpAjaxRequest).then(function(response) {
//     console.log("This is the search term: ", searchTerm);
//     console.log("This is the location: ", sessionStorage.getItem("location"));
//     console.log("This is the response from the then chain: ", response);
//     const resultsContainer = document.getElementById("output");
//     var moreResultsHtml = createYelpResultsHtml(response);
//     return resultsContainer.append(moreResultsHtml);
//   });
// });
