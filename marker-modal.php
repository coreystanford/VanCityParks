<?php

include './model/functions.php';

$park = getCustomParkInfo($_POST['id']);

?>

<div id="marker-map-canvas"></div>

<div id="marker-modal-content">

	<button role="button" id="modal-close"><i class="fa fa-times"></i></button>
	<div id="warnings_panel" style="width:100%;height:10%;text-align:center"></div>
	
	
	<h1 class="title"><?php echo $park->name; ?></h1>

	<?php if ($park->status == 'Closed'): ?>
		<h2 class="closed">Closed</h2>
	<?php elseif ($park->status == 'User discretion'): ?>
		<h2 class="usable">User Discretion</h2>
	<?php else: ?>
		<h2 class="open">Open</h2>
	<?php endif ?>

	<h3><a href="<?php echo $park->neighbourhoodURL; ?>" class="neighbourhood" target="_blank"><?php echo $park->neighbourhood; ?></a></h3>

	<div class="facilities">
		<?php foreach ($park->parkFacilities as $facility): ?>
			
			<h4><?php echo $facility; ?></h4>

		<?php endforeach ?>
	</div>

</div><!-- end modal-content -->