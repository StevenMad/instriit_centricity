window.onload=function(){
    var xmlhttp = new XMLHttpRequest();
    var url = "../data/membres.json";
    xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readystate == 4 && smlhttp.status == 200) {
	    var myArr = Json.parse(xmlhttp.responseText);
	    alert("c'est bon");
	}else
	{
	    alert("fichier introuvable ou impossible de l'ouvrir");
	}
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
