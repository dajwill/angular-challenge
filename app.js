app = angular.module('fibApp', []);
app.controller('fibCtrl', function($scope) {
    $scope.fib = 0;
    $scope.number = 0;
    $scope.type = 'iterative';

    function fib(x) {
      if ($scope.type == 'recursive'){
        if(x < 2) {
          return x;
        } else {
          return fib(x - 1) + fib(x - 2);
        }
      } else {
        var array = [0, 1];
        if(x > 1){
          for(var i = 2; i < x + 1; i++){
            array.push(array[array.length - 1] + array[array.length - 2])
          }
        }
        return array[x]
      }
    };

    $scope.isIterative = function() {
      if($scope.type == 'iterative') {
        return true
      }
    }

    $scope.nextNumber = function() {
      $scope.number = $scope.number + 1;
      $scope.fib = fib($scope.number);
    }

    $scope.reset = function(){
      $scope.fib = 0
      $scope.number = 0
    }
});
