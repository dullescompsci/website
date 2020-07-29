<!--
	Dulles High School Computer Science Club 2018-2019
	Written By Adil Rasiyani, President
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
    <ul>
      <li>Presidents: Vikas Thoutam and Erica Miller</li>
      <li>Vice Presidents: Sahil Chowdhury and Amogha Pokkulandra</li>
      <li>Secretary: Phoebe Lin</li>
      <li>Novice and Advanced Coaches: Eric Peng and Aaroh Sharma</li>
      <li>Historian: Suhani Goswami</li>
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
