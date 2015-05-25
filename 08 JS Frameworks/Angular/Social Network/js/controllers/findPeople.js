app.controller("findPeopleController", function($scope, $user, $utils){
    $scope.findPeople = function(){
        $user.findUsers($utils.getSessionToken(), $scope.nameQuery);
    }
});