<!--
	Dulles High School Computer Science Club 2018-2019
	Written By Adil Rasiyani, President
	Using Bootstrap
-->
<!-- Last Project Edit: 31 July 2018 by Adil Rasiyani -->
<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <?php 
    	include 'res/head.php';
     ?>
</head>

<body style="">
	<!-- Navigation Bar -->
	<?php 
		include 'res/nav.php';
	 ?>

	<!--Set Active Page to 'active' in navbar (imported from nav.php)-->
	<script type="text/javascript">
		document.getElementById('nav-bar-home').setAttribute('class', 'active nav-item');
	 </script>

	<!-- Main Page -->
	<div class="container">
		<!-- Title -->
		<div class="row justify-content-center">
			<p class="display-3">Dulles Computer Science Club</p>
		 </div>
		<hr class="style14" />

		<!-- Logo and Welcome -->
		<div id="logo-and-welcome" class="row well border-0 border-secondary">
			<!-- Logo -->
			<div class="col">
				<img src="img/logo.jpg" class="img-fluid" alt="Logo">
			 </div>
			<!-- Welcome Message -->
			<div class="col">
				<div class="row">
					<h4 class="display-3">Welcome!</h4>
					<hr>
					<p class="lead text-justify">Official meetings are every <strong>Tuesday</strong> and <strong>Thursday</strong>, but you can come any day Ms. Coffman's in to catch up or get ahead.

					The meeting are always in <strong>Ms. Coffman's room (KLAB)</strong>.  This room is to the left of library.</p>
					<a href="#" class="btn btn-primary">Click Here to Get Started!</a>

				</div>
			 </div>
		 </div>
		<hr/>

		<!-- Slide Show and Mission -->
		<div id="slides-and-mission" class="row">
			<!-- Slide Show -->
			<div class="col">
				<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS1miMzu8WEe7AOjh1V9JZf3py38C24QPDW6wMw4hXiywd1Vfu-t-9X6P87bQxTqyvITus8VJusr1GU/embed?start=true&loop=true&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="padding-bottom: 20px;">
				</iframe>
			 </div>
			<!-- Mission Statement -->
			<div class="col">
				<div class="row">
					<h1 class="display-4">Our Mission</h1>
					<p class="lead text-justify">Our Mission is to bring the art of computer science to all of our members and inspire creative thinking and problem solving through the use of computers.</p>
				</div>
			 </div>
		 </div>
		<hr class="style14">

		<!-- Info -->
		<div id="stay-in-touch-container">
			<div id="stay-in-touch-title" class="row justify-content-center">
				<h1 class="display-4 text-uppercase">Stay In Touch</h1>
			 </div>
			
			<div id="stay-in-touch-text" class="row">
				<p class="lead" style="padding-left: 0.5rem;">
					You can contact us through the club's media accounts, or by getting in touch with the <a href="officers.php" class="badge badge-secondary">officers</a>. <a class="badge badge-info text-light" id="remind-link" data-toggle="tooltip" data-placement="top" title="Text @dhscs to 81010">Remind code</a>, newsletter signup and more contact info is provided <a href="contact.php" class="badge badge-secondary">here</a>.
				</p>
			</div>
 		</div>
 		<hr>

 		<div class="row justify-content-center" style="margin-bottom: 2%; margin-top: 2%;">
 			<p class="lead small" style="margin: 0 0;">If you have any questions or comments about the Computer Science Club, contact us at <a href="dullescomputerscience@gmail.com">dullescomputerscience@gmail.com</a></p>
			<p class="small lead">Any question or comments can also be addressed directly to any of the officers.﻿﻿</p>
 		</div>
	</div>

	<!-- Footer -->
	<?php include 'res/footer.php'; ?>
	<!-- Bootstrap CDN -->
	<?php include 'res/cdn.php'; ?>
	<!-- Scripts -->
		<!-- activate tooltips -->
		<script>
			$(function () {
	  			$('[data-toggle="tooltip"]').tooltip()
			})
		</script>
	
</body>

</html>