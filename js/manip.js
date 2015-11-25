window.onload = function(){
    var accessToken = "pk.eyJ1IjoiaXNoaWp1IiwiYSI6ImNpaGRpNXh3MTAwMm11OW00Mmd5NHE1bXkifQ.5VJtYHibmT3X-aEQSKz1Ag";
    var map = L.map('map').setView([48.852966, 2.349902], 14);
    L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token='+accessToken).addTo(map);
    L.marker([48.810718, 2.384341]).addTo(map) .bindPopup("<b>Thiery ici</b>");
    L.marker([48.831366, 2.355818]).addTo(map) .bindPopup("<b>Henri ici</b>"); 
    L.marker([48.831405, 2.355545]).addTo(map) .bindPopup("<b>Henri ici</b>"); 
    L.marker([48.834115, 2.354413]).addTo(map) .bindPopup("<b>Henri ici</b>"); 
    L.marker([48.889579, 2.320540]).addTo(map) .bindPopup("<b>Henri ici</b>"); 
    L.marker([48.874001, 2.292688]).addTo(map) .bindPopup("<b>Henri ici</b>"); 
    L.marker([48.865871, 2.416285]).addTo(map) .bindPopup("<b>Henri ici</b>"); 
    L.marker([48.892965, 2.320154]).addTo(map) .bindPopup("<b>Henri ici</b>"); 
    L.marker([48.715685, 2.041376]).addTo(map) .bindPopup("<b>Henri ici</b>"); 
}
