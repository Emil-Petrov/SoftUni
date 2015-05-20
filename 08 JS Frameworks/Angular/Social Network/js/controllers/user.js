app.controller("userController", function ($scope, $user) {
    function User(username, password, confirmPassword, name, email) {
        this.username = username;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.name = name;
        this.email = email;
    }

    User.prototype.register = function () {
        var username = this.username;
        var name = this.name;
        $user.register(this)
            .then(function (info) {
                var token = "Bearer " + info.data.access_token;
                setSessionStorage(username, name, token)
            }, function (err) {
                console.log(err);
            });
    };

    User.prototype.logout = function () {
        var currentUser = JSON.parse(sessionStorage.currentUser);
        $user.logout(currentUser.sessionToken)
            .then(function () {
                console.log("Logout success");
                sessionStorage.clear();
            });
    };

    User.prototype.login = function () {
        var username = this.username;
        $user.login(this.username, this.password)
            .then(function (info) {
                var token = "Bearer " + info.data.access_token;
                setSessionStorage(username, info.data.userName, token);
            }, function (err) {
                console.log(err);
            });
    };

    function setSessionStorage(username, name, token) {
        var currentUser = {
            username: username,
            name: name,
            sessionToken: token
        };

        sessionStorage.currentUser = JSON.stringify(currentUser);
    }

    $scope.user = new User();
});