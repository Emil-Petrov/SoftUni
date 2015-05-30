app.controller('friendsController', function ($scope, $profile, $user, $utils, $routeParams) {
    $scope.currentUserUsername = $utils.getCurrentUser().username;

    if (!$routeParams.username || $scope.currentUserUsername == $routeParams.username){
        $profile.getCurrentUserFriends($utils.getSessionToken())
            .then(function (info) {
                $scope.friends = info.data;
                $scope.friendsCount = info.data.length;
            })
    }else{
        $user.getUserFriends($utils.getSessionToken(), $routeParams.username)
            .then(function (info) {
                $scope.friends = info.data;
                $scope.friendsCount = info.data.length;
            })
    }
});