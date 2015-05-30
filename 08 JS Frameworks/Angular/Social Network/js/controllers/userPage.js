app.controller('userPageController', function ($scope, $profile, $user, $utils, $posts, $routeParams) {
    $scope.currentUserUsername = $utils.getCurrentUser().username;
    $scope.feed = [];
    $user.getUserWall($utils.getSessionToken(), $routeParams.username, '', 1)
        .then(function (info) {
            $scope.feed = info.data;
        }, function (err) {
            console.log(err);
        });

    $user.getUser($utils.getSessionToken(), $routeParams.username)
        .then(function (info) {
            $scope.user = info.data;
        }, function (err) {
            noty({text: err.data.message, type: "error", timeout: 3000});
        });

    $scope.post = function () {
        $posts.postNew($utils.getSessionToken(), $scope.postContent, $routeParams.username)
            .then(function (info) {
                $scope.postContent = '';
                $scope.feed.reverse().push(info.data);
                $scope.feed.reverse();
            }, function (err) {
                noty({text: err.data.message, type: "error", timeout: 3000});
            });
    };

    $scope.sendFriendRequest = function () {
        $profile.sendFriendRequest($utils.getSessionToken(), $routeParams.username)
            .then(function (info) {
                noty({text: "Friend request sent.", type: "success", timeout: 3000});
            }, function (err) {
                noty({text: err.data.message, type: "error", timeout: 3000});
            });
    };

    var loadingPosts = false;
    var eventBinded = false;

    // Binds scroll event which upon reaching the end of the page or 50 pixels away from it anyway, starts loading more posts,
    // if none are loaded the event is unbinded.
    // loadingPosts is used to prevent multiple queries to the servers and repetition of the posts in the user feed.
    $scope.loadMorePosts = function () {
        if (!eventBinded) {
            eventBinded = true;
            triggerLoading();
        }else{
            startLoading();
        }
    };


    function triggerLoading() {
        $(window).bind('scroll', startLoading);
    }

    // TODO: not really a todo more of a notice. Anyway dynamic post loading is set at 1 for demo purposes.
    function startLoading() {
        onReachingBottom(function () {
            if (!loadingPosts) {
                loadingPosts = true;
                loadMorePosts(1)
                    .then(function (info) {
                        if (info.data.length == 0) {
                            $(window).unbind('scroll');
                            eventBinded = false;
                            return;
                        }
                        $scope.feed = $scope.feed.concat(info.data);
                        loadingPosts = false;
                    }, function (err) {
                        noty({text: err.data.message, type:"error", timeout: 3000})
                        $(window).unbind('scroll');
                        loadingPosts = false;
                        eventBinded = false;
                    });
            }
        })
    }

    // TODO: Fix a bug where if the event is not triggering if there is no scroll bar. (Maybe fill the feed with posts until the scroll bar shows or there are no more posts)
    function loadMorePosts(count) {
        var posts = document.getElementsByClassName('post');
        var lastPostId = posts[posts.length - 1].id.split('-')[1];
        return $user.getUserWall($utils.getSessionToken(), $routeParams.username, lastPostId, count);
    }

    function onReachingBottom(callback) {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 50 && !loadingPosts) {
            callback();
        }
    }

});