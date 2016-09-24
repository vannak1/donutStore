angular.module('DailyDonuts', [])
  .controller('CashierCtrl', ['$scope',
  function($scope){
    $scope.test = 'Hello world!';
    $scope.product = [
      {
        name: "Glazed Donut",
        type: "Donut",
        price: .65,
        description: "Blah blah blah",
        image: "imageurl"

      },
      {
        name: "Chocolate Donut",
        type: "Donut",
        price: .65,
        description: "Blah blah blah",
        image: "imageurl2"

      }
    ]
  }]);
