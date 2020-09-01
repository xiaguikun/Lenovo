<?php

header('content-type:text/html;charset=utf-8');

$mysql_conf=array(
    'host'=>'localhost:3306',
    'db_user'=>'root',
    'db_pass'=>'root',
    'db'=>'h5-2006x'
);

$mysqli=@new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pass']);

if($mysqli->connect_errno){
    die('链接错误'.$mysqli->connect_errno);
};

$mysqli->query('set name utf-8');

$select_db = $mysqli->select_db($mysql_conf['db']);


if(!$select_db){
    die('数据库选择错误'.$mysqli->error);
};

?>