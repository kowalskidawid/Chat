<?php
    require_once("connect.php");
    $mysql = new mysqli($host, $login, $pass, $db);
    echo $mysql->connect_error;
    $result = $mysql->query("select nazwa, tresc from wiadomosci order by id desc;");
    $myArray = Array();
    while($row = $result->fetch_array()) {
            $myArray[] = $row;
    }
    echo json_encode($myArray)
?>
