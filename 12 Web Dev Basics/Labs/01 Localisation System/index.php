<?php
    session_start();
    require_once 'translations.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a href="?lang=bg">BG</a> | <a href="?lang=en">EN</a>

<h1>
    <?= __('informal_greeting')?>
</h1>
</body>
</html>