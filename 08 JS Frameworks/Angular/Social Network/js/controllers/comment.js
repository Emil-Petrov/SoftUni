app.controller('commentController', function($scope, $posts, $comments, $utils){
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
                    .then(function (info) {
                        post.comments = info.data.comments;
                    });
            });
    };

    $scope.showEditBox = function (comment) {
        document.getElementById('comment-' + comment.id + '-content').style.display = 'none';
        document.getElementById("comment-" + comment.id + "-edit").parentNode.style.display = 'block';
    };

    $scope.hideEditBox = function (comment) {
        document.getElementById("comment-" + comment.id + "-edit").parentNode.style.display = 'none';
        document.getElementById('comment-' + comment.id + '-content').style.display = 'block';
    };

    $scope.editComment = function (post, comment) {
        var newComment = document.getElementById("comment-" + comment.id + "-edit");
        $comments.editComment($utils.getSessionToken(), post.id, comment.id, newComment.value)
            .then(function (info) {
                comment.commentContent = info.data.commentContent;
                $scope.hideEditBox(comment);
            }, function (err) {
                console.log(err)
            });
    };
});