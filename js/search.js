mapboxgl.accessToken = 'pk.eyJ1IjoiZ29vZGZlZWwiLCJhIjoiY2s1dHA1Z2liMGpqZzNkb2d2OHJ4eXM5MSJ9.vLijYb7858NU_ZrsmGBGSg';


var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [ 77.261105,28.678533], // starting position [lng, lat]
zoom: 17, // starting zoom

});

//Navigation control gives compass and zoom in and zoom out options
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-right');



//Location track - Problem - not really working - try on google chrome - i have firefox
// map.addControl(

//     new mapboxgl.GeolocateControl({
//         positionOptions:{
//             enableHighAccuracy:true
//         },
//         trackUserlocation:true,
//         showUserlocation:true
//     })
// )


