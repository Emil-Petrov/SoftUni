<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        table, tr, td, th{
            border: 1px solid black;
        }
    </style>
</head>
<body>
<form method="post">
    <input type="text" name="input"/>
    <input type="submit" name="submit"/>
</form>
<?php
error_reporting(0);
    if ( isset( $_POST['submit'] ) ){
        $entries = preg_split( '/\W+/', strtolower($_POST['input']) );
        $counter = [];
        foreach ($entries as $entry){
            $counter["$entry"]++;
        } ?>
        <table>
            <thead>
            <tr>
                <th>word</th>
                <th>count</th>
            </tr>

            </thead>
        <tbody>
<?php   foreach ($counter as $id=>$count){
    if($id==''){continue;}
            ?>
        <tr>
            <td><?=$id?></td>
            <td><?=$count?></td>
        </tr>
<?php }?>
        </tbody>
        </table>
<?php }?>
</body>
</html>