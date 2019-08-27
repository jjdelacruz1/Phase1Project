let ajaxResponse = null

window.addEventListener('DOMContentLoaded', function () {

    L.mapbox.accessToken = 'pk.eyJ1Ijoic3VlcGFyazA5IiwiYSI6ImNqenJmdGxoNzBqengzbW8zeDlmNnhudHEifQ.NvYx9iu9NUGdvDdYdWNg-A';

    let map = L.mapbox.map('map')
    .setView([29.76328, -95.36327], 12)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
    

    let searchTerm = 'sushi'
    let zipCode = '77007'
    let yelpApiKey = 'Bearer fpfUJj8DFp_jm-n0LNi5U4WL9AgyD3G2ieoAPAYccY2QUi-1ZCXSuHoa0uEaPY60BInSS_COQHHlqWp0VeKDOcgdPBHn9lYSC1_r6mJCI3y8aU63IHNfK6Lhr3xhXXYx'
    let corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/'

    var yelpAjaxRequest = {
        url: `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${zipCode}`,
        headers: {Authorization: `${yelpApiKey}`}
    }
    
    $.ajax(yelpAjaxRequest)
        .then(function (response) {
            console.log('This is returned from the AJAX request: ',response)
            //Code for the map markers and popup
            for (let i = 0; i < response.businesses.length; i++) {
                let coordinate = response.businesses[i].coordinates;
                let singleBusiness = response.businesses[i];
                L.marker([coordinate.latitude, coordinate.longitude], 
                    {title: singleBusiness.name}).addTo(map)
                    .bindPopup(`
                            <div class="img"><img src="${singleBusiness.image_url}" height="50px"></div>
                            <h4>${singleBusiness.name}</h4>
                            ${singleBusiness.location.display_address.join("<br>")}         
                        `);
            }
           

            ajaxResponse = response.businesses
            let bodyContainer = document.querySelector('.container')
            bodyContainer.innerHTML = createYelpResultsHtml(ajaxResponse)
            //console.log('This is saved into the empty array: ', ajaxResponse)
    });

   
    function createYelpResultsHtml (yelpSearchResults) {
        let businessHtml = yelpSearchResults.map(function (singleBusiness) {

            return `<div class='card'></div><img class='card-image-top' style="width: 200px;" src='${singleBusiness.image_url}'>
            <div class='body'>
            <h5 class='card-title'>${singleBusiness.name}</h5>
            </div>
            `
        })
        return businessHtml.join('')
    }


   
})