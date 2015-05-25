app.controller("myFriendsController", function ($scope, $utils, $user) {
    $user.getCurrentUserFriends($utils.getSessionToken())
        .then(function (data) {
            $scope.friends = data.data;
        })
});