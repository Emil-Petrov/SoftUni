<?php
session_start();

if(!isset($_SESSION['name'])){
    header('Location: index.php');
    exit;
}

if (!isset($_SESSION['number'])){
    $num = rand(0, 100);
    $_SESSION['number'] = $num;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div>Hello, <?= $_SESSION['name'] ?>! <br>Try to guess the number between 0 and 100 and win... something.</div>
<form action="" method="post">
    <label for="number">Enter your guess: </label>
    <input type="text" name="number" autofocus="">
    <input type="submit" name="submit" value="Play!">
</form>

<?php
    if(isset($_POST['submit'])){
        $guessedNum = $_POST['number'];
        if(!is_numeric ($guessedNum) || $guessedNum > 100 || $guessedNum < 0){
            echo "Invalid Number";
        }else{
            $guessedNum = (int) $guessedNum;
            $num = (int) $_SESSION['number'];

            if($guessedNum == $num){?>
                <div>Congratulations</div>
                <form method="post">
                    <input type="submit" name="again" value="Play Again!">
                </form>
                <?php
            }else if($guessedNum > $num){
                echo "Down";
            }else{
                echo "Up";
            }
        }
    }

    if (isset($_POST['again'])){
        unset($_SESSION['number']);
    }
?>
</body>
</html>
