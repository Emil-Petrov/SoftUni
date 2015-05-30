app.controller('headerController', function ($scope, $user, $profile, $utils, $route) {
    var currentUser = $utils.getCurrentUser();
    $scope.name = currentUser.name;
    $scope.username = currentUser.username;
    $scope.friendRequests = [];

    $profile.currentUserFriendRequests($utils.getSessionToken())
        .then(function (info) {
            $scope.friendRequests = info.data;
            $scope.count = info.data.length;
        }, function (err) {
            noty({text: err.data.message, type: "error", timeout: 3000});
        });


    $scope.profilePicture = currentUser.profilePicture;

    $scope.logout = function () {
        sessionStorage.clear();
        $user.logout($utils.getSessionToken())
            .then(function () {
                noty({text: "Good bye " + $scope.name, type: "success", timeout: 3000});
                $route.reload();
            }, function (err) {
                noty({text: err.data.message, type: "error", timeout: 3000});
            });
    };

    $scope.acceptFriendRequest = function (request) {
        $profile.acceptFriendRequest($utils.getSessionToken(), request.id)
            .then(function (info) {
                var requestIndex = $scope.friendRequests.indexOf(request);
                $scope.friendRequests.splice(requestIndex, 1);
                noty({text: info.data + " is now your friend", type: "error", timeout: 3000})
            }, function (err) {
                noty({text: err.data.message, type: "error", timeout: 3000})
            })
    };

    $scope.rejectFriendRequest = function (request) {
        var requestIndex = $scope.friendRequests.indexOf(request);
        $scope.friendRequests.splice(requestIndex, 1);
        $profile.rejectFriendRequest($utils.getSessionToken(), request.id);
    };

    $scope.findPeople = function () {
        if ($scope.nameQuery.length <= 0) {
            $scope.peopleFound = [];
        } else {
            $user.findUsers($utils.getSessionToken(), $scope.nameQuery)
                .then(function (info) {
                    $scope.peopleFound = info.data;
                }, function (err) {
                    noty({text: err.data.message, type: "error", timeout: 3000})
                });
        }
    };

    $scope.sendFriendRequest = function (username) {
        $profile.sendFriendRequest($utils.getSessionToken(), username)
            .then(function (info) {
                noty({text: info.data.message, type: "success", timeout: 3000})
            }, function (err) {
                noty({text: err.data.message, type: "error", timeout: 3000})
            });
    };
});