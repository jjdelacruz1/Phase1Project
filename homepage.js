let ajaxResponse = null
let searchTerm = 'happy hour'
// let location = ''

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault();
        var location = document.getElementById('search-bar').value
        var urlEncodedSearchString = encodeURIComponent(location)
        let yelpApiKey = 'Bearer fpfUJj8DFp_jm-n0LNi5U4WL9AgyD3G2ieoAPAYccY2QUi-1ZCXSuHoa0uEaPY60BInSS_COQHHlqWp0VeKDOcgdPBHn9lYSC1_r6mJCI3y8aU63IHNfK6Lhr3xhXXYx'
    let corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/'

    var yelpAjaxRequest = {
        url: `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}`,
        headers: {Authorization: `${yelpApiKey}`}
    }
    
    $.ajax(yelpAjaxRequest)
        .then(function (response) {
            console.log('This is returned from the AJAX request: ',response)
            ajaxResponse = response.businesses
            let bodyContainer = document.querySelector('.barContainer')
            bodyContainer.innerHTML = createYelpResultsHtml(ajaxResponse)
            //console.log('This is saved into the empty array: ', ajaxResponse)
    });
    })
})

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