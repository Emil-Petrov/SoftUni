<?php
    session_start();
    if(isset($_SESSION['name'])){
        header('Location: game.php');
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form method="post">
    <label for="name">Please type your name: </label>
    <input type="text" name="name">
    <input type="submit" name="submit" value="Play!">
</form>
<?php
    if (isset($_POST['submit'])){
        $name = $_POST['name'];
        $_SESSION['name'] = $name;
        header("Location: game.php");
    }
?>
</body>
</html>