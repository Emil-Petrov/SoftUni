app.factory("$profile", function ($http) {
    var currentUserUrl = 'me';
    var currentUserFriendsUrl = currentUserUrl + '/friends';
    var currentUserFriendRequestsUrl = currentUserUrl + '/requests';
    var friendRequestUrl = currentUserUrl + '/requests/';
    var acceptFriendRequestUrl = '?status=approved';
    var rejectFriendRequestUrl = '?status=rejected';
    var sendFriendRequestUrl = currentUserUrl + '/requests/';
    var changePasswordUrl = currentUserUrl + '/changepassword';
    var feedPrefixUrl = '/feed?StartPostId=';
    var feedSuffixUrl = '&PageSize=';

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
            url: BASE_URL + friendRequestUrl + requestId + acceptFriendRequestUrl,
            headers: getAuthorizationToken(token)
        })
    }

    function rejectFriendRequest(token, requestId){
        return $http({
            method: "PUT",
            url: BASE_URL + friendRequestUrl + requestId + rejectFriendRequestUrl,
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

    function getCurrentUserFeed(token, startPostId, pageSize){
        return $http({
            method: "GET",
            url: BASE_URL + currentUserUrl + feedPrefixUrl + startPostId + feedSuffixUrl + pageSize,
            headers: getAuthorizationToken(token)
        })
    }

    function getAuthorizationToken(token) {
        return {
            Authorization: token
        };
    }

    return {
        currentUser: getCurrentUser,
        getCurrentUserFriends: getCurrentUserFriends,
        currentUserFriendRequests: getCurrentFriendRequests,
        acceptFriendRequest: acceptFriendRequest,
        rejectFriendRequest: rejectFriendRequest,
        sendFriendRequest: sendFriendRequest,
        changePassword: changeCurrentUserPassword,
        changeProfile: changeCurrentUserProfile,
        getUserFeed: getCurrentUserFeed
    }
});