// let ajaxResponse = null
// const searchTerm = 'happy hour'
//console.log('fuuuuuuuuu')
// let location = ''

// const map = L.mapbox.map('map')

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault()
    var location = document.getElementById('search-bar').value
    let form = e.target;
    let formValue = form[0].value
    console.log('search value',form)
    //var urlEncodedSearchString = encodeURIComponent(formValue)
    const yelpApiKey = 'Bearer fpfUJj8DFp_jm-n0LNi5U4WL9AgyD3G2ieoAPAYccY2QUi-1ZCXSuHoa0uEaPY60BInSS_COQHHlqWp0VeKDOcgdPBHn9lYSC1_r6mJCI3y8aU63IHNfK6Lhr3xhXXYx'
    const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/'

    var yelpAjaxRequest = {
      url: `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}&limit=10`,
      headers: { Authorization: `${yelpApiKey}` }
    }

    $.ajax(yelpAjaxRequest)
      .then(function (response) {
        const bodyContainer = document.getElementById('output')
        bodyContainer.innerHTML = ''
        // console.log('This is returned from the AJAX request: ',response)
        L.mapbox.accessToken = 'pk.eyJ1Ijoic3VlcGFyazA5IiwiYSI6ImNqenJmdGxoNzBqengzbW8zeDlmNnhudHEifQ.NvYx9iu9NUGdvDdYdWNg-A'
        const viewCoordinate = response.businesses[0].coordinates
        map
          .setView([viewCoordinate.latitude, viewCoordinate.longitude], 11)
          .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/light-v10'))


        for (let i = 0; i < response.businesses.length; i++) {
          const coordinate = response.businesses[i].coordinates
          const singleBusiness = response.businesses[i]

          const marker = L.marker([coordinate.latitude, coordinate.longitude],
            { title: singleBusiness.name }).addTo(map)
            .bindPopup(`
                            <div class="img"><img src="${singleBusiness.image_url}" height="50px"></div>
                            <h4>${singleBusiness.name}</h4>
                            ${singleBusiness.location.display_address.join('<br>')}         
                        `)

                        marker.on('mouseover', function (e) {
                            this.openPopup();
                          });
                          marker.on('mouseout', function (e) {
                            this.closePopup();
                          });
        //   markers.push(singleMarker)
        }

        ajaxResponse = response.businesses
        bodyContainer.innerHTML = createYelpResultsHtml(ajaxResponse)
        // console.log('This is saved into the empty array: ', ajaxResponse)
      })
  })
})

function createYelpResultsHtml (yelpSearchResults) {
  //console.log('begin yelp func')
  //console.log(yelpSearchResults);
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



// function navigationStyling (navigation) {
    
//     return `

//             <div id="navigation">
//                 <div><img src="${navigation.logo}" height="50px"></div>
//                 <input></input>
//             </div>
      
//     `
// }


// function renderNavigation(navigation) {
//     let viewNavigation = [];

//     for (let i = 0; i < navigation.length; i++) {
//         let singleRestaurant = navigationStyling(navigation[i]);
//         viewNavigation.push(singleRestaurant);
//     }

//     return viewNavigation.join("");
// }

// //create function with styles for the grey box
// //inside that div, put another div for the heder style, and a div for the food type, and dollar sign

// //create function that loops through restaurant function and applies style for each thing


// function navigation() {
//     var container = document.getElementById('nav-container');

//     var navigationAbstraction = [
//         {
//             logo: "placeholder.png",
//         }
//     ];

//     container.innerHTML = renderNavigation(navigationAbstraction);

// }


   
