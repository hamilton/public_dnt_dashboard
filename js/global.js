"use strict";

var LANG,
	desktop_or_mobile = "ff",
	desktop_or_mobile2 = "ff",
	date_granularity = "weekly";
	/*data_ff_state,
	data_fennec_state,
	data_ff_country,
	data_fennec_country;*/

var yStateCoords = new Object();
	yStateCoords['AL'] = [0,0];
	yStateCoords['AK'] = [0,0];
	yStateCoords['AZ'] = [0,0];
	yStateCoords['AR'] = [0,0];
	yStateCoords['CA'] = [0,0];
	yStateCoords['CO'] = [0,0];
	yStateCoords['CT'] = [0,0];
	yStateCoords['DE'] = [0,0];
	yStateCoords['DC'] = [0,0];
	yStateCoords['FL'] = [0,0];
	yStateCoords['GA'] = [0,0];
	yStateCoords['HI'] = [0,0];
	yStateCoords['ID'] = [0,0];
	yStateCoords['IL'] = [0,0];
	yStateCoords['IN'] = [0,0];
	yStateCoords['IA'] = [0,0];
	yStateCoords['KS'] = [0,0];
	yStateCoords['KY'] = [0,0];
	yStateCoords['LA'] = [0,0];
	yStateCoords['ME'] = [0,0];
	yStateCoords['MD'] = [0,0];
	yStateCoords['MA'] = [0,0];
	yStateCoords['MI'] = [0,0];
	yStateCoords['MN'] = [0,0];
	yStateCoords['MS'] = [0,0];
	yStateCoords['MO'] = [0,0];
	yStateCoords['MT'] = [0,0];
	yStateCoords['NE'] = [0,0];
	yStateCoords['NV'] = [0,0];
	yStateCoords['NH'] = [0,0];
	yStateCoords['NJ'] = [0,0];
	yStateCoords['NM'] = [0,0];
	yStateCoords['NY'] = [0,0];
	yStateCoords['NC'] = [0,0];
	yStateCoords['ND'] = [0,0];
	yStateCoords['OH'] = [0,0];
	yStateCoords['OK'] = [0,0];
	yStateCoords['OR'] = [-140,40];
	yStateCoords['PA'] = [0,0];
	yStateCoords['RI'] = [0,0];
	yStateCoords['SC'] = [0,0];
	yStateCoords['SD'] = [0,0];
	yStateCoords['TN'] = [0,0];
	yStateCoords['TX'] = [0,0];
	yStateCoords['UT'] = [0,0];
	yStateCoords['VT'] = [0,0];
	yStateCoords['VA'] = [0,0];
	yStateCoords['WA'] = [-140,0];
	yStateCoords['WV'] = [0,0];
	yStateCoords['WI'] = [0,0];
	yStateCoords['WY'] = [0,0];
		
var state = new Object();
	state['AL'] = "Alabama";
	state['AK'] = "Alaska";
	state['AZ'] = "Arizona";
	state['AR'] = "Arkansas";
	state['CA'] = "California";
	state['CO'] = "Colorado";
	state['CT'] = "Connecticut";
	state['DE'] = "Delaware";
	state['DC'] = "District Of Columbia";
	state['FL'] = "Florida";
	state['GA'] = "Georgia";
	state['HI'] = "Hawaii";
	state['ID'] = "Idaho";
	state['IL'] = "Illinois";
	state['IN'] = "Indiana";
	state['IA'] = "Iowa";
	state['KS'] = "Kansas";
	state['KY'] = "Kentucky";
	state['LA'] = "Louisiana";
	state['ME'] = "Maine";
	state['MD'] = "Maryland";
	state['MA'] = "Massachusetts";
	state['MI'] = "Michigan";
	state['MN'] = "Minnesota";
	state['MS'] = "Mississippi";
	state['MO'] = "Missouri";
	state['MT'] = "Montana";
	state['NE'] = "Nebraska";
	state['NV'] = "Nevada";
	state['NH'] = "New Hampshire";
	state['NJ'] = "New Jersey";
	state['NM'] = "New Mexico";
	state['NY'] = "New York";
	state['NC'] = "North Carolina";
	state['ND'] = "North Dakota";
	state['OH'] = "Ohio";
	state['OK'] = "Oklahoma";
	state['OR'] = "Oregon";
	state['PA'] = "Pennsylvania";
	state['RI'] = "Rhode Island";
	state['SC'] = "South Carolina";
	state['SD'] = "South Dakota";
	state['TN'] = "Tennessee";
	state['TX'] = "Texas";
	state['UT'] = "Utah";
	state['VT'] = "Vermont";
	state['VA'] = "Virginia";
	state['WA'] = "Washington";
	state['WV'] = "West Virginia";
	state['WI'] = "Wisconsin";
	state['WY'] = "Wyoming";
	state['PA'] = "Puerto Rico";
	
var country = new Object();
	country['AF'] = "Afghanistan";
	country['AX'] = "Åland Islands";
	country['AL'] = "Albania";
	country['DZ'] = "Algeria";
	country['AS'] = "American Samoa";
	country['AD'] = "Andorra";
	country['AO'] = "Angola";
	country['AI'] = "Anguilla";
	country['AQ'] = "Antarctica";
	country['AG'] = "Antigua and Barbuda";
	country['AR'] = "Argentina";
	country['AM'] = "Armenia";
	country['AW'] = "Aruba";
	country['AU'] = "Australia";
	country['AT'] = "Austria";
	country['AZ'] = "Azerbaijan";
	country['BS'] = "Bahamas";
	country['BH'] = "Bahrain";
	country['BD'] = "Bangladesh";
	country['BB'] = "Barbados";
	country['BY'] = "Belarus";
	country['BE'] = "Belgium";
	country['BZ'] = "Belize";
	country['BJ'] = "Benin";
	country['BM'] = "Bermuda";
	country['BT'] = "Bhutan";
	country['BO'] = "Bolivia";
	country['BQ'] = "Bonaire";
	country['BA'] = "Bosnia and Herzegovina";
	country['BW'] = "Botswana";
	country['BV'] = "Bouvet Island";
	country['BR'] = "Brazil";
	country['IO'] = "British Indian Ocean Territory";
	country['BN'] = "Brunei Darussalam";
	country['BG'] = "Bulgaria";
	country['BF'] = "Burkina Faso";
	country['BI'] = "Burundi";
	country['KH'] = "Cambodia";
	country['CM'] = "Cameroon";
	country['CA'] = "Canada";
	country['CV'] = "Cape Verde";
	country['KY'] = "Cayman Islands";
	country['CF'] = "Central African Republic";
	country['TD'] = "Chad";
	country['CL'] = "Chile";
	country['CN'] = "China";
	country['CX'] = "Christmas Island";
	country['CC'] = "Cocos (Keeling) Islands";
	country['CO'] = "Colombia";
	country['KM'] = "Comoros";
	country['CG'] = "Congo";
	country['CD'] = "Congo";
	country['CK'] = "Cook Islands";
	country['CR'] = "Costa Rica";
	country['CI'] = "Côte d'Ivoire";
	country['HR'] = "Croatia";
	country['CU'] = "Cuba";
	country['CW'] = "Curaçao";
	country['CY'] = "Cyprus";
	country['CZ'] = "Czech Republic";
	country['DK'] = "Denmark";
	country['DJ'] = "Djibouti";
	country['DM'] = "Dominica";
	country['DO'] = "Dominican Republic";
	country['EC'] = "Ecuador";
	country['EG'] = "Egypt";
	country['SV'] = "El Salvador";
	country['GQ'] = "Equatorial Guinea";
	country['ER'] = "Eritrea";
	country['EE'] = "Estonia";
	country['ET'] = "Ethiopia";
	country['FK'] = "Falkland Islands (Malvinas)";
	country['FO'] = "Faroe Islands";
	country['FJ'] = "Fiji";
	country['FI'] = "Finland";
	country['FR'] = "France";
	country['GF'] = "French Guiana";
	country['PF'] = "French Polynesia";
	country['TF'] = "French Southern Territories";
	country['GA'] = "Gabon";
	country['GM'] = "Gambia";
	country['GE'] = "Georgia";
	country['DE'] = "Germany";
	country['GH'] = "Ghana";
	country['GI'] = "Gibraltar";
	country['GR'] = "Greece";
	country['GL'] = "Greenland";
	country['GD'] = "Grenada";
	country['GP'] = "Guadeloupe";
	country['GU'] = "Guam";
	country['GT'] = "Guatemala";
	country['GG'] = "Guernsey";
	country['GN'] = "Guinea";
	country['GW'] = "Guinea-Bissau";
	country['GY'] = "Guyana";
	country['HT'] = "Haiti";
	country['HM'] = "Heard Island and McDonald Islands";
	country['VA'] = "Holy See";
	country['HN'] = "Honduras";
	country['HK'] = "Hong Kong";
	country['HU'] = "Hungary";
	country['IS'] = "Iceland";
	country['IN'] = "India";
	country['ID'] = "Indonesia";
	country['IR'] = "Iran";
	country['IQ'] = "Iraq";
	country['IE'] = "Ireland";
	country['IM'] = "Isle of Man";
	country['IL'] = "Israel";
	country['IT'] = "Italy";
	country['JM'] = "Jamaica";
	country['JP'] = "Japan";
	country['JE'] = "Jersey";
	country['JO'] = "Jordan";
	country['KZ'] = "Kazakhstan";
	country['KE'] = "Kenya";
	country['KI'] = "Kiribati";
	country['KP'] = "North Korea";
	country['KR'] = "South Korea";
	country['KW'] = "Kuwait";
	country['KG'] = "Kyrgyzstan";
	country['LA'] = "Lao";
	country['LV'] = "Latvia";
	country['LB'] = "Lebanon";
	country['LS'] = "Lesotho";
	country['LR'] = "Liberia";
	country['LY'] = "Libya";
	country['LI'] = "Liechtenstein";
	country['LT'] = "Lithuania";
	country['LU'] = "Luxembourg";
	country['MO'] = "Macao";
	country['MK'] = "Macedonia";
	country['MG'] = "Madagascar";
	country['MW'] = "Malawi";
	country['MY'] = "Malaysia";
	country['MV'] = "Maldives";
	country['ML'] = "Mali";
	country['MT'] = "Malta";
	country['MH'] = "Marshall Islands";
	country['MQ'] = "Martinique";
	country['MR'] = "Mauritania";
	country['MU'] = "Mauritius";
	country['YT'] = "Mayotte";
	country['MX'] = "Mexico";
	country['FM'] = "Micronesia";
	country['MD'] = "Moldova";
	country['MC'] = "Monaco";
	country['MN'] = "Mongolia";
	country['ME'] = "Montenegro";
	country['MS'] = "Montserrat";
	country['MA'] = "Morocco";
	country['MZ'] = "Mozambique";
	country['MM'] = "Myanmar";
	country['NA'] = "Namibia";
	country['NR'] = "Nauru";
	country['NP'] = "Nepal";
	country['NL'] = "Netherlands";
	country['NC'] = "New Caledonia";
	country['NZ'] = "New Zealand";
	country['NI'] = "Nicaragua";
	country['NE'] = "Niger";
	country['NG'] = "Nigeria";
	country['NU'] = "Niue";
	country['NF'] = "Norfolk Island";
	country['MP'] = "Northern Mariana Islands";
	country['NO'] = "Norway";
	country['OM'] = "Oman";
	country['PK'] = "Pakistan";
	country['PW'] = "Palau";
	country['PS'] = "Palestinian Territory";
	country['PA'] = "Panama";
	country['PG'] = "Papua New Guinea";
	country['PY'] = "Paraguay";
	country['PE'] = "Peru";
	country['PH'] = "Philippines";
	country['PN'] = "Pitcairn";
	country['PL'] = "Poland";
	country['PT'] = "Portugal";
	country['QA'] = "Qatar";
	country['RE'] = "Réunion";
	country['RO'] = "Romania";
	country['RU'] = "Russian Federation";
	country['RW'] = "Rwanda";
	country['BL'] = "Saint Barthélemy";
	country['SH'] = "Saint Helena";
	country['KN'] = "Saint Kitts and Nevis";
	country['LC'] = "Saint Lucia";
	country['MF'] = "Saint Martin (French part)";
	country['PM'] = "Saint Pierre and Miquelon";
	country['VC'] = "Saint Vincent and the Grenadines";
	country['WS'] = "Samoa";
	country['SM'] = "San Marino";
	country['ST'] = "Sao Tome and Principe";
	country['SA'] = "Saudi Arabia";
	country['SN'] = "Senegal";
	country['RS'] = "Serbia";
	country['SC'] = "Seychelles";
	country['SL'] = "Sierra Leone";
	country['SG'] = "Singapore";
	country['SX'] = "Sint Maarten (Dutch part)";
	country['SK'] = "Slovakia";
	country['SI'] = "Slovenia";
	country['SB'] = "Solomon Islands";
	country['SO'] = "Somalia";
	country['ZA'] = "South Africa";
	country['GS'] = "South Georgia and the South Sandwich Islands";
	country['SS'] = "South Sudan";
	country['ES'] = "Spain";
	country['LK'] = "Sri Lanka";
	country['SD'] = "Sudan";
	country['SR'] = "Suriname";
	country['SJ'] = "Svalbard and Jan Mayen";
	country['SZ'] = "Swaziland";
	country['SE'] = "Sweden";
	country['CH'] = "Switzerland";
	country['SY'] = "Syria";
	country['TW'] = "Taiwan";
	country['TJ'] = "Tajikistan";
	country['TZ'] = "Tanzania";
	country['TH'] = "Thailand";
	country['TL'] = "Timor-Leste";
	country['TG'] = "Togo";
	country['TK'] = "Tokelau";
	country['TO'] = "Tonga";
	country['TT'] = "Trinidad and Tobago";
	country['TN'] = "Tunisia";
	country['TR'] = "Turkey";
	country['TM'] = "Turkmenistan";
	country['TC'] = "Turks and Caicos Islands";
	country['TV'] = "Tuvalu";
	country['UG'] = "Uganda";
	country['UA'] = "Ukraine";
	country['AE'] = "United Arab Emirates";
	country['GB'] = "United Kingdom";
	country['US'] = "United States";
	country['UM'] = "United States Minor Outlying Islands";
	country['UY'] = "Uruguay";
	country['UZ'] = "Uzbekistan";
	country['VU'] = "Vanuatu";
	country['VE'] = "Venezuela";
	country['VN'] = "Viet Nam";
	country['VG'] = "Virgin Islands; British";
	country['VI'] = "Virgin Islands; U.S.";
	country['WF'] = "Wallis and Futuna";
	country['EH'] = "Western Sahara";
	country['YE'] = "Yemen";
	country['ZM'] = "Zambia";
	country['ZW'] = "Zimbabwe";
	

$(document).ready(function () {	
	//provide lang literals globally
	d3.json("lang/en_US.json", function(data) {
		LANG = data;
		
		//other initializations
		$("input, textarea, select").uniform();
		
		assignEventListeners();
		drawCharts("ff_dnt_perc_weekly.json");
				
		$("#ranked_table_countries").tablesorter();
		$("#ranked_table_states").tablesorter();
			
		setTimeout(function() {
			populateCountriesTable("ff");
			populateStatesTable("ff");
		}, 1);
		
		setTimeout(function() {
			drawMap();
		}, 1200);
			
	});
});

//sort all countries/states by date, ascending
function sort_data(data) {
	return data;
	
	//update date formats
	$.each(data, function(i, value) {
		data[i].sort(function(a,b){
			//return a.date - b.date
			if (a.date < b.date) return -1;
			if (a.date > b.date) return 1;
			return 0;
		});
	});

	console.log(data);
}

function drawMap() {
	var data = [
	  , .187, .198, , .133, .175, .151, , .1, .125, .171, , .172, .133, , .108,
	  .142, .167, .201, .175, .159, .169, .177, .141, .163, .117, .182, .153, .195,
	  .189, .134, .163, .133, .151, .145, .13, .139, .169, .164, .175, .135, .152,
	  .169, , .132, .167, .139, .184, .159, .14, .146, .157, , .139, .183, .16, .143
	];

	d3.json("data/us-states.json", function(json) {
		console.log(json);
		
		var svg_map = d3.select("#map").append("svg")
	    .attr("width", 960)
    	.attr("height", 500);
    
	  var path = d3.geo.path();

	  // A thick black stroke for the exterior.
	  svg_map.append("g")
    	  .attr("class", "black")
	    .selectAll("path")
    	  .data(json.features)
	    .enter().append("path")
    	  .attr("d", path);

	  // A white overlay to hide interior black strokes.
	  svg_map.append("g")
    	  .attr("class", "white")
	    .selectAll("path")
    	  .data(json.features)
	    .enter().append("path")
    	  .attr("d", path);

	  // The polygons, scaled!
	  svg_map.append("g")
    	  .attr("class", "grey")
	    .selectAll("path")
    	  .data(json.features)
	    .enter().append("path")
    	  .attr("d", path)
    	  .attr("id", function(d) { return d.id; })
	      /*.attr("transform", function(d) {
    	    var centroid = path.centroid(d),
	            x = centroid[0],
    	        y = centroid[1];
	        return "translate(" + x + "," + y + ")"
    	        + "scale(" + Math.sqrt(data[+d.id] * 5 || 0) + ")"
	            + "translate(" + -x + "," + -y + ")";
    	  })*/
	      .style("stroke-width", function(d) {
    	    return 1 / Math.sqrt(data[+d.id] * 5 || 1);
	      })
		  .transition()
		  	.duration(1000)
			.attr("transform", function(d, i) {
				var state_id = d.id;
				console.log(yStateCoords[state_id][1]);
				
				return "scale(0.7) translate(" + yStateCoords[state_id][0] + ", " + yStateCoords[state_id][1] + ")";
			});
	      
	      
	    //color states
	    var colorScale = d3.scale.linear().domain([0, 0.2]).range(["white", "black"]);
	    /*var colorScale = d3.scale.linear()
		    .range(["white", "black"])
		    .interpolate(d3.interpolateHcl);*/
	    
	    d3.json("data/" + desktop_or_mobile + "_dnt_perc_monthly_by_state.json", function(data_state) {
			$.each(data_state, function(i, data_state) {
				var last_monthly = data_state[data_state.length-1];

				//TODO color state based on adoption rate
				$("#" + i).css("fill", function(d) {
					return colorScale(last_monthly.perc);
				});
			});
		});
	});
}

function resortCountries() {
	//$("#ranked_table_countries").tablesorter({sortList: [[1,1], [0,1]]});
	
	//resort
	var sorting = [[1,1], [0,0]]; 
	$("#ranked_table_countries").trigger("sorton",[sorting]); 
		
	//console.log($("#ranked_table_countries tbody tr").length);
		
	//remove all countries beyond first 15
	//for(var i=10;i<=$("#ranked_table_countries tbody tr").length;i++) {
	//	$("#ranked_table_countries tbody tr:nth-child(" + i + ")").hide()
	//}
	
	$("#ranked_table_countries tbody").fadeIn("fast");
}

function resortStates() {
	//resort
	var sorting = [[1,1], [0,0]]; 
	$("#ranked_table_states").trigger("sorton",[sorting]); 
		
	//console.log($("#ranked_table_countries tbody tr").length);
		
	//remove all states beyond first 15
	//for(var i=10;i<=$("#ranked_table_states tbody tr").length;i++) {
	//	$("#ranked_table_states tbody tr:nth-child(" + i + ")").hide()
	//}
}

function populateCountriesTable(desktop_or_mobile) {
	var tbody = "";

	d3.json("data/" + desktop_or_mobile + "_dnt_perc_monthly_by_country.json", function(data_country) {
		$.each(data_country, function(i, data_country) {
			//console.log(i);
			//console.log(country[i]);

			//elements of a set apparently don't preserver order in json
			var last_monthly = data_country[data_country.length-1];
			//console.log(country[i]);
			tbody += "<tr><td style='width:50%'>" + country[i] + "</td>"
					+ "<td style='width:35%'>" + (last_monthly.perc*100).toFixed(2) + "%</td>"
					+ "<td style='width:15%'>" + (yoy_growth(data_country, last_monthly)*100).toFixed(2) + "%</td>"
					+ "</tr>";
		});

		$("#ranked_table_countries tbody").empty();
		$("#ranked_table_countries tbody").hide().html(tbody);
		
		
		$("#ranked_table_countries").trigger("update"); 
		setTimeout(function() {
			resortCountries();
		}, 1);
		
		//draw sparklines
		//$.each(eval("data_" + desktop_or_mobile + "_country"), function(i, data_country) {
		//	drawSparkLine(data_country, "#spark_country_" + i);
		//});
	});
}

function populateStatesTable(desktop_or_mobile) {
	var tbody = "";
	d3.json("data/" + desktop_or_mobile + "_dnt_perc_monthly_by_state.json", function(data_state) {
		$.each(data_state, function(i, data_state) {
			var last_monthly = data_state[data_state.length-1];

			tbody += "<tr><td style='width:50%'>" + state[i] + "</td>" 
					+ "<td style='width:35%'>" + (last_monthly.perc*100).toFixed(2) + "%</td>"
					+ "<td style='width:15%'>" + (yoy_growth(data_state, last_monthly)*100).toFixed(2) + "%</td>"
					//+ "</td><td style='width:150px' id='spark_state_" + i + "'></td>"
					+ "</tr>";
		});
	
		$("#ranked_table_states tbody").empty();
		$("#ranked_table_states tbody").html(tbody);
		
		
		$("#ranked_table_states").trigger("update"); 
		setTimeout(function() {
			resortStates();
		}, 1);
		
		
		//draw sparklines
		//$.each(eval("data_" + desktop_or_mobile + "_state"), function(i, data_state) {
		//	drawSparkLine(data_state, "#spark_state_" + i);
		//});
	});
}

function assignEventListeners() {
	$("#desktop2").on("click", function() {
		if(desktop_or_mobile2 == "ff")
			return false;
			
		shift_selected2("desktop");
		desktop_or_mobile2 = "ff";
		
		populateCountriesTable("ff");
		populateStatesTable("ff");
		
		return false;
	});
	
	$("#mobile2").on("click", function() {
		if(desktop_or_mobile2 == "fennec")
			return false;
			
		shift_selected2("mobile");
		desktop_or_mobile2 = "fennec";
		
		populateCountriesTable("fennec");
		populateStatesTable("fennec");
		
		return false;
	});
	
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

function shift_selected2(option) {
	$("#desktop2").html("DESKTOP");
	$("#mobile2").html("MOBILE");
		
	$("#" + option + "2").html("<span class='selected_option'>" + option.toUpperCase() + "</span>");
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