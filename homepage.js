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
            // Renders out the star rating based on number rating from json data
            function renderStarRating () {
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

    // $("card-img").hover(
    //     function () {
    //         $(this).css("display","none")
    //     }, function () {
    //         $(this).removeClass("display","block")
    //     }
    // )

    // $(".container").on("click", function(event){
    //     console.log(event.target)
    //     $('.card').addClass('shadow')
    // })
})