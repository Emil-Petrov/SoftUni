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

    <label for="bans">Bans</label>
    <input type="text" name="bans" id="bans"/>

    <input type="submit" name="submit"/>
</form>
<?php

    if (isset ($_POST['submit'])){
        $input = $_POST['text'];
        $bans = explode(', ',$_POST['bans']);
        foreach ($bans as $ban){
            $replacement = '';
            for ($asterix = 0; $asterix < strlen($ban); $asterix++){
                $replacement .= '*';
            }
            $input = preg_replace("/$ban/i", $replacement, $input);
        }?>
         <div><?=$input ?></div>
<?php   }?>
</body>
</html>