<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form method="post">
    <input type="text" name="input"/>
    <input type="submit" name="submit"/>
</form>
<?php
     if (isset ($_POST['submit'])){
         $chars = preg_split('//', $_POST['input']);
         foreach ($chars as $char){
             if (ord($char) % 2 == 0){ ?>
                 <span style="color: blue"><?=$char?></span>
             <?php } else { ?>
                 <span style="color: red"><?=$char?></span>
         <?php     }
            }
     }
?>
</body>
</html>