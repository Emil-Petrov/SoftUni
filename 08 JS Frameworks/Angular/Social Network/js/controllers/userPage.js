app.controller('userPageController', function ($scope, $user, $utils, $routeParams) {
    $scope.currentUserUsername = $utils.getCurrentUser().username;
    $user.getUserWall($utils.getSessionToken(), $routeParams.username, '', 5)
        .then(function (info) {
            $scope.feed = info.data;
            console.log(info);
        }, function (err) {
            console.log(err);
        });
    $user.getUser($utils.getSessionToken(), $routeParams.username)
        .then(function(info){
            $scope.user = info.data;
        }, function(err){
            console.log(err);
        })
    $user.get
});