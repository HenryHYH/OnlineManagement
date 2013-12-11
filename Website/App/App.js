var omApp = angular.module('om', ['ui.router']);

omApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");
});

omApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("index", {
        title: "Hello title",
        url: "/index",
        views: {
            "view-main": {
                //templateUrl: "/App/index.html"
            },
            "view-bread-crumb": {
                templateUrl: "/App/breadCrumb.html"
            }
        }
    });
});

omApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("index.hello", {
        url: "/hello",
        views: {
            "view-main": {
                templateUrl: "/App/breadCrumb.html"
            }
        }
    });
});

omApp.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);
