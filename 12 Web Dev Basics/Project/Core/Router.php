<?php
namespace AL\Core;

class ControllerRouter{

    private $baseUrl = '';
    private $page404 = '';

    function __construct($baseUrl, $page404) {
       $this->baseUrl = $baseUrl;
        $this->page404 = $page404;
    }

    public function resolve($route){
        $params = explode('/', $route);
        $controller = array_shift($params);
        $action = array_shift($params);

        $controllerName = '\\AL\\Core\\Controllers\\' . ucfirst(strlen($controller) != 0 ? $controller : "Home") . 'Controller';

        spl_autoload_register(function($class){
            $class = explode('\\', $class);
            array_shift($class);
            $classPath = implode(DIRECTORY_SEPARATOR, $class) . '.php';
            if(!is_readable($classPath)){
                header("Location: $this->page404");
                exit;
            }
            require_once  $classPath;
        });

        $controllerInstance = new $controllerName();

        if(!call_user_func_array(
            array($controllerInstance, $action),
            $params
        )){
            if (strlen($action) === 0){
                throw new Exception("Mission action");
            }
            throw new Exception("Action $action, not recognized");
        }

        return $controllerInstance;
    }
}