<?php

$dest = "matheusprestesdmelo744@gmail.com";

$name = $_REQUEST['nome'];
$email = $_REQUEST['email'];
$comentário = $_REQUEST['comentario'];

$assunto = 'Teste do site';

$body = $body . "Site de portifólio\n";
$body = $body . "Nome: ". $name . "\n";
$body = $body . "Email: " . $email . "\n";
$body = $body . "Mensagem: " . $comentario . "\n";

mail($dest, $assunto, $body, "From: $email\r\n");

header("location:../../thanks.html")

?>

