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
    <label for="count">Enter amount of months</label>
    <input type="text" name="count"/>
    <input type="submit" name="submit" value="Show costs"/>
    <?php
    error_reporting(0);
    $year = date("Y") + 0;
    if (isset($_POST['submit'])):
    ?>
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>January</th>
                    <th>February</th>
                    <th>March</th>
                    <th>April</th>
                    <th>May</th>
                    <th>June</th>
                    <th>July</th>
                    <th>August</th>
                    <th>September</th>
                    <th>October</th>
                    <th>November</th>
                    <th>December</th>
                    <th>Total:</th>
                </tr>
            </thead>
            <tbody>
    <?php for ($y = $year; $y <= $year+$_POST['count']; $y++):
        $total = 0;?>
                <tr>
                    <td><?php echo $y ?></td>
                    <td><?php $rand = rand(0, 999); echo $rand; $total +=$rand; ?></td>
                    <td><?php $rand = rand(0, 999); echo $rand; $total +=$rand; ?></td>
                    <td><?php $rand = rand(0, 999); echo $rand; $total +=$rand; ?></td>
                    <td><?php $rand = rand(0, 999); echo $rand; $total +=$rand; ?></td>
                    <td><?php $rand = rand(0, 999); echo $rand; $total +=$rand; ?></td>
                    <td><?php $rand = rand(0, 999); echo $rand; $total +=$rand; ?></td>
                    <td><?php $rand = rand(0, 999); echo $rand; $total +=$rand; ?></td>
                    <td><?php $rand = rand(0, 999); echo $rand; $total +=$rand; ?></td>
                    <td><?php $rand = rand(0, 999); echo $rand; $total +=$rand; ?></td>
                    <td><?php $rand = rand(0, 999); echo $rand; $total +=$rand; ?></td>
                    <td><?php $rand = rand(0, 999); echo $rand; $total +=$rand; ?></td>
                    <td><?php $rand = rand(0, 999); echo $rand; $total +=$rand; ?></td>
                    <td><?php echo $total ?></td>
                </tr>
    <?php endfor; ?>
            </tbody>
        </table>
    <?php endif; ?>
</form>
</body>
</html>