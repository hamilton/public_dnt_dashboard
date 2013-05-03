"use strict";

var desktop_or_mobile = "ff",
	date_granularity = "monthly";
	
$(document).ready(function () {	
	assignEventListeners();
	drawCharts("ff_dnt_perc_monthly.json");
});

function assignEventListeners() {
	$("#page").on("mouseleave", function() {
		$("#tooltip").fadeOut("fast");
	});
	
	$("#desktop").on("click", function() {
		$("#tooltip").fadeOut();
		shift_selected("desktop", "platform");
		desktop_or_mobile = "ff";
		drawCharts(desktop_or_mobile + "_dnt_perc_" + date_granularity + ".json");
		
		return false;
	});
	
	$("#mobile").on("click", function() {
		$("#tooltip").fadeOut();
		shift_selected("mobile", "platform");
		
		desktop_or_mobile = "fennec";
		drawCharts(desktop_or_mobile + "_dnt_perc_" + date_granularity + ".json");
		
		return false;
	});
	
	$("#tooltip").on("click", function() {
		$(this).fadeOut();
	});
}

function shift_selected(option, platform_or_granularity) {
	if(platform_or_granularity == "granularity") {
		$("#dnt_perc_monthly").html("MONTHLY");
		$("#dnt_perc_" + option).html("<span class='selected_option'>" + option.toUpperCase() + "</span>");
	}
	else if(platform_or_granularity == "platform") {
		$("#desktop").html("DESKTOP");
		$("#mobile").html("MOBILE");
		
		$("#" + option).html("<span class='selected_option'>" + option.toUpperCase() + "</span>");
	}
}
function drawCharts(json) {
	d3.json("data/annotations.json", function(annotations) {
	d3.json("data/" + json, function(data) {
		var format = "%",
			humanify_numbers = false,
			custom_units = "",
			splice_from = 0,
			show_confidence = false;

		draw(data.GLOBAL, "#trend", format, humanify_numbers, custom_units, splice_from, annotations, show_confidence);
	});
	});
}