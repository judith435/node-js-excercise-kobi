
coolApp.service('customerService', function($http) {
    this.getCustomers = function(onSuccess, onError ) {
        $http({
            url: 'http://localhost:8081/customer',
            method: 'GET',
            params: {}
        }).then(onSuccess, onError);
    }
});

