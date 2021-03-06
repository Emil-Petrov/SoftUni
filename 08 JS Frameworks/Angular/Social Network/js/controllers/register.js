app.controller("registerController", function ($scope, $user, $utils, $route) {
    $scope.register = function () {
        var gender = document.getElementById('gender').value;
        $user.register($scope.username, $scope.password, $scope.confirmPassword, $scope.name, $scope.email, gender)
            .then(function (info) {
                var token = "Bearer " + info.data.access_token;
                $utils.setStorage(token, $scope.username, $scope.name, null, null, $scope.email, $scope.gender);
                noty({text: "Welcome to our site " + $scope.name, type: "error", timeout: 3000});
                window.location.replace('#/edit-profile');
            }, function (err) {
                console.log(JSON.stringify(err.data));
                if(err.data.modelState){
                    err.data.modelState[""].forEach(function(element, index){
                        noty({text: element, type: 'error', timeout: 3000})
                    })
                }else{
                    noty({text: err.data.message, type: 'error', timeout: 3000})
                }

            })
    };
});
