<?php
require_once 'DB.php';
require_once 'Localization.php';

$query = DB::getInstance()->query("SHOW COLUMNS FROM translations");
$columns = $query->fetchAll(PDO::FETCH_ASSOC);

$possibleLanguages =
array_values(
    array_map(function($item){
        return str_replace("text_", "", $item['Field']);
    },array_filter($columns, function($column){
        if (strpos($column['Field'], "text_") !== false){
            return true;
        }
        return false;
})));

if (isset($_GET['lang'])){
    $lang = $_GET['lang'];

    if (!in_array($lang, $possibleLanguages)){
        throw new Exception("Invalid Language");
    }

    setcookie('lang', $lang);
    $_COOKIE['lang'] = $lang;
}

Localization::$LANG_DEFAULT = $possibleLanguages[0];
function __($tag){
    $lang = isset($_COOKIE['lang'])
        ? $_COOKIE['lang']
        : Localization::$LANG_DEFAULT;

    $query = DB::getInstance()->query("
            SELECT
                  text_{$lang}
            FROM
                  translations
            WHERE
                  tag = '$tag'
            ");
    $row = $query->fetch(PDO::FETCH_NUM);
    return $row[0];
}