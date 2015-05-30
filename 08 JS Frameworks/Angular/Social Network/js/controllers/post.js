app.controller('postController', function ($scope, $posts, $utils, $comments) {
    $scope.addComment = function (post) {
        var commentContent = document.getElementById('post-' + post.id + '-comment-box').value;
        $comments.addComment($utils.getSessionToken(), post.id, commentContent)
            .then(function (info) {
                $scope.hideCommentBox(post);
                post.comments.push(info.data)
            }, function (err) {
                noty({text: err.data.message, type:"error", timeout: 3000})
            })
    };

    $scope.showCommentBox = function (post) {
        var commentBoxElement = document.getElementById('post-' + post.id + '-comment');
        commentBoxElement.style.display = 'block';
        commentBoxElement.parentNode.children[1].style.display = 'none';
    };

    $scope.hideCommentBox = function (post) {
        var commentBoxElement = document.getElementById('post-' + post.id + '-comment');
        commentBoxElement.style.display = 'none';
        commentBoxElement.parentNode.children[1].style.display = 'block';
    };

    $scope.likePost = function (post) {
        $posts.likePost($utils.getSessionToken(), post.id)
            .then(function (info) {
                post.liked = info.data.liked;
                post.likesCount = info.data.likesCount;
            }, function (err) {
                noty({text: err.data.message, type:"error", timeout: 3000})
            })
    };

    $scope.unlikePost = function (post) {
        $posts.unlikePost($utils.getSessionToken(), post.id)
            .then(function (info) {
                post.liked = info.data.liked;
                post.likesCount = info.data.likesCount;
            }, function (err) {
                noty({text: err.data.message, type:"error", timeout: 3000})
            })
    };

    $scope.deletePost = function (post) {
        $posts.deletePost($utils.getSessionToken(), post.id)
            .then(function () {
                var index = $scope.feed.indexOf(post);
                $scope.feed.splice(index, 1);
                noty({text: "Post deleted successfully.", type:"success", timeout: 3000})
            }, function (err) {
                noty({text: err.data.message, type:"error", timeout: 3000})
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
                post.postContent = info.data.content;
                $scope.hidePostEditBox(post);
                noty({text: "Post edited successfully.", type:"success", timeout: 3000})
            }, function (err) {
                noty({text: err.data.message, type:"error", timeout: 3000})
            });
    };

    $scope.viewComments = function (post) {
        $comments.getComments($utils.getSessionToken(), post.id)
            .then(function (info) {
                console.log(info);
                post.comments = info.data.reverse();
                var loadCommentsElement = document.getElementById('view-' + post.id + '-comments');
                loadCommentsElement.parentNode.removeChild(loadCommentsElement);
            }, function(err){
                noty({text: err.data.message, type:"error", timeout: 3000})
            })
    };

});