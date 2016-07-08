// JavaScript File

      function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.82827, lng: -98.5795},
    scrollwheel: false,
    zoom: 5
  });
}

$(document).ready(function() {
  $('#search').click(function() {
    var answer = $("#input").val();
      
    var flickrAPIUrl = "https://api.flickr.com/services/rest/?" +
            "&method=flickr.photos.search" +
            "&api_key=e793c419bc56c416811f61d4bb3104e3" +
            "&tags=" + answer +
            "&has_geo=1" +
            "&extras=geo" +
            "&format=json" +
            "&jsoncallback=?";
    var photo = [];
    
    $.getJSON(flickrAPIUrl, function(data, status){
      var owner = data.photos.photo[1].owner;
      var id = data.photos.photo[1].id;
      var url = 'http://www.flickr.com/photos/';
      var image = url + "/" + owner + "/" + id; 
            console.log(url + "/" + owner + "/" + id);
      $('#image').prepend('<img id="theImg" src=image />');      
    });
    
    
      
         
  });


});

