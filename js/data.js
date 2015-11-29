window.onload=function(){
    $.get("local.geojson",function (data){
	var mydata=$.parseJSON(data);
	console.log(mydata.features[0].geometry.coordinates[0][0]);
	for(var $i = 0;$i < mydata.features.length;$i++){
	    console.log(mydata.features[$i].geometry.coordinates[0][0]);
	}
    });
}
