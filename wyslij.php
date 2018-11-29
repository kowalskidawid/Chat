<?php
    require_once("connect.php");
    $mysql = new mysqli($host, $login, $pass, $db);
    $imie = $_POST["nazwa"];
    $tresc = $_POST["tresc"];
    $mysql->query("insert into wiadomosci values('', '$imie', '$tresc');");
    $mysql->error;
?>
