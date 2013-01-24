"use strict";

var LANG,
	desktop_or_mobile = "ff",
	date_granularity = "weekly";
	
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
	country['BO'] = "Bolivia; Plurinational State of";
	country['BQ'] = "Bonaire; Sint Eustatius and Saba";
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
	country['CD'] = "Congo; the Democratic Republic of the";
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
	country['VA'] = "Holy See (Vatican City State)";
	country['HN'] = "Honduras";
	country['HK'] = "Hong Kong";
	country['HU'] = "Hungary";
	country['IS'] = "Iceland";
	country['IN'] = "India";
	country['ID'] = "Indonesia";
	country['IR'] = "Iran; Islamic Republic of";
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
	country['KP'] = "Korea; Democratic People's Republic of";
	country['KR'] = "Korea; Republic of";
	country['KW'] = "Kuwait";
	country['KG'] = "Kyrgyzstan";
	country['LA'] = "Lao People's Democratic Republic";
	country['LV'] = "Latvia";
	country['LB'] = "Lebanon";
	country['LS'] = "Lesotho";
	country['LR'] = "Liberia";
	country['LY'] = "Libya";
	country['LI'] = "Liechtenstein";
	country['LT'] = "Lithuania";
	country['LU'] = "Luxembourg";
	country['MO'] = "Macao";
	country['MK'] = "Macedonia; the former Yugoslav Republic of";
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
	country['FM'] = "Micronesia; Federated States of";
	country['MD'] = "Moldova; Republic of";
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
	country['PS'] = "Palestinian Territory; Occupied";
	country['PA'] = "Panama";
	country['PG'] = "Papua New Guinea";
	country['PY'] = "Paraguay";
	country['PE'] = "Peru";
	country['PH'] = "Philippines";
	country['PN'] = "Pitcairn";
	country['PL'] = "Poland";
	country['PT'] = "Portugal";
	country['PR'] = "Puerto Rico";
	country['QA'] = "Qatar";
	country['RE'] = "Réunion";
	country['RO'] = "Romania";
	country['RU'] = "Russian Federation";
	country['RW'] = "Rwanda";
	country['BL'] = "Saint Barthélemy";
	country['SH'] = "Saint Helena; Ascension and Tristan da Cunha";
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
	country['SY'] = "Syrian Arab Republic";
	country['TW'] = "Taiwan; Province of China";
	country['TJ'] = "Tajikistan";
	country['TZ'] = "Tanzania; United Republic of";
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
	country['VE'] = "Venezuela; Bolivarian Republic of";
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
		populateCountriesTable();
	});
});

function populateCountriesTable() {
	d3.json("data/ff_dnt_perc_monthly_by_country.json", function(data_monthly) {
	d3.json("data/ff_dnt_perc_weekly_by_country.json", function(data_weekly) {
		var tbody,
		n=0;
	
		$.each(data_monthly, function(i, data_country) {
			n++;
				
			var last_monthly = data_country[data_country.length-1],
				last_weekly = data_weekly[i][data_weekly[i].length-1];
								
			tbody += "<tr><td>" + country[i] + "</td><td>" 
					+ yoy_growth(data_country, last_monthly).toFixed(2) 
					+ "</td><td>" + yoy_growth(data_country, last_weekly).toFixed(2) 
					+ "</td><td style='width:150px'></td></tr>";
					
			if(n == 15)  return (n != 15); // will stop running after "three"
		});
	
		$("#ranked_table tbody").html(tbody);
		$("#ranked_table").tablesorter();
	});
	});
}

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