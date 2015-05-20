app.factory('videoData', function () {
    var videos = [{
        title: 'Course introduction',
        pictureUrl: 'http://softuni.bg/picture.png',
        length: '5000',
        category: 'IT',
        subscribers: 3,
        date: new Date(2014, 12, 15),
        haveSubtitles: false,
        comments: [
            {
                username: 'Pesho Peshev',
                content: 'Congratulations Nakov',
                date: new Date(2014, 12, 15, 12, 30, 0),
                likes: 3,
                websiteUrl: 'http://pesho.com/'
            }
        ]
    }];

    function Video(title, picture, length, category, subscribersCount, date, haveSubtitles, comments) {
        this.title = title;
        this.pictureUrl = picture;
        this.length = length;
        this.category = category;
        this.subscribers = subscribersCount;
        this.date = date;
        this.haveSubtitles = haveSubtitles;
        this.comments = comments;
    }

    Video.prototype.addComment = function () {
        console.log('SOMETHING')
        //this.comments.push($scope.comment);
    };

    return{
        getAllVideos: videos,
        createVideo: function(title, picture, length, category, subscribersCount, date, haveSubtitles, comments){
            return new Video(title, picture, length, category, subscribersCount, date, haveSubtitles, comments);
        },
        addVideo : function(video){
            videos.push(video);
            console.log(JSON.stringify(videos));
        }
    }
});


