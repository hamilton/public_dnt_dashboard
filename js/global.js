"use strict";
    
var desktop_or_mobile = "ff",
    desktop_or_mobile2 = "ff",
    desktop_or_mobile3 = "ff",
    desktop_or_mobile4 = "ff",
    map_or_states = "map",
    date_granularity = "monthly";
    
var ff_country_data,
    fennec_country_data,
    ff_state_data,
    fennec_state_data;

$(document).ready(function () { 
    Tabzilla.disableEasterEgg()

    if(!$.browser.mozilla) {
        $("#download_firefox").show();
    }

    assignEventListeners();
    drawCharts("ff_dnt_perc_monthly.json");
        
    getCountryAndStateData();
        
    setTimeout(function() {
        drawMap();
        drawMapWorld();
    }, 0);
});

function getCountryAndStateData(desktop_or_mobile) {
    d3.json("data/ff_dnt_perc_monthly_by_country.json", function(ff_country) {
    d3.json("data/fennec_dnt_perc_monthly_by_country.json", function(fennec_country) {
    d3.json("data/ff_dnt_perc_monthly_by_state.json", function(ff_state) {
    d3.json("data/fennec_dnt_perc_monthly_by_state.json", function(fennec_state) {
        ff_country_data = ff_country;
        fennec_country_data = fennec_country;
        ff_state_data = ff_state;
        fennec_state_data = fennec_state;
    });
    });
    });
    });
}

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
}

function addLegend(container) {
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
        var min_max = minMaxStateOrCountry(data_state);
        var colorScale = d3.scale.linear().domain([min_max[0],min_max[1]]).range(["#d9e016", "steelblue"]);

        $.each(data_state, function(i, data_state) {
            var last_monthly = data_state[data_state.length-1];

            $("#" + i).css("fill", function(d) {
                return colorScale(last_monthly.percentage);
            });

            //populate map_data div
            var up_or_down = ((mom_growth(data_state, last_monthly) > 0 ))
                ? "<img src='images/up.png' class='up_down' />"
                : "<img src='images/down.png' class='up_down' />";

            $("#" + i + "_box div").html((last_monthly.percentage*100).toFixed(0) + "%" + up_or_down);
        });
    });
}

function drawMap() {
    $("#map svg").remove();
    $("#map_data").fadeOut("fast");
    
    addLegend("#map_legend");

    d3.json("data/us-states.json", function(json) {
        var svg_map = d3.select("#map").append("svg")
        .attr("width", 960)
        .attr("height", 600);
    
      var path = d3.geo.path();

      svg_map.append("g")
          .attr("class", "black")
          .selectAll("path")
          .data(json.features).enter().append("path")
              .attr("d", path);

      svg_map.append("g")
          .attr("class", "grey")
          .selectAll("path")
            .data(json.features).enter().append("path")
                .attr("d", path)
                .attr("id", function(d) { return d.id; })
                .on("mousemove", function(d) {
                    var data_desktop_or_mobile;
                    if(desktop_or_mobile3 == "ff") {
                        data_desktop_or_mobile = ff_state_data;
                    }
                    else if(desktop_or_mobile3 == "fennec") {
                        data_desktop_or_mobile = fennec_state_data;
                    }

                    var len = data_desktop_or_mobile[(d.id)].length-1;
                    var last_monthly = data_desktop_or_mobile[(d.id)][len]
            
                    $("#tooltip")
                        .show()
                        .html(state[d.id] + "<br />" + (last_monthly.percentage*100).toFixed(2) + "%")
                        .css("left", (d3.event.pageX+35) + "px")
                        .css("top", (d3.event.pageY-35) + "px");
                });
        
        d3.json("data/" + desktop_or_mobile + "_dnt_perc_monthly_by_state.json", function(data_state) {
            var min_max = minMaxStateOrCountry(data_state);
            //console.log(min_max[0], min_max[1]);
            
            var colorScale = d3.scale.linear().domain([min_max[0],min_max[1]]).range(["#d9e016", "steelblue"]);

            $.each(data_state, function(i, data_state) {
                var last_monthly = data_state[data_state.length-1];
                
                $("#" + i).css("fill", function(d) {
                    return colorScale(last_monthly.percentage);
                });
                
                //populate map_data div
                var up_or_down = ((mom_growth(data_state, last_monthly) > 0 ))
                    ? "<img src='images/up.png' class='up_down' />"
                    : "<img src='images/down.png' class='up_down' />";
            
                $("#" + i + "_box div").html((last_monthly.percentage*100).toFixed(0) + "%" + up_or_down);
            });
        });
    });
}

function redrawMapWorld() {
    $("#map_legend_world").delay(1000).fadeIn("fast");
            
    d3.json("data/" + desktop_or_mobile4 + "_dnt_perc_monthly_by_country.json", function(data_country) {
        var min_max = minMaxStateOrCountry(data_country);
        //console.log(min_max[0], min_max[1]);
            
        var colorScale = d3.scale.linear().domain([min_max[0],min_max[1]]).range(["#d9e016", "steelblue"]);
            
        $.each(data_country, function(i, data_country) {
            var last_monthly = data_country[data_country.length-1];

            $("#w" + i).css("fill", function(d) {
                return colorScale(last_monthly.percentage);
            });
                
            //populate map_data div
            var up_or_down = ((mom_growth(data_country, last_monthly) > 0 ))
                ? "<img src='images/up.png' class='up_down' />"
                : "<img src='images/down.png' class='up_down' />";
            
            $("#w" + i + "_box div").html((last_monthly.percentage*100).toFixed(0) + "%" + up_or_down);
        });
    });
}

function drawMapWorld() {
    $("#map_world svg").remove();
    
    addLegend("#map_legend_world");
    
    //data from http://stackoverflow.com/questions/14265112/d3-js-map-svg-auto-fit-into-parent-container-and-resize-with-window
    d3.json("data/world-countries.json", function(json) {
        var w = 980,
            h = 540;
                
        var svg_map = d3.select("#map_world").append("svg")
        .attr("width", w)
        .attr("height", h);
    
        var projection = d3.geo.equirectangular().scale(890).translate([w/2, h/2+20]);
        var path = d3.geo.path().projection(projection);

        svg_map.append("g")
            .attr("class", "black")
            .selectAll("path")
                .data(json.features).enter().append('path')
                    .attr('d', path)
                    .attr("width", w)
                    .attr("height", h);
 
        svg_map.append("g")
            .attr("class", "grey")
            .selectAll("path")
                .data(json.features).enter().append("path")
                    .attr("d", path)
                    .attr("id", function(d) { return "w" + d.id; })
                    .style("stroke-width", 0.3)
                    .on("mousemove", function(d) {
                        var data_desktop_or_mobile;
                        if(desktop_or_mobile4 == "ff") {
                            data_desktop_or_mobile = ff_country_data;
                        }
                        else if(desktop_or_mobile4 == "fennec") {
                            data_desktop_or_mobile = fennec_country_data;
                        }

                        var len = data_desktop_or_mobile[(d.id)].length-1;
                        var last_monthly = data_desktop_or_mobile[(d.id)][len];

                        $("#tooltip")
                            .show()
                            .html(country[d.id] + "<br />" + (last_monthly.percentage*100).toFixed(2) + "%")
                            .css("left", (d3.event.pageX+35) + "px")
                            .css("top", (d3.event.pageY-35) + "px");
                    })
                    .attr("transform", "scale(1) translate(0,0)");
          
                    d3.json("data/" + desktop_or_mobile + "_dnt_perc_monthly_by_country.json", function(data_country) {
                        var min_max = minMaxStateOrCountry(data_country);
                        //console.log(min_max[0], min_max[1]);

                        var colorScale = d3.scale.linear().domain([min_max[0],min_max[1]]).range(["#d9e016", "steelblue"]);

                        $.each(data_country, function(i, data_country) {
                            var last_monthly = data_country[data_country.length-1];                
                            
                            $("#w" + i).css("fill", function(d) {
                                return colorScale(last_monthly.percentage);
                            });
                        });
                    });
    });     
}

function minMaxStateOrCountry(data) {
    var min = -1,
        max = -1;
        
    $.each(data, function(i, data) {
        var last_monthly = data[data.length-1].percentage;
                
        //check min/max
        if(last_monthly < min || min == -1) min = last_monthly;
        if(last_monthly > max || max == -1) max = last_monthly;
    });
            
    return [min, max];
}

function redrawStates() {
    d3.json("data/" + desktop_or_mobile3 + "_dnt_perc_monthly_by_state.json", function(data_state) {
            $.each(data_state, function(i, data_state) {
                var last_monthly = data_state[data_state.length-1];

                //populate map_data div
                var up_or_down = ((mom_growth(data_state, last_monthly) > 0 ))
                    ? "<img src='images/up.png' class='up_down' />"
                    : "<img src='images/down.png' class='up_down' />";
            
                $("#" + i + "_box div").html((last_monthly.percentage*100).toFixed(0) + "%" + up_or_down);
            });
    });
    
    $("#map_data").fadeIn("slow");
}

function drawStates() {
    d3.selectAll("#map svg .grey path")
        .transition()
            .duration(1000)
            .style("fill", "#f6f6f6")
            .attr("transform", function(d, i) {
                var state_id = d.id,
                    new_x = yStateCoords[state_id][0],
                    new_y = yStateCoords[state_id][1];
                
                //console.log(state_id, new_x, new_y);
                return "matrix(.4, 0, 0, .4, " + .4*new_x + ", " + .4*new_y + ")";
            })
            
        $("#map_legend").fadeOut("slow");
            
        setTimeout(function() {
            if(map_or_states == "states")
                $("#map_data").fadeIn("slow");
        }, 800);
}

function assignEventListeners() {
    $("#about").on("click", function() {
        return false;
    });
    
    $("#about").on("mouseenter", function() {
        $("#about_pane").show();
    });
    
    $("#about").on("mouseout", function() {
        $("#about_pane").hide();
    });
    
    $("#about_pane").on("mouseenter", function() {
        $("#about_pane").show();
    });
    
    $("#about_pane").on("mouseleave", function() {
        $("#about_pane").hide();
    });
    
    
    $("#tabzilla").toggle(function() {
        $("#dnt_status").hide();
    },
    function() {
        $("#dnt_status").delay(500).fadeIn("fast");
    });
    
    $("#page").on("mouseleave", function() {
        $("#tooltip").fadeOut("fast");
    });
    
    $("#dismiss").on("click", function() {
        $("#download_firefox").fadeOut("fast");
        
        return false;
    });
    
    $("#show_map").on("click", function() {
        $("#map .as-of").delay(1200).fadeIn();
    
        $("#tooltip").fadeOut();
        if(map_or_states == "map")
            return false;
            
        shift_selected3("map", "map");
        map_or_states = "map";
        redrawMap();
        
        return false;
    });
    
    $("#show_states").on("click", function() {
        $("#map .as-of").hide();
        
        $("#tooltip").fadeOut();
        if(map_or_states == "states")
            return false;
            
        shift_selected3("states", "map");
        map_or_states = "states";
        drawStates();
        
        return false;
    });
    
    $(".region_select").on("click", function(d) {
        $("#tooltip").fadeOut();
        shift_selected4_region_select($(this).attr("id"));
        worldmapZoom($(this).attr("id"));
        
        return false;
    });     
    
    $("#desktop4").on("click", function() {
        $("#tooltip").fadeOut();
        if(desktop_or_mobile4 == "ff")
            return false;
            
        shift_selected4("desktop", "platform");
        desktop_or_mobile4 = "ff";
        redrawMapWorld();
        
        return false;
    });      
    
    $("#mobile4").on("click", function() {
        $("#tooltip").fadeOut();
        if(desktop_or_mobile4 == "fennec")
            return false;
            
        shift_selected4("mobile", "platform");
        desktop_or_mobile4 = "fennec";
        
        redrawMapWorld();
        
        return false;
    });
    
    $("#desktop3").on("click", function() {
        $("#tooltip").fadeOut();
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
        $("#tooltip").fadeOut();
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

function worldmapZoom(region) {
    d3.selectAll("#map_world svg .grey path")
        .transition()
            .duration(1000)
            .attr("transform", function(d, i) {
                switch(region) {
                    case "the_world":
                        return "scale(1) translate(0,0)";
                    case "africa":
                        return "scale(2.3) translate(-330,-160)";
                    case "asia":
                        return "scale(2.7) translate(-530,-140)";
                    case "europe":
                        return "scale(4.2) translate(-420,-100)";
                    case "north_america":
                        return "scale(2.5) translate(-50,-60)";
                    case "oceania":
                        return "scale(2.5) translate(-590,-200)";
                    case "south_america":
                        return "scale(2.5) translate(-150,-220)";
                }
            })
    
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

function shift_selected4_region_select(option) {
    $("#the_world").html("THE WORLD");
    $("#africa").html("AFRICA");
    $("#asia").html("ASIA");
    $("#europe").html("EUROPE");
    $("#south_america").html("SOUTH AMERICA");
    $("#oceania").html("OCEANIA");
    $("#north_america").html("NORTH AMERICA");
        
    $("#" + option).html("<span class='selected_option'>" + option.replace("_", " ").toUpperCase() + "</span>");
}

function drawCharts(json) {
    d3.json("data/" + json, function(data) {
        data = data.GLOBAL;
        
        var fff = d3.time.format('%Y-%m-%d');
        for(var i=0;i<data.length;i++) {
            var d = data[i];
            d['date'] = fff.parse(d['date']);
        }
            
        var markers = [{
            'date': new Date('2013-10-01T00:00:00.000Z'),
            'label': 'No Data*'
        }];

        //add a chart with annotations
        moz_chart({
            title: "",
            description: "",
            data: data,
            width: 960,
            height: 320,
            xax_count: 10,
            markers: markers,
            xax_format: function(d) {
                var df = d3.time.format('%b');
                return df(d);
            },
            rollover_callback: function(d, i) {
                var content = 'No Data';
                
                if(d.percentage > 0) {
                    content = monthNames[d.date.getMonth()] 
                        + ' ' + d.date.getFullYear()
                        + '  ' 
                        + (d.percentage*100).toFixed(2) + '%';
                }

                $('.chart_content svg .active_datapoint')
                    .attr('x', 40)
                    .attr('y', 20)
                    .attr('text-anchor', 'start')
                    .html(content);
            },
            left: 90,
            format: 'perc',
            right: 0,
            interpolate: 'linear',
            //markers: markers,
            target: '.chart_content',
            x_accessor: 'date',
            y_accessor: 'percentage',
            y_label: 'installations that have turned on DNT'
        })
        
        $('.markers text')
            .attr('y', 150)
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