<?php

include './model/functions.php';

$park = getCustomParkInfo($_POST['id']);

?>

<div id="marker-title">
	
	<h1 class="title"><?php echo $park->name; ?></h1>

	<?php if ($park->status == 'Closed'): ?>
		<h2 class="closed">Closed</h2>
	<?php elseif ($park->status == 'User discretion'): ?>
		<h2 class="usable">User Discretion</h2>
	<?php else: ?>
		<h2 class="open">Open</h2>
	<?php endif ?>

	<h3><a href="<?php echo $park->neighbourhoodURL; ?>" class="neighbourhood" target="_blank"><?php echo $park->neighbourhood; ?></a></h3>

</div>

<div id="marker-map-canvas"></div>

<div id="marker-modal-content">

	<button role="button" id="modal-close"><i class="fa fa-times"></i></button>


	<div class="map-info">

		<div id="map-options">
			<span rel="DRIVING"><i class="fa fa-car"></i></span>
		    <span rel="WALKING"><i class="fa fa-street-view"></i></span>
		    <span rel="BICYCLING"><i class="fa fa-bicycle"></i></span>
		    <span rel="TRANSIT"><i class="fa fa-bus"></i></span>
		</div>

		<div id="duration"></div>

	</div>

	<div class="facilities">
		<?php foreach ($park->parkFacilities as $facility): ?>
			
			<h4><?php echo $facility; ?></h4>

		<?php endforeach ?>
	</div>

</div><!-- end modal-content -->