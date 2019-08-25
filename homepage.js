let ajaxResponse = null

window.addEventListener('DOMContentLoaded', function () {
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
            ajaxResponse = response.businesses
            let bodyContainer = document.querySelector('.container')
            bodyContainer.innerHTML = createYelpResultsHtml(ajaxResponse)
            //console.log('This is saved into the empty array: ', ajaxResponse)
    });

    function createYelpResultsHtml (yelpSearchResults) {
        let businessHtml = yelpSearchResults.map(function (singleBusiness) {
            return `          
            <div class='card mb-3'>
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img class='card-img' src='${singleBusiness.image_url}'>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h3 class='card-title'>${singleBusiness.name}</h3>
                        <p>${singleBusiness.location.display_address[0]}<br>${singleBusiness.location.display_address[2]}</p>
                    </div>
                    </div>
                    </div>
                    </div>
            `
        })
        return businessHtml.join('')
    }
})