// javascript info
$(document).ready(function() {
    let apiKey = 'Bearer fpfUJj8DFp_jm-n0LNi5U4WL9AgyD3G2ieoAPAYccY2QUi-1ZCXSuHoa0uEaPY60BInSS_COQHHlqWp0VeKDOcgdPBHn9lYSC1_r6mJCI3y8aU63IHNfK6Lhr3xhXXYx';
    let corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com'
    let yelpSearchurl = 'https://api.yelp.com/v3/businesses/search';

    let searchText = document.getElementById('search').value
    console.log('gimeeeee', searchText)
    

    let requestObj = {
        url: corsAnywhereUrl + '/' + yelpSearchurl,
        data: {term: 'happy hour', location: urlEncodedSearchString},
        headers: {'Authorization': apiKey},
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('AJAX error, jqXHR =', jqXHR, ', textStatus = ',
                textStatus, ', errorThrown = ', errorThrown)
        }
    }

    

    document.getElementById('yelp-search').addEventListener('submit', function (e) {
        e.preventDefault();
        let form = e.target;
        let formValue = form[0].value
        let urlEncodedSearchString = encodeURIComponent(formValue)
        console.log('~~~~', urlEncodedSearchString)

        $.ajax(requestObj)
        .done(function(response) {
            let searchObject = []
           
            for(let i = 0; i < response.businesses.length; i++) {
                let location = response.businesses[i]
                console.log('this is location', location)
                searchObject.push(location)
            }
            console.log('this is location', searchObject)
            console.log('this is the searchObject', searchObject)
            console.log('whats this', response.businesses[0].location)
            console.log('typeof response = ' + typeof response)
            console.log('response = ', response)
        })


    });

    })

    // $.ajax(requestObj)
    //     .done(function(response) {
    //         console.log('typeof response = ' + typeof response)
    //         console.log('response = ', response)
    //     })


  