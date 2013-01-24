"use strict";

var LANG,
	desktop_or_mobile = "ff",
	date_granularity = "weekly";

$(document).ready(function () {	
	//provide lang literals globally
	d3.json("lang/en_US.json", function(data) {
		LANG = data;
		
		//other initializations
		$("input, textarea, select").uniform();
		assignEventListeners();
		drawCharts("ff_dnt_perc_weekly.json");
	});
});

//TODO clean up; put in separate function
function assignEventListeners() {
	$("#desktop").on("click", function() {
		shift_selected("desktop", "platform");
		desktop_or_mobile = "ff";
		drawCharts(desktop_or_mobile + "_dnt_perc_" + date_granularity + ".json");
	});
	
	$("#mobile").on("click", function() {
		shift_selected("mobile", "platform");
		
		desktop_or_mobile = "fennec";
		drawCharts(desktop_or_mobile + "_dnt_perc_" + date_granularity + ".json");
	});
	
	$("#dnt_perc_daily").on("click", function() {
		shift_selected("daily", "granularity");
		date_granularity = "daily";
		drawCharts(desktop_or_mobile + "_dnt_perc_daily.json");
	});
	
	$("#dnt_perc_weekly").on("click", function() {
		shift_selected("weekly", "granularity");
		date_granularity = "weekly";
		drawCharts(desktop_or_mobile + "_dnt_perc_weekly.json");
	});
	
	$("#dnt_perc_monthly").on("click", function() {
		shift_selected("monthly", "granularity");
		date_granularity = "monthly";
		drawCharts(desktop_or_mobile + "_dnt_perc_monthly.json");
	});
}

function shift_selected(option, platform_or_granularity) {
	if(platform_or_granularity == "granularity") {
		$("#dnt_perc_daily").html("DAILY");
		$("#dnt_perc_weekly").html("WEEKLY");
		$("#dnt_perc_monthly").html("MONTHLY");

		$("#dnt_perc_" + option).html("<span class='selected_option'>" + option.toUpperCase() + "</span>");
	}
	else if(platform_or_granularity == "platform") {
		$("#desktop").html("DESKTOP");
		$("#mobile").html("MOBILE");
		
		$("#" + option).html("<span class='selected_option'>" + option.toUpperCase() + "</span>");
	}
}

function drawCharts(json) {console.log(json);
	d3.json("data/annotations.json", function(annotations) {
	d3.json("data/" + json, function(data) {
		var format = "%",
			humanify_numbers = false,
			custom_units = "",
			splice_from = 0,
			show_confidence = false;
				
			draw(data, "#trend", format, humanify_numbers, custom_units, splice_from, annotations, show_confidence);
	});
	});
}

function addCommas(nStr) {
	nStr += '';
	var x = nStr.split('.');
	var x1 = x[0];
	var x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function getHumanSize(size) {
	var sizePrefixes = ' kmbtpezyxwvu';
	if(size <= 0) return '0';
	var t2 = Math.min(Math.floor(Math.log(size)/Math.log(1000)), 12);
	return (Math.round(size * 100 / Math.pow(1000, t2)) / 100) +
	//return (Math.round(size * 10 / Math.pow(1000, t2)) / 10) +
		sizePrefixes.charAt(t2).replace(' ', '');
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}