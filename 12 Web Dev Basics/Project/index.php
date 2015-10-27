<?php
error_reporting(1);
$baseUrl = explode('/', $_SERVER['SCRIPT_NAME']);
array_pop($baseUrl);
$baseUrl = implode(DIRECTORY_SEPARATOR, $baseUrl);
$Page404 = $baseUrl . DIRECTORY_SEPARATOR . '404.php';

$uri = array_key_exists('uri', $_GET) ? $_GET['uri'] : '';
//$params = explode('/', $uri);
//$controller = array_shift($params);
//$action = array_shift($params);
//
//$controllerName = '\\AL\\Core\\Controllers\\' . ucfirst(strlen($controller) != 0 ? $controller : "Home") . 'Controller';
//
//spl_autoload_register(function($class){
//    $class = explode('\\', $class);
//    array_shift($class);
//    $classPath = implode(DIRECTORY_SEPARATOR, $class) . '.php';
//    if(!is_readable($classPath)){
//        header("Location: 404.php");
//        exit;
//    }
//    require_once  $classPath;
//});
//
//$controllerInstance = new $controllerName();
//
//if(!call_user_func_array(
//    array($controllerInstance, $action),
//    $params
//)){
//    echo "Action $action, not recognized";
//}