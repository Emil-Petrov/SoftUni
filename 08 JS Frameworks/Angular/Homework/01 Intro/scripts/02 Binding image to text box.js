var app = angular.module('app', []);

app.controller('imageController', function ($scope) {
    $scope.changeSource = function () {
        var inputField = document.getElementById('picSrc');
        var statusField = document.getElementById('status');
        var imageSrc = angular.element(inputField).val();
        var urlPattern = new RegExp('https?:\/\/[^"]*?\.(jpg|png|gif)', 'g');
        console.log(imageSrc);

        if (urlPattern.test(imageSrc)) {
            testImage(imageSrc, function () {
                $scope.image_source = imageSrc;
                statusField.innerHTML = 'Load success!';
            }, function () {
                statusField.innerHTML = 'There was a problem loading the image  ';
            });
        } else {
            statusField.innerHTML = 'Invalid image url';
        }
    };


    function testImage(url, success, error) {
        var img = new Image();
        img.onerror = function () {
            error();
        };
        img.onload = function () {
            success();
        };
        img.src = url;
    }
});