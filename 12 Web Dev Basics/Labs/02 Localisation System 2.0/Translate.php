<?php
    require_once "DB.php";
    require_once "Localization.php";

    $db = DB::getInstance();
    $query = $db->query("
                        SELECT
                                id, tag, text_en, text_bg
                        FROM translations
                        ");
    $translations = $query->fetchAll(PDO::FETCH_ASSOC);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<a href="index.php">HOME</a>
<form method="POST">
    <?php foreach($translations as $index=>$translation): ?>
        <div class="source-translation">
            <?= $translation['text_' . Localization::$LANG_DEFAULT] ?>
        </div>
        <textarea name="text_bg_<?= $translation['id'] ?>"
                  id="<?= $index ?>"
                  cols="20"
                  rows="3"><?= $translation['text_bg'] ?></textarea>
    <?php endforeach; ?>
    <br>
    <input type="submit" name="submit" value="SUBMIT!">
</form>
<?php
    if(isset($_POST['submit'])){
        $newTranslations = array_flip(array_filter(array_flip($_POST), function($translation){
            if (strpos($translation, 'text_') !== false){
                return true;
            }
            return false;
        }));
        foreach ($newTranslations as $index=>$translation){
            $id = (int) str_replace("text_bg_", "", $index);
            $query = $db->prepare("UPDATE translations SET text_bg = ? WHERE id = ?");
            $query->execute([$translation, $id]);
        }
    }
?>
</body>
</html>
