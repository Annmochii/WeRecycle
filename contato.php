<?php

if(isset($_POST['email'])) && !empty($_POST['email']) {

$nome = addcslashes($_POST['name']);
$sobrenome = addcslashes($_POST['surname']);
$email = addcslashes($_POST['email']);
$mensagem = addcslashes($_POST['message']);

$to = "elo.paje.silva@hotmail.com";
$subject = "Contato WeRecycle";
$body = "Nome: ".$nome. "\r\n".
        "Sobrenome: ".$sobrenome. "\r\n".
        "Email: ".$email. "\r\n"
        "Mensagem: ".$mensagem;
$header = "From: elo.gati.nha@hotmail.com"."\r\n"
            ."Reply-To:".$email."\e\n"
            ."X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)) {
    echo("Email enviado com sucesso =D");

}else {
    echo("Email não pôde ser enviado =(");
}



}
?>