let ajaxResponse = null
const searchTerm = 'happy hour'
// let location = ''

const map = L.mapbox.map('map')

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault()

    var location = document.getElementById('search-bar').value
    var urlEncodedSearchString = encodeURIComponent(location)
    const yelpApiKey = 'Bearer fpfUJj8DFp_jm-n0LNi5U4WL9AgyD3G2ieoAPAYccY2QUi-1ZCXSuHoa0uEaPY60BInSS_COQHHlqWp0VeKDOcgdPBHn9lYSC1_r6mJCI3y8aU63IHNfK6Lhr3xhXXYx'
    const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/'

    var yelpAjaxRequest = {
      url: `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}`,
      headers: { Authorization: `${yelpApiKey}` }
    }

    $.ajax(yelpAjaxRequest)
      .then(function (response) {
        const bodyContainer = document.querySelector('.barContainer')
        bodyContainer.innerHTML = ''
        // console.log('This is returned from the AJAX request: ',response)
        L.mapbox.accessToken = 'pk.eyJ1Ijoic3VlcGFyazA5IiwiYSI6ImNqenJmdGxoNzBqengzbW8zeDlmNnhudHEifQ.NvYx9iu9NUGdvDdYdWNg-A'
        const viewCoordinate = response.businesses[0].coordinates
        map
          .setView([viewCoordinate.latitude, viewCoordinate.longitude], 11)
          .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'))

        // if there are markers already on the map, remove the markers,
        // else add the markers from the results
        // find a way to check if the map is empty or not
        // if (map) {

        // }

        const currentMarkers = []

        if (currentMarkers !== null) {
          for (let i = 0; i < currentMarkers.length; i++) {
          }
        }

        console.log('Whats thiss', currentMarkers)
        console.log('length of currentMarkers', currentMarkers.length)

        currentMarkers.forEach(function (item) {
          console.log(item)
        })

        for (let i = 0; i < response.businesses.length; i++) {
          const coordinate = response.businesses[i].coordinates
          const singleBusiness = response.businesses[i]

          const singleMarker = L.marker([coordinate.latitude, coordinate.longitude],
            { title: singleBusiness.name }).addTo(map).bindPopup(`
                            <div class="img"><img src="${singleBusiness.image_url}" height="50px"></div>
                            <h4>${singleBusiness.name}</h4>
                            ${singleBusiness.location.display_address.join('<br>')}         
                        `)

          currentMarkers.push(singleMarker)
        }

        ajaxResponse = response.businesses
        bodyContainer.innerHTML = createYelpResultsHtml(ajaxResponse)
        // console.log('This is saved into the empty array: ', ajaxResponse)
      })
  })
})

function createYelpResultsHtml (yelpSearchResults) {
  console.log('begin yelp func')
  // console.log(yelpSearchResults);
  const businessHtml = yelpSearchResults.map(function (singleBusiness) {
    // Renders out the star rating based on number rating from json data
    function renderStarRating () {
      let starRating = ''
      if (singleBusiness.rating === 5) {
        starRating = '<img src="img/regular_5.png">'
      } else if (singleBusiness.rating === 4.5) {
        starRating = '<img src="img/regular_4_half.png">'
      } else if (singleBusiness.rating === 4) {
        starRating = '<img src="img/regular_4.png">'
      } else if (singleBusiness.rating === 3.5) {
        starRating = '<img src="img/regular_3_half.png">'
      } else if (singleBusiness.rating === 3) {
        starRating = '<img src="img/regular_3.png">'
      } else if (singleBusiness.rating === 2.5) {
        starRating = '<img src="img/regular_2_half.png">'
      } else if (singleBusiness.rating === 2) {
        starRating = '<img src="img/regular_2.png">'
      } else if (singleBusiness.rating === 1.5) {
        starRating = '<img src="img/regular_1_half.png">'
      } else if (singleBusiness.rating === 1) {
        starRating = '<img src="img/regular_1.png">'
      } else {
        starRating = '<img src="img/regular_0.png">'
      }
      return starRating
    }
    // Renders out the dollar signs for price range
    function renderPriceRange () {
      let priceRange = ''
      if (singleBusiness.price === '$$$$') {
        priceRange = '<span class="badge badge-pill badge-success">$$$$</span>'
      } else if (singleBusiness.price === '$$$') {
        priceRange = '<span class="badge badge-pill badge-success">$$$</span>'
      } else if (singleBusiness.price === '$$') {
        priceRange = '<span class="badge badge-pill badge-success">$$</span>'
      } else {
        priceRange = '<span class="badge badge-pill badge-success">$</span>'
      }
      return priceRange
    }
    // Returns the html for each business
    return `          
        <div id='card' class='card mb-3'>
            <div class="row no-gutters">
                <div class="col-md-3">
                    <a href="${singleBusiness.url}"><img class='business-img card-img rounded' src='${singleBusiness.image_url}'></a>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <a href="${singleBusiness.url}"><h5 class='card-title'>${singleBusiness.name}</h5></a>
                        <p id='price-review'>${renderPriceRange()} • ${renderStarRating()} • ${singleBusiness.review_count} reviews</p>
                        <p>${singleBusiness.location.display_address[0]}<br>${singleBusiness.location.display_address[2]}</p>
                    </div>
                </div>
            </div>
        </div>
        `
  })
  return businessHtml.join('')
}
