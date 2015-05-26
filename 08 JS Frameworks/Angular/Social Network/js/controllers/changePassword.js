app.controller("changePasswordController", function($scope, $profile, $utils){
   $scope.changePassword = function(){
       $profile.changePassword($utils.getSessionToken(), $scope.oldPassword, $scope.newPassword, $scope.confirmPassword)
   };
});