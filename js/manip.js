var map;
	var latitude;
	var longitude;
	
	function init(){
	    var accessToken = "pk.eyJ1IjoiaXNoaWp1IiwiYSI6ImNpaGRpNXh3MTAwMm11OW00Mmd5NHE1bXkifQ.5VJtYHibmT3X-aEQSKz1Ag";
	    map = L.map('map').setView([latitude,longitude], 15);
	    L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token='+accessToken).addTo(map);
	    var circle = L.circle([latitude, longitude], 1000, {
	    color: 'yellow',
	    fillColor: '#0FFD37',
	    fillOpacity: 0.5
	    }).addTo(map);
	    var LeafIcon = L.Icon.extend({
	     options: {
	        shadowUrl: 'http://wikipics.net/photos/20150125142221651988185.jpg',
	        iconSize:     [38, 95],
	        shadowSize:   [50, 64],
	        iconAnchor:   [22, 94],
	        shadowAnchor: [4, 62],
	        popupAnchor:  [-3, -76]
	        }
	    });
	 
	    var greenIcon = new LeafIcon({iconUrl: 'http://wikipics.net/photos/20150125142221651988185.jpg'});
	    L.marker([48.889579, 2.320540], {icon: greenIcon}).addTo(map).bindPopup("I am a green leaf.");
	    L.marker([latitude,longitude]).addTo(map).bindPopup("<b>Vous êtes ici</b>");
	
	    var $link = '<a href="#" class="link">chat</a>';
    $.get("js/membres.json",function (data){
        for(var $i = 0;$i < data.membres.length;$i++){
            var $chaine = "";
	    
            $chaine += data.membres[$i].nom + "<br /> " + data.membres[$i].prenom + "<br />" + data.membres[$i].age + " ans <br />" + $link;
            L.marker(data.membres[$i].coordinates).addTo(map) .bindPopup($chaine); 
        }
    });
	    $('body').on('click', '.link', function() {
		$("#container").show();
		//return false;
	    });
	    
	}   
	var ok;
	window.onload = function(){
	    geolocate();
	    ok = true;
	}
	
	function geolocate(){
	    if(navigator.geolocation){
		navigator.geolocation.watchPosition(showPosition);
	    }else{
		console.log("erreur");
	    }
	}
	
	function showPosition(position){
	    latitude = position.coords.latitude;
	    longitude = position.coords.longitude;
	    if (ok)
	    {
	        init();
	        ok = false;
	    }
	}
