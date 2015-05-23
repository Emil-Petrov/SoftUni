app.controller('headerController', function ($scope, $user, $utils) {
    function User() {
        this.name = $utils.getCurrentUser().username;
        this.friendRequests = [];
    }

    User.prototype.getFriendRequests = function () {
        var _this = this;
        $user.currentUserFriendRequests($utils.getSessionToken())
            .then(function (info) {
                console.log(info.data);
                _this.friendRequests = info.data;
            })
    };

    User.prototype.logout = function () {
        $user.logout($utils.getSessionToken());
    };

    $scope.user = new User();
});