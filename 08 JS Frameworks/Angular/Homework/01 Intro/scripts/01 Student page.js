var app = angular.module('studentPage', []);
app.controller('studentController', function ($scope) {
    $scope.students = [
        {
            name: "Pesho",
            photo: "http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png",
            grade: 5,
            school: "High School of Mathematics",
            teacher: "Gichka Pesheva",
        },
        {
            name: 'Someone',
            photo: 'http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png',
            grade: 6,
            school: "Some school of somethings",
            teacher: "Pesho Gichev"
        }
    ];
});