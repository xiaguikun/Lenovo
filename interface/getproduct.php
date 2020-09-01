<?php
include('./conn.php');

$sql='select * from productx';

$res=$mysqli->query($sql);

$mysqli->close();

$arr=array();

while($row=$res->fetch_assoc()){
    array_push($arr,$row);
}

$json=json_encode($arr);

echo $json;

?>