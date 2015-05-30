app.controller('editProfileController', function ($profile, $scope, $utils, $route) {
    var currentUser = $utils.getCurrentUser();
    $scope.name = currentUser.name;
    $scope.email = currentUser.email;
    $scope.gender = currentUser.gender;
    $scope.profilePicture = currentUser.profilePicture;
    $scope.coverPicture = currentUser.coverImage;

    $scope.changeProfilePicture = function () {
        var profilePictureSource = document.getElementById("upload-profile-picture").files[0];
        var profilePicturePreview = document.getElementById("profile-picture-preview");
        if (profilePictureSource.type != 'image/jpeg'){
            noty({text: "Format not allowed", type: "error", timeout: 3000});
            return;
        }
        if (profilePictureSource.size > 128000) {
            noty({text: "Profile picture is too big", type: "error", timeout: 3000});
            return;
        }

        changePicture(profilePictureSource, profilePicturePreview, function (src) {
            $scope.profilePicture = src;
        });
    };

    $scope.changeCoverPicture = function () {
        var coverPictureSource = document.getElementById("upload-cover-picture").files[0];
        var coverPicturePreview = document.getElementById("cover-picture-preview");
        if (coverPictureSource.type != 'image/jpeg'){
            noty({text: "Format not allowed", type: "error", timeout: 3000});
            return;
        }

        if (coverPictureSource.size > 1024000){
            noty({text: "Cover image is too big", type: "error", timeout: 3000});
            return;
        }

        changePicture(coverPictureSource, coverPicturePreview, function (src) {
            $scope.coverPicture = src;
        });
    };

    $scope.saveChanges = function () {
        var gender = document.getElementById('gender').value;
        $profile.changeProfile($utils.getSessionToken(), $scope.name, $scope.email, $scope.profilePicture, $scope.coverPicture, gender)
            .then(function () {
                $utils.setStorage($utils.getSessionToken(), currentUser.username, $scope.name, $scope.coverPicture, $scope.profilePicture, $scope.email, gender);
                noty({text: "Profile changed successfully", type: "success", timeout: 3000});
                $scope.setGender();
            }, function (err) {
                noty({text: err.data.message, type: "error", timeout: 3000});
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
            document.getElementById('male').className = document.getElementById('male').className.replace('notActive', 'active');
            document.getElementById('female').className = document.getElementById('female').className.replace('active', 'notActive');
            document.getElementById('female').className = document.getElementById('other').className.replace('active', 'notActive');
            document.getElementById('gender').value = "1";
        } else if (currentUser.gender == '2') {
            document.getElementById('female').className = document.getElementById('female').className.replace('notActive', 'active');
            document.getElementById('female').className = document.getElementById('male').className.replace('active', 'notActive');
            document.getElementById('female').className = document.getElementById('other').className.replace('active', 'notActive');
            document.getElementById('gender').value = "2";
        } else {
            document.getElementById('other').className = document.getElementById('other').className.replace('notActive', 'active');
            document.getElementById('female').className = document.getElementById('female').className.replace('active', 'notActive');
            document.getElementById('female').className = document.getElementById('male').className.replace('active', 'notActive');
            document.getElementById('gender').value = "0";
        }
    };

});