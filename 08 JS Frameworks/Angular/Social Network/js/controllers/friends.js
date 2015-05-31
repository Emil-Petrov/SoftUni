app.controller('friendsController', function ($scope, $profile, $user, $utils, $routeParams, $location) {
    $scope.currentUserUsername = $utils.getCurrentUser().username;

    if (!$routeParams.username || $scope.currentUserUsername == $routeParams.username) {
        if (endsWith($location.path(), 'friends')) {
            $profile.getCurrentUserFriends($utils.getSessionToken())
                .then(function (info) {
                    $scope.friends = info.data;
                    $scope.friendsCount = info.data.length;
                })
        } else {
            $profile.getCurrentUserFriendsPreview($utils.getSessionToken())
                .then(function (info) {
                    $scope.friends = info.data.friends;
                    $scope.friendsCount = info.data.totalCount;
                })
        }
    } else {
        if (endsWith($location.path(), 'friends')){
            $user.getUserFriends($utils.getSessionToken(), $routeParams.username)
                .then(function (info) {
                    $scope.friends = info.data;
                    $scope.friendsCount = info.data.length;
                })
        }else{
            $user.getUserFriendsPreview($utils.getSessionToken(), $routeParams.username)
                .then(function (info) {
                    $scope.friends = info.data.friends;
                    $scope.friendsCount = info.data.totalCount;
                })
        }
    }


    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }
});