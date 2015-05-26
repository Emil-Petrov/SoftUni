app.controller("myFriendsController", function ($scope, $utils, $profile) {
    $profile.getCurrentUserFriends($utils.getSessionToken())
        .then(function (data) {
            console.log(data);
            $scope.friends = data.data;
        }, function(err){
            console.log(err);
        })
});