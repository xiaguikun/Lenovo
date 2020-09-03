<?php
    include('./conn.php');

    $phone=$_REQUEST['phone'];
    $password=$_REQUEST['password'];

    $sql="select * from lenovouser where phone='$phone'";

    $res=$mysqli->query($sql);

    if($res->num_rows==0){
        $insert="insert into lenovouser (phone,password) values ('$phone','$password') ";
        $flag=$mysqli->query($insert);
        $mysqli->close();

        if($flag){
            echo 1;
        }else{
            echo 0;
        }
    };

?>