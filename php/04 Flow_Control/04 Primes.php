<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form action="" method="post">
    <label for="from">Starting Index:</label>
    <input type="number" name="from"/>
    <label for="to">End:</label>
    <input type="number" name="to"/>
    <input type="submit" name="submit"/>
</form>
<?php

if (isset($_POST['submit'])){
    for ($startIndex = $_POST['from']; $startIndex <= $_POST['to']; $startIndex++){
        if (isPrime($startIndex)){
            echo "<strong style='font-size: 20px'>$startIndex</strong> ";
        }else{
            echo "$startIndex ";
        }
    }
}
function isPrime($n) {
    if ($n <= 3) {
        return $n > 1;
    } else if ($n % 2 == 0 || $n % 3 == 0) {
        return false;
    } else {
        for ($i = 5; $i * $i <= $n; $i += 6) {
            if ($n % $i == 0 || $n % ($i + 2) == 0) {
                return false;
            }
        }
        return true;
    }
}
?>
</body>
</html>