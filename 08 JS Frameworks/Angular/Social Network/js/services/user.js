app.factory("$user", function ($http) {

    var registerUrl = 'users/register';
    var logoutUrl = 'users/logout';
    var loginUrl = 'users/login';

    var searchUrl = 'users/search?searchTerm=';
    var previewUserPrefixUrl = 'users/';
    var previewUserSuffixUrl = '/preview';

    var wallPrefixUrl = '/wall?StartPostId=';
    var wallSuffixUrl = '&PageSize=';

    function register(username, password, confirmPassword, name, email, gender) {
        var newUser = {
            username: username,
            password: password,
            confirmPassword: confirmPassword,
            name: name,
            email: email,
            gender: gender
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
        return $http({
            method: "POST",
            url: BASE_URL + logoutUrl,
            headers: getAuthorizationToken(token)
        });
    }

    function preview(token, name) {
        return $http({
            method: "GET",
            url: BASE_URL + previewUserPrefixUrl + name + previewUserSuffixUrl,
            headers: getAuthorizationToken(token)
        })
    }

    function getUser(token, name) {
        return $http({
            method: "GET",
            url: BASE_URL + 'users/' + name,
            headers: getAuthorizationToken(token)
        })
    }

    function findUsers(token, name) {
        return $http({
            method: "GET",
            url: BASE_URL + searchUrl + name,
            headers: getAuthorizationToken(token)
        })
    }

    function getUserWallFeed(token, user, startPostId, pageSize){
        return $http({
            method: "GET",
            url: BASE_URL + previewUserPrefixUrl + user + wallPrefixUrl + startPostId + wallSuffixUrl + pageSize,
            headers: getAuthorizationToken(token)
        })
    }

    function getAuthorizationToken(token){
        return {
            Authorization: token
        };
    }

    return {
        register: register,
        logout: logOut,
        login: logIn,
        preview: preview,
        getUser: getUser,
        findUsers : findUsers,
        getUserWall: getUserWallFeed
    }
});
