window.onload = function(){
    var accessToken = "pk.eyJ1IjoiaXNoaWp1IiwiYSI6ImNpaGRpNXh3MTAwMm11OW00Mmd5NHE1bXkifQ.5VJtYHibmT3X-aEQSKz1Ag";
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token='+accessToken).addTo(map);

}
