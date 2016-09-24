angular.module('DailyDonuts')
    .directive('main', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/_main.html'
    }
  });
