$(document).ready(function(){
    $("#button1").click(function(){
        $("#input").val();

    });
});

// //http://api.flickr.com/services/rest/?&method=flickr.photos.geo.getLocation&api_key=e793c419bc56c416811f61d4bb3104e3&format=json
// function getFlickrPhotos(map, searchLat, searchLon) {

//   var FLICKR_API_KEY = 'e793c419bc56c416811f61d4bb3104e3';

//   var searchUrl = "http://api.flickr.com/services/rest/?method=flickr.photos.search&";

//   var searchReqParams = {
//     'api_key': FLICKR_API_KEY,
//     'tags': 'monument,statue,historical',
//     'has_geo': true,
//     'lat': searchLat,
//     'lon': searchLon,
//     //'place_id': place.place_id,
//     'accuracy': 11,
//     'format': 'json',
//     'safe_search': 1,
//     'privacy_filter': 1,
//     'per_page': 10
//   }