document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault();
        sessionStorage.clear()
        var location = document.getElementById('search-bar').value
        sessionStorage.setItem('location',location)
    })
})