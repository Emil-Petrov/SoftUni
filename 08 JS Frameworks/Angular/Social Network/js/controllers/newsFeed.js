app.controller("newsFeedController", function ($scope, $user, $profile, $utils) {

    $profile.getUserFeed($utils.getSessionToken(), '', 5)
        .then(function(info){
            console.log(info.data);
            $scope.feed = info.data;
        }, function(err){
            console.log(err)
        });
});