app.controller("loginController", function ($scope, $user, $utils) {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    User.prototype.login = function () {
        $user.login(this.username, this.password)
            .then(function (info) {
                var token = "Bearer " + info.data.access_token;
                $user.currentUser(token)
                    .then(function(info){
                        var userInfo = info.data;
                        $utils.setStorage(token, userInfo.username, userInfo.name, userInfo.coverImageData, userInfo.profileImageData, userInfo.email, userInfo.gender);
                        console.log(info.data);
                    });
            }, function (err) {
                console.log(err);
            });
    };

    $scope.user = new User();
});