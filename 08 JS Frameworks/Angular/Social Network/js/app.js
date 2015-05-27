var BASE_URL = 'http://softuni-social-network.azurewebsites.net/api/';
var app = angular.module("socialNetwork", []);
app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);