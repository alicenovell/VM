<?php
$remitente = $_POST['email'];				// Qui fa la consulta
$destinatario = $_POST['desti'];            // El email destinatari ( per test .";josep@digitecp.com")
$asunto = "Contacte Villa Mazzara";        // Asumpte del mail

$ok = $_POST['ok'];                         // Pagina quan el resultat es OK
$ko = $_POST['ko'];                         // Pagina quan el resultat es KO

if (!$_POST){

    include $ko;                            //HTML pel resultat KO

}else{

    $cuerpo = "Missatge enviat el " . date("l, Y-m-d") . " a les " . date("H:i:s") . "\r\n" . "\r\n";
    $cuerpo .= "Nom: " . $_POST["nom"] . "\r\n"; 
    $cuerpo .= "Email: " . $_POST["email"] . "\r\n";
	$cuerpo .= "Telf: " . $_POST["tel"] . "\r\n" . "\r\n";

    $cuerpo .= "Missatge: " . $_POST["message"] . "\r\n" . "\r\n";

    $headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/plain; charset=utf-8\n";
    $headers .= "X-Priority: 3\n";
    $headers .= "X-MSMail-Priority: Normal\n";
    $headers .= "X-Mailer: php\n";
    $headers .= "From: \""."[Formulari] ".$_POST['nom']."\" <".$remitente.">\n";
	

    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        include $ok;                            //HTML pel resultat OK
    }
    else {
        include $ko;                            //HTML pel resultat KO
    }
    
    
    
}
?>
