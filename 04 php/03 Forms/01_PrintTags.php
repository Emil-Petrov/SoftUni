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
<div>
    <?php

    if(isset($_POST['submit'])){

        $entries = preg_split('/[, ]+/',$_POST['input']);

        for ($entry = 0; $entry < count($entries); $entry++){

            echo $entry . " : " . $entries[$entry] . '<br/>';

        }
    }

    ?>
</div>
</body>
</html>