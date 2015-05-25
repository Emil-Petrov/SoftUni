app.controller('headerController', function ($scope, $user, $utils) {
    var currentUser = $utils.getCurrentUser();
    $scope.name = currentUser.username;
    $scope.friendRequests = [];
    (function(){$user.currentUserFriendRequests($utils.getSessionToken())
            .then(function (info) {
                console.log(info);
                console.log(info.data);
                $scope.friendRequests = info.data;
            })
    }());

    $scope.profilePicture = currentUser.profilePicture;

    $scope.logout = function () {
        $user.logout($utils.getSessionToken());
    };

    $scope.findFriends = function(){
        $user.findUsers($utils.getSessionToken(), $scope.nameQuery).then(function(){
            console.log(arguments);
        }, function(){
            console.log(arguments)
        })
    };

    // TODO: Test this.
    $scope.acceptFriendRequest = function(id){
        $user.acceptFriendRequest($utils.getSessionToken(), id)
    };

    $scope.rejectFriendRequest = function(id){
        $user.rejectFriendRequest($utils.getSessionToken(), id);
    }
});