<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        table, tr, td{
            border: 1px solid black;
        }
    </style>
</head>
<body>
<form action="" method="post">
    <input type="text" name="input"/>
    <input type="submit" name="submit"/>
</form>
<?php
if (isset($_POST['submit'])):
    $entries = preg_split('/\W+/', $_POST['input']);
    ?>
    <table>
        <tbody>
<?php for ($entry = 0; $entry < count($entries); $entry++):
    $charArr = str_split($entries[$entry]);
    if ($charArr[0]==''){
        continue;
    }
    $sum = 0;
    foreach ($charArr as $char) {
        if ($char + 0 == 0){
            $sum = 'I cannot sum that';
            break;
        }
        $sum += $char;
    }
    ?>
    <tr>
        <td><?= $entries[$entry]?></td>
        <td><?= $sum ?></td>
    </tr>
    <?php endfor; ?>
        </tbody>
    </table>
<?php endif; ?>
</body>
</html>