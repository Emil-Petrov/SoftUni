app.controller('headerController', function ($scope, $user, $profile, $utils, $route) {
    var currentUser = $utils.getCurrentUser();
    $scope.name = currentUser.name;
    $scope.username = currentUser.username;
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
        sessionStorage.clear();

        $user.logout($utils.getSessionToken())
            .then(function () {
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

    $scope.acceptFriendRequest = function (id) {
        $profile.acceptFriendRequest($utils.getSessionToken(), id)
    };

    $scope.rejectFriendRequest = function (id) {
        $profile.rejectFriendRequest($utils.getSessionToken(), id);
    };

    $scope.findPeople = function(){
        if ($scope.nameQuery.length <= 0){
            $scope.peopleFound = [];
            return;
        }
        $user.findUsers($utils.getSessionToken(), $scope.nameQuery)
            .then(function(info){
                $scope.peopleFound = info.data;
            });
    };

    $scope.sendFriendRequest = function(username){
        $profile.sendFriendRequest($utils.getSessionToken(), username)
            .then(function(info){
                console.log(info.data.message);
            });
    };
});