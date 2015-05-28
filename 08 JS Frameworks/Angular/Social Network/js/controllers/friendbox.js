app.controller('friendBoxController', function ($scope, $user, $profile, $utils) {
    (function getFriends(){
        $profile.getCurrentUserFriendsPreview($utils.getSessionToken())
            .then(function (info) {
                console.log(info.data.friends)
                $scope.friends = info.data.friends;
            })
    }())
});