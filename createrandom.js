function createme(){
    $.ajax({
	url: 'https://randomuser.me/api/?results=150',
	dataType: 'json',
	success: function(data){
	    var member = new JSONObject();
	    for (var i = 0; i < data.results.length; i++){
		console.log(data.results[i].user.name);
		members
	    }
	    
	}
    });
}

function generate_coord(){
    var nord =  49.068035;
    var sud = 48.623720;
    var ouest = 1.400993;
    var est = 2.867668;
}

