app.controller("registerController", function ($scope, $user, $utils) {
    $scope.register = function () {
        var gender = document.getElementById('gender').value;
        console.log($scope.username, $scope.password, $scope.confirmPassword, $scope.name, $scope.email, gender);
        $user.register($scope.username, $scope.password, $scope.confirmPassword, $scope.name, $scope.email, gender)
            .then(function (info) {
                var token = "Bearer " + info.data.access_token;
                $utils.setStorage(token, $scope.username, $scope.name, null, null, $scope.email, $scope.gender)
            }, function (err) {
                console.log(err);
            })
    };
   $scope.matchPassword = new RegExp("/" + $scope.password + "/")
});