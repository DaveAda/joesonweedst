<html>
<head>
	<title></title>
	<link rel="shortcut icon" type="image/x-icon" href="../../../media/images/logos/joes-main-logo.png"/>
	<link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet">
	<style type="text/css">
		body{
			background-color: #394145;
			margin: 0;
			padding: 0;
		}
		.form-text{
			color: #fff;
			font-family: 'Roboto Mono';
			font-size: 36px;
			margin: 20px auto 0 auto;
			max-width: 90%;
			position: relative;
			text-align: center;
			width: 100%;
		}

		.form-image{
			align-items: center;
			display: flex;
			height: 100%;
			justify-content: center;
			margin: 0 auto;
			max-width: 100%;
			position: absolute;
			top: 0;
			width: 100%;
		}	
		.form-image img{
			max-width: 400px;
			opacity: .5;
			text-align: center;
		}
	</style>
</head>
<body>
	<?php 
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];
	$company = $_POST['company'];
	$date = $_POST['date'];
	$numberofpeople = $_POST['numberofpeople'];
	$typeofevent = $_POST['typeofevent'];

	$formcontent="From: $firstname $lastname \nE-Mail: $email \nPhone: $phone \nMessage: $message \nCompany: $company \nDate and Time: $date \nNumber of People: $numberofpeople \nType of Event: $typeofevent";
	$recipient = "dave@daveada.com";
	$subject = "The Alley Suite Reservation";
	$mailheader = "From: Private Party Reservation \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	echo "<div class='form-text'>Thank you for your reservation inquiry.  We will contact you shortly.</div>";
	echo "<div class='form-image'><img src='../../../media/images/logos/joes-main-logo.png'/>";
	?>
</body>
</html>

