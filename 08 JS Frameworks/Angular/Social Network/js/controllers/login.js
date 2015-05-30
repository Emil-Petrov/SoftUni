app.controller("loginController", function ($scope, $user, $utils, $profile, $route) {
    $scope.login = function () {
        $user.login($scope.username, $scope.password)
            .then(function (info) {
                var token = "Bearer " + info.data.access_token;
                $profile.currentUser(token)
                    .then(function (info) {
                        var userInfo = info.data;
                        $utils.setStorage(token, userInfo.username, userInfo.name, userInfo.coverImageData, userInfo.profileImageData, userInfo.email, userInfo.gender);
                        $route.reload();
                        noty({text: "Welcome back " +userInfo.name, type:"success", timeout: 3000})
                    });
            }, function (err) {
                console.log(err);
            });
    };
});