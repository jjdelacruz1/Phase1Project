function yelpAjax () {
  var location = document.getElementById("search-bar").value;
  const yelpApiKey = "Bearer fpfUJj8DFp_jm-n0LNi5U4WL9AgyD3G2ieoAPAYccY2QUi-1ZCXSuHoa0uEaPY60BInSS_COQHHlqWp0VeKDOcgdPBHn9lYSC1_r6mJCI3y8aU63IHNfK6Lhr3xhXXYx";
  const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
  var yelpAjaxInfo = {
    url: `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}&limit=10`,
    headers: { Authorization: `${yelpApiKey}` }
  };
  return $.ajax(yelpAjaxInfo)
}

function placeMapboxMarkers (yelpSearchResults) {
  L.mapbox.accessToken =
    "pk.eyJ1Ijoic3VlcGFyazA5IiwiYSI6ImNqenJmdGxoNzBqengzbW8zeDlmNnhudHEifQ.NvYx9iu9NUGdvDdYdWNg-A";
  const viewCoordinate = yelpSearchResults.businesses[0].coordinates;
  map
    .setView([viewCoordinate.latitude, viewCoordinate.longitude], 13)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/light-v10'))
  for (let i = 0; i < yelpSearchResults.businesses.length; i++) {
    const coordinate = yelpSearchResults.businesses[i].coordinates;
    const singleBusiness = yelpSearchResults.businesses[i];
    const marker = L.marker([coordinate.latitude, coordinate.longitude], {
      title: singleBusiness.name
    }).addTo(map).bindPopup(`
                      <div class="img"><img src="${
                        singleBusiness.image_url
                      }" height="50px"></div>
                      <h4>${singleBusiness.name}</h4>
                      ${singleBusiness.location.display_address.join(
                        "<br>"
                      )}         
                  `);
    marker.on("mouseover", function(e) {
      this.openPopup();
    });
    marker.on("mouseout", function(e) {
      this.closePopup();
    });
  }
}

function deleteMarkers() {
  if (markersArray.length !== 0) {
    markersArray.forEach(function(marker) {
      marker.remove();
    });
  }
}

function createYelpResultsHtml(yelpSearchResults) {
  const businessHtml = yelpSearchResults.map(function(singleBusiness) {
    function renderStarRating() {
      let starRating = "";
      if (singleBusiness.rating === 5) {
        starRating = '<img src="img/regular_5.png">';
      } else if (singleBusiness.rating === 4.5) {
        starRating = '<img src="img/regular_4_half.png">';
      } else if (singleBusiness.rating === 4) {
        starRating = '<img src="img/regular_4.png">';
      } else if (singleBusiness.rating === 3.5) {
        starRating = '<img src="img/regular_3_half.png">';
      } else if (singleBusiness.rating === 3) {
        starRating = '<img src="img/regular_3.png">';
      } else if (singleBusiness.rating === 2.5) {
        starRating = '<img src="img/regular_2_half.png">';
      } else if (singleBusiness.rating === 2) {
        starRating = '<img src="img/regular_2.png">';
      } else if (singleBusiness.rating === 1.5) {
        starRating = '<img src="img/regular_1_half.png">';
      } else if (singleBusiness.rating === 1) {
        starRating = '<img src="img/regular_1.png">';
      } else {
        starRating = '<img src="img/regular_0.png">';
      }
      return starRating;
    }
    function renderPriceRange() {
      let priceRange = "";
      if (singleBusiness.price === "$$$$") {
        priceRange = '<span class="badge badge-pill badge-success">$$$$</span>';
      } else if (singleBusiness.price === "$$$") {
        priceRange = '<span class="badge badge-pill badge-success">$$$</span>';
      } else if (singleBusiness.price === "$$") {
        priceRange = '<span class="badge badge-pill badge-success">$$</span>';
      } else {
        priceRange = '<span class="badge badge-pill badge-success">$</span>';
      }
      return priceRange;
    }
    return `          
        <div id='card' class='card mb-3'>
            <div class="row no-gutters">
                <div class="col-md-3">
                    <a href="${singleBusiness.url}"><div class='business-img card-img rounded' style="background-image: url(${singleBusiness.image_url})"></div></a>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <a href="${
                          singleBusiness.url
                        }"><h5 class='card-title'>${singleBusiness.name}</h5></a>
                        <p id='price-review'>${renderPriceRange()} • ${renderStarRating()} • ${singleBusiness.review_count} reviews XXX</p>
                        <p>${singleBusiness.location.display_address.join(
                          "<br>"
                        )}
                    </div>
                </div>
            </div>
        </div>
        `;
  });
  return businessHtml.join("");
}

function insertHtmlIntoContainer (yelpSearchResults) {
  const bodyContainer = document.getElementById("output");
  bodyContainer.innerHTML = "";
  placeMapboxMarkers(yelpSearchResults)
  ajaxResponse = yelpSearchResults.businesses;
  bodyContainer.innerHTML = createYelpResultsHtml(ajaxResponse);
}

document.getElementById("search-form").addEventListener("submit", function(e) {
  e.preventDefault();
  yelpAjax()
    .then(insertHtmlIntoContainer);
});