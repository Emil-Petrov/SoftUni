var BASE_URL = 'http://softuni-social-network.azurewebsites.net/api/';
var app = angular.module("socialNetwork", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/welcome-screen.html'
    }).when('/edit-profile', {
        templateUrl: 'views/edit-profile.html'
    }).when('/change-password/', {
        templateUrl: 'views/change-password.html'
    }).when('/users/:username',{
        templateUrl: 'views/user-page.html'
    }).when('/users/:username/friends',{
        templateUrl: 'views/friends.html'
    });
    $routeProvider.otherwise({redirectTo: '/'});
}).run(function ($rootScope, $location) {
    $rootScope.$on("$routeChangeStart", function () {
        if (!sessionStorage.currentUser) {
            $location.path("/");
        }
    });
});