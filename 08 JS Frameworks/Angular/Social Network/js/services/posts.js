app.factory("$posts", function ($http) {

    var newPostUrl = "posts";
    var postIdUrl = "Posts/";
    var likesUrl = "/likes";
    var previewUrl = "/preview";

    function addNewPost(token, content, targetUsername) {
        var post = {
            postContent: content,
            username: targetUsername
        };

        return $http({
            method: "POST",
            url: BASE_URL + newPostUrl,
            headers: getAuthorizationToken(token),
            data: post
        })
    }

    function viewPostById(token, id){
        return $http({
            method: "GET",
            url: BASE_URL + postIdUrl + id,
            headers: getAuthorizationToken(token)
        })
    }

    function editPostById(token, id, content){
        var post = {
            postContent: content
        };

        return $http({
            method: "PUT",
            url: BASE_URL + postIdUrl + id,
            headers: getAuthorizationToken(token),
            data: post
        })
    }

    function deletePostById(token, id){
        return $http({
            method: "DELETE",
            url: BASE_URL + postIdUrl + id,
            headers: getAuthorizationToken(token),
        })
    }

    function getPostDetailedLikes(token, id){
        return $http({
            method: "GET",
            url: BASE_URL + postIdUrl + id + likesUrl,
            headers: getAuthorizationToken(token)
        })
    }


    function getPostPreviewLikes(token, id){
        return $http({
            method: "GET",
            url: BASE_URL + postIdUrl + id + likesUrl + previewUrl,
            headers: getAuthorizationToken(token)
        })
    }

    function likePost(token, id){
        return $http({
            method: "POST",
            url: BASE_URL + postIdUrl + id + likesUrl,
            headers: getAuthorizationToken(token)
        })
    }

    function unlikePost(token, id){
        return $http({
            method: "DELETE",
            url: BASE_URL + postIdUrl + id + likesUrl,
            headers: getAuthorizationToken(token)
        })
    }

    function getAuthorizationToken(token) {
        return {
            Authorization: token
        };
    }

    return{
        postNew: addNewPost,
        viewPost: viewPostById,
        editPost: editPostById,
        deletePost: deletePostById,
        getDetailedLikes: getPostDetailedLikes,
        getPreviewLikes: getPostPreviewLikes,
        likePost: likePost,
        unlikePost: unlikePost
    }
});