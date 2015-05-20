<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>

</head>
<body>
<form method="post">
    <label for="text">Text</label>
    <input type="text" name="text" id="text"/>

    <label for="bans">Word</label>
    <input type="text" name="word" id="word"/>

    <input type="submit" name="submit"/>
</form>
<?php
    preg_match_all('/[^!.?]+[!.?]+/',$_POST['text'],$sentences);
    foreach ($sentences[0] as $sentence){

        if (preg_match("/\b{$_POST['word']}\b/",$sentence)){
            echo $sentence . '<br/>';
        }

    }

?>
</body>
</html>