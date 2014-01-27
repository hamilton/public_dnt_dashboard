<?php
$dnt_enabled = array_key_exists('HTTP_DNT', $_SERVER);
//$dnt_val = substr($_SERVER['HTTP_DNT'], 0, 1);
//$dnt_val = 0 means they want to be tracked, $dntval = 1 means they don't

// Force no-caching
header("Expires: Thu, 19 Nov 1981 08:52:00 GMT");
header("Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0");
header("Pragma: no-cache");
?>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<meta property="og:title" content="The State of Do Not Track in Firefox" /> 
		<meta property="og:description" content="This visualization shows how many Firefox users are seeking out and enabling Do Not Track in their desktop and mobile versions of Firefox; we currently don't have data on adoption in Thunderbird or Firefox OS. We update this page once a month." /> 
		<meta property="og:image" content="https://dnt-dashboard.mozilla.org/images/fx-logo.png" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://dnt-dashboard.mozilla.org/" />
		<meta property="og:site_name" content="The State of Do Not Track in Firefox" />
		
		<title>Do Not Track in Firefox</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.4/jquery-ui.min.js" type="text/javascript"></script>
   		<script type="text/javascript" src="js/d3.v2.min.js"></script>
   		<script type="text/javascript" src="js/date.js"></script>	
		<script type="text/javascript" src="js/x_over_x.min.js"></script>
   		<script type="text/javascript" src="js/global.min.js"></script>
   		<script type="text/javascript" src="js/charts.min.js"></script>

		<link rel="stylesheet" href="css/styles.min.css" type="text/css" />
		<!--[if lt IE 9]>
			<link rel="stylesheet" href="css/styles_ie_unsupported.css" type="text/css" />
		<![endif]-->
   		<link rel="stylesheet" href="css/tabzilla.css" />
   		
   		<link href="https://fonts.googleapis.com/css?family=PT+Serif:regular,italic,bold,bolditalic" rel="stylesheet" type="text/css">
   		<link href='https://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600" rel="stylesheet" type="text/css" />
		<link href='https://fonts.googleapis.com/css?family=Signika' rel='stylesheet' type='text/css'>
		
		<script type="text/javascript">

		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-35433268-33']);
		  _gaq.push(['_trackPageview']);

		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();

		</script>
	</head>
	<body>
		<a href="http://www.mozilla.org/" id="tabzilla">mozilla</a>
		<img src="images/fxlogo_top.png" id="top_logo" />
		<div id="unsupported">
			<h1 class="shadow">THE STATE OF DO NOT TRACK IN FIREFOX</h1>
			This page requires a version of Internet Explorer greater than IE 9; you seem to be using an older browser.  Kindly upgrade to IE 9 or higher or switch to Firefox and head back :)
		</div>
		
		<div id="header">
			<div id="download_firefox"><a href="http://www.mozilla.org/en-US/firefox/new/">Download Mozilla Firefox!</a> &nbsp; <a href="#" id="dismiss">Dismiss</a></div>
			<div id="dnt_status">
			<?php
				if($dnt_enabled) echo "<span class='on'>YOUR DNT STATUS IS ON</span>";
				else echo "<span class='off'>YOUR DNT STATUS IS OFF</span>";
			?>
			</div>
		</div>
			
		<div id="page">		
			<h1 class="shadow">THE STATE OF DO NOT TRACK IN FIREFOX</h1>
			<div id="full_date"></div>
			
			<div id="trend">
				<div id="options">
					<a href="#" id="desktop"><span class="selected_option">DESKTOP</span></a></span> &nbsp;<a href="#" id="mobile">MOBILE</a>
				</div>
				<img src="images/y_axis_label.png" style="position:absolute;margin-left:-10px;margin-top:20px" />
				<div class="x_label_year" style="margin-left:69px">2011</div>
				<div class="x_label_year" style="margin-left:245px">2012</div>
				<div class="x_label_year" style="margin-left:596px">2013</div>
				<div class="x_label_year" style="margin-left:947px">2014</div>
				<div class="chart_content"></div>
			</div>
			
			<div class="copy">
				<p>Mozilla Firefox, Firefox for Android, Firefox OS and Thunderbird all include a Do Not Track feature that enables users to express a preference not to be tracked online. When the feature is turned on in one of our products, an automated signal is sent to all the sites and services you interact with, including websites, widgets, advertisers and applications.  Do Not Track is still in an early stage of development across the industry. However, it is supported by all major browsers and a few leading companies have started respecting the signal.</p>
				<p>These graphs are intended to provide a view into how many Firefox users are seeking out and enabling Do Not Track in their desktop and mobile versions of Firefox; we currently don't have data on adoption in Thunderbird or Firefox OS.  We update this page once a month.</p>
			</div>		
			<div style="clear:both"></div>
			<div id="map">
				<h2>United States</h2>
				<div id="options3">
					<a href="#" id="desktop3"><span class="selected_option">DESKTOP</span></a></span> &nbsp;<a href="#" id="mobile3">MOBILE</a>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;<a href="#" id="show_map"><span class="selected_option">MAP</span></a>&nbsp; <a href="#" id="show_states">STATES</a>
				</div>
				
				<div id="map_data">
					<div id="AL_box" class="firstrow">Alabama<div></div></div>
					<div id="AK_box" class="firstrow">Alaska<div></div></div>
					<div id="AZ_box" class="firstrow">Arizona<div></div></div>
					<div id="AR_box" class="firstrow">Arkansas<div></div></div>
					<div id="CA_box" class="firstrow">California<div></div></div>
					<div id="CO_box" class="firstrow">Colorado<div></div></div>
					<div id="CT_box" class="firstrow">Connecticut<div></div></div>
					<div id="DE_box" class="firstrow">Delaware<div></div></div>
					
					<div id="DC_box">D.C.<div></div></div>
					<div id="IA_box">Florida<div></div></div>
					<div id="GA_box">Georgia<div></div></div>
					<div id="HI_box">Hawaii<div></div></div>
					<div id="HI_box">Idaho<div></div></div>
					<div id="IL_box">Illinois<div></div></div>
					<div id="IN_box">Indiana<div></div></div>
					<div id="IA_box">Iowa<div></div></div>
					
					<div id="KS_box">Kansas<div></div></div>
					<div id="KY_box">Kentucky<div></div></div>
					<div id="LA_box">Louisiana<div></div></div>
					<div id="ME_box">Maine<div></div></div>
					<div id="MD_box">Maryland<div></div></div>
					<div id="MA_box">Massachusetts<div></div></div>
					<div id="MI_box">Michigan<div></div></div>
					<div id="MN_box">Minnesota<div></div></div>
					
					<div id="MS_box">Mississippi<div></div></div>
					<div id="MO_box">Missouri<div></div></div>
					<div id="MT_box">Montana<div></div></div>
					<div id="NE_box">Nebraska<div></div></div>
					<div id="NV_box">Nevada<div></div></div>
					<div id="NH_box">New Hampshire<div></div></div>
					<div id="NJ_box">New Jersey<div></div></div>
					<div id="NM_box">New Mexico<div></div></div>
					
					<div id="NY_box">New York<div></div></div>
					<div id="NC_box">N. Carolina<div></div></div>
					<div id="ND_box">N. Dakota<div></div></div>
					<div id="OH_box">Ohio<div></div></div>
					<div id="OK_box">Oklahoma<div></div></div>
					<div id="OR_box">Oregon<div></div></div>
					<div id="PA_box">Pennsylvania<div></div></div>
					<div id="RI_box">Rhode Island<div></div></div>
					
					<div id="SC_box">S. Carolina<div></div></div>
					<div id="SD_box">S. Dakota<div></div></div>
					<div id="TN_box">Tennessee<div></div></div>
					<div id="TX_box">Texas<div></div></div>
					<div id="UT_box">Utah<div></div></div>
					<div id="VT_box">Vermont<div></div></div>
					<div id="VA_box">Virginia<div></div></div>
					<div id="WA_box">Washington<div></div></div>
					
					<div id="WV_box" style="border:0">W. Virginia<div></div></div>
					<div id="WI_box" style="border:0">Wisconsin<div></div></div>
					<div id="WY_box" style="border:0">Wyoming<div></div></div>
					<div style="border:0"></div>
					<div style="border:0"></div>
					<div style="border:0"></div>
					<div style="border:0"></div>
					<div style="border:0"></div>
				</div>
			</div>
			<div id="map_legend"></div>
			
			<div style="clear:both"></div>
			<div id="map_world">
				<img id="map_world_top_gradient" src="images/gradient_world_top.png">
				<h2>The World</h2>
				<div id="options4">
					<a href="#" id="desktop4"><span class="selected_option">DESKTOP</span></a></span> &nbsp;<a href="#" id="mobile4">MOBILE</a>
				</div>
				<div id="options4_country_select">
					<a href="#" id="the_world" class="region_select"><span class="selected_option">THE WORLD</span></a>
					 &nbsp;<a href="#" id="africa" class="region_select">AFRICA</a>
					 &nbsp;<a href="#" id="asia" class="region_select">ASIA</a>
					 &nbsp;<a href="#" id="europe" class="region_select">EUROPE</a>
					 &nbsp;<a href="#" id="north_america" class="region_select">NORTH AMERICA</a>
					 &nbsp;<a href="#" id="oceania" class="region_select">OCEANIA</a>
					 &nbsp;<a href="#" id="south_america" class="region_select">SOUTH AMERICA</a>
				</div>
			</div>
			<div id="map_legend_world"></div>
			
			<div class="copy">
				<h3>Notes</h3>
				<p>No Firefox user was <i>tracked</i> to generate this data. Every 24 hours, both Firefox and Firefox for Android automatically download the latest list of insecure add-ons and/or extensions to disable as part of our <a href="https://wiki.mozilla.org/Blocklisting">blocklist service</a>. As a Do Not Track signal is included in all requests made by the browser, we can count the number of times we see the signal. No other information is logged on our servers. Anyone with a website and access to a web server can start counting how many users are sending DNT:1, which is how the signal is expressed via HTTP requests.</p>
				<p>Part of the data in November and December 2012 is missing.  The monthly averages used for those two months are based on the days for which data is available.  The way we determine geographic data is from IP addresses at the time when an HTTP request is sent.  IP addresses are not logged in the aggregate data set used to create the above graphs.</p>
			</div>
			
			<div id="tooltip"></div>
			
			<div class="copy hightop">
			<h3>Further resources</h3>
			<ul>
				<li><a href="http://www.w3.org/2011/tracking-protection/">W3C Tracking Protection Working Group</a></li>
				<li><a href="http://www.mozilla.org/en-US/dnt/">Mozilla's Do Not Track FAQ</a></li>
				<li><a href="http://donottrack.us/">Stanford University's Do Not Track Resource</a></li>
				<li><a href="https://blog.mozilla.org/privacy/">Mozilla Privacy Blog</a></li>
			</ul>
			</div>
			
			<div id="about_pane" class="sans tinytext">
				The Metrics team is a multidisciplinary team that uses historical data to drive decision-making.<br />
				
				<div style="font-weight:400;letter-spacing:1px;padding-top:12px"><!--DEVELOPED BY--></div>
				<div style="padding-top:2px"><a href="https://twitter.com/alialmossawi" target="_blank">Ali Almossawi <img src="images/twitter.png" alt="Ali on Twitter" title="Ali on Twitter" /></a></div>
				<div style="padding-top:2px"><a href="https://twitter.com/anuragphadke" target="_blank">Anurag Phadke <img src="images/twitter.png" alt="Anurag on Twitter" title="Anurag on Twitter" /></a></div>
				<div style="padding-top:2px"><a href="https://twitter.com/hamiltonulmer" target="_blank">Hamilton Ulmer <img src="images/twitter.png" alt="Hamilton on Twitter" title="Hamilton on Twitter" /></a></div>
			</div>
			
			<div class="copy tinytext sans about_pane_right_fix">
				Developed by the <span style="font-weight:400"><span id="about">Metrics Team at Mozilla</span></span>
			</div>
		</div> <!-- end page -->
		
		<footer id="colophon">
      		<div class="row">
      			<div class="footer-logo">
					<a href="http://mozilla.org/en-US/"><img src="images/logomoz.png" alt="mozilla"></a>
				</div>

				<div class="footer-license">
					<p>Portions of this content are<br />&copy;1998–2013 by individual mozilla.org contributors. Content available under a <a href="/foundation/licensing/website-content.html">Creative Commons license</a>.</p>
					<p><a href="http://mozilla.org/en-US/contribute/page/">Contribute to this page</a></p>
				</div>
				<ul class="footer-nav">
					<li><a href="http://mozilla.org/en-US/about/contact.html#map-mountain_view">Contact Us</a></li>
					<li><a href="http://mozilla.org/en-US/privacy/">Privacy Policy</a></li>
					<li><a href="http://mozilla.org/en-US/about/legal.html">Legal Notices</a></li>
					<li><a href="http://mozilla.org/en-US/legal/fraud-report/index.html">Report Trademark Abuse</a></li>
				</ul>

        	    <ul class="footer-nav">
            		<li><a href="http://twitter.com/firefox">Twitter</a></li>
	            	<li><a href="http://facebook.com/Firefox">Facebook</a></li>
	    	        <li><a href="https://affiliates.mozilla.org/">Firefox Affiliates</a></li>
				</ul>
			</div>
		</footer>
		
		<script src="//www.mozilla.org/tabzilla/media/js/tabzilla.js"></script>
		
		<script>
		var images = [
			'images/bubble.png'
		];

		$(images).each(function() {
			var image = $('<img />').attr('src', this);
		});
		</script>
	</body>
</html>
