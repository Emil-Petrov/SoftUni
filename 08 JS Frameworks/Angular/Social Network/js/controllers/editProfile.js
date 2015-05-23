app.controller('editProfileController', function ($user, $scope, $utils) {
    function User(name, email, gender, profilePicture, coverPicture){
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.profilePicture = profilePicture;
        this.coverPicture = coverPicture;
    }

    User.prototype.saveChanges = function(){
        $user.changeProfile($utils.getSessionToken());
    };
    //function changeCurrentUserProfile(token, name, email, profileImageData, coverImageData, gender){
});