app.controller('registerController', function ($scope, $user, $utils) {
    $scope.register = function () {
        $user.register($scope.username, $scope.password, $scope.confirmPassword, $scope.name, $scope.email)
            .then(function (info) {
                var token = "Bearer " + info.data.access_token;
                $utils.setStorage(token, $scope.username, $scope.name, null, null, $scope.email, $scope.gender)
            }, function (err) {
                console.log(err);
            })
    };
});
