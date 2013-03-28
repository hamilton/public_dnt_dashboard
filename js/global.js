"use strict";

var LANG,
	desktop_or_mobile = "ff",
	desktop_or_mobile2 = "ff",
	desktop_or_mobile3 = "ff",
	desktop_or_mobile4 = "ff",
	map_or_states = "map",
	date_granularity = "monthly";
	
var yStateCoords = new Object();
	yStateCoords['AL'] = [-590,-250];
	yStateCoords['AK'] = [280,-290];
	yStateCoords['AZ'] = [410,-210];
	yStateCoords['AR'] = [410,-220];
	yStateCoords['CA'] = [1100,-123];
	yStateCoords['CO'] = [1195, -160];
	yStateCoords['CT'] = [1050,-65];
	yStateCoords['DE'] = [1355,-120];
	yStateCoords['DC'] = [-750,90];
	yStateCoords['FL'] = [-360, -120];
	yStateCoords['GA'] = [-30,-50];
	yStateCoords['HI'] = [560,-170];
	yStateCoords['ID'] = [960,190];
	yStateCoords['IL'] = [945,100];
	yStateCoords['IN'] = [1200,80];
	yStateCoords['IA'] = [1600,110];
	yStateCoords['KS'] = [-350,255];
	yStateCoords['KY'] = [-320,240];
	yStateCoords['LA'] = [80,130];
	yStateCoords['ME'] = [200,400];
	yStateCoords['MD'] = [460,280];
	yStateCoords['MA'] = [700,360];
	yStateCoords['MI'] = [1400,360];
	yStateCoords['MN'] = [1670,420];
	yStateCoords['MS'] = [-400,400];
	yStateCoords['MO'] = [-200,480];
	yStateCoords['MT'] = [340,640];
	yStateCoords['NE'] = [520,565];
	yStateCoords['NV'] = [1050,500];
	yStateCoords['NH'] = [700,600];
	yStateCoords['NJ'] = [1040,520];
	yStateCoords['NM'] = [1850,430];
	yStateCoords['NY'] = [-630,840];
	yStateCoords['NC'] = [-340,720];
	yStateCoords['ND'] = [260,880];
	yStateCoords['OH'] = [360,700];
	yStateCoords['OK'] = [800,670];
	yStateCoords['OR'] = [1360,840];
	yStateCoords['PA'] = [1100,750];
	yStateCoords['RI'] = [1300,750];
	yStateCoords['SC'] = [-600,880];
	yStateCoords['SD'] = [-75,1040];
	yStateCoords['TN'] = [100,840];
	yStateCoords['TX'] = [500,785];
	yStateCoords['UT'] = [920,930];
	yStateCoords['VT'] = [700,1000];
	yStateCoords['VA'] = [1250,860];
	yStateCoords['WA'] = [1950,1050];
	yStateCoords['WV'] = [-500,1100];
	yStateCoords['WI'] = [-180,1225];
	yStateCoords['WY'] = [300,1200];
		
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
		drawCharts("ff_dnt_perc_monthly.json");
				
		$("#ranked_table_countries").tablesorter();
		$("#ranked_table_states").tablesorter();
			
		setTimeout(function() {
			populateCountriesTable("ff");
			populateStatesTable("ff");
		}, 1);
		
		setTimeout(function() {
			drawMap();
			drawMapWorld();
		}, 1000);
			
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

function addLegend(container) {
	//var legend = "<div class='legend high'></div><div class='legend_text'>HIGHEST ADOPTION</div>"
	//		+ "<div class='legend low' style='margin-left:20px'></div><div class='legend_text'>LOWEST ADOPTION</div>";
	
	var legend = "<div class='legend'><div class='legend_text'>HIGHEST ADOPTION</div>"
			+ "<img src='images/gradient_key.png' style='float:left' />"
			+ "<div class='legend_text'>LOWEST ADOPTION</div></div>";
	
	$(container).append(legend);
}

function redrawMap() {
	$("#map_data").fadeOut("fast");
	$("#map_legend").delay(1000).fadeIn("fast");
	
	d3.selectAll("#map svg .grey path")
		.transition()
		  	.duration(1000)
			.attr("transform", function(d, i) {
				var state_id = d.id,
					new_x = -1 * yStateCoords[state_id][0],
					new_y = -1 * yStateCoords[state_id][1];
				
				//console.log(state_id, new_x, new_y);
				return "matrix(1, 0, 0, 1, " + new_x + ", 1*" + new_y + ")";
				
			})
			
	d3.json("data/" + desktop_or_mobile3 + "_dnt_perc_monthly_by_state.json", function(data_state) {
		var min_max = minMaxState(data_state);
	    console.log(min_max[0], min_max[1]);
	    	
	    var colorScale = d3.scale.linear().domain([min_max[0],min_max[1]]).range(["#e0161e", "steelblue"]);
			
		$.each(data_state, function(i, data_state) {
			var last_monthly = data_state[data_state.length-1];

			$("#" + i).css("fill", function(d) {
				return colorScale(last_monthly.perc);
			});
				
			//populate map_data div
			var up_or_down = ((mom_growth(data_state, last_monthly) > 0 ))
				? "<img src='images/up.png' class='up_down' />"
				: "<img src='images/down.png' class='up_down' />";
			
			$("#" + i + "_box div").html((last_monthly.perc*100).toFixed(0) + "%" + up_or_down);
		});
	});
}

function drawMap() {
	$("#map svg").remove();
	$("#map_data").fadeOut("fast");
	
	addLegend("#map_legend");
    
	/*var data = [
	  , .187, .198, , .133, .175, .151, , .1, .125, .171, , .172, .133, , .108,
	  .142, .167, .201, .175, .159, .169, .177, .141, .163, .117, .182, .153, .195,
	  .189, .134, .163, .133, .151, .145, .13, .139, .169, .164, .175, .135, .152,
	  .169, , .132, .167, .139, .184, .159, .14, .146, .157, , .139, .183, .16, .143
	];*/

	d3.json("data/us-states.json", function(json) {
		console.log(json);
		
		var svg_map = d3.select("#map").append("svg")
	    .attr("width", 960)
    	.attr("height", 600);
    
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

	  svg_map.append("g")
    	  .attr("class", "grey")
	    .selectAll("path")
    	  .data(json.features)
	    .enter().append("path")
    	  .attr("d", path)
    	  .attr("id", function(d) { return d.id; })
	      .style("stroke-width", function(d) {
    	    //return 1 / Math.sqrt(data[+d.id] * 5 || 1);

			//no stroke for Alaska or Hawaii
    	    return (d.id == "AK" || d.id == "HI") ? 0 : 1;
	      });
	    
	    
	    d3.json("data/" + desktop_or_mobile + "_dnt_perc_monthly_by_state.json", function(data_state) {
	    	var min_max = minMaxState(data_state);
	    	console.log(min_max[0], min_max[1]);
	    	
	    	var colorScale = d3.scale.linear().domain([min_max[0],min_max[1]]).range(["#e0161e", "steelblue"]);

			$.each(data_state, function(i, data_state) {
				var last_monthly = data_state[data_state.length-1];
				
				$("#" + i).css("fill", function(d) {
					return colorScale(last_monthly.perc);
				});
				
				//populate map_data div
				var up_or_down = ((mom_growth(data_state, last_monthly) > 0 ))
					? "<img src='images/up.png' class='up_down' />"
					: "<img src='images/down.png' class='up_down' />";
			
				$("#" + i + "_box div").html((last_monthly.perc*100).toFixed(0) + "%" + up_or_down);
			});
		});
	});
}

function redrawMapWorld() {
	$("#map_data_world").fadeOut("fast");
	$("#map_legend_world").delay(1000).fadeIn("fast");
			
	d3.json("data/" + desktop_or_mobile4 + "_dnt_perc_monthly_by_country.json", function(data_country) {
		var min_max = minMaxState(data_country);
	    console.log(min_max[0], min_max[1]);
	    	
	    var colorScale = d3.scale.linear().domain([min_max[0],min_max[1]]).range(["#e0161e", "steelblue"]);
			
		$.each(data_country, function(i, data_country) {
			var last_monthly = data_country[data_country.length-1];

			$("#w" + i).css("fill", function(d) {
				return colorScale(last_monthly.perc);
			});
				
			//populate map_data div
			var up_or_down = ((mom_growth(data_country, last_monthly) > 0 ))
				? "<img src='images/up.png' class='up_down' />"
				: "<img src='images/down.png' class='up_down' />";
			
			$("#" + i + "_box div").html((last_monthly.perc*100).toFixed(0) + "%" + up_or_down);
		});
	});
}

function drawMapWorld() {
	$("#map_world svg").remove();
	$("#map_data_world").fadeOut("fast");
	
	addLegend("#map_legend_world");
    
	//data from http://stackoverflow.com/questions/14265112/d3-js-map-svg-auto-fit-into-parent-container-and-resize-with-window
	d3.json("data/world-countries.json", function(json) {
		var w = 960,
			h = 600;
		
		console.log(json);
		
		var svg_map = d3.select("#map_world").append("svg")
	    .attr("width", w)
    	.attr("height", h);
    
		var projection = d3.geo.equirectangular().scale(890).translate([w/2, h/2+20]);
		var path = d3.geo.path().projection(projection);

	  // A thick black stroke for the exterior.
	  svg_map.append("g")
    	  .attr("class", "black")
	    .selectAll("path")
    	  .data(json.features).enter()
            .append('path')
            .attr('d', path)
            .attr("width", w)
            .attr("height", h);

	  // A white overlay to hide interior black strokes.
	  svg_map.append("g")
    	  .attr("class", "white")
	    .selectAll("path")
    	  .data(json.features)
	    .enter().append("path")
    	  .attr("d", path);

	  svg_map.append("g")
    	  .attr("class", "grey")
	    .selectAll("path")
    	  .data(json.features)
	    .enter().append("path")
    	  .attr("d", path)
    	  .attr("id", function(d) { return "w" + d.id; })
	      .style("stroke-width", 0);
	    
	    d3.json("data/" + desktop_or_mobile + "_dnt_perc_monthly_by_country.json", function(data_country) {
	    	var min_max = minMaxState(data_country);
	    	console.log(min_max[0], min_max[1]);
	    	
	    	var colorScale = d3.scale.linear().domain([min_max[0],min_max[1]]).range(["#e0161e", "steelblue"]);

			$.each(data_country, function(i, data_country) {
				var last_monthly = data_country[data_country.length-1];
				
				$("#w" + i).css("fill", function(d) {
					return colorScale(last_monthly.perc);
				});
				
				//populate map_data div
				var up_or_down = ((mom_growth(data_country, last_monthly) > 0 ))
					? "<img src='images/up.png' class='up_down' />"
					: "<img src='images/down.png' class='up_down' />";
			
				$("#" + i + "_box div").html((last_monthly.perc*100).toFixed(0) + "%" + up_or_down);
			});
		});
	});
}

function minMaxState(data) {
	var min = -1,
   		max = -1;
   		
   	$.each(data, function(i, data_state) {
		var last_monthly = data_state[data_state.length-1].perc;
				
		//check min/max
		if(last_monthly < min || min == -1) min = last_monthly;
		if(last_monthly > max || max == -1) max = last_monthly;
	});
	    	
	return [min, max];
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

function redrawStates() {
	d3.json("data/" + desktop_or_mobile3 + "_dnt_perc_monthly_by_state.json", function(data_state) {
			$.each(data_state, function(i, data_state) {
				var last_monthly = data_state[data_state.length-1];

				//populate map_data div
				var up_or_down = ((mom_growth(data_state, last_monthly) > 0 ))
					? "<img src='images/up.png' class='up_down' />"
					: "<img src='images/down.png' class='up_down' />";
			
				$("#" + i + "_box div").html((last_monthly.perc*100).toFixed(0) + "%" + up_or_down);
			});
	});
	
	$("#map_data").fadeIn("slow");
}

function drawStates() {
	d3.selectAll("#map svg .grey path")
		.transition()
		  	.duration(1000)
		  	//.style("fill", "#e33258")
		  	.style("fill", "#f6f6f6")
		  	//.style("stroke-width", 0)
			.attr("transform", function(d, i) {
				var state_id = d.id,
					new_x = yStateCoords[state_id][0],
					new_y = yStateCoords[state_id][1];
				
				//console.log(state_id, new_x, new_y);
				return "matrix(.4, 0, 0, .4, " + .4*new_x + ", " + .4*new_y + ")";
			})
			
		$("#map_legend").fadeOut("slow");
			
		setTimeout(function() {
			$("#map_data").fadeIn("slow");
		}, 800);
}

function assignEventListeners() {
	/*$("#map").on("mouseenter", function() {
		d3.selectAll(".grey path")
		.transition()
		  	.duration(1000)
		  	//.style("fill", "#e33258")
		  	.style("fill", "#f6f6f6")
		  	//.style("stroke-width", 0)
			.attr("transform", function(d, i) {
				var state_id = d.id;
				return "scale(0.4) translate(" + yStateCoords[state_id][0] + ", " + yStateCoords[state_id][1] + ")";
			})
			
		$("#map_legend").fadeOut("slow");
			
		setTimeout(function() {
			$("#map_data").fadeIn("slow");
		}, 800);
	});*/
	
	$("#show_map").on("click", function() {
		if(map_or_states == "map")
			return false;
			
		shift_selected3("map", "map");
		map_or_states = "map";
		redrawMap();
		
		return false;
	});
	
	$("#show_states").on("click", function() {
		if(map_or_states == "states")
			return false;
			
		shift_selected3("states", "map");
		map_or_states = "states";
		drawStates();
		
		return false;
	});
	
	$("#desktop4").on("click", function() {
		if(desktop_or_mobile4 == "ff")
			return false;
			
		shift_selected4("desktop", "platform");
		desktop_or_mobile4 = "ff";
		redrawMapWorld();
		
		return false;
	});      
	
	$("#mobile4").on("click", function() {
		if(desktop_or_mobile4 == "fennec")
			return false;
			
		shift_selected4("mobile", "platform");
		desktop_or_mobile4 = "fennec";
		
		redrawMapWorld();
		
		return false;
	});
	
	$("#desktop3").on("click", function() {
		if(desktop_or_mobile3 == "ff")
			return false;
			
		shift_selected3("desktop", "platform");
		desktop_or_mobile3 = "ff";
		
		if(map_or_states == "map")
			redrawMap();
		else if(map_or_states == "states")
			redrawStates();
		
		return false;
	});      
	
	$("#mobile3").on("click", function() {
		if(desktop_or_mobile3 == "fennec")
			return false;
			
		shift_selected3("mobile", "platform");
		desktop_or_mobile3 = "fennec";
		
		if(map_or_states == "map")
			redrawMap();
		else if(map_or_states == "states")
			redrawStates();
		
		return false;
	});
	
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

function shift_selected3(option, platform_or_map) {
	if(platform_or_map == "map") {
		$("#show_map").html("MAP");
		$("#show_states").html("STATES");

		$("#show_" + option).html("<span class='selected_option'>" + option.toUpperCase() + "</span>");
	}
	else if(platform_or_map == "platform") {
		$("#desktop3").html("DESKTOP");
		$("#mobile3").html("MOBILE");
		
		$("#" + option + "3").html("<span class='selected_option'>" + option.toUpperCase() + "</span>");
	}
}

function shift_selected4(option, platform_or_map) {
	if(platform_or_map == "platform") {
		$("#desktop4").html("DESKTOP");
		$("#mobile4").html("MOBILE");
		
		$("#" + option + "4").html("<span class='selected_option'>" + option.toUpperCase() + "</span>");
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