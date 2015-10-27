<?php
    $params = explode('/', $_GET['params']);
    $controller = array_shift($params);
    $action = array_shift($params);

    $controllerName = ucfirst($controller) . 'Controller';
    echo($controllerName);
spl_autoload_register(function($class){
    $classPath = explode("\\", $class);
    $classPath = implode(DIRECTORY_SEPARATOR, $classPath);
    require_once "\\TestFolder\\" . $class . '.php';
});


var_dump(new $controllerName());