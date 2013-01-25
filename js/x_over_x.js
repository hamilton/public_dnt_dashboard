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
	target_date.setDate(target_date.getDate() - 30);
	var yoy = series.sort(function(a,b){
		var distancea = Math.abs(target_date - new Date(a.date));
    	var distanceb = Math.abs(target_date - new Date(b.date));
    	return distancea - distanceb;
	})[0];
	
	if(yoy.perc == 0) return 0;
	
	return (date_obj.perc - yoy.perc) / yoy.perc;
}

/*d3.json('data/ff_dnt_perc_monthly.json',function(monthly){
	// get max date
	var last = monthly[monthly.length-1];
	console.log('monthly', yoy_growth(monthly, last))
})

d3.json('data/ff_dnt_perc_weekly.json', function(weekly){
	var last = weekly[weekly.length-1];
	console.log('weekly', yoy_growth(weekly, last));
})*/