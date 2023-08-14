function skillsMember() {

    // Path: member.js
    function skillsMemberController($scope, $http, $location, $rootScope, $window, $timeout, $filter, $interval, $routeParams, $route) {

        $scope.member = {};
        $scope.member.skills = [];
        $scope.member.skills.push({});

        $scope.addSkill = function () {
            $scope.member.skills.push({});
        }

        $scope.removeSkill = function (index) {
            $scope.member.skills.splice(index, 1);
        }

        $scope.submit = function () {
            $http.post('/api/member/skills', $scope.member).then(function (response) {
                $scope.member = response.data;
                $location.path('/member');
            });
        }

        $scope.cancel = function () {
            $location.path('/member');
        }

        $scope.init = function () {
            $http.get('/api/member/skills').then(function (response) {
                $scope.member = response.data;
            });
        }

        $scope.init();
    }

    angular.module('app').controller('skillsMemberController', ['$scope', '$http', '$location', '$rootScope', '$window', '$timeout', '$filter', '$interval', '$routeParams', '$route', skillsMemberController]);
}