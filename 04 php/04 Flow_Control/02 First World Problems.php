<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        table, tr, td,th{
            border: 1px solid black;
            padding: 2px;
        }
    </style>
</head>
<body>
<form action="" method="post">
    <label for="cars">Enter cars</label>
    <input type="text" name="cars"/>
    <input type="submit" name="submit"/>
</form>
<?php
    if(isset($_POST['submit'])):
    $cars = preg_split("/\\W+/",$_POST['cars'],PREG_SPLIT_NO_EMPTY);
        $colors = ['tebeshir', 'musaka', 'ohluf', 'panda pink', 'chakul', 'korean gray', 'love'];
        ?>
<table>
    <thead>
        <tr>
            <th>Car</th>
            <th>Color</th>
            <th>Count</th>
        </tr>
    </thead>
    <tbody>
        <?php for ($car = 0; $car < count($cars); $car++):
            $color = rand(0,count($colors)-1);
            ?>
            <tr>
                <td><?= $cars[$car] ?></td>
                <td><?= $colors[$color]?></td>
                <td><?= rand(1,5)?></td>
            </tr>
        <?php endfor; ?>
    </tbody>
</table>
<?php endif;?>
</body>
</html>