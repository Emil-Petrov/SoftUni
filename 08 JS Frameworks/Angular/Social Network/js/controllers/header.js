app.controller('headerController', function ($scope, $user, $utils) {
    var currentUser = $utils.getCurrentUser();
    $scope.name = currentUser.username;
    $scope.friendRequests = [];
    $scope.profilePicture = currentUser.profilePicture;
    $scope.getFriendRequests = function () {
        var _this = this;
        $user.currentUserFriendRequests($utils.getSessionToken())
            .then(function (info) {
                console.log(info.data);
                _this.friendRequests = info.data;
            })
    };

    $scope.logout = function () {
        $user.logout($utils.getSessionToken());
    };

    $scope.findFriends = function(){
        $user.findUsers($utils.getSessionToken(), $scope.nameQuery).then(function(){
            console.log(arguments);
        }, function(){
            console.log(arguments)
        })
    }
});