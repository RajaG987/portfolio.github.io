<?php
error_reporting(E_ERROR | E_PARSE);
header('Content-Type: application/json');

$response = array("success" => false);

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$text = "Name: ".$name."\n";
$text .= "Email: ".$email."\n";
$text .= "Subject: ".$subject."\n";
$text .= "Message: ".$message."\n";

  if(mail("mkashifali.engr@gmail.com","Contact Message from kashifali.me",$text) || mail("kmalik748@gmail.com","Contact Message from kashifali.me",$text)){
    $response["success"] = true;
  }

  echo json_encode($response);

?>