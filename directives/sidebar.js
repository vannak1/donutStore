angular.module('DailyDonuts')
    .directive('sideBar', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/_sidebar.html'
    }
  });
