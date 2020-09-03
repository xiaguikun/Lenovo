<?php
    include('./conn.php');

    $phone=$_REQUEST['phone'];
    $password=$_REQUEST['password'];

    $sql="select * from lenovouser where phone='$phone'";

    $res=$mysqli->query($sql);

    $mysqli->close();

    if($res->num_rows>0){
        echo '{"msg":"用户不可用"}';
    }else{
        echo '{"msg":"用户名可用"}';
    }


?>
