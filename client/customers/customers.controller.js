
coolApp.controller('customerCtrl', function($scope, customerService) {
    $scope.headerText = 'hi customer';
    customerService.getCustomers(function(res) {
        const arr = res.data;
        $scope.keys = Object.keys(arr[0]);
        $scope.customers = (res.data);
    }, function(res) {});
  
});
