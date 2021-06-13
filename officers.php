<!--
	Dulles High School Computer Science Club 2018-2019
	Originally Written By Adil Rasiyani, President
        Modified By Vikas Thoutam, President (2021-2022)
	Using Bootstrap
-->

<!DOCTYPE html>
<html style="height:100%;">
<head>
    <title>Officers</title>
    <?php include 'res/head.php'; ?>
</head>
<body style="height:100%;">
	<?php
		include 'res/nav.php';
	?>
	<!--Set Active Page to 'active' in navbar (imported from nav.php)-->
	<script type="text/javascript">
		document.getElementById('nav-bar-officers').setAttribute('class', 'active dropdown-item');
	</script>

	<!-- Main Page -->
	<div class="container">
		<div class="row"></div>
		<h1 class="display-3">2020-2021 Officers</h1>
   	<hr class="style14">
	</div>

	<div>
    <ul class= "officer-list">
      <li>Presidents: Vikas Thoutam and Sahil Chowdhury</li>
      <li>Vice Presidents: Amogha Pokkulandra and Dylan Yu</li>
      <li>Secretary: Suhani Goswami</li>
      <li>Novice and Advanced Coaches: Videet Mehta, Athulya Saravanakumar, and Rushil Shah</li>
      <li>Historian: Rishindra Davuluri</li>
    </ul>
    </div>

	<!-- Footer -->
	<?php 
		include 'res/footer.php';
	 ?>
	<!-- Scripts -->
	
	<!-- Bootstrap CDN -->
	<?php 
		include 'res/cdn.php'; 
	 ?>
</body>
</html>
