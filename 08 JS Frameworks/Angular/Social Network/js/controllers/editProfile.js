app.controller('editProfileController', function ($profile, $scope, $utils) {
    var currentUser = $utils.getCurrentUser();
    $scope.name = currentUser.name;
    $scope.email = currentUser.email;
    $scope.gender = currentUser.gender;
    $scope.profilePicture = currentUser.profilePicture;
    $scope.coverPicture = currentUser.coverImage;

    $scope.changeProfilePicture = function () {
        var profilePictureSource = document.getElementById("upload-profile-picture").files[0];
        var profilePicturePreview = document.getElementById("profile-picture-preview");
        changePicture(profilePictureSource, profilePicturePreview, function (src) {
            $scope.profilePicture = src;
        });
    };

    $scope.changeCoverPicture = function () {
        var coverPictureSource = document.getElementById("upload-cover-picture").files[0];
        var coverPicturePreview = document.getElementById("cover-picture-preview");
        changePicture(coverPictureSource, coverPicturePreview, function(src){
            $scope.coverPicture = src;
        });
    };

    $scope.saveChanges = function () {
        $profile.changeProfile($utils.getSessionToken(), $scope.name, $scope.email, $scope.profilePicture, $scope.coverPicture, $scope.gender)
            .then(function () {
                console.log(arguments);
            }, function () {
                console.log(arguments);
            });
    };

    function changePicture(picture, preview, callback) {
        var FR = new FileReader();
        FR.onload = function () {
            callback(FR.result);
            preview.src = FR.result;
        };
        FR.readAsDataURL(picture)
    }

});


