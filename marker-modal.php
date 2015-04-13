<?php

include './model/functions.php';

$park = getCustomParkInfo($_POST['id']);

?>

<div id="modal-content">

	<button role="button" id="modal-close"><i class="fa fa-times"></i></button>

	<h1><?php echo $park->name; ?></h1>
	<?php if ($park->status == 'Closed'): ?>
		<h2 class="closed">Closed</h2>
	<?php elseif ($park->status == 'User discretion'): ?>
		<h2 class="usable">User Discretion</h2>
	<?php else: ?>
		<h2 class="open">Open</h2>
	<?php endif ?>

	<div class="facilities">
		<?php foreach ($park->parkFacilities as $facility): ?>
			
			<h3><?php echo $facility; ?></h3>

		<?php endforeach ?>
	</div>

</div><!-- end modal-content -->