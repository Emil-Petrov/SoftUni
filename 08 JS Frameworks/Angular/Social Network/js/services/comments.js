app.factory("$comments", function ($http) {
    var postUrl = 'posts/';
    var commentsUrl = '/comments';
    var likesUrl = '/likes';
    var previewUrl = '/preview'

    function getPostComments(token, id) {
        return $http({
            method: "GET",
            url: BASE_URL + postUrl + id + commentsUrl,
            headers: getAuthorizationToken(token)
        })
    }

    function addPostComment(token, id, content) {
        var comment = {
            commentContent: content
        };

        return $http({
            method: "POST",
            url: BASE_URL + postUrl + id + commentsUrl,
            headers: getAuthorizationToken(token),
            data: comment
        })
    }

    function editPostComment(token, postId, commentId, content) {
        var comment = {
            commentContent: content
        };

        return $http({
            method: "PUT",
            url: BASE_URL + postUrl + postId + commentsUrl + '/' + commentId,
            headers: getAuthorizationToken(token),
            data: comment
        })
    }

    function deletePostComment(token, postId, commentId) {
        return $http({
            method: "DELETE",
            url: BASE_URL + postUrl + postId + commentsUrl + '/' + commentId,
            headers: getAuthorizationToken(token)
        })
    }

    function getCommentDetailedLikes(token, postId, commentId) {
        return $http({
            method: "GET",
            url: BASE_URL + postId + commentsUrl + '/' + commentId + likesUrl,
            headers: getAuthorizationToken(token)
        })
    }

    function getCommentPreviewLikes(token, postId, commentId) {
        return $http({
            method: "GET",
            url: BASE_URL + postId + commentsUrl + '/' + commentId + likesUrl,
            headers: getAuthorizationToken(token)
        })
    }

    function likeComment(token, postId, commentId){
        return $http({
            method: "POST",
            url: BASE_URL + postId + commentsUrl + '/' + commentId + likesUrl,
            headers: getAuthorizationToken(token)
        })
    }

    function unlikeComment(token, postId, commentId){
        return $http({
            method: "DELETE",
            url: BASE_URL + postId + commentsUrl + '/' + commentId + likesUrl,
            headers: getAuthorizationToken(token)
        })
    }

    function getAuthorizationToken(token) {
        return {
            Authorization: token
        };
    }

    return {
        getComments: getPostComments,
        addComment: addPostComment,
        editComment: editPostComment,
        deleteComment: deletePostComment,
        getDetailedLikes: getCommentDetailedLikes,
        getPreviewLikes: getCommentPreviewLikes,
        likeComment: likeComment,
        unlikeComment: unlikeComment
    }
});