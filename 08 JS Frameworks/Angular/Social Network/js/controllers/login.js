app.controller("loginController", function ($scope, $user, utils) {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    User.prototype.login = function () {
        var _username = this.username;
        $user.login(this.username, this.password)
            .then(function (info) {
                var token = "Bearer " + info.data.access_token;
                utils.setStorage(_username, info.data.userName, token);
            }, function (err) {
                console.log(err);
            });
    };

    $scope.user = new User();
});