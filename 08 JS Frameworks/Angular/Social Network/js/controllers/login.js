app.controller("loginController", function ($scope, $user, $utils, $profile) {
    $scope.login = function () {
        $user.login($scope.username, $scope.password)
            .then(function (info) {
                var token = "Bearer " + info.data.access_token;
                $profile.currentUser(token)
                    .then(function (info) {
                        var userInfo = info.data;
                        $utils.setStorage(token, userInfo.username, userInfo.name, userInfo.coverImageData, userInfo.profileImageData, userInfo.email, userInfo.gender);
                        console.log(info.data);
                    });
            }, function (err) {
                console.log(err);
            });
    };
});