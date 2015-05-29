app.controller("newsFeedController", function ($scope, $user, $profile, $utils, $comments, $posts) {
    $scope.currentUserUsername = $utils.getCurrentUser().username;

    $profile.getUserFeed($utils.getSessionToken(), '', 5)
        .then(function (info) {
            $scope.feed = info.data;
        }, function (err) {
            console.log(err)
        });

    $scope.addFriend = function (username) {
        $user.addFriend(username)
            .then(function (info) {
                console.log(info)
            }, function (err) {
                console.log(err);
            });
    };

    $profile.getCurrentUserFriendsPreview($utils.getSessionToken())
        .then(function (info) {
            console.log(info.data);
            $scope.friends = info.data.friends;
            $scope.friendsCount = info.data.totalCount;
        })
});