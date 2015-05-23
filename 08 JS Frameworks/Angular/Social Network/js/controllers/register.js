app.controller('registerController', function ($scope, $user, utils) {
    function User(username, password, confirmPassword, name, email) {
        this.username = username;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.name = name;
        this.email = email;
    }

    User.prototype.register = function () {
        var _username = this.username;
        var _name = this.name;
        $user.register(this.username, this.password, this.confirmPassword, this.name, this.email)
            .then(function (info) {
                var token = "Bearer " + info.data.access_token;
                utils.setStorage(_username, _name, token)
            }, function (err) {
                console.log(err);
            });
    };

    $scope.user = new User();
});
