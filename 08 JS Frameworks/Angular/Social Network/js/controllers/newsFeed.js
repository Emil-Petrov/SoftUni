app.controller("newsFeedController", function ($scope, $user, $profile, $utils, $comments, $posts) {
    $profile.getUserFeed($utils.getSessionToken(), '', 5)
        .then(function (info) {
            console.log(info.data);
            $scope.feed = info.data;
        }, function (err) {
            console.log(err)
        });
    $scope.comment = function (postId) {
        var contentElement = document.getElementById("comment-content-" + postId);
        var commentContent = angular.element(contentElement).val();
        $comments.addComment($utils.getSessionToken(), postId, commentContent)
            .then(function (info) {
                console.log(info);
            }, function (err) {
                console.log(err);
            });
    };

    $scope.addFriend = function (username) {
        $user.addFriend(username)
            .then(function (info) {
                console.log(info)
            }, function (err) {
                console.log(err);
            });
    };

    $scope.likePost = function (postId) {
        $posts.likePost($utils.getSessionToken(), postId);
    };

    $scope.unlikePost = function (postId) {
        $posts.unlikePost($utils.getSessionToken(), postId);
    };

    $scope.likeComment = function (postId, comment) {
        $comments.likeComment($utils.getSessionToken(), postId, comment.id)
            .then(function (info) {
                comment.liked = info.data.liked;
                comment.likesCount = info.data.likesCount;
            }, function (err) {
                console.log(err);
            })
    };

    $scope.unlikeComment = function (postId, comment) {
        $comments.unlikeComment($utils.getSessionToken(), postId, comment.id)
            .then(function (info) {
                comment.liked = info.data.liked;
                comment.likesCount = info.data.likesCount;
            }, function (err) {
                console.log(err);
            })
    };

    $scope.deleteComments = function (post, commentId) {
        $comments.deleteComment($utils.getSessionToken(), post.id, commentId)
            .then(function () {
                var commentElement = document.getElementById('comment-' + commentId);
                angular.element(commentElement).remove();
                $posts.viewPost($utils.getSessionToken(), post.id).then()
                    .then(function(info){
                        console.log(info);
                        post.comments = info.data.comments;
                    });
            });
    };

    $scope.addComment = function(postId, content){
        $comments.addComment($utils.getSessionToken(), postId, content)
    };

    $scope.showCommentBox = function(postId){

    };

    $scope.currentUserUsername = $utils.getCurrentUser().username;
});