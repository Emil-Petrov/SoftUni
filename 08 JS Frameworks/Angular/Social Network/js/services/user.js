app.factory("$user", function ($http) {

    var registerUrl = 'users/register';
    var logoutUrl = 'users/logout';
    var loginUrl = 'users/login';

    var searchUrl = 'users/search?searchTerm=';
    var previewUserPrefixUrl = 'users/';
    var previewUserSuffixUrl = '/preview';

    var currentUserUrl = 'me';
    var currentUserFriendsUrl = currentUserUrl + '/friends';
    var currentUserFriendRequestsUrl = currentUserUrl + '/requests';
    var acceptFriendRequestPrefixUrl = currentUserUrl + '/requests/';
    var acceptFriendRequestSuffixUrl = '?status=approved';
    var sendFriendRequestUrl = currentUserUrl + '/requests/';
    var changePasswordUrl = currentUserUrl + '/changepassword';

    function register(username, password, confirmPassword, name, email) {
        var newUser = {
            username: username,
            password: password,
            confirmPassword: confirmPassword,
            name: name,
            email: email
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

    function getCurrentUser(token){
        return $http({
            method: "GET",
            url: BASE_URL + currentUserUrl,
            headers: getAuthorizationToken(token)
        })
    }

    function getCurrentUserFriends(token){
        return $http({
            method: "GET",
            url: BASE_URL + currentUserFriendsUrl,
            headers: getAuthorizationToken(token)
        })
    }

    function getCurrentFriendRequests(token){
        return $http({
            method: "GET",
            url: BASE_URL + currentUserFriendRequestsUrl,
            headers: getAuthorizationToken(token)
        })
    }

    function acceptFriendRequest(token, requestId){
        return $http({
            method: "PUT",
            url: BASE_URL + acceptFriendRequestPrefixUrl + requestId + acceptFriendRequestSuffixUrl,
            headers: getAuthorizationToken(token)
        })
    }

    function sendFriendRequest(token, userName){
        return $http({
            method: "POST",
            url: BASE_URL + sendFriendRequestUrl + userName,
            headers: getAuthorizationToken(token)
        })
    }

    function changeCurrentUserPassword(token, oldPassword, newPassword, confirmPassword){
        var changePassword = {
            oldPassword: oldPassword,
            newPassword: newPassword,
            confirmPassword: confirmPassword
        };

        return $http({
            method: "PUT",
            url: BASE_URL + changePasswordUrl,
            headers: getAuthorizationToken(token),
            data: changePassword
        })
    }

    function changeCurrentUserProfile(token, name, email, profileImageData, coverImageData, gender){
        var newUserProfile = {
            name: name,
            email: email,
            profileImageData: profileImageData,
            coverImageData: coverImageData,
            gender: gender
        };

        return $http({
            method: "PUT",
            url: BASE_URL + currentUserUrl,
            headers: getAuthorizationToken(token),
            data: newUserProfile
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
        currentUser: getCurrentUser,
        getCurrentUserFriends: getCurrentUserFriends,
        currentUserFriendRequests: getCurrentFriendRequests,
        acceptFriendRequest: acceptFriendRequest,
        sendFriendRequest: sendFriendRequest,
        changePassword: changeCurrentUserPassword,
        changeProfile: changeCurrentUserProfile
    }
});
