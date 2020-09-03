<?php
    include('./conn.php');

    $phone=$_REQUEST['phone'];
    $password=$_REQUEST['password'];

    $sql="select * from lenovouser where phone='$phone' and password='$password'";

    $res=$mysqli->query($sql);

    $mysqli->close();

    if($res->num_rows>0){
        echo 1;
    }else{
        echo 0;
    }
?>