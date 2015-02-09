<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form action="" method="post">

    <input type="text" name="input"/>

    <input id="option1" type="radio" name="option" value="1"/>
    <label for="option1">Check Palindrome</label>

    <input id="option2" type="radio" name="option" value="2"/>
    <label for="option2">Reverse string</label>

    <input id="option3" type="radio" name="option" value="3"/>
    <label for="option3">Split</label>

    <input id="option4" type="radio" name="option" value="4"/>
    <label for="option4">Hash String</label>

    <input id="option5" type="radio" name="option" value="5"/>
    <label for="option5">Shuffle string</label>

    <input type="submit" name="submit"/>
</form>
<?php
error_reporting(0);
    if (isset($_POST['submit'])){
        $input = $_POST['input'];
        switch ($_POST['option']){
            case 1:
                if (strtolower($input)==strrev(strtolower($input))){
                    echo "$input is a palindrome!";
                }else{
                    echo "$input is not a palindrome!";
                }
                break;
            case 2:
                echo strrev($input);
                break;
            case 3:
                $input = str_split($input);
                echo implode(' ',$input);
                break;
            case 4:
                echo hash('sha256',$input);
                break;
            case 5:
                echo str_shuffle($input);
                break;
            default: echo "Please check an option";
                break;
        }
    }
?>
</body>
</html>