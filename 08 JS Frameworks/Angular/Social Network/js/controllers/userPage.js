app.controller('userPageController', function ($scope, $profile, $user, $utils, $posts, $routeParams) {
    $scope.currentUserUsername = $utils.getCurrentUser().username;
    $scope.feed = [];
    $user.getUserWall($utils.getSessionToken(), $routeParams.username, '', 5)
        .then(function (info) {
            $scope.feed = info.data;
        }, function (err) {
            console.log(err);
        });
    $user.getUser($utils.getSessionToken(), $routeParams.username)
        .then(function (info) {
            $scope.user = info.data;
        }, function (err) {
            console.log(err);
        });
    $user.getUserFriendsPreview($utils.getSessionToken(), $routeParams.username)
        .then(function (info) {
            $scope.friends = info.data.friends;
            $scope.friendsCount = info.data.totalCount;
        }, function (err) {
            console.log(err);
        });

    $scope.post = function () {
        $posts.postNew($utils.getSessionToken(), $scope.postContent, $routeParams.username)
            .then(function (info) {
                $scope.feed.push(info.data);
            }, function(err){
                console.log(err);
            });
    };
    $scope.sendFriendRequest = function(){
        $profile.sendFriendRequest($utils.getSessionToken(), $routeParams.username)
            .then(function(info){
                console.log(info.data.message);
            }, function(err){
                console.log(err.data.message);
            });
    }
});