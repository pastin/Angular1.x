'use strict';

/* Controllers */

var controllers = angular.module('login', []);
/*controllers.controller('loginCtrl', ['$scope', 'LoginService', function ($scope, LoginService) {
  $scope.login = {};
  $scope.login.submit = function() {
    console.log($scope.login.email);
    console.log($scope.login.password);
    // do some process, invoke the service layer
    LoginService.login(
      {},
      {
        email: $scope.login.email,
        password: $scope.login.password
      },
      function (success) {
        if (success.status == "success") {
          alert('login success');
        } else {
          // error message
        }
      },
      function (error) {
        // error message
      }
    );
  };
}]);*/
controllers.controller('loginCtrl',['$scope',function($scope){
    $scope.master = {};
    $scope.login = function(user){
      $scope.master = angular.copy(user);
    }
    $scope.isUnchanged = function(user){
      return angular.equals(user,$scope.master);
    }
    $scope.login = function(){
      alert()
    }
    console.log($scope)
    //$scope.reset();
    }
  ]);
/*function loginCtrl($scope) {
  $scope.master = {};
  $scope.login = function(user){
    $scope.master = angular.copy(user);
  }
	$scope.reset();
}*/
//loginCtrl.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
