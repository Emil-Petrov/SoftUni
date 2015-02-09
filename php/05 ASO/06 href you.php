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
    <input type="submit" name="submit"/>
</form>
<?php
if(isset($_POST['submit'])) {
    echo preg_replace('/<a.+?href=([^>]+)>([^<]+)<\/a>/', "[URL=$1]$2[/URL]", $_POST['text']);
}
?>
</body>
</html>