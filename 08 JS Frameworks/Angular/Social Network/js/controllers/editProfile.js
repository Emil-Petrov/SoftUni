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
        if (profilePictureSource.size > 128000){
            throw new Error("Picture is too big");
        }
        changePicture(profilePictureSource, profilePicturePreview, function (src) {
            $scope.profilePicture = src;
        });
    };

    $scope.changeCoverPicture = function () {
        var coverPictureSource = document.getElementById("upload-cover-picture").files[0];
        var coverPicturePreview = document.getElementById("cover-picture-preview");
        changePicture(coverPictureSource, coverPicturePreview, function (src) {
            $scope.coverPicture = src;
        });
    };

    $scope.saveChanges = function () {
        $profile.changeProfile($utils.getSessionToken(), $scope.name, $scope.email, $scope.profilePicture, $scope.coverPicture, $scope.gender)
            .then(function () {
                $utils.setStorage($utils.getSessionToken(), currentUser.username, $scope.name, $scope.coverPicture, $scope.profilePicture, $scope.email, $scope.gender);
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

    //Set Gender in View upon load;
    $scope.setGender = function () {
        if (currentUser.gender == '1') {
            document.getElementById('female').className = document.getElementById('female').className + " active";
            document.getElementById('gender').value = "female";
        } else if (currentUser.gender == '2') {
            document.getElementById('male').className = document.getElementById('male').className.replace('notActive', 'active');
            document.getElementById('gender').value = "male";
        }else{
            document.getElementById('other').className = document.getElementById('other').className + " active";
            document.getElementById('gender').value = "other";
        }
    };

});


;