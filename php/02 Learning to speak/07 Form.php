<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        input{
            display: block;
        }
        input[type='radio']{
            display: inline;
        }
    </style>
</head>
<body>
<form method="POST">
    <input type="text" name="name" placeholder="name" required>
    <input type="number" name="age" placeholder="age" required/>
    <input type="radio" name="sex" id="male" value="male" required/>
    <label for="male">Male</label>
    <input type="radio" name="sex" id="female" value="female"/>
    <label for="female">Female</label>
    <input type="submit" name="submit"/>
</form>
<div>
    <?php
    if (isset($_POST['submit'])){
        echo "My name is {$_POST['name']}. I am {$_POST['age']} years old. And I am {$_POST['sex']}";
    }
    ?>
</div>
</body>
</html>