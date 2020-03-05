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
	if ($_SERVER['REQUEST_METHOD'] === 'POST'){ 
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$numberofteammembers = $_POST['numberofteammembers'];
	$triviasuggestion = $_POST['triviasuggestion'];

	$formcontent="From: $firstname $lastname \nE-Mail: $email \nPhone: $phone \nNumber of Team Members: $numberofteammembers \nTrivia Suggestion: $triviasuggestion";
	$recipient = "veronica@joesbar.com";
	$subject = "April 29 - How I Met Your Mother Trivia";
	$mailheader = "From: Reservations@joesbar.com \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	echo "<div class='form-text'>Thank you for your trivia reservation!  Your team is confirmed.</div>";
	echo "<div class='form-image'><img src='../../../media/images/logos/joes-main-logo.png'/>";
	}
	?>
</body>
</html>