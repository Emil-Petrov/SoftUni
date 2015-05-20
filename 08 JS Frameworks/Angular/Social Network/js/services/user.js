app.factory("$user", function ($http) {
    var registerUrl = 'users/register';
    var logoutUrl = 'users/logout';
    var loginUrl = 'users/login';

    function register(user) {
        var newUser = {
            username: user.username,
            password: user.password,
            confirmPassword: user.confirmPassword,
            name: user.name,
            email: user.email
        };

        return $http({
            method: "POST",
            url: BASE_URL + registerUrl,
            data: newUser
        });
    }

    function logIn(username, password) {
        var loginUser = {
            username: username,
            password: password
        };

        return $http({
            method: "POST",
            url: BASE_URL + loginUrl,
            data: loginUser
        });
    }

    function logOut(token) {
        var authorization = {
            Authorization: token
        };

        return $http({
            method: "POST",
            url: BASE_URL + logoutUrl,
            headers: authorization
        });
    }

    return {
        register: register,
        logout: logOut,
        login: logIn
    }
});
