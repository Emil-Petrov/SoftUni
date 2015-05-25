app.controller("changePasswordController", function($scope, $user, $utils){
   $scope.changePassword = function(){
       $user.changePassword($utils.getSessionToken(), $scope.oldPassword, $scope.newPassword, $scope.confirmPassword)
   };
});