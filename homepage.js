let ajaxResponse = null;

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
            // let openStatus = ''
            // if (singleBusiness.is_closed === false) {
            //     openStatus = '<a href="#" class="badge badge-success">Open</a>'
            // } else {
            //     openStatus = '<a href="#" class="badge badge-secondary">Closed</a>'
            // }
            let starRating = ''
            if (singleBusiness.rating === 5) {
                starRating = '<img src="/img/regular_5.png">'
            } else if (singleBusiness.rating === 4.5) {
                starRating = '<img src="/img/regular_4_half.png">'
            } else if (singleBusiness.rating === 4) {
                starRating = '<img src="/img/regular_4.png">'
            } else if (singleBusiness.rating === 3.5) {
                starRating = '<img src="/img/regular_3_half.png">'
            } else if (singleBusiness.rating === 3) {
                starRating = '<img src="/img/regular_3.png">'
            } else if (singleBusiness.rating === 2.5) {
                starRating = '<img src="/img/regular_2_half.png">'
            } else if (singleBusiness.rating === 2) {
                starRating = '<img src="/img/regular_2.png">'
            } else if (singleBusiness.rating === 1.5) {
                starRating = '<img src="/img/regular_1_half.png">'
            } else if (singleBusiness.rating === 1) {
                starRating = '<img src="/img/regular_1.png">'
            } else {
                starRating = '<img src="/img/regular_0.png">'
            }
            return `          
            <div class='card mb-3'>
                <div class="row no-gutters">
                    <div class="col-md-3">
                        <a href="${singleBusiness.url}"><img class='business-img card-img rounded' src='${singleBusiness.image_url}'></a>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <a href="${singleBusiness.url}"><h5 class='card-title'>${singleBusiness.name}</h5></a>
                            <p id='price-review'>${singleBusiness.price} • ${starRating} • ${singleBusiness.review_count} reviews</p>
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