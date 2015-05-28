app.controller("newsFeedController", function ($scope, $user, $profile, $utils, $comments, $posts) {
    $scope.currentUserUsername = $utils.getCurrentUser().username;

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
                    .then(function (info) {
                        post.comments = info.data.comments;
                    });
            });
    };

    // Hide comment and display edit box.
    $scope.showEditBox = function (comment) {
        document.getElementById('comment-' + comment.id).children[1].style.display = 'none';
        document.getElementById("comment-" + comment.id + "-edit").parentNode.style.display = 'block';
    };

    $scope.hideEditBox = function (comment) {
        document.getElementById("comment-" + comment.id + "-edit").parentNode.style.display = 'none';
        document.getElementById('comment-' + comment.id).children[1].style.display = 'block';
    };

    $scope.editComment = function (post, comment) {
        var newComment = document.getElementById("comment-" + comment.id + "-edit");
        $comments.editComment($utils.getSessionToken(), post.id, comment.id, newComment.value)
            .then(function (info) {
                comment.commentContent = info.data.commentContent;
                newComment.parentNode.style.display = 'none';
                document.getElementById('comment-' + comment.id).children[1].style.display = 'block';
            }, function (err) {
                console.log(err)
            });
    };

    $scope.addComment = function (postId, content) {
        $comments.addComment($utils.getSessionToken(), postId, content)
    };

    $scope.showCommentBox = function (post) {
        var postElement = document.getElementById("post-" + post.id);
        console.log(postElement.lastElementChild);
        postElement.lastElementChild.style.display = 'hidden';
    };

    $scope.likePost = function (post) {
        $posts.likePost($utils.getSessionToken(), post.id)
            .then(function (info) {
                post.liked = info.data.liked;
                post.likesCount = info.data.likesCount;
            }, function (err) {
                console.log(err);
            })
    };

    $scope.unlikePost = function (post) {
        $posts.unlikePost($utils.getSessionToken(), post.id)
            .then(function (info) {
                post.liked = info.data.liked;
                post.likesCount = info.data.likesCount;
            }, function (err) {
                console.log(err);
            })
    };

    $scope.deletePost = function (post) {
        $posts.deletePost($utils.getSessionToken(), post.id)
            .then(function () {
                $profile.getUserFeed($utils.getSessionToken(), '', 5)
                    .then(function (info) {
                        console.log(info.data);
                        $scope.feed = info.data;
                    }, function (err) {
                        console.log(err)
                    });
            }, function (err) {
                console.log(err);
            });
    };

    $scope.showPostEditBox = function (post) {
        document.getElementById('post-' + post.id).children[1].children[0].style.display = 'none';
        document.getElementById("post-" + post.id + "-edit").parentNode.style.display = 'block';
    };

    $scope.hidePostEditBox = function (post) {
        document.getElementById('post-' + post.id).children[1].children[0].style.display = 'block';
        document.getElementById("post-" + post.id + "-edit").parentNode.style.display = 'none';
    };

    $scope.editPost = function (post) {
        var newPost = document.getElementById("post-" + post.id + "-edit");
        $posts.editPost($utils.getSessionToken(), post.id, newPost.value)
            .then(function (info) {
                post.commentContent = info.data.commentContent;
                newPost.parentNode.style.display = 'none';
                document.getElementById('comment-' + post.id).children[1].style.display = 'block';
            }, function (err) {
                console.log(err)
            });
    };

    $scope.viewComments = function (post) {
        $comments.getComments($utils.getSessionToken(), post.id)
            .then(function (info) {
                console.log(info);
                post.comments = info.data;
                var loadCommentsElement =  document.getElementById('view-' + post.id + '-comments');
                loadCommentsElement.parentNode.removeChild(loadCommentsElement);
            })
    }
});