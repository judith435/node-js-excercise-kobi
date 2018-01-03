coolApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        template : `hi home`
    })
    .when("/customer", {
        templateUrl : "customers/customers.view.html",
        controller: 'customerCtrl'

    })
});
