app.controller('videoController', function ($scope, videoData) {
    $scope.videos = videoData.getAllVideos;
    $scope.createVideo = {
        title: '',
        pictureUrl: '',
        length: '',
        category: '',
        subscribersCount: 0,
        date: '',
        haveSubtitles: false,
        comments: [],
        submitVideo: function(){
            var newVideo = videoData.createVideo(this.title, this.pictureUrl, this.length, this.category, this.subscribersCount, this.date, this.haveSubtitles, this.comments);
            videoData.addVideo(newVideo);
        }
    };

    $scope.comment = {
        username: '',
        date: new Date(),
        content: '',
        picture: ''
    };

    $scope.$addComment = function(index){
        var newElement = {
            username: $scope.comment.username + '',
            date: $scope.comment.date + '',
            content: $scope.comment.content + '',
            picture: $scope.comment.picture + ''
        };
        $scope.videos[index].comments.push(newElement);
    };

    function Comment(username, date, content, pictureUrl){
        this.username = username;
        this.date = date;
        this.content = content;
        this.pictureUrl = pictureUrl;
    }
});