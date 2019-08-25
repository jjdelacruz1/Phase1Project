// javascript info
// $(document).ready(function() {
    let apiKey = 'Bearer fpfUJj8DFp_jm-n0LNi5U4WL9AgyD3G2ieoAPAYccY2QUi-1ZCXSuHoa0uEaPY60BInSS_COQHHlqWp0VeKDOcgdPBHn9lYSC1_r6mJCI3y8aU63IHNfK6Lhr3xhXXYx';
    let corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com'
    let yelpSearchurl = 'https://api.yelp.com/v3/businesses/search';
    let requestObj = {
        url: corsAnywhereUrl + '/' + yelpSearchurl,
        data: {term: 'happy hour', location: '77024'},
        headers: {'Authorization': apiKey},
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('AJAX error, jqXHR =', jqXHR, ', textStatus = ',
                textStatus, ', errorThrown = ', errorThrown)
        }
    }

    console.log('bambs')
    $.ajax(requestObj)
        .done(function(response) {
            console.log('typeof response = ' + typeof response)
            console.log('response = ', response)
        })


    // });