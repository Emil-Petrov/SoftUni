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
<table>
    <thead>
        <tr>
            <th>Number</th>
            <th>Square</th>
        </tr>
    </thead>
    <tbody>
        <?php
        $sum = 0;
            for ($number = 0; $number <= 100; $number+=2):
            $numroot =  sqrt($number);
            $sum += $numroot;
        ?>
        <tr>
            <td><?=$number?></td>
            <td><?=round($numroot,2)?></td>
        </tr>
        <?php endfor; ?>
    </tbody>
    <tfoot>
    <tr>
        <td>Total:</td>
        <!--Im calculating the total sum before the rounded roots so its higher than in the example but i believe this makes it slower and in this case it doesnt matter-->
        <td><?=round($sum,2)?></td>
    </tr>
    </tfoot>
</table>
</body>
</html>