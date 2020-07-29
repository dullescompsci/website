<!--
	Dulles High School Computer Science Club 2018-2019
	Written By Adil Rasiyani, President
	Using Bootstrap
-->

<!DOCTYPE html>
<html>
<head>
    <title>Announcements</title>
    <?php 
    	include 'res/head.php';
     ?>
</head>
<body data-spy="scroll" data-target="#list-announ">

	<?php
		include 'res/nav.php';
	?>
	<!-- Main Page -->
	<div class="container">
		<div class="row" id="resources-title-row">
			<h1 class="display-3">Announcements</h1>
		</div>
		<hr class="style14">
		<div class="row" id="all-sections-container">
			<div class="col-md-4 d-none d-md-block">
				<div class="sticky-div" style="position:sticky; top:20px;">
					<div id="list-announ" class="list-group">
					  <a class="list-group-item list-group-item-action" href="#list-item-1">General Announcements</a>
					  <a class="list-group-item list-group-item-action" href="#list-item-2">Remind Feed</a>
					  
					</div>
				</div>
			</div>
			<div class="col-sm-12 col-md-8" id="scrollspy-info">
				<div data-spy="scroll" data-target="#list-announ" data-offset="0" class="scrollspy-example">
					<h4 id="list-item-1" class="display-4">General Announcements</h4>
					<br>
						<h3>Fish Camp 2018</h3>
							<hr class="style2">
							<p class="small lead">29 July 2020</p>
							<hr class="style12">
							<p class="lead">
								Fish Camp will be held on 30 July 2020 this year. See you there!
							</p>
						<hr class="style3">
						<br>
					  	<h3>New Officers for the year 2020-2021</h3>
					  		<hr class="style2">
							<p class="small lead">29 July 2020</p>
							<hr class="style12">
							<p class="lead">
								The following members have been appointed officers for the upcoming school year ending 24 May 2019.
								<ul class="list-group-flush">
									<li class="list-group-item-text lead"><em>Presidents:</em> Vikas Thoutam (12) and Erica Miller (12)</li>
									<li class="list-group-item-text lead"><em>Vice Presidents:</em> Sahil Chowdhury (12) and Amogha Pokkulandra (12)</li>
									<li class="list-group-item-text lead"><em>Secretary:</em> Phoebe Lin (12)</li>
									<li class="list-group-item-text lead"><em>Advanced & Novice Coaches:</em> Eric Peng (11) and Aaroh Sharma (11)</li>
									<li class="list-group-item-text lead"><em>Historian:</em> Suhani Goswami (12)</li>
								</ul>
							</p>
						<hr class="style3">
				  	<hr class="style18">

					<h4 id="list-item-2" class="display-4">Remind Feed</h4> 
					  	<script src="https://widgets.remind.com/iframe.js?token=b3fde2a05b5801359cab0242ac110005&height=600&join=true"></script>
				</div>
			</div>
		</div>
		
	</div>

	<!-- Footer -->
	<?php 
		include 'res/footer.php';
	 ?>

	<!-- Scripts -->
	<script type="text/javascript">
		document.getElementById('nav-bar-announ').setAttribute('class', 'active nav-item');
	</script>

	<!-- Bootstrap CDN -->
	<?php include 'res/cdn.php';
	 ?>
</body>
</html>