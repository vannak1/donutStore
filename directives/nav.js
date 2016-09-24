angular.module('DailyDonuts')
    .directive('siteNav', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/_nav.html'
    }
  });
