function yoy_growth(series, date_obj){	
	var target_date = new Date(date_obj.date);
	target_date.setDate(target_date.getDate() - 365);
	var yoy = series.sort(function(a,b){
		var distancea = Math.abs(target_date - new Date(a.date));
    	var distanceb = Math.abs(target_date - new Date(b.date));
    	return distancea - distanceb;
	})[0];
	

	if(yoy.perc == 0) return 0;
	return (date_obj.perc - yoy.perc) / yoy.perc;
}

function mom_growth(series, date_obj){	
	var target_date = new Date(date_obj.date);
	target_date.setDate(target_date.getDate() - 31);
	var mom = series.sort(function(a,b){
		var distancea = Math.abs(target_date - new Date(a.date));
    	var distanceb = Math.abs(target_date - new Date(b.date));
    	return distancea - distanceb;
	})[0];
	

	if(mom.perc == 0) return 0;
	return (date_obj.perc - mom.perc) / mom.perc;
}