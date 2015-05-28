app.controller('headerController', function ($scope, $user, $profile, $utils, $route) {
    var currentUser = $utils.getCurrentUser();
    $scope.name = currentUser.username;
    $scope.friendRequests = [];

    var checkRequests = function () {
        $profile.currentUserFriendRequests($utils.getSessionToken())
            .then(function (info) {
                $scope.friendRequests = info.data;
                $scope.count = info.data.length;
            })
    };
    checkRequests();
    //setInterval(checkRequests, 10000);

    $scope.profilePicture = currentUser.profilePicture;

    $scope.logout = function () {
        $user.logout($utils.getSessionToken())
            .then(function () {
                sessionStorage.clear();
                $route.reload();
            });
    };

    $scope.findFriends = function () {
        $user.findUsers($utils.getSessionToken(), $scope.nameQuery).then(function () {
            console.log(arguments);
        }, function () {
            console.log(arguments)
        })
    };

    // TODO: Test this. Also remove HTML elements upon click
    $scope.acceptFriendRequest = function (id) {
        $profile.acceptFriendRequest($utils.getSessionToken(), id)
    };

    $scope.rejectFriendRequest = function (id) {
        $profile.rejectFriendRequest($utils.getSessionToken(), id);
    }
});